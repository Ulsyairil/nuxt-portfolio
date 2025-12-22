<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

type ThemePreference = 'system' | 'light' | 'dark'

const colorMode = useColorMode()

const options: Array<{ label: string; value: ThemePreference; icon: string }> = [
  { label: 'System', value: 'system', icon: 'fa-solid fa-desktop' },
  { label: 'Light', value: 'light', icon: 'fa-solid fa-sun' },
  { label: 'Dark', value: 'dark', icon: 'fa-solid fa-moon' }
]

const active = computed(() => options.find(o => o.value === colorMode.preference) || options[0])
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      class="inline-flex h-8 w-8 items-center justify-center rounded-xl border
             border-slate-900/10 bg-white/70 text-slate-700 backdrop-blur
             dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      aria-hidden="true"
      title="Theme"
    >
      <i :class="active.icon"></i>
    </span>

    <div class="relative">
      <select
        v-model="colorMode.preference"
        class="h-8 appearance-none rounded-xl border pl-3 pr-9 text-sm font-semibold outline-none backdrop-blur transition
               border-slate-900/10 bg-white/70 text-slate-900 hover:bg-white/90
               focus:ring-2 focus:ring-indigo-500/30
               dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus:ring-indigo-400/30"
        aria-label="Select theme"
      >
        <option v-for="o in options" :key="o.value" :value="o.value">
          {{ o.label }}
        </option>
      </select>

      <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-300">
        <i class="fa-solid fa-chevron-down text-xs"></i>
      </span>
    </div>
  </div>
</template>
