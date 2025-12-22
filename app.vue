<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app'
import { onMounted, ref } from 'vue'

const loading = ref(true)
const nuxtApp = useNuxtApp()

let timer: ReturnType<typeof setTimeout> | null = null

const startLoading = () => {
  loading.value = true

  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    loading.value = false
    timer = null
  }, 100000)
}

const stopLoading = () => {
  loading.value = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

onMounted(() => {
  stopLoading()
})

nuxtApp.hook('page:start', startLoading)
nuxtApp.hook('page:finish', stopLoading)
</script>

<template>
  <div class="min-h-dvh bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
    <LoadingOverlay :show="loading" />

    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
