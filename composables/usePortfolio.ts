import { computed } from 'vue'
import { getMessages } from '~/data/locales'
import { getSite } from '~/data/site'

export const usePortfolio = () => {
  const { locale, setLocale } = useLocale()

  const site = computed(() => getSite(locale.value))
  const copy = computed(() => getMessages(locale.value))

  return { locale, setLocale, site, copy }
}
