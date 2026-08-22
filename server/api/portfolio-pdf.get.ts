import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'
import type { Browser } from 'puppeteer-core'
import type { H3Event } from 'h3'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

type PortfolioLocale = 'en' | 'id'
type PortfolioTheme = 'light' | 'dark'

const VIEWPORT = {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
}

const getLocalBrowserCandidates = () => {
  if (process.platform === 'darwin') {
    return [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    ]
  }

  if (process.platform === 'win32') {
    const programFiles = process.env.PROGRAMFILES || 'C:\\Program Files'
    const programFilesX86 = process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)'
    const localAppData = process.env.LOCALAPPDATA || ''

    return [
      join(programFiles, 'Google', 'Chrome', 'Application', 'chrome.exe'),
      join(programFilesX86, 'Google', 'Chrome', 'Application', 'chrome.exe'),
      join(programFiles, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
      join(programFilesX86, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
      localAppData && join(localAppData, 'Google', 'Chrome', 'Application', 'chrome.exe'),
    ].filter(Boolean)
  }

  return [
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ]
}

const getBrowserLaunchOptions = async () => {
  const configuredPath = String(process.env.PUPPETEER_EXECUTABLE_PATH || '').trim()

  if (configuredPath) {
    if (!existsSync(configuredPath)) {
      throw createError({
        statusCode: 500,
        statusMessage: `PUPPETEER_EXECUTABLE_PATH does not exist: ${configuredPath}`,
      })
    }

    return {
      executablePath: configuredPath,
      headless: true as const,
    }
  }

  if (process.env.VERCEL) {
    return {
      executablePath: await chromium.executablePath(),
      args: await puppeteer.defaultArgs({
        args: chromium.args,
        headless: 'shell',
      }),
      headless: 'shell' as const,
    }
  }

  const localExecutablePath = getLocalBrowserCandidates().find(candidate => existsSync(candidate))

  if (localExecutablePath) {
    return {
      executablePath: localExecutablePath,
      headless: true as const,
    }
  }

  if (process.platform === 'linux') {
    return {
      executablePath: await chromium.executablePath(),
      args: await puppeteer.defaultArgs({
        args: chromium.args,
        headless: 'shell',
      }),
      headless: 'shell' as const,
    }
  }

  throw createError({
    statusCode: 500,
    statusMessage: 'Chrome, Chromium, or Microsoft Edge was not found. Configure PUPPETEER_EXECUTABLE_PATH.',
  })
}

const getPortfolioOrigin = (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const configuredUrl = String(config.portfolioPdf.siteUrl || '').trim()
  const vercelUrl = String(process.env.VERCEL_URL || '').trim()

  if (configuredUrl) {
    const url = new URL(configuredUrl)

    if (!['http:', 'https:'].includes(url.protocol)) {
      throw createError({ statusCode: 500, statusMessage: 'Invalid portfolio PDF site URL.' })
    }

    return url.origin
  }

  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`).origin
  }

  const requestUrl = getRequestURL(event)

  if (['localhost', '127.0.0.1', '::1'].includes(requestUrl.hostname)) {
    return requestUrl.origin
  }

  throw createError({
    statusCode: 500,
    statusMessage: 'Configure NUXT_PORTFOLIO_PDF_SITE_URL before exporting the portfolio.',
  })
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale: PortfolioLocale = query.locale === 'id' ? 'id' : 'en'
  const theme: PortfolioTheme = query.theme === 'dark' ? 'dark' : 'light'
  const origin = getPortfolioOrigin(event)
  const targetUrl = new URL('/', origin)
  const config = useRuntimeConfig(event)
  const bypassSecret = String(
    config.portfolioPdf.vercelBypassSecret
      || process.env.VERCEL_AUTOMATION_BYPASS_SECRET
      || '',
  ).trim()

  targetUrl.searchParams.set('portfolio-pdf', '1')

  let browser: Browser | undefined

  try {
    const launchOptions = await getBrowserLaunchOptions()

    browser = await puppeteer.launch({
      ...launchOptions,
      defaultViewport: VIEWPORT,
    })

    const page = await browser.newPage()

    if (bypassSecret) {
      await page.setExtraHTTPHeaders({
        'x-vercel-protection-bypass': bypassSecret,
        'x-vercel-set-bypass-cookie': 'true',
      })
    }

    await page.setCookie({
      name: 'portfolio_locale',
      value: locale,
      url: `${origin}/`,
      sameSite: 'Lax',
    })

    await page.evaluateOnNewDocument((selectedTheme: PortfolioTheme) => {
      localStorage.setItem('nuxt-color-mode', selectedTheme)
      document.documentElement.classList.toggle('dark', selectedTheme === 'dark')
      document.documentElement.classList.toggle('light', selectedTheme === 'light')
      document.documentElement.style.colorScheme = selectedTheme
    }, theme)

    await page.emulateMediaType('screen')
    await page.goto(targetUrl.toString(), {
      waitUntil: 'networkidle2',
      timeout: 45_000,
    })

    await page.addStyleTag({
      content: `
        @page {
          size: ${VIEWPORT.width}px ${VIEWPORT.height}px;
          margin: 0;
        }
        html {
          scroll-behavior: auto !important;
          width: ${VIEWPORT.width}px !important;
        }
        body {
          width: ${VIEWPORT.width}px !important;
        }
        header {
          position: relative !important;
          top: auto !important;
        }
        main > section:not(#top) {
          break-before: page;
        }
        article,
        figure,
        img,
        .panel {
          break-inside: avoid;
        }
        html.reveal-ready [data-reveal],
        [data-reveal] {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
          animation: none !important;
        }
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        [data-pdf-hide] { display: none !important; }
        #__nuxt-devtools__,
        #nuxt-devtools-container,
        .nuxt-devtools,
        [data-nuxt-devtools] {
          display: none !important;
        }
      `,
    })

    await page.evaluate((selectedTheme: PortfolioTheme) => {
      localStorage.setItem('nuxt-color-mode', selectedTheme)
      document.documentElement.classList.toggle('dark', selectedTheme === 'dark')
      document.documentElement.classList.toggle('light', selectedTheme === 'light')
      document.documentElement.style.colorScheme = selectedTheme
    }, theme)

    await page.evaluate(async () => {
      const wait = (duration: number) => new Promise(resolve => setTimeout(resolve, duration))
      const documentHeight = document.documentElement.scrollHeight

      for (let top = 0; top < documentHeight; top += window.innerHeight) {
        window.scrollTo(0, top)
        await wait(50)
      }

      window.scrollTo(0, 0)

      const imagesReady = Promise.all(
        Array.from(document.images).map(image => {
          if (image.complete) return Promise.resolve()

          return new Promise<void>(resolve => {
            image.addEventListener('load', () => resolve(), { once: true })
            image.addEventListener('error', () => resolve(), { once: true })
          })
        }),
      )

      await Promise.race([imagesReady, wait(10_000)])

      if (document.fonts) {
        await Promise.race([document.fonts.ready, wait(10_000)])
      }
    })

    const filename = `ulsyairil-oktorio-fadillah-portfolio-${locale}-${theme}.pdf`

    setResponseHeaders(event, {
      'content-type': 'application/pdf',
      'content-disposition': `attachment; filename="${filename}"`,
      'cache-control': 'private, no-store, max-age=0',
      'x-content-type-options': 'nosniff',
    })

    const pdfStream = await page.createPDFStream({
      width: `${VIEWPORT.width}px`,
      height: `${VIEWPORT.height}px`,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      printBackground: true,
      preferCSSPageSize: false,
    })

    await sendStream(event, pdfStream)
  }
  catch (error) {
    console.error('Portfolio PDF export failed:', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Portfolio PDF export failed.',
    })
  }
  finally {
    await browser?.close()
  }
})
