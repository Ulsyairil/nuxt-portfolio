<script setup lang="ts">
import { computed } from 'vue'
import { site } from './../data/site'

const primary = computed(() => `rgb(var(--primary))`)
const primary2 = computed(() => `rgb(var(--primary-2))`)
</script>

<template>
  <section id="top" class="section">
    <div class="container-base grid items-center gap-8 md:grid-cols-12">
      <div class="md:col-span-7" data-aos="fade-right">
        <p class="chip inline-flex items-center">
          Available for freelance / full-time
        </p>

        <h1 class="mt-4 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl text-slate-900 dark:text-white">
          {{ site.name }}
          <span
            class="block bg-clip-text text-transparent"
            :style="{ backgroundImage: `linear-gradient(135deg, ${primary}, ${primary2})` }"
          >
            {{ site.title }}
          </span>
        </h1>

        <p class="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
          {{ site.summary }}
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a class="btn btn-primary text-black hover:text-white dark:text-white dark:hover:text-black" href="#projects">View Projects</a>
          <a class="btn" href="#contact">Contact</a>
          <a class="btn" :href="site.links[0]?.href" target="_blank" rel="noreferrer">
            <i class="devicon-github-original"></i>
            GitHub
          </a>
        </div>

        <div class="mt-6 text-sm text-slate-600 dark:text-slate-300">
          <span>{{ site.location }}</span>
        </div>
      </div>

      <div class="md:col-span-5 transition hover:-translate-y-0.5 hover:shadow-md" data-aos="fade-up">
        <div class="card p-4 md:p-6">
          <div
            class="aspect-square overflow-hidden rounded-2xl border border-slate-900/10 bg-white/70
                   dark:border-white/10 dark:bg-white/5"
          >
            <img :src="site.avatar" alt="Avatar" class="h-full w-full object-cover" />
          </div>

          <div class="mt-4 grid grid-cols-1 gap-2 text-sm">
            <a
              class="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              :href="`mailto:${site.email}`"
            >
              <i class="fa fa-envelope"></i>
              {{ site.email }}
            </a>

            <a
              class="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              :href="`tel:${site.phone}`"
            >
              <i class="fa fa-phone"></i>
              {{ site.phone }}
            </a>

            <div class="mt-2 flex flex-wrap gap-2">
              <a
                v-for="l in site.links"
                :key="l.href"
                class="chip transition hover:border-slate-900/20 dark:hover:border-white/20"
                :href="l.href"
                target="_blank"
                rel="noreferrer"
              >
                <i :class="l.icon"></i>
                {{ l.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
