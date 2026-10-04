<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

const { locale, site, copy } = usePortfolio()
const colorMode = useColorMode()
const linkedIn = computed(() => site.value.links.find(link => link.label === 'LinkedIn'))
const github = computed(() => site.value.links.find(link => link.label === 'GitHub'))
const portfolioPdfHref = computed(() => {
  const theme = colorMode.value === 'dark' ? 'dark' : 'light'

  return `/api/portfolio-pdf?locale=${locale.value}&theme=${theme}`
})
</script>

<template>
  <section id="contact" class="section">
    <div class="container-base grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
      <div>
        <SectionHeading :title="copy.contact.title" :subtitle="copy.contact.subtitle" />
        <p class="max-w-2xl text-xl leading-8">{{ copy.contact.description }}</p>

        <div class="mt-10 grid gap-5 sm:grid-cols-2">
          <article v-spotlight class="spotlight panel panel-muted p-6" data-reveal>
            <p class="mono-heading font-bold">📍 {{ copy.contact.location }}</p>
            <p class="muted mt-4">{{ site.location }}</p>
          </article>
          <article v-spotlight class="spotlight panel panel-muted p-6" data-reveal data-reveal-delay="80">
            <p class="mono-heading font-bold">☎ {{ copy.contact.phone }}</p>
            <a class="nav-link mt-4 inline-block font-bold underline accent-lime" :href="`tel:${site.phone}`">{{ site.phone }}</a>
          </article>
          <article v-spotlight class="spotlight panel panel-muted p-6 sm:col-span-2" data-reveal data-reveal-delay="120">
            <p class="mono-heading font-bold">✉ {{ copy.contact.email }}</p>
            <a class="nav-link mt-4 inline-block font-bold underline accent-lime" :href="`mailto:${site.email}`">{{ site.email }}</a>
          </article>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a v-if="linkedIn" class="btn btn-primary" :href="linkedIn.href" target="_blank" rel="noreferrer" v-magnet><i class="fa-brands fa-linkedin"></i>{{ copy.contact.linkedIn }}</a>
          <a v-if="github" class="btn" :href="github.href" target="_blank" rel="noreferrer" v-magnet><i class="fa-brands fa-github"></i>GitHub</a>
        </div>
      </div>

      <img
        v-if="site.images.contact"
        :src="site.images.contact"
        :alt="copy.contact.imageLabel"
        class="h-64 min-h-0 w-full border object-cover sm:h-80 lg:h-full lg:min-h-[30rem] xl:min-h-[36rem]"
        style="border-color: rgb(var(--line) / .2)"
        loading="lazy"
        data-reveal="right"
      />
      <div v-else class="image-placeholder h-64 min-h-0 sm:h-80 lg:h-full lg:min-h-[30rem] xl:min-h-[36rem]" role="img" :aria-label="copy.contact.imageLabel" data-reveal="right">
        <div>
          <i class="fa-regular fa-handshake text-5xl accent-lime"></i>
          <p class="mono-heading mt-4">{{ copy.contact.imageLabel }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
