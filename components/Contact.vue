<script setup lang="ts">
import { site } from './../data/site'
import { ref, computed } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Portfolio contact from ${name.value || 'Visitor'}`)
  const body = encodeURIComponent(
    `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`
  )
  return `mailto:${site.email}?subject=${subject}&body=${body}`
})

const sendEmail = () => {
  if (!message.value.trim()) return
  window.location.href = mailtoHref.value
}
</script>

<template>
  <section id="contact" class="section" data-aos="fade-up">
    <div class="container-base">
      <SectionHeading title="Contact" subtitle="Get in touch with me." />

      <div class="grid gap-4 md:grid-cols-2">
        <div class="card p-6 md:p-8">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Reach me directly</h3>
          <p class="mt-2 text-slate-600 dark:text-slate-300">Email or phone are the fastest channels.</p>

          <div class="mt-5 space-y-3">
            <a class="btn w-full justify-start" :href="`mailto:${site.email}`">
              <i class="fa fa-envelope"></i>
              {{ site.email }}
            </a>

            <a class="btn w-full justify-start" :href="`tel:${site.phone}`">
              <i class="fa fa-phone"></i>
              {{ site.phone }}
            </a>
          </div>

          <div class="mt-6 flex flex-wrap gap-2">
            <a v-for="l in site.links" :key="l.href"
              class="chip transition hover:border-slate-900/20 dark:hover:border-white/20" :href="l.href"
              target="_blank" rel="noreferrer">
              <i :class="l.icon" class="mr-2"></i>
              {{ l.label }}
            </a>
          </div>
        </div>

        <div class="card p-6 md:p-8">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Quick message</h3>
          <p class="mt-2 text-slate-600 dark:text-slate-300">
            Send via your email app (mailto).
          </p>

          <form class="mt-5 grid gap-3" @submit.prevent="sendEmail">
            <input v-model="name" class="w-full rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-slate-900
                     outline-none backdrop-blur focus:ring-2 focus:ring-indigo-500/40
                     dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-indigo-400/30"
              placeholder="Your name" autocomplete="name" />

            <input v-model="email" class="w-full rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-slate-900
                     outline-none backdrop-blur focus:ring-2 focus:ring-indigo-500/40
                     dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-indigo-400/30"
              placeholder="Email" type="email" autocomplete="email" />

            <textarea v-model="message" class="min-h-28 w-full rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-slate-900
                     outline-none backdrop-blur focus:ring-2 focus:ring-indigo-500/40
                     dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-indigo-400/30"
              placeholder="Message" />

            <div class="flex flex-wrap items-center gap-3">
              <button class="btn btn-primary w-fit text-black hover:text-white dark:text-white dark:hover:text-black" type="submit" :disabled="!message.trim()">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
