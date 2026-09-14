<script setup lang="ts">
import { computed, ref } from 'vue'

const { site, copy } = usePortfolio()

const platformOrder = ['Dicoding', 'Coursera', 'Hackerrank', 'Sololearn'] as const
const platformAppearance = {
  Dicoding: {
    background: '#30445c',
    border: '#405874',
    logoSize: '60px',
  },
  Coursera: {
    background: '#ffffff',
    border: '#dce7fb',
    logoSize: '46px',
  },
  Hackerrank: {
    background: '#0b1810',
    border: '#1f5c37',
    logoSize: '48px',
  },
  Sololearn: {
    background: '#171717',
    border: '#343434',
    logoSize: '48px',
  },
} as const

const expanded = ref<string[]>([])

const toggle = (name: string) => {
  if (expanded.value.includes(name)) {
    expanded.value = expanded.value.filter(n => n !== name)
  } else {
    expanded.value = [...expanded.value, name]
  }
}

const isExpanded = (name: string) => expanded.value.includes(name)

const platforms = computed(() =>
  platformOrder.map((name, index) => {
    const certificates = site.value.certificates.filter(item => item.issuer.toLowerCase() === name.toLowerCase())

    return {
      name: name === 'Hackerrank' ? 'HackerRank' : name,
      certificates,
      image: certificates[0]?.image,
      featured: index === 0,
      number: String(index + 1).padStart(2, '0'),
      appearance: platformAppearance[name],
    }
  }).filter(platform => platform.certificates.length),
)
</script>

<template>
  <section id="certificates" class="section">
    <div class="container-base">
      <SectionHeading :title="copy.certificates.title" :subtitle="copy.certificates.subtitle" />

      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="platform in platforms"
          :key="platform.name"
          class="border p-7 md:p-9"
          :class="platform.featured ? 'certificate-featured' : 'panel'"
          data-reveal
          :data-reveal-delay="(Number(platform.number) - 1) % 2 * 90"
        >
          <header class="flex cursor-pointer items-start justify-between gap-5 border-b pb-6 sm:items-center" :class="platform.featured ? 'border-black/20' : ''" :style="platform.featured ? undefined : 'border-color: rgb(var(--line) / .18)'" role="button" :aria-expanded="isExpanded(platform.name)" :aria-controls="`cert-${platform.name.split(' ').join('-').toLowerCase()}`" :tabindex="0" @click="toggle(platform.name)" @keydown.enter="toggle(platform.name)" @keydown.space.prevent="toggle(platform.name)">
            <div class="flex min-w-0 items-center gap-4">
              <div
                class="platform-logo grid shrink-0 place-items-center overflow-hidden border"
                :style="{
                  backgroundColor: platform.appearance.background,
                  borderColor: platform.appearance.border,
                }"
              >
                <img
                  v-if="platform.image"
                  :src="platform.image"
                  :alt="`${platform.name} logo`"
                  class="block object-contain"
                  :style="{
                    width: platform.appearance.logoSize,
                    height: platform.appearance.logoSize,
                  }"
                  loading="lazy"
                />
                <span v-else class="mono-heading text-xl font-bold">{{ platform.name.slice(0, 1) }}</span>
              </div>
              <div class="min-w-0">
                <p class="mono-heading text-xs font-bold uppercase tracking-widest" :class="platform.featured ? '' : 'accent-lime'">Platform {{ platform.number }}</p>
                <h3 class="mono-heading mt-2 text-3xl font-bold">{{ platform.name }}</h3>
              </div>
            </div>
            <span class="flex shrink-0 items-center gap-3">
              <span class="mono-heading text-sm font-bold">{{ platform.certificates.length }}</span>
              <span
                class="cert-arrow grid h-8 w-8 place-items-center border"
                :class="isExpanded(platform.name) ? 'is-open' : ''"
                :style="`border-color: rgb(var(--line) / .22)`"
                aria-hidden="true"
              >
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </span>
          </header>

          <div
            :id="`cert-${platform.name.split(' ').join('-').toLowerCase()}`"
            class="cert-body grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
            :class="isExpanded(platform.name) ? 'is-open' : ''"
          >
            <ul class="divide-y overflow-hidden" :class="platform.featured ? 'divide-black/20' : ''">
            <li
              v-for="certificate in platform.certificates"
              :key="certificate.title"
              class="flex items-center justify-between gap-5 py-5"
              :style="platform.featured ? undefined : 'border-color: rgb(var(--line) / .14)'"
            >
              <div class="min-w-0">
                <p class="font-bold leading-6">{{ certificate.title }}</p>
                <p class="mt-1 text-sm" :class="platform.featured ? 'text-black/65' : 'muted'">{{ certificate.issuer }}</p>
              </div>

              <a
                v-if="certificate.proof"
                :href="certificate.proof"
                target="_blank"
                rel="noreferrer"
                class="grid h-10 w-10 shrink-0 place-items-center border transition"
                :class="platform.featured ? 'border-black/30 hover:bg-black hover:text-white' : 'nav-link'"
                :style="platform.featured ? undefined : 'border-color: rgb(var(--line) / .22)'"
                :aria-label="`${copy.certificates.viewProof}: ${certificate.title}`"
                :title="copy.certificates.viewProof"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <span v-else class="muted text-xs">{{ copy.certificates.unavailable }}</span>
            </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certificate-featured {
  border-color: rgb(var(--lime-bright));
  background: rgb(var(--lime-bright));
  color: #151515;
}

.cert-body {
  grid-template-rows: 0fr;
}

.cert-body.is-open {
  grid-template-rows: 1fr;
}

.cert-arrow {
  transition: transform .3s ease;
}

.cert-arrow.is-open {
  transform: rotate(180deg);
}

.platform-logo {
  width: 72px;
  height: 72px;
  flex: 0 0 72px;
  border-radius: 9999px;
}

.platform-logo img {
  border-radius: inherit;
}

@media (max-width: 480px) {
  .platform-logo {
    width: 60px;
    height: 60px;
    flex-basis: 60px;
  }
}
</style>
