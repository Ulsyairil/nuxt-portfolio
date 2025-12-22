<script setup lang="ts">
import { site } from './../data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-900/10 py-10 dark:border-white/10">
    <div class="container-base flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <p class="font-semibold text-slate-900 dark:text-white">{{ site.name }}</p>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          © {{ year }}. Built with ❤️
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <a v-for="l in site.links" :key="l.href"
          class="chip transition hover:border-slate-900/20 dark:hover:border-white/20" :href="l.href" target="_blank"
          rel="noreferrer">
          <i :class="l.icon" class="mr-2"></i>
          {{ l.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
