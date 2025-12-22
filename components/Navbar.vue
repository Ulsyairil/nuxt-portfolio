<script setup lang="ts">
import { site } from './../data/site'

const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-900/10 bg-white/70 backdrop-blur
           dark:border-white/10 dark:bg-black/30">
    <div class="container-base h-14 flex items-center justify-between">
      <a href="#top" class="font-bold tracking-tight text-slate-900 dark:text-white">
        {{ site.siteTitle }}
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a v-for="item in nav" :key="item.href" :href="item.href"
          class="muted hover:text-slate-900 dark:hover:text-white transition">
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>
