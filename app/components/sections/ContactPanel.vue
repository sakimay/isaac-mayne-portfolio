<script setup lang="ts">
import { contactLinks } from '~/data/contact'
</script>

<template>
  <div class="space-y-3 font-mono text-sm">
    <p class="text-white/50">&gt; Incoming channel list — select a frequency to connect.</p>
    <a
      v-for="c in contactLinks"
      :key="c.id"
      :href="c.href"
      target="_blank"
      rel="noopener noreferrer"
      class="glass-panel flex items-center justify-between rounded-xl border-os-cyan/20 p-4 transition-colors hover:border-os-cyan/70"
    >
      <div>
        <p class="text-xs tracking-[0.15em] text-os-purple">{{ c.label.toUpperCase() }}</p>
        <p class="text-white/80">{{ c.value }}</p>
      </div>
      <span class="text-os-cyan" aria-hidden="true">→</span>
    </a>
  </div>
</template>
