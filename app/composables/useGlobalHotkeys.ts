import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useWindowManager } from '~/composables/useWindowManager'

const terminalOpen = ref(false)

export function useGlobalHotkeys() {
  const { closeTopWindow } = useWindowManager()

  function bind() {
    useEventListener(window, 'keydown', (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        terminalOpen.value = !terminalOpen.value
        return
      }
      if (e.key === 'Escape') {
        if (terminalOpen.value) {
          terminalOpen.value = false
          return
        }
        closeTopWindow()
      }
    })
  }

  return { terminalOpen, bind }
}
