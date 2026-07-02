export type ContentType = 'savage' | 'ultimate' | 'extreme' | 'dungeon' | 'alliance'

export type Role = 'tank' | 'healer' | 'dps'

export interface BossPhase {
  name: string
  description: string
  abilities: BossAbility[]
}

export interface BossAbility {
  time: string
  name: string
  description: string
  type: 'tankbuster' | 'raidwide' | 'mechanic' | 'stack' | 'spread' | 'knockback' | 'other'
  tips: string
}

export interface PositionMark {
  id: string
  label: string
  x: number
  y: number
  role?: Role
  description?: string
}

export interface PositionDiagram {
  title: string
  width: number
  height: number
  marks: PositionMark[]
  lines?: { from: string; to: string; label?: string }[]
}

export interface StrategyGuide {
  id: string
  title: string
  type: ContentType
  patch: string
  level: number
  itemLevel: number
  bossName: string
  summary: string
  phases: BossPhase[]
  positionDiagrams: PositionDiagram[]
  tips: string[]
  tags: string[]
}
