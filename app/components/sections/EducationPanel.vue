<script setup lang="ts">
import { education } from '~/data/education'
</script>

<template>
  <div class="space-y-3 font-mono text-sm">
    <div v-for="e in education" :key="e.id" class="glass-panel rounded-xl border-os-purple/20 p-4">
      <div class="flex items-center justify-between">
        <h3 class="font-display text-sm text-white">{{ e.title }}</h3>
        <span class="text-[0.65rem] uppercase tracking-widest text-os-cyan">{{ e.period }}</span>
      </div>
      <p class="mt-1 text-white/70">{{ e.institution }}</p>
      <p v-if="e.description" class="mt-1.5 text-white/70">{{ e.description }}</p>
    </div>
  </div>
</template>
