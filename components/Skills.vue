<script setup lang="ts">
import { site } from './../data/site'

type SkillLevel = 'Beginner' | 'Amateur' | 'Intermediate' | 'Advanced'

const levelClass = (level: SkillLevel) => {
  switch (level) {
    case 'Advanced':
      return 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200'
    case 'Intermediate':
      return 'border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-200'
    case 'Amateur':
      return 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-200'
    case 'Beginner':
    default:
      return 'border-slate-500/20 bg-slate-500/10 text-slate-700 dark:text-slate-200'
  }
}
</script>

<template>
  <section id="skills" class="section" data-aos="fade-right">
    <div class="container-base">
      <SectionHeading title="Skills" subtitle="What I can do." />

      <div class="card p-6 md:p-8">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="s in site.skills"
            :key="s.name"
            class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm
                   border-slate-900/10 bg-white/70 text-slate-900
                   dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <span class="font-medium">
              <i :class="s.icon"></i>
              {{ s.name }}
            </span>

            <span class="rounded-full border px-2 py-0.5 text-xs" :class="levelClass(s.level)">
              {{ s.level }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
