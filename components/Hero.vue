<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { VueWriter } from 'vue-writer'

const { locale, site, copy } = usePortfolio()
const route = useRoute()
const linkedIn = computed(() => site.value.links.find(link => link.label === 'LinkedIn'))
const github = computed(() => site.value.links.find(link => link.label === 'GitHub'))
const resumeHref = computed(() => `/resume/ulsyairil-oktorio-fadillah-resume-${locale.value}.pdf`)
const isPdfExport = computed(() => route.query['portfolio-pdf'] === '1')
const isReducedMotion = ref(false)

onMounted(() => {
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <section id="top" class="hero relative min-h-[calc(100vh-4rem)] overflow-hidden py-16 md:py-24">
    <div class="hero-mesh" aria-hidden="true">
      <span class="hero-orb hero-orb-1"></span>
      <span class="hero-orb hero-orb-2"></span>
      <span class="hero-orb hero-orb-3"></span>
      <span class="hero-orb hero-orb-4"></span>
    </div>

    <div class="container-base relative grid items-center gap-10 lg:grid-cols-[.82fr_1.38fr] lg:gap-20">
      <figure class="relative mx-auto w-[78%] max-w-[18rem] lg:mx-0 lg:w-full lg:max-w-md" data-reveal="left" data-reveal-delay="80">
        <div class="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4" style="border-color: rgb(var(--lime))" aria-hidden="true"></div>
        <img :src="site.avatar" :alt="copy.hero.avatarAlt" class="img-grayscale relative aspect-[4/5] w-full border object-cover" style="border-color: rgb(var(--line) / .25)" />
      </figure>

      <div>
        <div class="flex flex-wrap items-center gap-3" data-reveal="right" data-reveal-delay="120">
          <span class="tag">{{ copy.hero.role }}</span>
          <span class="mono-heading text-sm font-bold uppercase accent-lime">{{ site.location }}</span>
        </div>

        <h1 class="mono-heading mt-7 text-5xl font-bold leading-[.98] tracking-tight accent-coral sm:text-6xl xl:text-7xl" data-reveal="right" data-reveal-delay="200">
          {{ site.name }}
        </h1>

        <p v-if="isPdfExport || isReducedMotion" class="mt-7 max-w-3xl text-xl italic leading-relaxed md:text-2xl" data-reveal="right" data-reveal-delay="280">
          {{ copy.hero.tagline }}
        </p>

        <div v-else class="mt-7 max-w-3xl text-xl italic leading-relaxed md:text-2xl" data-reveal="right" data-reveal-delay="280">
          <VueWriter
            :key="locale"
            :array="copy.hero.typewriter"
            :type-speed="70"
            :erase-speed="40"
            :delay="2200"
            :intervals="600"
            caret="cursor"
          />
        </div>

        <p class="muted mt-6 max-w-3xl text-lg leading-relaxed" data-reveal="right" data-reveal-delay="360">
          {{ site.summary }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3" data-reveal="right" data-reveal-delay="440">
          <a v-if="linkedIn" class="btn btn-primary" :href="linkedIn.href" target="_blank" rel="noreferrer" v-magnet>
            <i class="fa-brands fa-linkedin"></i>{{ copy.hero.linkedIn }}
          </a>
          <a v-if="github" class="btn" :href="github.href" target="_blank" rel="noreferrer" v-magnet>
            <i class="fa-brands fa-github"></i>{{ copy.hero.github }}
          </a>
          <a class="btn" :href="resumeHref" target="_blank" rel="noreferrer" v-magnet>
            <i class="fa-regular fa-file-lines"></i>{{ copy.hero.resume }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.is-typed) {
  color: rgb(var(--text));
  font-family: inherit;
}

:deep(.is-typed .typed) {
  color: rgb(var(--text));
}

:deep(.is-typed .cursor) {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 4px;
  vertical-align: -0.15em;
  background-color: rgb(var(--lime));
  animation: caret-blink 1s step-end infinite;
}

:deep(.is-typed .cursor.typing) {
  animation: none;
}

@keyframes caret-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-mesh {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  mix-blend-mode: soft-light;
  opacity: .55;
  will-change: transform;
  animation: hero-drift 18s ease-in-out infinite;
}

.hero-orb-1 {
  width: 34rem;
  height: 34rem;
  top: -8rem;
  left: -6rem;
  background: radial-gradient(circle, rgb(var(--lime) / .85) 0%, transparent 70%);
}

.hero-orb-2 {
  width: 30rem;
  height: 30rem;
  bottom: -6rem;
  right: -4rem;
  background: radial-gradient(circle, rgb(var(--coral) / .8) 0%, transparent 70%);
  animation-delay: -6s;
}

.hero-orb-3 {
  width: 26rem;
  height: 26rem;
  top: 30%;
  right: 8%;
  background: radial-gradient(circle, rgb(var(--lime) / .6) 0%, transparent 70%);
  animation-delay: -12s;
}

.hero-orb-4 {
  width: 22rem;
  height: 22rem;
  bottom: 4%;
  left: 0;
  background: radial-gradient(circle, rgb(var(--coral) / .55) 0%, transparent 70%);
  animation-delay: -3s;
}

@keyframes hero-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.08); }
  66% { transform: translate(-30px, 34px) scale(.94); }
}

@media (max-width: 640px) {
  .hero-orb { filter: blur(50px); }
}
</style>
