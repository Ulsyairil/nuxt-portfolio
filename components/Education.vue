<script setup lang="ts">
const { copy } = usePortfolio()
</script>

<template>
  <section id="education" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.education.title" />
      <div class="grid gap-12 lg:grid-cols-2">
        <div data-reveal="left">
          <p class="mono-heading text-2xl font-bold">{{ copy.education.education }}</p>
          <div class="mt-8 border-t pt-7" style="border-color: rgb(var(--line) / .25)">
            <h3 class="text-2xl font-bold">{{ copy.education.degree }}</h3>
            <p class="muted mt-3 text-xl">{{ copy.education.school }}</p>
            <p class="muted mt-2">{{ copy.education.place }}</p>
          </div>
        </div>
        <div data-reveal="right" data-reveal-delay="90">
          <p class="mono-heading text-2xl font-bold">{{ copy.education.languages }}</p>
          <div class="mt-8 grid md:grid-cols-2">
            <article class="panel panel-muted p-7">
              <h3 class="mono-heading text-2xl font-bold">{{ copy.education.indonesian }}</h3>
              <p class="muted mt-6 text-lg">{{ copy.education.indonesianLevel }}</p>
            </article>
            <article class="panel p-7">
              <h3 class="mono-heading text-2xl font-bold">{{ copy.education.english }}</h3>
              <p class="muted mt-6 text-lg">{{ copy.education.englishLevel }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
