<script setup lang="ts">
import { computed } from 'vue'

const { locale, site, copy } = usePortfolio()
const resumeHref = computed(() => site.value.resumeUrl)
</script>

<template>
  <section id="resume" class="section">
    <div class="container-base">
      <div class="resume-card grid overflow-hidden border lg:grid-cols-[1.45fr_.55fr]" data-reveal>
        <div class="p-8 sm:p-10 lg:p-14">
          <span class="tag">{{ copy.resume.eyebrow }}</span>
          <h2 class="editorial-title mt-7">{{ copy.resume.title }}</h2>
          <p class="muted mt-5 max-w-2xl text-lg leading-relaxed">{{ copy.resume.subtitle }}</p>

          <div class="mt-10 flex flex-wrap gap-3">
            <a class="btn btn-primary" :href="resumeHref" target="_blank" rel="noreferrer">
              <i class="fa-regular fa-file-lines"></i>{{ copy.resume.view }}
            </a>
            <a class="btn" :href="resumeHref" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-download"></i>{{ copy.resume.download }}
            </a>
          </div>
        </div>

        <aside class="resume-accent relative flex min-h-72 flex-col justify-between overflow-hidden border-t p-8 sm:p-10 lg:min-h-full lg:border-l lg:border-t-0">
          <div class="relative z-10">
            <span class="grid h-14 w-14 place-items-center rounded-full border-2 border-black text-2xl" aria-hidden="true">
              <i class="fa-regular fa-file-lines"></i>
            </span>
            <p class="mt-7 text-sm font-bold uppercase tracking-[.18em]">{{ copy.resume.format }}</p>
            <p class="mt-2 text-xl font-bold">{{ copy.resume.language }}</p>
          </div>

          <span class="resume-locale relative z-10 mt-10 font-bold uppercase" aria-hidden="true">{{ locale }}</span>
          <span class="resume-decoration absolute -bottom-24 -right-20 h-64 w-64 rounded-full border-[3rem] border-black/10" aria-hidden="true"></span>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume-card {
  border-color: rgb(var(--line) / .22);
  background: rgb(var(--surface));
}

.resume-accent {
  border-color: rgb(0 0 0 / .18);
  background: rgb(var(--lime-bright));
  color: #151515;
}

.resume-locale {
  font-size: clamp(4.5rem, 10vw, 8.5rem);
  line-height: .75;
  letter-spacing: -.08em;
}
</style>
