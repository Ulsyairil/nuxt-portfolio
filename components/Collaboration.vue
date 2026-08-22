<script setup lang="ts">
const { site, copy } = usePortfolio()
</script>

<template>
  <section id="collaboration" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.collaboration.title" :subtitle="copy.collaboration.text" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <figure
          v-for="(image, index) in site.images.collaboration"
          :key="index"
          class="aspect-[4/3] min-h-0 overflow-hidden"
          :class="{ 'image-placeholder': !image }"
          :aria-label="`${copy.collaboration.imageLabel} ${index + 1}`"
          data-reveal
          :data-reveal-delay="index * 80"
        >
          <img
            v-if="image"
            :src="image"
            :alt="`${copy.collaboration.imageLabel} ${index + 1}`"
            class="h-full w-full border object-cover transition-transform duration-500 hover:scale-[1.025]"
            style="border-color: rgb(var(--line) / .2)"
            loading="lazy"
          />
          <div v-else>
            <i class="fa-regular fa-image text-3xl accent-lime"></i>
            <p class="mono-heading mt-3 text-sm">{{ copy.collaboration.imageLabel }} {{ index + 1 }}</p>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>
