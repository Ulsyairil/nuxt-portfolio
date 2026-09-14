<script setup lang="ts">
const { copy } = usePortfolio()
</script>

<template>
  <section id="skills" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.skills.title" :subtitle="copy.skills.subtitle" />

      <div class="grid gap-x-16 gap-y-14 md:grid-cols-2">
        <article v-for="(group, index) in copy.skills.groups" :key="group.title" v-spotlight v-tilt class="spotlight border-t pt-8 tilt" style="border-color: rgb(var(--line) / .2)" data-reveal :data-reveal-delay="(index % 2) * 90">
          <i :class="group.icon" class="text-4xl accent-lime" aria-hidden="true"></i>
          <h3 class="mono-heading mt-7 text-2xl font-bold">{{ group.title }}</h3>
          <p class="muted mt-4 text-lg leading-8">{{ group.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
