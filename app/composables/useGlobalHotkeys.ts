import { ref } from 'vue'
import { useEventListener, useMediaQuery } from '@vueuse/core'
import { useWindowManager } from '~/composables/useWindowManager'

const terminalOpen = ref(false)

export function useGlobalHotkeys() {
  const { closeTopWindow } = useWindowManager()
  const isTerminalSupported = useMediaQuery('(min-width: 640px)')

  function bind() {
    useEventListener(window, 'keydown', (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        if (!isTerminalSupported.value) return
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

  return { terminalOpen, bind, isTerminalSupported }
}
