import type { Experiment } from '~/types'

export const experiments: Experiment[] = [
  {
    id: 'ai-standup',
    name: 'AI Standup Bot',
    description: 'Agente que resume actividad de GitHub y publica un standup diario en Slack.',
    tags: ['AI Agents', 'Automation'],
    status: 'active',
  },
  {
    id: 'voice-terminal',
    name: 'Voice Terminal',
    description: 'Prototipo de terminal controlada por voz usando reconocimiento de voz en el navegador.',
    tags: ['Web Speech API', 'Prototype'],
    status: 'prototype',
  },
  {
    id: 'edge-cache-lab',
    name: 'Edge Cache Lab',
    description: 'Pruebas de estrategias de caché en el edge con Cloudflare Workers.',
    tags: ['Cloudflare', 'Performance'],
    status: 'archived',
  },
]
