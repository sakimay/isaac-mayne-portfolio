<script setup lang="ts">
import { experiments } from '~/data/experiments'

const statusStyles: Record<string, string> = {
  active: 'bg-os-cyan shadow-[0_0_10px_var(--color-os-cyan)]',
  prototype: 'bg-os-purple shadow-[0_0_10px_var(--color-os-purple)]',
  archived: 'bg-white/30',
}
</script>

<template>
  <div class="space-y-3 font-mono text-sm">
    <div v-for="e in experiments" :key="e.id" class="glass-panel rounded-xl border-os-purple/20 p-4">
      <div class="flex items-center justify-between">
        <h3 class="font-display text-sm text-white">{{ e.name }}</h3>
        <span class="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-widest text-white/50">
          <span class="h-2 w-2 rounded-full" :class="statusStyles[e.status]" />
          {{ e.status }}
        </span>
      </div>
      <p class="mt-1.5 text-white/70">{{ e.description }}</p>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="t in e.tags" :key="t" class="rounded-full border border-os-cyan/30 bg-os-cyan/10 px-2 py-0.5 text-[0.65rem] text-white/70">
          {{ t }}
        </span>
      </div>
    </div>
  </div>
</template>
