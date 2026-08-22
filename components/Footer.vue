<script setup lang="ts">
const { site, copy } = usePortfolio()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t py-10" style="border-color: rgb(var(--line) / .16)">
    <div class="container-base flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <p class="mono-heading font-semibold">{{ site.name }}</p>
        <p class="muted mt-1 text-sm">
          © {{ year }}. {{ copy.footer }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <a v-for="l in site.links" :key="l.href"
          class="tag transition" :href="l.href" target="_blank"
          rel="noreferrer">
          <i :class="l.icon" class="mr-2"></i>
          {{ l.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
