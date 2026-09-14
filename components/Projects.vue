<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import type { Project } from '~/data/site'

const { site, copy } = usePortfolio()
const active = ref<Project | null>(null)
const activeAlt = computed(() => active.value?.title || copy.value.projects.imageFallback)

const openPreview = (project: Project) => {
  if (!project.image) return
  active.value = project
  document.documentElement.style.overflow = 'hidden'
}

const closePreview = () => {
  active.value = null
  document.documentElement.style.overflow = ''
}

onBeforeUnmount(() => { document.documentElement.style.overflow = '' })
</script>

<template>
  <section id="projects" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.projects.title" :subtitle="copy.projects.subtitle" />

      <div class="grid gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="(project, index) in site.projects" :key="project.title" v-spotlight v-tilt class="spotlight border-t pt-6 tilt" style="border-color: rgb(var(--line) / .25)" data-reveal :data-reveal-delay="(index % 3) * 80">
          <button v-if="project.image" type="button" class="group block w-full overflow-hidden text-left" :aria-label="`${copy.projects.zoom}: ${project.title}`" @click="openPreview(project)">
            <img :src="project.image" :alt="project.title" class="h-52 w-full border object-cover transition-transform duration-500 group-hover:scale-[1.025] sm:h-60 lg:h-64" style="border-color: rgb(var(--line) / .2)" loading="lazy" />
          </button>
          <div v-else class="image-placeholder h-52 min-h-0 sm:h-60 lg:h-64" role="img" :aria-label="copy.projects.unavailable">
            <span class="mono-heading text-sm">{{ copy.projects.unavailable }}</span>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="(technology, index) in project.stack" :key="technology" :class="index === 0 ? 'tag-solid' : 'tag'">{{ technology }}</span>
          </div>
          <h3 class="mono-heading mt-5 text-2xl font-bold leading-tight">{{ project.title }}</h3>
          <p class="muted mt-4 leading-7">{{ project.description }}</p>
          <p v-if="project.impact" class="mt-5 border-l-2 pl-4" style="border-color: rgb(var(--lime))">
            <span class="mono-heading text-xs font-bold uppercase accent-lime">{{ copy.projects.impact }}</span>
            <span class="muted mt-1 block text-sm leading-6">{{ project.impact }}</span>
          </p>
          <p v-if="!project.links?.length" class="mono-heading mt-5 text-xs uppercase accent-lime">{{ copy.projects.noLinks }}</p>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="active?.image" class="image-modal fixed inset-0 z-[100] grid place-items-center bg-black/90 p-5" @click="closePreview">
        <button class="absolute right-5 top-5 h-12 w-12 border border-white/30 text-white" type="button" :aria-label="copy.projects.close" @click.stop="closePreview">✕</button>
        <img :src="active.image" :alt="activeAlt" class="max-h-[88vh] max-w-[94vw] object-contain" @click.stop />
      </div>
    </Teleport>
  </section>
</template>
