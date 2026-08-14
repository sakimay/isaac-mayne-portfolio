<script setup lang="ts">
import type { ModuleDefinition } from '~/types'

const props = defineProps<{ module: ModuleDefinition; radius: number }>()
const emit = defineEmits<{ activate: [id: ModuleDefinition['id']] }>()

const rad = (props.module.angle * Math.PI) / 180
const x = Math.cos(rad) * props.radius
const y = Math.sin(rad) * props.radius
</script>

<template>
  <button
    type="button"
    class="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl px-4 py-3 text-center transition-transform duration-300 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-cyan"
    :style="{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }"
    :aria-label="`Abrir ventana de ${module.label}`"
    @click="emit('activate', module.id)"
  >
    <span
      class="glass-panel flex h-14 w-14 items-center justify-center rounded-full border border-os-cyan/30 text-os-cyan transition-all duration-300 group-hover:glow-cyan group-hover:border-os-cyan group-focus-visible:glow-cyan sm:h-16 sm:w-16"
    >
      <span class="h-2 w-2 rounded-full bg-os-cyan animate-pulse-glow" />
    </span>
    <span class="flex flex-col leading-tight">
      <span class="font-display text-[0.65rem] tracking-[0.15em] text-white/90 sm:text-xs">{{ module.label.toUpperCase() }}</span>
      <span class="font-mono text-[0.6rem] text-os-cyan/70">{{ module.subtitle }}</span>
    </span>
  </button>
</template>
