<script setup lang="ts">
import { localeOptions, type Locale } from '~/composables/useLocale'

const { locale, setLocale, copy } = usePortfolio()
</script>

<template>
  <div class="relative">
    <label class="sr-only" for="portfolio-locale">{{ copy.language.select }}</label>
    <select
      id="portfolio-locale"
      :value="locale"
      class="control-select"
      :aria-label="copy.language.select"
      @change="setLocale(($event.target as HTMLSelectElement).value as Locale)"
    >
      <option v-for="option in localeOptions" :key="option.value" :value="option.value">
        {{ option.shortLabel }}
      </option>
    </select>

    <span class="muted pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
      <i class="fa-solid fa-chevron-down text-[10px]"></i>
    </span>
  </div>
</template>
