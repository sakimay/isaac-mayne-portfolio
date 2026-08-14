import { ref } from 'vue'
import { useReducedMotion } from '~/composables/useReducedMotion'

const STORAGE_KEY = 'isaac-os-booted'

export const bootLines = [
  'INICIANDO ISAAC OS...',
  'Cargando módulos...',
  'Conectando sistemas de IA...',
  'Sistema listo.',
]

const booted = ref(false)
const initialized = ref(false)

export function useBootSequence() {
  const prefersReducedMotion = useReducedMotion()

  function init() {
    if (initialized.value) return
    initialized.value = true
    if (import.meta.client && sessionStorage.getItem(STORAGE_KEY)) {
      booted.value = true
    }
  }

  function complete() {
    booted.value = true
    if (import.meta.client) sessionStorage.setItem(STORAGE_KEY, '1')
  }

  return { booted, prefersReducedMotion, init, complete }
}
