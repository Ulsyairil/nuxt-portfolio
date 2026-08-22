<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <div class="mb-12 md:mb-16" data-reveal>
    <h2 class="editorial-title">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="muted mt-5 max-w-3xl text-lg leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>
