export interface StoryGuide {
  id: string
  title: string
  patch: string
  icon: string
  subtitle: string
  summary: string
  chapters: StoryChapter[]
  keyCharacters: StoryCharacter[]
  keyMoments: string[]
  primalBattles: StoryPrimal[]
  tips: string[]
}

export interface StoryChapter {
  title: string
  content: string
  highlights?: string
}

export interface StoryCharacter {
  name: string
  role: string
  description: string
}

export interface StoryPrimal {
  name: string
  level: number
  description: string
}

