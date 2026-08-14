import type { SkillGroup } from '~/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend Architecture',
    skills: [
      { id: 'nuxt', name: 'Nuxt / Vue', level: 95 },
      { id: 'react', name: 'React / Next.js', level: 80 },
      { id: 'typescript', name: 'TypeScript', level: 90 },
      { id: 'tailwind', name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    skills: [
      { id: 'node', name: 'Node.js', level: 85 },
      { id: 'php', name: 'PHP / Laravel', level: 90 },
      { id: 'rest', name: 'REST APIs', level: 90 },
      { id: 'webhooks', name: 'Webhooks', level: 85 },
    ],
  },
  {
    id: 'database',
    label: 'Data & Storage',
    skills: [
      { id: 'supabase', name: 'Supabase', level: 88 },
      { id: 'postgres', name: 'PostgreSQL', level: 82 },
      { id: 'mysql', name: 'MySQL', level: 85 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Deployment',
    skills: [
      { id: 'cloudflare', name: 'Cloudflare', level: 88 },
      { id: 'vercel', name: 'Vercel', level: 85 },
      { id: 'aws', name: 'AWS', level: 70 },
      { id: 'cicd', name: 'CI/CD', level: 80 },
    ],
  },
  {
    id: 'automation',
    label: 'AI & Automation',
    skills: [
      { id: 'llm', name: 'LLM Integration', level: 85 },
      { id: 'agents', name: 'AI Automation', level: 82 },
      { id: 'scraping', name: 'Web Scraping', level: 85 },
      { id: 'seo', name: 'Technical SEO', level: 90 },
    ],
  },
]