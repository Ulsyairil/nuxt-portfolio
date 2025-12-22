<script setup lang="ts">
import { site } from './../data/site'
</script>

<template>
  <section id="about" class="section" data-aos="fade-right">
    <div class="container-base">
      <SectionHeading title="About" subtitle="A little bit about me." />

      <!-- Outer card: ensure readable background/border in light + dark -->
      <!-- Outer card -->
      <div class="rounded-2xl border border-slate-900/10 bg-white/70 p-6 backdrop-blur md:p-8
         dark:border-white/10 dark:bg-white/5">
        <div class="space-y-4 text-slate-900 dark:text-white">
          <p class="text-base leading-relaxed">
            {{ site.summary }}
          </p>

          <p class="text-base leading-relaxed">
            I build production-ready web applications with a strong focus on clean UI, reliable APIs, and maintainable
            code.
            My work sits between product and engineering: I care about UX details, performance, and shipping features
            that
            solve real business problems.
          </p>

          <p class="text-base leading-relaxed">
            When working with me, you can expect clear communication, realistic timelines, and an iterative workflow:
            I break requirements into small deliverables, push progress frequently, and keep everything documented so
            the
            project stays easy to maintain and scale.
          </p>

          <ul class="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            <li class="flex gap-2">
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
              Frontend: responsive, accessible interfaces (Nuxt/Vue, Tailwind) with attention to UI consistency.
            </li>
            <li class="flex gap-2">
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
              Backend: REST APIs, authentication, database design, and integrations (Laravel / Node.js + Express).
            </li>
            <li class="flex gap-2">
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
              Delivery: deployment-ready builds, environment setup, and handover notes for smooth maintenance.
            </li>
          </ul>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <!-- Stat cards (keep yours as-is or update text slightly) -->
          <div class="rounded-2xl border border-slate-900/10 bg-white/70 p-4 backdrop-blur
             dark:border-white/10 dark:bg-white/5">
            <p class="text-sm text-slate-600 dark:text-slate-300">Focus</p>
            <p class="mt-1 font-semibold text-slate-900 dark:text-white">
              Product UI + API Delivery
            </p>
          </div>

          <div class="rounded-2xl border border-slate-900/10 bg-white/70 p-4 backdrop-blur
             dark:border-white/10 dark:bg-white/5">
            <p class="text-sm text-slate-600 dark:text-slate-300">How I work</p>
            <p class="mt-1 font-semibold text-slate-900 dark:text-white">
              Iterative Workflow, Clear Communication, Realistic Timelines, and Documentation
            </p>
          </div>

          <div class="rounded-2xl border border-slate-900/10 bg-white/70 p-4 backdrop-blur
             dark:border-white/10 dark:bg-white/5">
            <p class="text-sm text-slate-600 dark:text-slate-300">Stack</p>
            <p class="mt-1 font-semibold text-slate-900 dark:text-white">
              LAMP/LEMP or MERN/MEVN
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
