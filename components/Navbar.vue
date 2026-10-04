<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const { site, copy } = usePortfolio()
const mobileOpen = ref(false)
const active = ref('#top')
let onScroll: (() => void) | null = null

const nav = computed(() => [
  { label: copy.value.nav.home, href: '#top' },
  { label: copy.value.nav.about, href: '#about' },
  { label: copy.value.nav.skills, href: '#skills' },
  { label: copy.value.nav.experience, href: '#experience' },
  { label: copy.value.nav.projects, href: '#projects' },
  { label: copy.value.nav.certificates, href: '#certificates' },
  { label: copy.value.nav.education, href: '#education' },
  { label: copy.value.nav.collaboration, href: '#collaboration' },
  { label: copy.value.nav.resume, href: '#resume' },
  { label: copy.value.nav.contact, href: '#contact' },
])

onMounted(() => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main [id]'))
    .filter(element => nav.value.some(item => item.href === `#${element.id}`))

  let ticking = false

  onScroll = () => {
    if (ticking) return
    ticking = true

    requestAnimationFrame(() => {
      const pos = window.scrollY + 160
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      let current = '#top'
      for (const element of sections) {
        if (element.getBoundingClientRect().top + window.scrollY <= pos) {
          current = `#${element.id}`
        }
      }

      if (atBottom) {
        current = nav.value[nav.value.length - 1].href
      }

      active.value = current
      ticking = false
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  if (onScroll) {
    window.removeEventListener('scroll', onScroll)
  }
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b" style="border-color: rgb(var(--line) / .16); background: rgb(var(--bg) / .96)" @keydown.esc="mobileOpen = false">
    <div class="container-base flex min-h-16 items-center justify-between gap-2 sm:gap-4">
      <a href="#top" class="mono-heading text-sm font-bold sm:text-base">
        <span class="sm:hidden">UOF</span>
        <span class="hidden sm:inline">{{ site.siteTitle }}</span>
      </a>

      <nav class="hidden items-center gap-4 2xl:flex" aria-label="Primary navigation">
        <a v-for="item in nav" :key="item.href" :href="item.href" class="nav-link muted whitespace-nowrap text-sm font-semibold transition" :class="{ 'active-link': active === item.href }">
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-1.5 sm:gap-2">
        <LocaleSwitcher />
        <ThemeSwitcher />
        <button
          class="btn h-10 min-h-0 px-3 2xl:hidden"
          type="button"
          :aria-label="mobileOpen ? copy.nav.closeMenu : copy.nav.menu"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-navigation"
          @click="mobileOpen = !mobileOpen"
        >
          <i :class="mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </div>

    <nav
      v-if="mobileOpen"
      id="mobile-navigation"
      class="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-t 2xl:hidden"
      style="border-color: rgb(var(--line) / .16); background: rgb(var(--bg) / .99)"
      aria-label="Mobile navigation"
    >
      <div class="container-base grid py-3 sm:grid-cols-2">
        <a
          v-for="(item, index) in nav"
          :key="item.href"
          :href="item.href"
          class="nav-link flex min-h-12 items-center justify-between gap-4 border-b py-3 px-3 text-sm font-bold transition"
          :class="{
            'mobile-active': active === item.href,
          }"
          style="border-color: rgb(var(--line) / .12)"
          @click="mobileOpen = false"
        >
          <span>{{ item.label }}</span>
          <span class="muted text-xs" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.active-link {
  color: rgb(var(--lime));
}
.mobile-active {
  color: rgb(var(--lime));
  background: rgb(var(--lime) / 0.08);
}
</style>
