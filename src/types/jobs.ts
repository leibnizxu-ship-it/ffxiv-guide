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
  timeline: SkillTimeline
}

export interface RotationSection {
  title: string
  description: string
  steps: string[]
}

export interface SkillTimeline {
  gcd: number
  openerTimeline: TimelineStep[]
  burstWindows: BurstWindow[]
}

export interface TimelineStep {
  time: string
  skill: string
  type: 'gcd' | 'ogcd' | 'buff' | 'combo'
  note?: string
}

export interface BurstWindow {
  label: string
  cooldown: number
  description: string
}
