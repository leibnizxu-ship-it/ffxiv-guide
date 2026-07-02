export type JobRole = 'tank' | 'healer' | 'melee' | 'ranged' | 'caster'

export interface JobGuide {
  id: string
  name: string
  role: JobRole
  icon: string
  summary: string
  opener: string[]
  rotation: RotationSection[]
  statPriority: string[]
  bisNote: string
}

export interface RotationSection {
  title: string
  description: string
  steps: string[]
}
