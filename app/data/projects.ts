import type { Project } from '~/types'

export const projects: Project[] = [
  {
    id: 'rock-runners',
    name: 'Rock Runners',
    description: 'Juego arcade web con física procedural y leaderboard en tiempo real.',
    tech: ['Next', 'React', 'PostgreSQL', 'Supabase'],
    status: 'online',
    url: 'https://www.rockrunners.es',
  },
  {
    id: 'padelnroll',
    name: 'PadelnRoll',
    description: 'Plataforma de reservas y gestión de partidos de pádel entre jugadores.',
    tech: ['Nuxt', 'Vue', 'PostgreSQL', 'Supabase'],
    status: 'online',
    url: 'https://padelnroll.es',
  },
  {
    id: 'luckyrunners',
    name: 'Lucky Runners',
    description: 'Juego de correr con elementos de suerte y mecánicas de progresión.',
    tech: ['Next', 'React', 'PostgreSQL', 'Supabase'],
    status: 'online',
    url: 'https://luckyrunners.net',
  },
]
