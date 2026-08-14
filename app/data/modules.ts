import type { ModuleDefinition } from '~/types'

export const modules: ModuleDefinition[] = [
  { id: 'about', label: 'About', subtitle: 'System Architect', icon: 'user', angle: -90 },
  { id: 'projects', label: 'Projects', subtitle: 'Active Modules', icon: 'grid', angle: -30 },
  { id: 'skills', label: 'Skills', subtitle: 'Energy Systems', icon: 'bolt', angle: 30 },
  { id: 'experience', label: 'Experiencia', subtitle: 'Historial Laboral', icon: 'briefcase', angle: 90 },
  { id: 'education', label: 'Formación', subtitle: 'Educación', icon: 'book', angle: 150 },
  { id: 'contact', label: 'Contact', subtitle: 'Comm Center', icon: 'signal', angle: 210 },
]
