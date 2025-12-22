<script setup lang="ts">
import { computed } from 'vue'
import { site } from './../data/site'

type SkillLevel = 'Beginner' | 'Amateur' | 'Intermediate' | 'Advanced'
type Skill = { name: string; level: SkillLevel; icon?: string }

const levelStyles: Record<SkillLevel, string> = {
  Advanced:
    'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200',
  Intermediate:
    'border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-200',
  Amateur:
    'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-200',
  Beginner:
    'border-slate-500/20 bg-slate-500/10 text-slate-700 dark:text-slate-200',
}

const levelOrder: Record<SkillLevel, number> = {
  Advanced: 3,
  Intermediate: 2,
  Amateur: 1,
  Beginner: 0,
}

const skills = computed(() => {
  const list = (site.skills as Skill[]).slice()
  return list.sort((a, b) => levelOrder[b.level] - levelOrder[a.level])
})
</script>

<template>
  <section id="skills" class="section" data-aos="fade-right">
    <div class="container-base">
      <SectionHeading title="Skills" subtitle="What I can do." />

      <div class="card p-6 md:p-8">
        <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="s in skills" :key="s.name" class="min-w-0">
            <div class="flex items-center justify-between gap-3 rounded-xl border px-4 py-3
                     border-slate-900/10 bg-white/60 backdrop-blur
                     transition-colors hover:bg-white/80
                     dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
              <div class="flex min-w-0 items-center gap-2">
                <i v-if="s.icon" :class="s.icon" aria-hidden="true" class="shrink-0"></i>
                <span class="truncate font-medium">{{ s.name }}</span>
              </div>

              <span class="shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium" :class="levelStyles[s.level]">
                {{ s.level }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
