import { reactive, ref } from 'vue'
import type { ModuleId } from '~/types'
import { modules } from '~/data/modules'

interface WindowState {
  id: ModuleId
  isOpen: boolean
  zIndex: number
  position: { x: number; y: number } | null
}

const baseZIndex = 40
const DESKTOP_BREAKPOINT = 640
const WINDOW_WIDTH = 576
const WINDOW_HEIGHT_ESTIMATE = 480
const EDGE_MARGIN = 24
const CASCADE_STEP = 32

const windows = reactive<Record<ModuleId, WindowState>>(
  Object.fromEntries(
    modules.map(m => [m.id, { id: m.id, isOpen: false, zIndex: baseZIndex, position: null }]),
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

function isDesktopViewport() {
  return typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BREAKPOINT
}

function computeInitialPosition(): { x: number; y: number } {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const width = Math.min(WINDOW_WIDTH, vw * 0.92)
  const height = Math.min(WINDOW_HEIGHT_ESTIMATE, vh * 0.8)

  const openPositions = openOrder
    .map(id => windows[id].position)
    .filter((p): p is { x: number; y: number } => !!p)

  const leftCount = openPositions.filter(p => p.x + width / 2 < vw / 2).length
  const rightCount = openPositions.length - leftCount

  const side: 'left' | 'right' = leftCount <= rightCount ? 'left' : 'right'
  const sideCount = side === 'left' ? leftCount : rightCount

  const x = side === 'left'
    ? EDGE_MARGIN + sideCount * CASCADE_STEP
    : vw - width - EDGE_MARGIN - sideCount * CASCADE_STEP
  const y = (vh - height) / 2 - CASCADE_STEP + sideCount * CASCADE_STEP

  return {
    x: Math.min(Math.max(x, EDGE_MARGIN), Math.max(EDGE_MARGIN, vw - width - EDGE_MARGIN)),
    y: Math.min(Math.max(y, EDGE_MARGIN), Math.max(EDGE_MARGIN, vh - height - EDGE_MARGIN)),
  }
}

function openWindow(id: ModuleId) {
  windows[id].isOpen = true
  if (!windows[id].position && isDesktopViewport()) {
    windows[id].position = computeInitialPosition()
  }
  focusWindow(id)
}

function moveWindow(id: ModuleId, x: number, y: number) {
  windows[id].position = { x, y }
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
    moveWindow,
  }
}
