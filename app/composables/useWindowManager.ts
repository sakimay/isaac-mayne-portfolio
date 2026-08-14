import { reactive, ref } from 'vue'
import type { ModuleId } from '~/types'
import { modules } from '~/data/modules'

interface WindowState {
  id: ModuleId
  isOpen: boolean
  zIndex: number
}

const baseZIndex = 40

const windows = reactive<Record<ModuleId, WindowState>>(
  Object.fromEntries(
    modules.map(m => [m.id, { id: m.id, isOpen: false, zIndex: baseZIndex }]),
  ) as Record<ModuleId, WindowState>,
)

const openOrder = reactive<ModuleId[]>([])
const highlightedProjectId = ref<string | null>(null)

function focusWindow(id: ModuleId) {
  const index = openOrder.indexOf(id)
  if (index !== -1) openOrder.splice(index, 1)
  openOrder.push(id)
  openOrder.forEach((wid, i) => {
    windows[wid].zIndex = baseZIndex + i
  })
}

function openWindow(id: ModuleId) {
  windows[id].isOpen = true
  focusWindow(id)
}

function closeWindow(id: ModuleId) {
  windows[id].isOpen = false
  const index = openOrder.indexOf(id)
  if (index !== -1) openOrder.splice(index, 1)
}

function toggleWindow(id: ModuleId) {
  windows[id].isOpen ? closeWindow(id) : openWindow(id)
}

function closeTopWindow() {
  const topId = openOrder[openOrder.length - 1]
  if (topId) closeWindow(topId)
}

function openProject(projectId: string) {
  highlightedProjectId.value = projectId
  openWindow('projects')
}

export function useWindowManager() {
  return {
    windows,
    openOrder,
    highlightedProjectId,
    openWindow,
    closeWindow,
    toggleWindow,
    focusWindow,
    closeTopWindow,
    openProject,
  }
}
