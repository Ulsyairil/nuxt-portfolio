<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  suffix?: string
  duration?: number
}>(), {
  suffix: '',
  duration: 1200,
})

const route = useRoute()
const el = ref<HTMLElement | null>(null)
const display = ref(props.value)
const triggered = ref(false)
let raf = 0
let observer: IntersectionObserver | undefined

const isPdfExport = () => route.query['portfolio-pdf'] === '1'
const isReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const animate = () => {
  cancelAnimationFrame(raf)
  const target = props.value
  const start = performance.now()

  const tick = (now: number) => {
    const progress = Math.min((now - start) / props.duration, 1)
    display.value = Math.round(target * (1 - Math.pow(1 - progress, 3)))
    if (progress < 1) {
      raf = requestAnimationFrame(tick)
    }
    else {
      display.value = target
    }
  }

  raf = requestAnimationFrame(tick)
}

const run = () => {
  if (triggered.value) return
  triggered.value = true

  if (isPdfExport() || isReducedMotion()) {
    display.value = props.value
    return
  }

  display.value = 0
  animate()
}

watch(() => props.value, (target) => {
  if (!triggered.value) {
    display.value = target
    return
  }

  if (isPdfExport() || isReducedMotion()) {
    display.value = target
    return
  }

  animate()
})

onMounted(() => {
  const node = el.value
  if (!node) return

  if (!('IntersectionObserver' in window)) {
    run()
    return
  }

  observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      run()
      observer?.disconnect()
    }
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0,
  })

  observer.observe(node)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(raf)
})
</script>

<template>
  <span ref="el">{{ display }}{{ suffix }}</span>
</template>