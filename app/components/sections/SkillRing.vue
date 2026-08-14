<script setup lang="ts">
import { computed } from 'vue'
import type { Skill } from '~/types'

const props = defineProps<{ skill: Skill }>()

const radius = 26
const circumference = 2 * Math.PI * radius
const offset = computed(() => circumference * (1 - props.skill.level / 100))
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <svg viewBox="0 0 64 64" class="h-16 w-16">
      <circle cx="32" cy="32" :r="radius" fill="none" stroke="white" stroke-opacity="0.08" stroke-width="5" />
      <circle
        cx="32" cy="32" :r="radius" fill="none"
        stroke="url(#ring-gradient)" stroke-width="5" stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        transform="rotate(-90 32 32)"
      />
      <defs>
        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--color-os-cyan)" />
          <stop offset="100%" stop-color="var(--color-os-purple)" />
        </linearGradient>
      </defs>
      <text x="32" y="37" text-anchor="middle" font-size="13" fill="white" font-family="var(--font-mono)">
        {{ skill.level }}
      </text>
    </svg>
    <span class="text-center font-mono text-[0.65rem] text-white/70">{{ skill.name }}</span>
  </div>
</template>
