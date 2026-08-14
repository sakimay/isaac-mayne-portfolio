<script setup lang="ts">
const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}))
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-os-deep">
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse 60% 50% at 50% 35%, rgba(139,92,246,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 30% 70%, rgba(0,229,255,0.10) 0%, transparent 60%)"
    />
    <div class="absolute inset-0 grid-bg" />
    <div
      v-for="star in stars"
      :key="star.id"
      class="absolute rounded-full bg-white"
      :style="{
        top: `${star.top}%`,
        left: `${star.left}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: 0.5,
        animation: `pulse-glow ${star.duration}s ease-in-out ${star.delay}s infinite`,
      }"
    />
    <div class="absolute inset-0 scanlines pointer-events-none opacity-40" />
  </div>
</template>
