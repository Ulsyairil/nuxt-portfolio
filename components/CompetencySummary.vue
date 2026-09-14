<script setup lang="ts">
import { computed } from 'vue'

const { site, copy } = usePortfolio()

const toNumber = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/)
  return match
    ? { number: Number(match[1]), suffix: match[2] }
    : { number: 0, suffix: value }
}

const stats = computed(() => [
  { ...toNumber(copy.value.summary.years), label: copy.value.summary.yearsLabel, text: copy.value.summary.yearsText },
  { number: 4, suffix: '', label: copy.value.summary.systemsLabel, text: copy.value.summary.systemsText },
  { number: site.value.certificates.length, suffix: '', label: copy.value.summary.certificatesLabel, text: copy.value.summary.certificatesText },
  { number: site.value.projects.length, suffix: '', label: copy.value.summary.projectsLabel, text: copy.value.summary.projectsText },
])
</script>

<template>
  <section id="summary" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.summary.title" />
      <div class="grid gap-x-12 gap-y-12 md:grid-cols-2">
        <article v-for="(stat, index) in stats" :key="stat.label" class="text-center" data-reveal :data-reveal-delay="(index % 2) * 80">
          <p class="mono-heading text-7xl font-bold" style="font-variant-numeric: tabular-nums">
            <AnimatedNumber :value="stat.number" :suffix="stat.suffix" />
          </p>
          <h3 class="mono-heading mt-5 text-xl font-bold">{{ stat.label }}</h3>
          <p class="muted mt-3">{{ stat.text }}</p>
        </article>
      </div>
      <div v-spotlight class="spotlight mt-14 border-l-4 p-6" style="border-color: rgb(var(--lime)); background: rgb(var(--lime) / .18)" data-reveal>
        <p class="text-lg font-semibold">{{ copy.summary.note }}</p>
      </div>
    </div>
  </section>
</template>
