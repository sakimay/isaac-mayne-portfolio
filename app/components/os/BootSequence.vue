<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useBootSequence, bootLines } from '~/composables/useBootSequence'

const { prefersReducedMotion, complete } = useBootSequence()
const visibleLines = ref<string[]>([])
const done = ref(false)

async function play() {
  if (prefersReducedMotion.value) {
    visibleLines.value = [...bootLines]
    done.value = true
    setTimeout(finish, 400)
    return
  }

  for (const l of bootLines) {
    await new Promise(r => setTimeout(r, 480))
    visibleLines.value.push(l)
  }
  done.value = true
  setTimeout(finish, 600)
}

function finish() {
  complete()
}

function skip() {
  visibleLines.value = [...bootLines]
  done.value = true
  finish()
}

onMounted(play)
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-os-deep px-6"
    role="button"
    tabindex="0"
    aria-label="Omitir secuencia de arranque"
    @click="skip"
    @keydown.enter="skip"
    @keydown.space.prevent="skip"
    @keydown.escape="skip"
  >
    <div class="absolute inset-0 grid-bg opacity-40" />
    <div class="relative w-full max-w-md font-mono text-sm text-os-cyan sm:text-base">
      <p v-for="l in visibleLines" :key="l" class="mb-2 text-glow">
        &gt; {{ l }}
      </p>
      <span v-if="!done" class="inline-block h-4 w-2 animate-blink bg-os-cyan align-middle" />
    </div>
    <p class="absolute bottom-8 text-xs tracking-widest text-white/50 font-mono">
      HAZ CLIC O PULSA CUALQUIER TECLA PARA OMITIR
    </p>
  </div>
</template>
