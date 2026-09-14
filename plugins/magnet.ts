type MagnetElement = HTMLElement & {
  __magnetCleanup__?: () => void
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('magnet', {
    mounted(el: MagnetElement, binding) {
      const strength = typeof binding.value === 'number' ? binding.value : 0.25
      let raf = 0

      const onMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = event.clientX - (rect.left + rect.width / 2)
        const y = event.clientY - (rect.top + rect.height / 2)

        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
        })
      }

      const onLeave = () => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          el.style.transform = ''
        })
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)

      el.__magnetCleanup__ = () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
        cancelAnimationFrame(raf)
      }
    },
    unmounted(el: MagnetElement) {
      el.__magnetCleanup__?.()
      delete el.__magnetCleanup__
    },
  })
})