<script setup lang="ts">
import { computed } from 'vue'

const { site, copy } = usePortfolio()
const featured = computed(() => site.value.experience.slice(0, 3))
</script>

<template>
  <section id="experience" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.experience.title" :subtitle="copy.experience.subtitle" />

      <p class="tag mb-7">{{ copy.experience.overview }}</p>
      <div class="grid gap-1 md:grid-cols-3">
        <article v-for="(exp, index) in featured" :key="exp.company" class="panel p-7" :class="index === 0 ? 'panel-muted' : ''" data-reveal :data-reveal-delay="index * 80">
          <span class="mono-heading text-4xl font-bold accent-lime">0{{ index + 1 }}</span>
          <p class="mono-heading mt-7 text-lg font-bold">{{ exp.period }}</p>
          <h3 class="mt-3 text-xl font-bold">{{ exp.company }}</h3>
          <p class="muted mt-2 text-sm">{{ exp.roles[0]?.title }} · {{ exp.location }}</p>
        </article>
      </div>

      <p class="tag mt-20">{{ copy.experience.details }}</p>
      <div class="mt-7 space-y-20">
        <article v-for="(exp, index) in featured" :key="`${exp.company}-detail`" class="grid items-stretch gap-8 lg:grid-cols-2" :data-reveal="index % 2 === 0 ? 'right' : 'left'">
          <div class="p-1 lg:p-8" :class="{ 'lg:order-2': index % 2 === 1 }">
            <p class="mono-heading text-sm font-bold uppercase accent-lime">{{ exp.company }}</p>
            <h3 class="mono-heading mt-4 text-4xl font-bold">{{ exp.roles[0]?.title }}</h3>
            <p class="muted mt-3">{{ exp.period }} · {{ exp.location }}</p>
            <p class="mt-7 text-lg leading-8">{{ exp.summary }}</p>

            <div v-for="section in exp.roles[0]?.sections" :key="section.title" class="mt-8">
              <h4 class="mono-heading text-lg font-bold">{{ copy.experience.responsibilities }}</h4>
              <ul class="mt-5 space-y-5">
                <li v-for="item in section.items" :key="item.text" class="border-l-4 pl-5" style="border-color: rgb(var(--lime))">
                  <p class="font-bold">{{ item.text }}</p>
                  <p v-for="sub in item.sub" :key="sub" class="muted mt-1 text-sm leading-6">{{ sub }}</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            v-if="site.images.experience[exp.company]"
            :src="site.images.experience[exp.company]"
            :alt="`${copy.experience.imageLabel}: ${exp.company}`"
            class="h-64 min-h-0 w-full border object-cover sm:h-80 lg:h-full lg:min-h-[26rem] xl:min-h-[32rem]"
            :class="{ 'lg:order-1': index % 2 === 1 }"
            style="border-color: rgb(var(--line) / .2)"
            loading="lazy"
          />
          <div v-else class="image-placeholder h-64 min-h-0 sm:h-80 lg:h-full lg:min-h-[26rem] xl:min-h-[32rem]" :class="{ 'lg:order-1': index % 2 === 1 }" role="img" :aria-label="`${copy.experience.imageLabel}: ${exp.company}`">
            <div>
              <span class="mono-heading text-7xl font-bold accent-lime">0{{ index + 1 }}</span>
              <p class="mono-heading mt-4 text-sm">{{ copy.experience.imageLabel }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
