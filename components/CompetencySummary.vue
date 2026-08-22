<script setup lang="ts">
import { computed } from 'vue'

const { site, copy } = usePortfolio()
const stats = computed(() => [
  { value: copy.value.summary.years, label: copy.value.summary.yearsLabel, text: copy.value.summary.yearsText },
  { value: '4', label: copy.value.summary.systemsLabel, text: copy.value.summary.systemsText },
  { value: String(site.value.certificates.length), label: copy.value.summary.certificatesLabel, text: copy.value.summary.certificatesText },
  { value: String(site.value.projects.length), label: copy.value.summary.projectsLabel, text: copy.value.summary.projectsText },
])
</script>

<template>
  <section id="summary" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.summary.title" />
      <div class="grid gap-x-12 gap-y-12 md:grid-cols-2">
        <article v-for="(stat, index) in stats" :key="stat.label" class="text-center" data-reveal :data-reveal-delay="(index % 2) * 80">
          <p class="mono-heading text-7xl font-bold">{{ stat.value }}</p>
          <h3 class="mono-heading mt-5 text-xl font-bold">{{ stat.label }}</h3>
          <p class="muted mt-3">{{ stat.text }}</p>
        </article>
      </div>
      <div class="mt-14 border-l-4 p-6" style="border-color: rgb(var(--lime)); background: rgb(var(--lime) / .18)" data-reveal>
        <p class="text-lg font-semibold">{{ copy.summary.note }}</p>
      </div>
    </div>
  </section>
</template>
