<script setup lang="ts">
defineProps<{
    show: boolean
}>()
</script>

<template>
    <Transition name="fade">
        <div v-if="show" class="fixed inset-0 z-[9999] grid place-items-center
             bg-white/80 text-slate-900 backdrop-blur
             dark:bg-black/70 dark:text-white">
            <div class="flex flex-col items-center gap-3">
                <div class="h-10 w-10 rounded-full border-2 border-slate-900/20 border-t-slate-900
                 dark:border-white/20 dark:border-t-white animate-spin" />
                <p class="text-sm text-slate-600 dark:text-slate-300">Loading…</p>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
