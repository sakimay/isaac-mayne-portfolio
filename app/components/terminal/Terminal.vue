<script setup lang="ts">
import { ref, nextTick, watch, onMounted } from 'vue'
import { useTerminalCommands } from '~/composables/useTerminalCommands'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const { history, execute, previousCommand, nextCommand } = useTerminalCommands()
const input = ref('')
const inputEl = ref<HTMLInputElement | null>(null)
const scrollEl = ref<HTMLElement | null>(null)

const lineStyles: Record<string, string> = {
  text: 'text-white/75',
  error: 'text-red-400',
  success: 'text-os-cyan',
  link: 'text-os-cyan underline',
}

function submit() {
  if (!input.value.trim()) return
  execute(input.value)
  input.value = ''
}

function onArrowUp() {
  const prev = previousCommand()
  if (prev !== null) input.value = prev
}

function onArrowDown() {
  const next = nextCommand()
  if (next !== null) input.value = next
}

watch(
  () => history.length,
  async () => {
    await nextTick()
    scrollEl.value?.scrollTo({ top: scrollEl.value.scrollHeight })
  },
)

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      await nextTick()
      inputEl.value?.focus()
    }
  },
)

onMounted(() => {
  if (props.open) inputEl.value?.focus()
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="open" class="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 px-4 pt-[10vh]" @click.self="emit('close')">
      <div class="glass-panel w-full max-w-2xl overflow-hidden rounded-2xl border-os-cyan/30">
        <header class="flex items-center justify-between border-b border-os-cyan/15 px-4 py-2.5">
          <span class="font-display text-xs tracking-[0.15em] text-os-cyan">ISAAC OS TERMINAL</span>
          <button
            type="button"
            class="text-white/50 hover:text-os-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-cyan"
            aria-label="Cerrar terminal"
            @click="emit('close')"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        <div ref="scrollEl" role="log" aria-live="polite" class="max-h-[45vh] space-y-1 overflow-y-auto px-4 py-3 font-mono text-xs sm:text-sm">
          <p v-for="(l, i) in history" :key="i" :class="lineStyles[l.type]">
            <a v-if="l.type === 'link' && l.href" :href="l.href" target="_blank" rel="noopener noreferrer">{{ l.content }}</a>
            <template v-else>{{ l.content }}</template>
          </p>
        </div>

        <form class="flex items-center gap-2 border-t border-os-cyan/15 px-4 py-3" @submit.prevent="submit">
          <span class="font-mono text-os-cyan">$</span>
          <input
            ref="inputEl"
            v-model="input"
            type="text"
            aria-label="Entrada de comandos del terminal"
            autocomplete="off"
            spellcheck="false"
            class="flex-1 rounded bg-transparent font-mono text-sm text-white outline-none placeholder:text-white/30 focus-visible:ring-2 focus-visible:ring-os-cyan"
            placeholder="escribe un comando..."
            @keydown.up.prevent="onArrowUp"
            @keydown.down.prevent="onArrowDown"
          >
        </form>
      </div>
    </div>
  </Transition>
</template>
