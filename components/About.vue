<script setup lang="ts">
const { site, copy } = usePortfolio()
</script>

<template>
  <section id="about" class="section">
    <div class="container-base grid gap-10 xl:grid-cols-[1.35fr_.85fr] xl:gap-14">
      <div>
        <SectionHeading :title="copy.about.title" :subtitle="copy.about.subtitle" />
        <p class="max-w-4xl text-lg leading-8">{{ copy.about.intro }}</p>

        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <article v-for="(card, index) in copy.about.cards" :key="card.title" class="panel p-7" :class="{ 'md:col-span-2': index === 2 }" data-reveal :data-reveal-delay="index * 80">
            <h3 class="mono-heading text-2xl font-bold">{{ card.title }}</h3>
            <p class="muted mt-4 text-base leading-7">{{ card.text }}</p>
          </article>
        </div>
      </div>

      <img
        v-if="site.images.about"
        :src="site.images.about"
        :alt="copy.about.imageLabel"
        class="h-64 min-h-0 w-full border object-cover sm:h-80 xl:h-full xl:min-h-full"
        style="border-color: rgb(var(--line) / .2)"
        loading="lazy"
        data-reveal="right"
      />
      <div v-else class="image-placeholder h-64 min-h-0 sm:h-80 xl:h-full xl:min-h-full" role="img" :aria-label="copy.about.imageLabel" data-reveal="right">
        <div>
          <i class="fa-regular fa-image text-3xl accent-lime"></i>
          <p class="mono-heading mt-3 text-sm">{{ copy.about.imageLabel }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
