<script setup lang="ts">
import { computed, onMounted } from 'vue'
import BootSequence from '~/components/os/BootSequence.vue'
import OsBackground from '~/components/os/OsBackground.vue'
import Desktop from '~/components/os/Desktop.vue'
import OsWindow from '~/components/os/OsWindow.vue'
import Terminal from '~/components/terminal/Terminal.vue'
import AboutPanel from '~/components/sections/AboutPanel.vue'
import ProjectsPanel from '~/components/sections/ProjectsPanel.vue'
import SkillsPanel from '~/components/sections/SkillsPanel.vue'
import ExperiencePanel from '~/components/sections/ExperiencePanel.vue'
import EducationPanel from '~/components/sections/EducationPanel.vue'
import ContactPanel from '~/components/sections/ContactPanel.vue'
import { useBootSequence } from '~/composables/useBootSequence'
import { useWindowManager } from '~/composables/useWindowManager'
import { useGlobalHotkeys } from '~/composables/useGlobalHotkeys'
import { modules } from '~/data/modules'
import { profile } from '~/data/profile'
import { projects } from '~/data/projects'
import { skillGroups } from '~/data/skills'
import { workExperience } from '~/data/experience'
import type { ModuleId } from '~/types'

const { booted, init } = useBootSequence()
const { windows, closeWindow, focusWindow, moveWindow } = useWindowManager()
const { terminalOpen, bind, isTerminalSupported } = useGlobalHotkeys()

const panels: Record<ModuleId, unknown> = {
  about: AboutPanel,
  projects: ProjectsPanel,
  skills: SkillsPanel,
  experience: ExperiencePanel,
  education: EducationPanel,
  contact: ContactPanel,
}

function moduleMeta(id: ModuleId) {
  return modules.find(m => m.id === id)!
}

const dialogOpen = computed(() =>
  Object.values(windows).some(w => w.isOpen) || terminalOpen.value,
)

onMounted(() => {
  init()
  bind()
})

const { public: { siteUrl, linkedinUrl, githubUrl } } = useRuntimeConfig()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.callsign,
        description: profile.bio,
        url: `${siteUrl}/`,
        image: `${siteUrl}/images/isaac-image.jpg`,
        knowsAbout: profile.tech,
        sameAs: [linkedinUrl, githubUrl],
      }),
    },
  ],
})
</script>

<template>
  <div class="relative h-dvh w-screen">
    <NuxtRouteAnnouncer />

    <!-- Contenido accesible para lectores de pantalla y buscadores.
         La interfaz visual es una app tipo escritorio que oculta el
         contenido hasta que el usuario interactúa; este bloque garantiza
         que la información real siempre esté presente en el HTML. -->
    <section class="sr-only">
      <h1>{{ profile.name }} — {{ profile.callsign }}</h1>
      <p>{{ profile.bio }}</p>

      <h2>Stack tecnológico</h2>
      <ul>
        <li v-for="t in profile.tech" :key="t">{{ t }}</li>
      </ul>

      <h2>Especialidades</h2>
      <ul>
        <li v-for="s in profile.specialties" :key="s">{{ s }}</li>
      </ul>

      <h2>Proyectos</h2>
      <ul>
        <li v-for="p in projects" :key="p.id">
          <a :href="p.url" rel="noopener">{{ p.name }}</a> — {{ p.description }}
        </li>
      </ul>

      <h2>Habilidades</h2>
      <ul>
        <li v-for="g in skillGroups" :key="g.id">
          {{ g.label }}: {{ g.skills.map(s => s.name).join(', ') }}
        </li>
      </ul>

      <h2>Experiencia profesional</h2>
      <ul>
        <li v-for="e in workExperience" :key="e.id">
          {{ e.role }} en {{ e.company }} ({{ e.period }})
        </li>
      </ul>
    </section>

    <OsBackground />

    <BootSequence v-if="!booted" />

    <template v-else>
      <div class="h-full w-full" :inert="dialogOpen">
        <Desktop />
      </div>

      <div id="windows-root" class="pointer-events-none fixed inset-0">
        <OsWindow
          v-for="id in Object.keys(windows) as ModuleId[]"
          v-show="windows[id].isOpen"
          :key="id"
          :title="moduleMeta(id).label.toUpperCase()"
          :subtitle="moduleMeta(id).subtitle"
          :z-index="windows[id].zIndex"
          :x="windows[id].position?.x ?? null"
          :y="windows[id].position?.y ?? null"
          @close="closeWindow(id)"
          @focus="focusWindow(id)"
          @move="(newX, newY) => moveWindow(id, newX, newY)"
        >
          <component :is="panels[id]" />
        </OsWindow>
      </div>

      <template v-if="isTerminalSupported">
        <Terminal :open="terminalOpen" @close="terminalOpen = false" />

        <button
          type="button"
          class="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 font-mono text-[0.65rem] tracking-widest text-white/50 transition-colors hover:text-os-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-cyan"
          :inert="dialogOpen"
          @click="terminalOpen = true"
        >
          ABRIR TERMINAL (CTRL+K)
        </button>
      </template>
    </template>
  </div>
</template>
