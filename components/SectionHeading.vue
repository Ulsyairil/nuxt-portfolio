<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <div class="mb-8">
    <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
      {{ subtitle }}
    </p>
  </div>
</template>
