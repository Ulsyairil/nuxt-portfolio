<script setup lang="ts">
import { ref } from 'vue'
import { site } from './../data/site'

const openIdx = ref<number | null>(0)

const toggle = (idx: number) => {
  openIdx.value = openIdx.value === idx ? null : idx
}

const onEnter = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = '0'
  e.style.opacity = '0'
  e.style.overflow = 'hidden'
  void e.offsetHeight
  e.style.transition = 'height 260ms ease, opacity 180ms ease'
  e.style.height = e.scrollHeight + 'px'
  e.style.opacity = '1'
}

const onAfterEnter = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = 'auto'
  e.style.overflow = 'visible'
  e.style.transition = ''
}

const onLeave = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = e.scrollHeight + 'px'
  e.style.opacity = '1'
  e.style.overflow = 'hidden'
  void e.offsetHeight
  e.style.transition = 'height 240ms ease, opacity 160ms ease'
  e.style.height = '0'
  e.style.opacity = '0'
}

const onAfterLeave = (el: Element) => {
  const e = el as HTMLElement
  e.style.transition = ''
  e.style.height = ''
  e.style.opacity = ''
  e.style.overflow = ''
}
</script>

<template>
  <section id="experience" class="section" data-aos="fade-down">
    <div class="container-base">
      <SectionHeading title="Experience" subtitle="Where I have worked." />

      <div class="grid gap-4">
        <article
          v-for="(exp, idx) in site.experience"
          :key="idx"
          class="card p-0 overflow-hidden"
        >
          <button
            type="button"
            class="w-full p-6 md:p-7 text-left flex items-start justify-between gap-4
                   hover:bg-slate-900/5 dark:hover:bg-white/5 transition"
            @click="toggle(idx)"
          >
            <div class="min-w-0">
              <p class="text-lg font-bold text-slate-900 dark:text-white truncate">
                {{ exp.company }}
              </p>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {{ exp.type }} · {{ exp.period }}
              </p>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                {{ exp.location }}
              </p>
            </div>

            <span
              class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl border
                     border-slate-900/10 bg-white/70 text-slate-600 backdrop-blur
                     dark:border-white/10 dark:bg-white/5 dark:text-slate-200
                     transition"
              :class="{ 'rotate-180': openIdx === idx }"
              aria-hidden="true"
            >
              ^
            </span>
          </button>

          <Transition
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @leave="onLeave"
            @after-leave="onAfterLeave"
          >
            <div
              v-show="openIdx === idx"
              class="border-t border-slate-900/10 dark:border-white/10"
            >
              <div class="px-6 pb-6 pt-5 md:px-7 md:pb-7">
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {{ exp.summary }}
                </p>

                <!-- Roles (your existing role layout fits here) -->
                <div v-for="(role, rIdx) in exp.roles" :key="rIdx" class="mt-6 card p-6">
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                        {{ role.title }}
                      </h3>
                      <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {{ role.period }} · {{ role.duration }}
                      </p>
                    </div>
                  </div>

                  <p class="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {{ role.description }}
                  </p>

                  <div v-for="(sec, sIdx) in role.sections" :key="sIdx" class="mt-6">
                    <p class="text-sm font-semibold text-slate-900 dark:text-white">
                      {{ sec.title }}
                    </p>

                    <ul class="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
                      <li v-for="(it, iIdx) in sec.items" :key="iIdx">
                        <p class="font-medium text-slate-900 dark:text-white">{{ it.text }}</p>
                        <ul v-if="it.sub?.length" class="mt-1 space-y-1 pl-4 text-sm">
                          <li v-for="(s, si) in it.sub" :key="si">
                            ⇒ {{ s }}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </article>
      </div>
    </div>
  </section>
</template>
