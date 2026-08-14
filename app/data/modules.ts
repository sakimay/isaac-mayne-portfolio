import type { ModuleDefinition } from '~/types'

export const modules: ModuleDefinition[] = [
  { id: 'about', label: 'About', subtitle: 'System Architect', icon: 'user', angle: -90 },
  { id: 'projects', label: 'Projects', subtitle: 'Active Modules', icon: 'grid', angle: -18 },
  { id: 'skills', label: 'Skills', subtitle: 'Energy Systems', icon: 'bolt', angle: 54 },
  { id: 'experiments', label: 'Experiments', subtitle: 'Research Lab', icon: 'flask', angle: 126 },
  { id: 'contact', label: 'Contact', subtitle: 'Comm Center', icon: 'signal', angle: 198 },
]
