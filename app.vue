<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue'

const { locale, site } = usePortfolio()
let revealObserver: IntersectionObserver | undefined

useSeoMeta({
  title: () => site.value.siteTitle,
  description: () => site.value.summary,
  ogTitle: () => site.value.siteTitle,
  ogDescription: () => site.value.summary,
  ogType: 'website',
})

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
})

onMounted(async () => {
  await nextTick()

  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  document.documentElement.classList.add('reveal-ready')

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('is-visible'))
    return
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      revealObserver?.unobserve(entry.target)
    })
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08,
  })

  elements.forEach((element) => {
    const delay = Math.min(Number(element.dataset.revealDelay) || 0, 320)
    element.style.setProperty('--reveal-delay', `${delay}ms`)
    revealObserver?.observe(element)
  })
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  document.documentElement.classList.remove('reveal-ready')
})
</script>

<template>
  <div :lang="locale" class="min-h-dvh">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Education />
      <CompetencySummary />
      <Collaboration />
      <Resume />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
