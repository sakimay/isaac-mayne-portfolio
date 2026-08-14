import { reactive, ref } from 'vue'
import { useWindowManager } from '~/composables/useWindowManager'
import { profile } from '~/data/profile'
import { projects } from '~/data/projects'
import { skillGroups } from '~/data/skills'
import { contactLinks } from '~/data/contact'
import { otherExperience, workExperience } from '~/data/experience'
import { education } from '~/data/education'

export interface TerminalOutputLine {
  type: 'text' | 'error' | 'success' | 'link'
  content: string
  href?: string
}

interface TerminalCommand {
  name: string
  description: string
  run: (args: string[]) => TerminalOutputLine[]
}

const history = reactive<TerminalOutputLine[]>([
  { type: 'success', content: 'Terminal de Isaac OS lista. Escribe "help" para ver los comandos disponibles.' },
])
const commandHistory = reactive<string[]>([])

function line(content: string, type: TerminalOutputLine['type'] = 'text', href?: string): TerminalOutputLine {
  return { type, content, href }
}

function buildCommands(): TerminalCommand[] {
  const { openWindow, openProject } = useWindowManager()

  const commands: TerminalCommand[] = [
    {
      name: 'help',
      description: 'Lista los comandos disponibles',
      run: () => [
        line('Comandos disponibles:', 'success'),
        ...commands.map(c => line(`  ${c.name.padEnd(12)} — ${c.description}`)),
      ],
    },
    {
      name: 'about',
      description: 'Abre el perfil del Arquitecto de Sistemas',
      run: () => {
        openWindow('about')
        return [
          line(`${profile.name} — ${profile.callsign}`, 'success'),
          line(profile.bio),
          line('Abriendo ventana ABOUT...'),
        ]
      },
    },
    {
      name: 'projects',
      description: 'Abre Módulos Activos (proyectos)',
      run: () => {
        openWindow('projects')
        return [
          line('Módulos activos:', 'success'),
          ...projects.map(p => line(`  ${p.name} — ${p.status.toUpperCase()}`)),
          line('Abriendo ventana PROJECTS...'),
        ]
      },
    },
    {
      name: 'skills',
      description: 'Abre Sistemas de Energía (habilidades)',
      run: () => {
        openWindow('skills')
        return [
          line('Sistemas de energía en línea:', 'success'),
          ...skillGroups.map(g => line(`  ${g.label}`)),
          line('Abriendo ventana SKILLS...'),
        ]
      },
    },
    {
      name: 'experience',
      description: 'Abre Historial Laboral (experiencia)',
      run: () => {
        openWindow('experience')
        return [
          line('Historial laboral:', 'success'),
          ...workExperience.map(w => line(`  ${w.role} — ${w.company} (${w.period})`)),
          ...otherExperience.map(o => line(`  ${o.role} (${o.period})`)),
          line('Abriendo ventana EXPERIENCE...'),
        ]
      },
    },
    {
      name: 'education',
      description: 'Abre Formación (educación)',
      run: () => {
        openWindow('education')
        return [
          line('Formación:', 'success'),
          ...education.map(e => line(`  ${e.title} — ${e.institution} (${e.period})`)),
          line('Abriendo ventana EDUCATION...'),
        ]
      },
    },
    {
      name: 'contact',
      description: 'Abre el Centro de Comunicaciones',
      run: () => {
        openWindow('contact')
        return [
          line('Canales de comunicación:', 'success'),
          ...contactLinks.map(c => line(`  ${c.label}: ${c.value}`, 'link', c.href)),
          line('Abriendo ventana CONTACT...'),
        ]
      },
    },
    {
      name: 'rockrunners',
      description: 'Muestra detalles de Rock Runners',
      run: () => {
        const p = projects.find(p => p.id === 'rock-runners')!
        openProject(p.id)
        return [
          line(`${p.name} — ${p.status.toUpperCase()}`, 'success'),
          line(p.description),
          line(`Tecnología: ${p.tech.join(', ')}`),
          ...(p.url ? [line(p.url, 'link', p.url)] : []),
        ]
      },
    },
    {
      name: 'padelnroll',
      description: 'Muestra detalles de PadelnRoll',
      run: () => {
        const p = projects.find(p => p.id === 'padelnroll')!
        openProject(p.id)
        return [
          line(`${p.name} — ${p.status.toUpperCase()}`, 'success'),
          line(p.description),
          line(`Tecnología: ${p.tech.join(', ')}`),
          ...(p.url ? [line(p.url, 'link', p.url)] : []),
        ]
      },
    },
    {
      name: 'clear',
      description: 'Limpia la salida del terminal',
      run: () => {
        history.splice(0, history.length)
        return []
      },
    },
  ]

  return commands
}

export function useTerminalCommands() {
  const historyIndex = ref(-1)

  function execute(raw: string) {
    const trimmed = raw.trim()
    if (!trimmed) return

    history.push(line(`$ ${trimmed}`))
    commandHistory.push(trimmed)
    historyIndex.value = commandHistory.length

    const [name, ...args] = trimmed.toLowerCase().split(/\s+/)
    const commands = buildCommands()
    const command = commands.find(c => c.name === name)

    if (!command) {
      history.push(line(`Comando no encontrado: "${name}". Escribe "help" para ver los comandos disponibles.`, 'error'))
      return
    }

    const output = command.run(args)
    history.push(...output)
  }

  function previousCommand(): string | null {
    if (commandHistory.length === 0) return null
    historyIndex.value = Math.max(0, historyIndex.value - 1)
    return commandHistory[historyIndex.value] ?? null
  }

  function nextCommand(): string | null {
    if (commandHistory.length === 0) return null
    historyIndex.value = Math.min(commandHistory.length, historyIndex.value + 1)
    return commandHistory[historyIndex.value] ?? ''
  }

  return { history, execute, previousCommand, nextCommand }
}
