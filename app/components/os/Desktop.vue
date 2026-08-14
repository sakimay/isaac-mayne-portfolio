<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CoreHologram from '~/components/os/CoreHologram.vue'
import ModuleNode from '~/components/os/ModuleNode.vue'
import ModuleListItem from '~/components/os/ModuleListItem.vue'
import { modules } from '~/data/modules'
import { useWindowManager } from '~/composables/useWindowManager'
import type { ModuleId } from '~/types'

const { openWindow } = useWindowManager()

const radius = ref(220)
const isMobile = ref(false)

function updateLayout() {
  const width = window.innerWidth
  isMobile.value = width < 640
  radius.value = width < 640 ? 150 : width < 1024 ? 190 : 240
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})
onUnmounted(() => window.removeEventListener('resize', updateLayout))

function activate(id: ModuleId) {
  openWindow(id)
}
</script>

<template>
  <div v-if="isMobile" class="flex h-full w-full flex-col items-center gap-6 overflow-y-auto px-6 py-8">
    <CoreHologram />
    <div class="flex w-full max-w-sm flex-col gap-3">
      <ModuleListItem
        v-for="m in modules"
        :key="m.id"
        :module="m"
        @activate="activate"
      />
    </div>
  </div>
  <div v-else class="relative flex h-full w-full items-center justify-center">
    <div class="relative">
      <CoreHologram />
      <ModuleNode
        v-for="m in modules"
        :key="m.id"
        :module="m"
        :radius="radius"
        @activate="activate"
      />
    </div>
  </div>
</template>
