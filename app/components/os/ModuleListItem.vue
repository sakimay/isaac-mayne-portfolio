<script setup lang="ts">
import type { ModuleDefinition } from '~/types'

defineProps<{ module: ModuleDefinition }>()
const emit = defineEmits<{ activate: [id: ModuleDefinition['id']] }>()
</script>

<template>
  <button
    type="button"
    class="group glass-panel flex w-full items-center gap-3 rounded-xl border border-os-cyan/15 px-4 py-3 text-left transition-colors duration-300 ease-out hover:border-os-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-cyan"
    :aria-label="`Abrir ventana de ${module.label}`"
    @click="emit('activate', module.id)"
  >
    <span
      class="glass-panel flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-os-cyan/30 text-os-cyan transition-all duration-300 group-hover:glow-cyan group-hover:border-os-cyan group-focus-visible:glow-cyan"
    >
      <span class="h-2 w-2 rounded-full bg-os-cyan animate-pulse-glow" />
    </span>
    <span class="flex flex-col leading-tight">
      <span class="font-display text-xs tracking-[0.15em] text-white/90">{{ module.label.toUpperCase() }}</span>
      <span class="font-mono text-[0.65rem] text-os-cyan/70">{{ module.subtitle }}</span>
    </span>
  </button>
</template>
