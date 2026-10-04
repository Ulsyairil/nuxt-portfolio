<script setup lang="ts">
const { site, copy } = usePortfolio()
</script>

<template>
  <section id="education" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.education.title" />
      <div class="grid gap-12 lg:grid-cols-2">
        <div data-reveal="left">
          <p class="mono-heading text-2xl font-bold">{{ copy.education.education }}</p>
          <div class="mt-8 space-y-8">
            <article
              v-for="(item, index) in site.education"
              :key="item.school"
              class="border-t pt-7"
              :class="index === 0 ? 'border-t-0 pt-0' : ''"
              style="border-color: rgb(var(--line) / .25)"
            >
              <h3 class="text-2xl font-bold">{{ item.degree }}</h3>
              <p v-if="item.studyProgram" class="muted mt-1 text-base">{{ item.studyProgram }}</p>
              <p class="muted mt-3 text-xl">{{ item.school }}</p>
              <p class="muted mt-2">{{ item.period }} · {{ item.place }}</p>
              <p v-if="item.gpa" class="muted mt-2 text-sm">GPA: {{ item.gpa }}</p>
            </article>
          </div>
        </div>
        <div data-reveal="right" data-reveal-delay="90">
          <p class="mono-heading text-2xl font-bold">{{ copy.education.languages }}</p>
          <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
            <article v-spotlight class="spotlight panel panel-muted p-7">
              <h3 class="mono-heading text-2xl font-bold">{{ copy.education.indonesian }}</h3>
              <p class="muted mt-6 text-lg">{{ copy.education.indonesianLevel }}</p>
            </article>
            <article v-spotlight class="spotlight panel p-7">
              <h3 class="mono-heading text-2xl font-bold">{{ copy.education.english }}</h3>
              <p class="muted mt-6 text-lg">{{ copy.education.englishLevel }}</p>
            </article>
            <article v-spotlight class="spotlight panel panel-muted p-7">
              <h3 class="mono-heading text-2xl font-bold">{{ copy.education.japanese }}</h3>
              <p class="muted mt-6 text-lg">{{ copy.education.japaneseLevel }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
