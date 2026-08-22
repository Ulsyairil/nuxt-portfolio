<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

type ThemePreference = 'system' | 'light' | 'dark'

const colorMode = useColorMode()
const { copy } = usePortfolio()

const options = computed<Array<{ label: string; value: ThemePreference; icon: string }>>(() => [
  { label: copy.value.theme.system, value: 'system', icon: 'fa-solid fa-desktop' },
  { label: copy.value.theme.light, value: 'light', icon: 'fa-solid fa-sun' },
  { label: copy.value.theme.dark, value: 'dark', icon: 'fa-solid fa-moon' },
])

const active = computed(() => options.value.find(o => o.value === colorMode.preference) || options.value[0])
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      class="hidden h-10 w-10 items-center justify-center border sm:inline-flex"
      style="border-color: rgb(var(--line) / .25)"
      aria-hidden="true"
      :title="copy.theme.label"
    >
      <i :class="active.icon"></i>
    </span>

    <div class="relative">
      <select
        v-model="colorMode.preference"
        class="control-select"
        :aria-label="copy.theme.select"
      >
        <option v-for="o in options" :key="o.value" :value="o.value">
          {{ o.label }}
        </option>
      </select>

      <span class="muted pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
        <i class="fa-solid fa-chevron-down text-xs"></i>
      </span>
    </div>
  </div>
</template>
