<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const progress = ref(0)
let raf = 0

const update = () => {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const doc = document.documentElement
    const total = doc.scrollHeight - window.innerHeight
    progress.value = total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0
  })
}

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  update()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true" :style="{ width: `${progress}%` }" data-pdf-hide></div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  z-index: 60;
  background: rgb(var(--lime));
  pointer-events: none;
  transition: width 80ms ease-out;
}
</style>