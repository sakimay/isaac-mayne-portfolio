<script setup lang="ts">
import { onMounted } from 'vue'
import BootSequence from '~/components/os/BootSequence.vue'
import OsBackground from '~/components/os/OsBackground.vue'
import Desktop from '~/components/os/Desktop.vue'
import OsWindow from '~/components/os/OsWindow.vue'
import Terminal from '~/components/terminal/Terminal.vue'
import AboutPanel from '~/components/sections/AboutPanel.vue'
import ProjectsPanel from '~/components/sections/ProjectsPanel.vue'
import SkillsPanel from '~/components/sections/SkillsPanel.vue'
import ExperimentsPanel from '~/components/sections/ExperimentsPanel.vue'
import ContactPanel from '~/components/sections/ContactPanel.vue'
import { useBootSequence } from '~/composables/useBootSequence'
import { useWindowManager } from '~/composables/useWindowManager'
import { useGlobalHotkeys } from '~/composables/useGlobalHotkeys'
import { modules } from '~/data/modules'
import type { ModuleId } from '~/types'

const { booted, init } = useBootSequence()
const { windows, closeWindow, focusWindow } = useWindowManager()
const { terminalOpen, bind } = useGlobalHotkeys()

const panels: Record<ModuleId, unknown> = {
  about: AboutPanel,
  projects: ProjectsPanel,
  skills: SkillsPanel,
  experiments: ExperimentsPanel,
  contact: ContactPanel,
}

function moduleMeta(id: ModuleId) {
  return modules.find(m => m.id === id)!
}

onMounted(() => {
  init()
  bind()
})
</script>

<template>
  <div class="relative h-screen w-screen">
    <NuxtRouteAnnouncer />
    <OsBackground />

    <BootSequence v-if="!booted" />

    <template v-else>
      <Desktop />

      <div id="windows-root" class="pointer-events-none fixed inset-0">
        <OsWindow
          v-for="id in Object.keys(windows) as ModuleId[]"
          v-show="windows[id].isOpen"
          :key="id"
          :title="moduleMeta(id).label.toUpperCase()"
          :subtitle="moduleMeta(id).subtitle"
          :z-index="windows[id].zIndex"
          @close="closeWindow(id)"
          @focus="focusWindow(id)"
        >
          <component :is="panels[id]" />
        </OsWindow>
      </div>

      <Terminal :open="terminalOpen" @close="terminalOpen = false" />

      <p class="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-widest text-white/25">
        PRESS CTRL+K FOR TERMINAL ACCESS
      </p>
    </template>
  </div>
</template>
