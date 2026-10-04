export type Locale = 'en' | 'id'

export const localeOptions: Array<{ label: string; shortLabel: string; value: Locale }> = [
  { label: 'English', shortLabel: 'EN', value: 'en' },
  { label: 'Indonesia', shortLabel: 'ID', value: 'id' },
]

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

export const useLocale = () => {
  const locale = useCookie<Locale>('portfolio_locale', {
    default: () => 'en',
    sameSite: 'lax',
    path: '/',
    maxAge: ONE_YEAR_SECONDS,
  })

  if (typeof locale.value !== 'string' || !localeOptions.some(option => option.value === locale.value)) {
    locale.value = 'en'
  }

  const setLocale = (value: Locale) => {
    locale.value = value
  }

  return { locale, setLocale }
}
