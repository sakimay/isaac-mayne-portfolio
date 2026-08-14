import type { Project } from '~/types'

export const projects: Project[] = [
  {
    id: 'rock-runners',
    name: 'Rock Runners',
    description: 'Comunidad para corredores que combina calendario de carreras, rankings, estadísticas, artículos especializados y herramientas para mejorar el rendimiento deportivo.',
    tech: ['Next', 'React', 'PostgreSQL', 'Supabase'],
    status: 'online',
    url: 'https://www.rockrunners.es',
  },
  {
    id: 'padelnroll',
    name: 'PadelnRoll',
    description: 'Portal especializado en pádel con análisis de productos, comparativas, recomendaciones personalizadas y contenido para ayudar a los jugadores a elegir el mejor equipamiento.',
    tech: ['Nuxt', 'Vue', 'PostgreSQL', 'Supabase'],
    status: 'online',
    url: 'https://padelnroll.es',
  },
  {
    id: 'luckyrunners',
    name: 'Lucky Runners',
    description: 'Web corporativa para un club de running de Sant Cugat. Presenta entrenamientos, coaching y la filosofía del club mediante una experiencia rápida, responsive y optimizada para móviles.',
    tech: ['Astro', 'React'],
    status: 'online',
    url: 'https://luckyrunners.net',
  },
]
