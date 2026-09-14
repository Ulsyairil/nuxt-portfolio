type SpotlightElement = HTMLElement & {
  __spotlightCleanup__?: () => void
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('spotlight', {
    mounted(el: SpotlightElement) {
      let raf = 0

      const onMove = (event: MouseEvent) => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect()
          el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
          el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
        })
      }

      const onLeave = () => {
        el.style.setProperty('--spot-x', '50%')
        el.style.setProperty('--spot-y', '50%')
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)

      el.__spotlightCleanup__ = () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
        cancelAnimationFrame(raf)
      }
    },
    beforeUnmount(el: SpotlightElement) {
      el.__spotlightCleanup__?.()
      delete el.__spotlightCleanup__
    },
  })
})