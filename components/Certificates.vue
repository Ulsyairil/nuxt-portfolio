<script setup lang="ts">
import { site } from './../data/site'
</script>

<template>
  <section id="certificates" class="section" data-aos="fade-right">
    <div class="container-base">
      <SectionHeading title="Certificates" subtitle="Selected certifications and training." />

      <div class="grid gap-4 md:grid-cols-3">
        <article v-for="(c, idx) in site.certificates" :key="idx"
          class="card p-6 transition hover:-translate-y-0.5 hover:shadow-md">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl border border-slate-900/10 bg-white/70 p-2 backdrop-blur
                     dark:border-white/10 dark:bg-white/5">
              <img v-if="c.image" :src="c.image" :alt="c.imageAlt || c.title" class="h-full w-full object-contain"
                loading="lazy" decoding="async" />
              <div v-else class="h-full w-full rounded-lg" :style="{
                backgroundImage:
                  'linear-gradient(135deg, rgb(var(--primary) / 0.18), rgb(var(--primary-2) / 0.18))'
              }" />
            </div>

            <div class="min-w-0">
              <h3 class="font-bold text-slate-900 dark:text-white break-words">
                {{ c.title }}
              </h3>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-300 break-words">
                {{ c.issuer }}
              </p>
            </div>
          </div>

          <div class="mt-4">
            <a v-if="c.proof" class="btn w-fit" :href="c.proof" target="_blank" rel="noreferrer">
              View Proof
              <i class="fa fa-external-link"></i>
            </a>

            <p v-else class="text-xs text-slate-500 dark:text-slate-400">
              Proof not available
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
