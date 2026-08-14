<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: 'WELCOME' })
</script>

<template>
  <div class="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72">
    <svg viewBox="0 0 200 200" class="absolute inset-0 h-full w-full animate-spin-slow">
      <circle cx="100" cy="100" r="92" fill="none" stroke="var(--color-os-cyan)" stroke-width="1.5" stroke-dasharray="4 10" opacity="0.35" />
    </svg>

    <svg viewBox="0 0 200 200" class="absolute inset-0 h-full w-full animate-spin-slow-reverse">
      <circle cx="100" cy="100" r="78" fill="none" stroke="var(--color-os-purple)" stroke-width="1" stroke-dasharray="2 6" opacity="0.3" />
    </svg>

    <svg viewBox="0 0 200 200" class="absolute inset-0 h-full w-full">
      <circle
        cx="100" cy="100" r="64" fill="none"
        stroke="var(--color-os-cyan)" stroke-width="3" stroke-linecap="round"
        stroke-dasharray="201 402" stroke-dashoffset="0"
        class="text-os-cyan animate-pulse-glow"
      />
      <circle
        cx="100" cy="100" r="64" fill="none"
        stroke="var(--color-os-purple)" stroke-width="3" stroke-linecap="round"
        stroke-dasharray="201 402" stroke-dashoffset="-201"
        class="text-os-purple animate-pulse-glow"
      />
    </svg>

    <div class="relative flex h-24 w-24 flex-col items-center justify-center rounded-full glass-panel glow-cyan sm:h-32 sm:w-32">
      <span class="font-display text-[0.6rem] tracking-[0.2em] text-os-cyan text-glow sm:text-xs">{{ label }}</span>
      <span class="mt-1 h-1.5 w-1.5 rounded-full bg-os-cyan animate-pulse-glow" />
    </div>
  </div>
</template>
