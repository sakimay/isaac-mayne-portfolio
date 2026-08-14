import type { SkillGroup } from '~/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { id: 'vue', name: 'Vue / Nuxt', level: 95 },
      { id: 'ts', name: 'TypeScript', level: 90 },
      { id: 'tailwind', name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    id: 'platform',
    label: 'Cloudflare',
    skills: [
      { id: 'workers', name: 'Workers', level: 80 },
      { id: 'r2', name: 'R2 / KV / D1', level: 75 },
    ],
  },
  {
    id: 'data',
    label: 'Supabase / PostgreSQL',
    skills: [
      { id: 'supabase', name: 'Supabase', level: 85 },
      { id: 'postgres', name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    id: 'ai',
    label: 'Automatización con IA',
    skills: [
      { id: 'agents', name: 'Agentes IA', level: 88 },
      { id: 'automation', name: 'Automatización de flujos', level: 82 },
    ],
  },
]
