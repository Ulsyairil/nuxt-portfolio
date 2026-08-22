<script setup lang="ts">
import { computed } from 'vue'

const { locale, site, copy } = usePortfolio()
const linkedIn = computed(() => site.value.links.find(link => link.label === 'LinkedIn'))
const github = computed(() => site.value.links.find(link => link.label === 'GitHub'))
const resumeHref = computed(() => `/resume/ulsyairil-oktorio-fadillah-resume-${locale.value}.pdf`)
</script>

<template>
  <section id="top" class="min-h-[calc(100vh-4rem)] py-16 md:py-24">
    <div class="container-base grid items-center gap-10 lg:grid-cols-[.82fr_1.38fr] lg:gap-20">
      <figure class="relative mx-auto w-[78%] max-w-[18rem] lg:mx-0 lg:w-full lg:max-w-md" data-reveal="left">
        <div class="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4" style="border-color: rgb(var(--lime))" aria-hidden="true"></div>
        <img :src="site.avatar" :alt="copy.hero.avatarAlt" class="relative aspect-[4/5] w-full border object-cover" style="border-color: rgb(var(--line) / .25)" />
      </figure>

      <div data-reveal="right" data-reveal-delay="100">
        <div class="flex flex-wrap items-center gap-3">
          <span class="tag">{{ copy.hero.role }}</span>
          <span class="mono-heading text-sm font-bold uppercase accent-lime">{{ site.location }}</span>
        </div>

        <h1 class="mono-heading mt-7 text-5xl font-bold leading-[.98] tracking-tight accent-coral sm:text-6xl xl:text-7xl">
          {{ site.name }}
        </h1>

        <p class="mt-7 max-w-3xl text-xl italic leading-relaxed md:text-2xl">
          {{ copy.hero.tagline }}
        </p>

        <p class="muted mt-6 max-w-3xl text-lg leading-relaxed">
          {{ site.summary }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a v-if="linkedIn" class="btn btn-primary" :href="linkedIn.href" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>{{ copy.hero.linkedIn }}
          </a>
          <a v-if="github" class="btn" :href="github.href" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>{{ copy.hero.github }}
          </a>
          <a class="btn" :href="resumeHref" target="_blank" rel="noreferrer">
            <i class="fa-regular fa-file-lines"></i>{{ copy.hero.resume }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
