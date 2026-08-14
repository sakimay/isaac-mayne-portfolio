<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <div class="space-y-5 font-mono text-sm text-white/80">
    <div class="glass-panel rounded-xl border-os-purple/25 p-4">
      <p class="font-display text-lg text-white text-glow">{{ profile.name }}</p>
      <p class="text-xs tracking-[0.2em] text-os-cyan">{{ profile.callsign }}</p>
      <p class="mt-1 text-xs text-white/40">{{ profile.experienceYears }}+ years of service</p>
    </div>

    <p class="leading-relaxed">{{ profile.bio }}</p>

    <div>
      <h3 class="mb-2 font-display text-xs tracking-[0.15em] text-os-purple">TECH STACK</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="t in profile.tech" :key="t" class="nav-pill">{{ t }}</span>
      </div>
    </div>

    <div>
      <h3 class="mb-2 font-display text-xs tracking-[0.15em] text-os-purple">SPECIALTIES</h3>
      <ul class="space-y-1.5">
        <li v-for="s in profile.specialties" :key="s" class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-os-cyan" />
          {{ s }}
        </li>
      </ul>
    </div>
  </div>
</template>
