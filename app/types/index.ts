export type ModuleId = 'about' | 'projects' | 'skills' | 'experiments' | 'contact'

export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  status: 'online' | 'offline' | 'in-development'
  url?: string
  repoUrl?: string
}

export interface Skill {
  id: string
  name: string
  level: number
}

export interface SkillGroup {
  id: string
  label: string
  skills: Skill[]
}

export interface Experiment {
  id: string
  name: string
  description: string
  tags: string[]
  status: 'active' | 'archived' | 'prototype'
  url?: string
}

export interface Profile {
  name: string
  callsign: string
  experienceYears: number
  bio: string
  tech: string[]
  specialties: string[]
}

export interface ContactLink {
  id: string
  label: string
  value: string
  href: string
  icon: string
}

export interface ModuleDefinition {
  id: ModuleId
  label: string
  subtitle: string
  icon: string
  angle: number
}
