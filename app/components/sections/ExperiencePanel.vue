<script setup lang="ts">
import { otherExperience, workExperience } from '~/data/experience'
</script>

<template>
  <div class="space-y-3 font-mono text-sm">
    <div v-for="w in workExperience" :key="w.id" class="glass-panel rounded-xl border-os-purple/20 p-4">
      <div class="flex items-center justify-between">
        <h3 class="font-display text-sm text-white">{{ w.role }}</h3>
        <span class="text-[0.65rem] uppercase tracking-widest text-os-cyan">{{ w.period }}</span>
      </div>
      <p class="mt-1 text-white/70">
        {{ w.company }}<span v-if="w.location"> · {{ w.location }}</span>
      </p>
      <ul class="mt-2 space-y-1.5">
        <li v-for="(h, i) in w.highlights" :key="i" class="flex items-start gap-2 text-white/70">
          <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-os-cyan" />
          {{ h }}
        </li>
      </ul>
    </div>

    <div class="glass-panel rounded-xl border-os-purple/20 p-4">
      <h3 class="mb-2 font-display text-xs tracking-[0.15em] text-os-purple">OTRAS EXPERIENCIAS</h3>
      <div v-for="o in otherExperience" :key="o.id" class="mt-2 first:mt-0">
        <div class="flex items-center justify-between">
          <p class="text-white">{{ o.role }}</p>
          <span class="text-[0.65rem] uppercase tracking-widest text-white/50">{{ o.period }}</span>
        </div>
        <p class="mt-0.5 text-white/70">{{ o.description }}</p>
      </div>
    </div>
  </div>
</template>
