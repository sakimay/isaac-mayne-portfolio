export type ModuleId = 'about' | 'projects' | 'skills' | 'experience' | 'education' | 'contact'

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

export interface WorkExperienceEntry {
  id: string
  role: string
  company: string
  location?: string
  period: string
  highlights: string[]
}

export interface OtherExperienceEntry {
  id: string
  role: string
  period: string
  description: string
}

export interface EducationEntry {
  id: string
  title: string
  institution: string
  period: string
  description?: string
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
