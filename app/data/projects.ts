import type { Project } from '~/types'

export const projects: Project[] = [
  {
    id: 'rock-runners',
    name: 'Rock Runners',
    description: 'Juego arcade web con física procedural y leaderboard en tiempo real.',
    tech: ['Vue', 'Canvas', 'Supabase'],
    status: 'online',
    url: 'https://example.com/rock-runners',
  },
  {
    id: 'padelnroll',
    name: 'PadelnRoll',
    description: 'Plataforma de reservas y gestión de partidos de pádel entre jugadores.',
    tech: ['Nuxt', 'Cloudflare Workers', 'PostgreSQL'],
    status: 'online',
    url: 'https://example.com/padelnroll',
  },
  {
    id: 'nebula-notes',
    name: 'Nebula Notes',
    description: 'Editor de notas con sincronización local-first y búsqueda semántica IA.',
    tech: ['Nuxt', 'IndexedDB', 'AI Embeddings'],
    status: 'in-development',
  },
]
