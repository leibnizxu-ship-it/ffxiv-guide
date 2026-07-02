export interface GearSet {
  id: string
  jobId: string
  patch: string
  label: string
  type: 'bis' | 'entry' | 'prog'
  pieces: GearPiece[]
  totalStats: string
}

export interface GearPiece {
  slot: string
  name: string
  source: string
  materia: string
}

export const gearSets: GearSet[] = [
  {
    id: 'pld-bis-705',
    jobId: 'pld', patch: '7.05', label: '骑士 BiS', type: 'bis',
    pieces: [
      { slot:'武器', name:'至天之剑', source:'M4S 通关', materia:'暴击+直击' },
      { slot:'头部', name:'至天头盔', source:'M3S', materia:'暴击+直击' },
      { slot:'身体', name:'至天铠', source:'M4S', materia:'暴击×2' },
      { slot:'手部', name:'至天手甲', source:'M2S', materia:'暴击+直击' },
      { slot:'腰部', name:'至天腰甲', source:'M1S', materia:'暴击+信念' },
      { slot:'腿部', name:'至天腿甲', source:'M3S', materia:'暴击×2' },
      { slot:'脚部', name:'至天靴', source:'M1S', materia:'暴击+直击' },
      { slot:'耳饰', name:'至天耳坠', source:'M2S', materia:'暴击+直击' },
      { slot:'项链', name:'至天颈链', source:'M1S', materia:'暴击+坚韧' },
      { slot:'手镯', name:'至天手镯', source:'M3S', materia:'暴击+直击' },
      { slot:'戒指1', name:'至天戒指', source:'M4S', materia:'暴击+直击' },
      { slot:'戒指2', name:'至天戒指', source:'M2S', materia:'暴击+信念' }
    ],
    totalStats: '暴击 2200+ / 直击 1500+ / 信念 1200+ / 坚韧 800+'
  },
  {
    id: 'pld-entry-705',
    jobId: 'pld', patch: '7.05', label: '骑士 开荒装', type: 'entry',
    pieces: [
      { slot:'武器', name:'新式骑士剑', source:'制作/市场板', materia:'暴击+直击' },
      { slot:'头盔', name:'新式重盔', source:'制作/市场板', materia:'暴击+坚韧' },
      { slot:'身体', name:'新式重铠', source:'制作/市场板', materia:'暴击×2' },
      { slot:'手部', name:'新式手甲', source:'制作/市场板', materia:'暴击+直击' },
      { slot:'腰部', name:'新式腰甲', source:'制作/市场板', materia:'暴击+坚韧' },
      { slot:'腿部', name:'新式腿甲', source:'制作/市场板', materia:'暴击+直击' },
      { slot:'脚部', name:'新式靴', source:'制作/市场板', materia:'暴击+坚韧' },
      { slot:'耳饰', name:'新式耳坠', source:'制作/市场板', materia:'暴击+直击' },
      { slot:'项链', name:'新式颈链', source:'制作/市场板', materia:'暴击+坚韧' },
      { slot:'手镯', name:'新式手镯', source:'制作/市场板', materia:'暴击+直击' },
      { slot:'戒指1', name:'新式戒指', source:'制作/市场板', materia:'暴击+直击' },
      { slot:'戒指2', name:'新式戒指', source:'制作/市场板', materia:'暴击+坚韧' }
    ],
    totalStats: '暴击 1800+ / 直击 1200+ / 坚韧 1500+（开荒偏肉）'
  }
]

export function getGearByJob(jobId: string): GearSet[] {
  return gearSets.filter(g => g.jobId === jobId)
}

export const slotLabels: Record<string, string> = {
  '武器':'⚔️','头部':'👑','身体':'🛡️','手部':'🧤','腰部':'🔗',
  '腿部':'👖','脚部':'👢','耳饰':'💎','项链':'📿','手镯':'⛓️',
  '戒指1':'💍','戒指2':'💍'
}
