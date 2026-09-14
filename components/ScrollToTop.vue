<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const { copy } = usePortfolio()
const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 600
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <button
    type="button"
    :class="visible ? 'opacity-100' : 'pointer-events-none opacity-0'"
    class="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center border transition-all duration-300"
    style="border-color: rgb(var(--line) / .3); color: rgb(var(--text)); background: rgb(var(--surface));"
    :aria-label="copy.backToTop"
    :title="copy.backToTop"
    @click="scrollToTop"
  >
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>
