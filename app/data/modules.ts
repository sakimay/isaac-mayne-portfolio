import type { ModuleDefinition } from '~/types'

export const modules: ModuleDefinition[] = [
  { id: 'about', label: 'Sobre mí', subtitle: 'Arquitecto de Sistemas', icon: 'user', angle: -90 },
  { id: 'projects', label: 'Proyectos', subtitle: 'Módulos Activos', icon: 'grid', angle: -30 },
  { id: 'skills', label: 'Habilidades', subtitle: 'Sistemas de Energía', icon: 'bolt', angle: 30 },
  { id: 'experience', label: 'Experiencia', subtitle: 'Historial Laboral', icon: 'briefcase', angle: 90 },
  { id: 'education', label: 'Formación', subtitle: 'Educación', icon: 'book', angle: 150 },
  { id: 'contact', label: 'Contacto', subtitle: 'Centro de Comunicaciones', icon: 'signal', angle: 210 },
]
