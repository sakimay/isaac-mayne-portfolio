<script setup lang="ts">
import { projects } from '~/data/projects'
import { useWindowManager } from '~/composables/useWindowManager'

const { highlightedProjectId } = useWindowManager()

const statusStyles: Record<string, string> = {
  online: 'bg-os-cyan shadow-[0_0_10px_var(--color-os-cyan)]',
  'in-development': 'bg-os-purple shadow-[0_0_10px_var(--color-os-purple)]',
  offline: 'bg-white/30',
}
</script>

<template>
  <div class="space-y-3 font-mono text-sm">
    <div
      v-for="p in projects"
      :key="p.id"
      class="glass-panel rounded-xl border-os-cyan/20 p-4 transition-colors"
      :class="{ 'border-os-cyan/70': highlightedProjectId === p.id }"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-display text-sm text-white">{{ p.name }}</h3>
        <span class="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-widest text-white/50">
          <span class="h-2 w-2 rounded-full" :class="statusStyles[p.status]" />
          {{ p.status.replace('-', ' ') }}
        </span>
      </div>
      <p class="mt-1.5 text-white/70">{{ p.description }}</p>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="t in p.tech" :key="t" class="rounded-full border border-os-purple/30 bg-os-purple/10 px-2 py-0.5 text-[0.65rem] text-white/70">
          {{ t }}
        </span>
      </div>
      <a
        v-if="p.url"
        :href="p.url"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-2 inline-block text-xs text-os-cyan hover:text-glow"
      >
        Visit module <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</template>
