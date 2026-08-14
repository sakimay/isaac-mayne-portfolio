<script setup lang="ts">
import { skillGroups } from '~/data/skills'
import SkillRing from '~/components/sections/SkillRing.vue'
</script>

<template>
  <div class="space-y-6">
    <div v-for="group in skillGroups" :key="group.id">
      <h3 class="mb-3 font-display text-xs tracking-[0.15em] text-os-purple">{{ group.label.toUpperCase() }}</h3>
      <div class="grid grid-cols-3 gap-4">
        <SkillRing v-for="s in group.skills" :key="s.id" :skill="s" />
      </div>
    </div>
  </div>
</template>
