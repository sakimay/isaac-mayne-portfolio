<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CoreHologram from '~/components/os/CoreHologram.vue'
import ModuleNode from '~/components/os/ModuleNode.vue'
import { modules } from '~/data/modules'
import { useWindowManager } from '~/composables/useWindowManager'
import type { ModuleId } from '~/types'

const { openWindow } = useWindowManager()

const radius = ref(220)

function updateRadius() {
  radius.value = window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 190 : 240
}

onMounted(() => {
  updateRadius()
  window.addEventListener('resize', updateRadius)
})
onUnmounted(() => window.removeEventListener('resize', updateRadius))

function activate(id: ModuleId) {
  openWindow(id)
}
</script>

<template>
  <div class="relative flex h-full w-full items-center justify-center">
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
