<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { site } = usePortfolio()
const isReducedMotion = ref(false)

const iconClass = (icon?: string) => (icon ?? '').replace(/\s*colored$/i, '').trim()

onMounted(() => {
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <section
    class="marquee py-4 select-none overflow-hidden"
    style="background: rgb(var(--lime-bright)); color: #151515"
    data-pdf-hide
    aria-hidden="true"
  >
    <div v-if="!isReducedMotion" class="marquee-track">
      <div v-for="group in 2" :key="group" class="flex items-center">
        <span v-for="skill in site.skills" :key="`${group}-${skill.name}`" class="flex items-center">
          <span class="flex items-center gap-3">
            <i :class="iconClass(skill.icon)" class="text-xl leading-none"></i>
            <span class="mono-heading text-sm font-bold uppercase tracking-wide">{{ skill.name }}</span>
          </span>
          <span class="mx-7 text-base leading-none opacity-70" aria-hidden="true">✦</span>
        </span>
      </div>
    </div>
    <div v-else class="flex items-center overflow-x-auto">
      <span v-for="skill in site.skills" :key="skill.name" class="flex items-center">
        <span class="flex items-center gap-3">
          <i :class="iconClass(skill.icon)" class="text-xl leading-none"></i>
          <span class="mono-heading text-sm font-bold uppercase tracking-wide">{{ skill.name }}</span>
        </span>
        <span class="mx-7 text-base leading-none opacity-70" aria-hidden="true">✦</span>
      </span>
    </div>
  </section>
</template>