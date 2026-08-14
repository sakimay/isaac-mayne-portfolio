<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title: string
  subtitle?: string
  zIndex: number
}>()
const emit = defineEmits<{ close: []; focus: [] }>()

const rootEl = ref<HTMLElement | null>(null)
const titleId = `window-title-${Math.random().toString(36).slice(2, 8)}`

onMounted(() => {
  rootEl.value?.querySelector<HTMLElement>('[data-autofocus]')?.focus()
})
</script>

<template>
  <div
    ref="rootEl"
    class="glass-panel pointer-events-auto absolute left-1/2 top-1/2 flex max-h-[80vh] w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border-os-cyan/25"
    :style="{ zIndex }"
    role="dialog"
    :aria-labelledby="titleId"
    @mousedown="emit('focus')"
    @keydown.escape="emit('close')"
  >
    <header class="flex items-center justify-between border-b border-os-cyan/15 px-5 py-3">
      <div>
        <h2 :id="titleId" class="font-display text-sm tracking-[0.12em] text-os-cyan text-glow">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="font-mono text-[0.65rem] text-white/40">{{ subtitle }}</p>
      </div>
      <button
        type="button"
        data-autofocus
        class="flex h-8 w-8 items-center justify-center rounded-full border border-os-purple/40 text-white/70 transition-colors hover:border-os-cyan hover:text-os-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-cyan"
        aria-label="Close window"
        @click="emit('close')"
      >
        ✕
      </button>
    </header>
    <div class="flex-1 overflow-y-auto px-5 py-4">
      <slot />
    </div>
  </div>
</template>
