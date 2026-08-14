import { reactive, ref } from 'vue'
import { useWindowManager } from '~/composables/useWindowManager'
import { profile } from '~/data/profile'
import { projects } from '~/data/projects'
import { skillGroups } from '~/data/skills'
import { contactLinks } from '~/data/contact'

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
  { type: 'success', content: 'Isaac OS terminal ready. Type "help" for available commands.' },
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
      description: 'List available commands',
      run: () => [
        line('Available commands:', 'success'),
        ...commands.map(c => line(`  ${c.name.padEnd(12)} — ${c.description}`)),
      ],
    },
    {
      name: 'about',
      description: 'Open the System Architect profile',
      run: () => {
        openWindow('about')
        return [
          line(`${profile.name} — ${profile.callsign}`, 'success'),
          line(profile.bio),
          line('Opening ABOUT window...'),
        ]
      },
    },
    {
      name: 'projects',
      description: 'Open Active Modules (projects)',
      run: () => {
        openWindow('projects')
        return [
          line('Active modules:', 'success'),
          ...projects.map(p => line(`  ${p.name} — ${p.status.toUpperCase()}`)),
          line('Opening PROJECTS window...'),
        ]
      },
    },
    {
      name: 'skills',
      description: 'Open Energy Systems (skills)',
      run: () => {
        openWindow('skills')
        return [
          line('Energy systems online:', 'success'),
          ...skillGroups.map(g => line(`  ${g.label}`)),
          line('Opening SKILLS window...'),
        ]
      },
    },
    {
      name: 'experiments',
      description: 'Open the Research Lab',
      run: () => {
        openWindow('experiments')
        return [line('Opening RESEARCH LAB window...', 'success')]
      },
    },
    {
      name: 'contact',
      description: 'Open the Communication Center',
      run: () => {
        openWindow('contact')
        return [
          line('Communication channels:', 'success'),
          ...contactLinks.map(c => line(`  ${c.label}: ${c.value}`, 'link', c.href)),
          line('Opening CONTACT window...'),
        ]
      },
    },
    {
      name: 'rockrunners',
      description: 'Show details for Rock Runners',
      run: () => {
        const p = projects.find(p => p.id === 'rock-runners')!
        openProject(p.id)
        return [
          line(`${p.name} — ${p.status.toUpperCase()}`, 'success'),
          line(p.description),
          line(`Tech: ${p.tech.join(', ')}`),
          ...(p.url ? [line(p.url, 'link', p.url)] : []),
        ]
      },
    },
    {
      name: 'padelnroll',
      description: 'Show details for PadelnRoll',
      run: () => {
        const p = projects.find(p => p.id === 'padelnroll')!
        openProject(p.id)
        return [
          line(`${p.name} — ${p.status.toUpperCase()}`, 'success'),
          line(p.description),
          line(`Tech: ${p.tech.join(', ')}`),
          ...(p.url ? [line(p.url, 'link', p.url)] : []),
        ]
      },
    },
    {
      name: 'clear',
      description: 'Clear terminal output',
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
      history.push(line(`Command not found: "${name}". Type "help" for available commands.`, 'error'))
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
