import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://isaacmayne.netlify.app'

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
    url: siteUrl,
    name: 'Isaac Mayné — Full-Stack Web Engineer',
  },

  app: {
    head: {
      title: 'Isaac Mayné — Full-Stack Web Engineer | Isaac OS',
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'description', content: 'Portfolio interactivo de Isaac Mayné, desarrollador full-stack especializado en Nuxt, Vue, TypeScript, Supabase y Cloudflare. Más de 6 años de experiencia construyendo productos web rápidos y optimizados para SEO.' },
        { name: 'theme-color', content: '#081426' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Isaac OS' },
        { property: 'og:title', content: 'Isaac Mayné — Full-Stack Web Engineer' },
        { property: 'og:description', content: 'Portfolio interactivo estilo sistema operativo de nave espacial. Nuxt, Vue, TypeScript, Supabase, Cloudflare.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${siteUrl}/` },
        { property: 'og:image', content: `${siteUrl}/images/isaac-image.jpg` },
        { property: 'og:locale', content: 'es_ES' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Isaac Mayné — Full-Stack Web Engineer' },
        { name: 'twitter:description', content: 'Portfolio interactivo estilo sistema operativo de nave espacial. Nuxt, Vue, TypeScript, Supabase, Cloudflare.' },
        { name: 'twitter:image', content: `${siteUrl}/images/isaac-image.jpg` },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: `${siteUrl}/` },
      ],
    },
  },

  typescript: {
    strict: true,
  },

  runtimeConfig: {
    public: {
      siteUrl,
      email: 'isaac@example.com',
      linkedinUrl: 'https://linkedin.com/in/example',
      githubUrl: 'https://github.com/example',
    },
  },
})
