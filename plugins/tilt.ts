import VanillaTilt from 'vanilla-tilt'
import type { DirectiveBinding } from 'vue'

type TiltElement = HTMLElement & { vanillaTilt?: { destroy: () => void } }

type TiltOptions = {
  max?: number
  speed?: number
  scale?: number
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tilt', {
    mounted(el: TiltElement, binding: DirectiveBinding<TiltOptions>) {
      const options = binding.value || {}

      VanillaTilt.init(el, {
        max: options.max ?? 6,
        speed: options.speed ?? 400,
        scale: options.scale ?? 1.01,
        glare: false,
        reset: true,
      })
    },
    unmounted(el: TiltElement) {
      el.vanillaTilt?.destroy()
    },
  })
})