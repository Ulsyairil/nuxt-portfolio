<script setup lang="ts">
import { site } from './../data/site'
import { ref, computed } from 'vue'

type Project = {
  title: string
  description: string
  stack: string[]
  image?: string
  imageAlt?: string
  links?: Array<{ label: string; href: string }>
}

const open = ref(false)
const active = ref<Project | null>(null)

const openZoom = (p: Project) => {
  if (!p.image) return
  active.value = p
  open.value = true
  document.documentElement.style.overflow = 'hidden'
}

const closeZoom = () => {
  open.value = false
  active.value = null
  document.documentElement.style.overflow = ''
}

const activeAlt = computed(() => active.value?.imageAlt || active.value?.title || 'Project image')
</script>

<template>
  <section id="projects" class="section" data-aos="fade-down">
    <div class="container-base">
      <SectionHeading title="Projects" subtitle="What I have built." />

      <div class="grid gap-4 md:grid-cols-2">
        <article v-for="(p, idx) in site.projects" :key="idx"
          class="card overflow-hidden p-0 transition hover:-translate-y-0.5 hover:shadow-md">
          <button type="button" class="relative block w-full aspect-[16/9] border-b border-slate-900/10 bg-white/60 text-left
                   dark:border-white/10 dark:bg-white/5" :disabled="!p.image" @click="openZoom(p as any)">
            <img v-if="p.image" :src="p.image" :alt="p.imageAlt || p.title" class="h-full w-full object-cover"
              loading="lazy" decoding="async" />

            <div class="absolute inset-0 bg-black/25 opacity-0 transition
                     hover:opacity-100" />

            <div v-if="p.image" class="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-xl border
                     border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur
                     opacity-0 transition hover:opacity-100">
              Click to zoom
            </div>

            <div v-else class="h-full w-full grid place-items-center" :style="{
              backgroundImage:
                'linear-gradient(135deg, rgb(var(--primary) / 0.18), rgb(var(--primary-2) / 0.18))'
            }">
              <div class="text-center px-6">
                <p class="text-sm font-semibold text-slate-900 dark:text-white">
                  {{ p.title }}
                </p>
                <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Screenshot not available
                </p>
              </div>
            </div>
            
          </button>

          <div class="p-6">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">
              {{ p.title }}
            </h3>

            <p class="mt-2 text-slate-600 dark:text-slate-300">
              {{ p.description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="t in p.stack" :key="t" class="chip text-slate-700 dark:text-slate-200">
                {{ t }}
              </span>
            </div>

            <div v-if="p.links?.length" class="mt-5 flex flex-wrap gap-2">
              <a v-for="l in p.links" :key="l.href" class="btn" :href="l.href" target="_blank" rel="noreferrer">
                {{ l.label }}
              </a>
            </div>

            <p v-else class="mt-5 text-xs text-slate-500 dark:text-slate-400">
              No links available (Internal project).
            </p>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="zoomfade">
        <div v-if="open && active?.image" class="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
          @click="closeZoom">
          <button type="button" class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border
                   border-white/15 bg-black/40 text-white backdrop-blur" aria-label="Close" @click.stop="closeZoom">
            ✕
          </button>

          <div class="h-full w-full grid place-items-center p-4">
            <img :src="active.image" :alt="activeAlt"
              class="max-h-[85vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-2xl" @click.stop />
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.zoomfade-enter-active,
.zoomfade-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.zoomfade-enter-from,
.zoomfade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
