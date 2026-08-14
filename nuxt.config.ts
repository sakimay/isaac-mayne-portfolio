import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@vueuse/motion/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: 'Orbitron', provider: 'google', weights: [500, 600, 700, 800] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 600] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },

  site: {
    url: 'https://isaac-os.example.com',
    name: 'Isaac OS',
  },

  app: {
    head: {
      title: 'Isaac OS — Isaac Mayne',
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'description', content: 'Isaac OS — el sistema operativo de la nave de Isaac Mayne. Portfolio interactivo de un system architect.' },
        { name: 'theme-color', content: '#081426' },
        { property: 'og:title', content: 'Isaac OS' },
        { property: 'og:description', content: 'Portfolio interactivo estilo sistema operativo de nave espacial.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  typescript: {
    strict: true,
  },
})
