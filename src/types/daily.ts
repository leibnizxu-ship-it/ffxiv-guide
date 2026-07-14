export type DailyCategory = 'fc' | 'market' | 'goldsaucer' | 'housing' | 'weekly' | 'retainer' | 'gc' | 'other' | 'deepdungeon' | 'crafting' | 'gathering' | 'island' | 'wondrous'

export interface DailyGuide {
  id: string
  title: string
  category: DailyCategory
  icon: string
  summary: string
  sections: GuideSection[]
  tips: string[]
  links?: { label: string; url: string }[]
}

export interface GuideSection {
  title: string
  content?: string
  items?: GuideItem[]
}

export interface GuideItem {
  label: string
  description: string
  highlight?: string
}
