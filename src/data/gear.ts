export interface GearSet {
  id: string
  jobId: string
  patch: string
  label: string
  type: "bis" | "entry" | "prog"
  pieces: GearPiece[]
  totalStats: string
}

export interface GearPiece {
  slot: string
  name: string
  source: string
  materia: string
}

// ---- 辅助函数：为多个 jobId 生成同一个配装 ----
function setFor(jobIds: string[], baseId: string, label: string, type: "bis"|"entry"|"prog", pieces: GearPiece[], totalStats: string): GearSet[] {
  return jobIds.map(jid => ({ id: jid + "-" + baseId, jobId: jid, patch: "7.05", label, type, pieces, totalStats }))
}

// ---- 共用部件 ----
const fendingPieces: GearPiece[] = [
  { slot:"武器", name:"至天之剑", source:"M4S / 石板交换", materia:"暴击+直击" },
  { slot:"头部", name:"至天头盔", source:"M3S", materia:"暴击+直击" },
  { slot:"身体", name:"至天铠", source:"M4S", materia:"暴击×2" },
  { slot:"手部", name:"至天手甲", source:"M2S", materia:"暴击+直击" },
  { slot:"腰部", name:"至天腰甲", source:"M1S", materia:"暴击+信念" },
  { slot:"腿部", name:"至天腿甲", source:"M3S", materia:"暴击×2" },
  { slot:"脚部", name:"至天靴", source:"M1S", materia:"暴击+直击" },
  { slot:"耳饰", name:"至天耳坠", source:"M2S", materia:"暴击+直击" },
  { slot:"项链", name:"至天颈链", source:"M1S", materia:"暴击+坚韧" },
  { slot:"手镯", name:"至天手镯", source:"M3S", materia:"暴击+直击" },
  { slot:"戒指1", name:"至天戒指", source:"M4S", materia:"暴击+直击" },
  { slot:"戒指2", name:"至天戒指", source:"M2S", materia:"暴击+信念" }
]
const fendingEntry: GearPiece[] = [
  { slot:"武器", name:"新式骑士剑", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"头部", name:"新式重盔", source:"制作/市场板", materia:"暴击+坚韧" },
  { slot:"身体", name:"新式重铠", source:"制作/市场板", materia:"暴击×2" },
  { slot:"手部", name:"新式手甲", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"腰部", name:"新式腰甲", source:"制作/市场板", materia:"暴击+坚韧" },
  { slot:"腿部", name:"新式腿甲", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"脚部", name:"新式靴", source:"制作/市场板", materia:"暴击+坚韧" },
  { slot:"耳饰", name:"新式耳坠", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"项链", name:"新式颈链", source:"制作/市场板", materia:"暴击+坚韧" },
  { slot:"手镯", name:"新式手镯", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指1", name:"新式戒指", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指2", name:"新式戒指", source:"制作/市场板", materia:"暴击+坚韧" }
]

const healingPieces: GearPiece[] = [
  { slot:"武器", name:"至天杖", source:"M4S / 石板交换", materia:"暴击+直击" },
  { slot:"头部", name:"至天头冠", source:"M3S", materia:"暴击+直击" },
  { slot:"身体", name:"至天袍", source:"M4S", materia:"暴击×2" },
  { slot:"手部", name:"至天手套", source:"M2S", materia:"暴击+直击" },
  { slot:"腰部", name:"至天腰带", source:"M1S", materia:"暴击+信念" },
  { slot:"腿部", name:"至天长裤", source:"M3S", materia:"暴击×2" },
  { slot:"脚部", name:"至天靴", source:"M1S", materia:"暴击+直击" },
  { slot:"耳饰", name:"至天耳坠", source:"M2S", materia:"暴击+直击" },
  { slot:"项链", name:"至天颈链", source:"M1S", materia:"暴击+信念" },
  { slot:"手镯", name:"至天手镯", source:"M3S", materia:"暴击+直击" },
  { slot:"戒指1", name:"至天戒指", source:"M4S", materia:"暴击+直击" },
  { slot:"戒指2", name:"至天戒指", source:"M2S", materia:"暴击+信念" }
]
const healingEntry: GearPiece[] = [
  { slot:"武器", name:"新式杖", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"头部", name:"新式头冠", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"身体", name:"新式袍", source:"制作/市场板", materia:"暴击×2" },
  { slot:"手部", name:"新式手套", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"腰部", name:"新式腰带", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"腿部", name:"新式长裤", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"脚部", name:"新式靴", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"耳饰", name:"新式耳坠", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"项链", name:"新式颈链", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"手镯", name:"新式手镯", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指1", name:"新式戒指", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指2", name:"新式戒指", source:"制作/市场板", materia:"暴击+信念" }
]

const maimingPieces: GearPiece[] = [
  { slot:"武器", name:"至天长枪", source:"M4S / 石板交换", materia:"暴击+直击" },
  { slot:"头部", name:"至天头盔", source:"M3S", materia:"暴击+直击" },
  { slot:"身体", name:"至天铠", source:"M4S", materia:"暴击×2" },
  { slot:"手部", name:"至天手甲", source:"M2S", materia:"暴击+直击" },
  { slot:"腰部", name:"至天腰甲", source:"M1S", materia:"暴击+信念" },
  { slot:"腿部", name:"至天腿甲", source:"M3S", materia:"暴击×2" },
  { slot:"脚部", name:"至天靴", source:"M1S", materia:"暴击+直击" },
  { slot:"耳饰", name:"至天耳坠", source:"M2S", materia:"暴击+直击" },
  { slot:"项链", name:"至天颈链", source:"M1S", materia:"暴击+信念" },
  { slot:"手镯", name:"至天手镯", source:"M3S", materia:"暴击+直击" },
  { slot:"戒指1", name:"至天戒指", source:"M4S", materia:"暴击+直击" },
  { slot:"戒指2", name:"至天戒指", source:"M2S", materia:"暴击+信念" }
]
const maimingEntry: GearPiece[] = [
  { slot:"武器", name:"新式长枪", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"头部", name:"新式头盔", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"身体", name:"新式铠", source:"制作/市场板", materia:"暴击×2" },
  { slot:"手部", name:"新式手甲", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"腰部", name:"新式腰甲", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"腿部", name:"新式腿甲", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"脚部", name:"新式靴", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"耳饰", name:"新式耳坠", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"项链", name:"新式颈链", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"手镯", name:"新式手镯", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指1", name:"新式戒指", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指2", name:"新式戒指", source:"制作/市场板", materia:"暴击+信念" }
]

const strikingPieces: GearPiece[] = [
  { slot:"武器", name:"至天刀", source:"M4S / 石板交换", materia:"暴击+直击" },
  { slot:"头部", name:"至天头巾", source:"M3S", materia:"暴击+直击" },
  { slot:"身体", name:"至天衣", source:"M4S", materia:"暴击×2" },
  { slot:"手部", name:"至天手带", source:"M2S", materia:"暴击+直击" },
  { slot:"腰部", name:"至天腰带", source:"M1S", materia:"暴击+信念" },
  { slot:"腿部", name:"至天长裤", source:"M3S", materia:"暴击×2" },
  { slot:"脚部", name:"至天靴", source:"M1S", materia:"暴击+直击" },
  { slot:"耳饰", name:"至天耳坠", source:"M2S", materia:"暴击+直击" },
  { slot:"项链", name:"至天颈链", source:"M1S", materia:"暴击+信念" },
  { slot:"手镯", name:"至天手镯", source:"M3S", materia:"暴击+直击" },
  { slot:"戒指1", name:"至天戒指", source:"M4S", materia:"暴击+直击" },
  { slot:"戒指2", name:"至天戒指", source:"M2S", materia:"暴击+信念" }
]
const strikingEntry: GearPiece[] = [
  { slot:"武器", name:"新式刀", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"头部", name:"新式头巾", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"身体", name:"新式衣", source:"制作/市场板", materia:"暴击×2" },
  { slot:"手部", name:"新式手带", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"腰部", name:"新式腰带", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"腿部", name:"新式长裤", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"脚部", name:"新式靴", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"耳饰", name:"新式耳坠", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"项链", name:"新式颈链", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"手镯", name:"新式手镯", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指1", name:"新式戒指", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指2", name:"新式戒指", source:"制作/市场板", materia:"暴击+信念" }
]

const scoutingPieces: GearPiece[] = [
  { slot:"武器", name:"至天双剑", source:"M4S / 石板交换", materia:"暴击+直击" },
  { slot:"头部", name:"至天头巾", source:"M3S", materia:"暴击+直击" },
  { slot:"身体", name:"至天衣", source:"M4S", materia:"暴击×2" },
  { slot:"手部", name:"至天手带", source:"M2S", materia:"暴击+直击" },
  { slot:"腰部", name:"至天腰带", source:"M1S", materia:"暴击+信念" },
  { slot:"腿部", name:"至天长裤", source:"M3S", materia:"暴击×2" },
  { slot:"脚部", name:"至天靴", source:"M1S", materia:"暴击+直击" },
  { slot:"耳饰", name:"至天耳坠", source:"M2S", materia:"暴击+直击" },
  { slot:"项链", name:"至天颈链", source:"M1S", materia:"暴击+信念" },
  { slot:"手镯", name:"至天手镯", source:"M3S", materia:"暴击+直击" },
  { slot:"戒指1", name:"至天戒指", source:"M4S", materia:"暴击+直击" },
  { slot:"戒指2", name:"至天戒指", source:"M2S", materia:"暴击+信念" }
]
const scoutingEntry: GearPiece[] = [
  { slot:"武器", name:"新式双剑", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"头部", name:"新式头巾", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"身体", name:"新式衣", source:"制作/市场板", materia:"暴击×2" },
  { slot:"手部", name:"新式手带", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"腰部", name:"新式腰带", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"腿部", name:"新式长裤", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"脚部", name:"新式靴", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"耳饰", name:"新式耳坠", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"项链", name:"新式颈链", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"手镯", name:"新式手镯", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指1", name:"新式戒指", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指2", name:"新式戒指", source:"制作/市场板", materia:"暴击+信念" }
]

const aimingPieces: GearPiece[] = [
  { slot:"武器", name:"至天弓", source:"M4S / 石板交换", materia:"暴击+直击" },
  { slot:"头部", name:"至天帽", source:"M3S", materia:"暴击+直击" },
  { slot:"身体", name:"至天衣", source:"M4S", materia:"暴击×2" },
  { slot:"手部", name:"至天手套", source:"M2S", materia:"暴击+直击" },
  { slot:"腰部", name:"至天腰带", source:"M1S", materia:"暴击+信念" },
  { slot:"腿部", name:"至天长裤", source:"M3S", materia:"暴击×2" },
  { slot:"脚部", name:"至天靴", source:"M1S", materia:"暴击+直击" },
  { slot:"耳饰", name:"至天耳坠", source:"M2S", materia:"暴击+直击" },
  { slot:"项链", name:"至天颈链", source:"M1S", materia:"暴击+信念" },
  { slot:"手镯", name:"至天手镯", source:"M3S", materia:"暴击+直击" },
  { slot:"戒指1", name:"至天戒指", source:"M4S", materia:"暴击+直击" },
  { slot:"戒指2", name:"至天戒指", source:"M2S", materia:"暴击+信念" }
]
const aimingEntry: GearPiece[] = [
  { slot:"武器", name:"新式弓", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"头部", name:"新式帽", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"身体", name:"新式衣", source:"制作/市场板", materia:"暴击×2" },
  { slot:"手部", name:"新式手套", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"腰部", name:"新式腰带", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"腿部", name:"新式长裤", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"脚部", name:"新式靴", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"耳饰", name:"新式耳坠", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"项链", name:"新式颈链", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"手镯", name:"新式手镯", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指1", name:"新式戒指", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指2", name:"新式戒指", source:"制作/市场板", materia:"暴击+信念" }
]

const castingPieces: GearPiece[] = [
  { slot:"武器", name:"至天杖", source:"M4S / 石板交换", materia:"暴击+直击" },
  { slot:"头部", name:"至天帽", source:"M3S", materia:"暴击+直击" },
  { slot:"身体", name:"至天袍", source:"M4S", materia:"暴击×2" },
  { slot:"手部", name:"至天手套", source:"M2S", materia:"暴击+直击" },
  { slot:"腰部", name:"至天腰带", source:"M1S", materia:"暴击+信念" },
  { slot:"腿部", name:"至天长裤", source:"M3S", materia:"暴击×2" },
  { slot:"脚部", name:"至天靴", source:"M1S", materia:"暴击+直击" },
  { slot:"耳饰", name:"至天耳坠", source:"M2S", materia:"暴击+直击" },
  { slot:"项链", name:"至天颈链", source:"M1S", materia:"暴击+信念" },
  { slot:"手镯", name:"至天手镯", source:"M3S", materia:"暴击+直击" },
  { slot:"戒指1", name:"至天戒指", source:"M4S", materia:"暴击+直击" },
  { slot:"戒指2", name:"至天戒指", source:"M2S", materia:"暴击+信念" }
]
const castingEntry: GearPiece[] = [
  { slot:"武器", name:"新式杖", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"头部", name:"新式帽", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"身体", name:"新式袍", source:"制作/市场板", materia:"暴击×2" },
  { slot:"手部", name:"新式手套", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"腰部", name:"新式腰带", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"腿部", name:"新式长裤", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"脚部", name:"新式靴", source:"制作/市场板", materia:"暴击+信念" },
  { slot:"耳饰", name:"新式耳坠", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"项链", name:"新式颈链", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"手镯", name:"新式手镯", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指1", name:"新式戒指", source:"制作/市场板", materia:"暴击+直击" },
  { slot:"戒指2", name:"新式戒指", source:"制作/市场板", materia:"暴击+信念" }
]

export const gearSets: GearSet[] = [
  ...setFor(["pld","war","drk","gnb"], "bis-705",  "坦克 BiS (至天)",   "bis",   fendingPieces,  "暴击 2200+ / 直击 1500+ / 信念 1200+ / 坚韧 800+"),
  ...setFor(["pld","war","drk","gnb"], "entry-705","坦克 开荒装 (新式)", "entry", fendingEntry,    "暴击 1800+ / 直击 1200+ / 坚韧 1500+（开荒偏肉）"),

  ...setFor(["whm","sch","ast","sge"], "bis-705",  "治疗 BiS (至天)",   "bis",   healingPieces,  "暴击 2200+ / 直击 1500+ / 信念 1300+"),
  ...setFor(["whm","sch","ast","sge"], "entry-705","治疗 开荒装 (新式)", "entry", healingEntry,    "暴击 1800+ / 直击 1200+ / 信念 1600+（开荒偏信仰）"),

  ...setFor(["drg","rpr"], "bis-705",  "龙/镰 BiS (至天)",   "bis",   maimingPieces,  "暴击 2200+ / 直击 1600+ / 信念 1100+"),
  ...setFor(["drg","rpr"], "entry-705","龙/镰 开荒装 (新式)", "entry", maimingEntry,    "暴击 1800+ / 直击 1300+ / 信念 1400+"),

  ...setFor(["mnk","sam"], "bis-705",  "格斗 BiS (至天)",   "bis",   strikingPieces,  "暴击 2300+ / 直击 1500+ / 信念 1100+"),
  ...setFor(["mnk","sam"], "entry-705","格斗 开荒装 (新式)", "entry", strikingEntry,    "暴击 1900+ / 直击 1200+ / 信念 1400+"),

  ...setFor(["nin","vpr"], "bis-705",  "双剑 BiS (至天)",   "bis",   scoutingPieces,  "暴击 2200+ / 直击 1600+ / 信念 1100+"),
  ...setFor(["nin","vpr"], "entry-705","双剑 开荒装 (新式)", "entry", scoutingEntry,    "暴击 1800+ / 直击 1300+ / 信念 1400+"),

  ...setFor(["brd","mch","dnc"], "bis-705",  "远程 BiS (至天)",   "bis",   aimingPieces,  "暴击 2200+ / 直击 1600+ / 信念 1100+"),
  ...setFor(["brd","mch","dnc"], "entry-705","远程 开荒装 (新式)", "entry", aimingEntry,    "暴击 1800+ / 直击 1300+ / 信念 1400+"),

  ...setFor(["blm","smn","rdm","pct"], "bis-705",  "法系 BiS (至天)",   "bis",   castingPieces,  "暴击 2400+ / 直击 1400+ / 信念 1200+ / 咏速 800+"),
  ...setFor(["blm","smn","rdm","pct"], "entry-705","法系 开荒装 (新式)", "entry", castingEntry,    "暴击 2000+ / 直击 1100+ / 信念 1500+"),
]

export function getGearByJob(jobId: string): GearSet[] {
  return gearSets.filter(g => g.jobId === jobId)
}

export const slotLabels: Record<string, string> = {
  "武器":"⚔️","头部":"👑","身体":"🛡️","手部":"🧤","腰部":"🔗",
  "腿部":"👖","脚部":"👢","耳饰":"💎","项链":"📿","手镯":"⛓️",
  "戒指1":"💍","戒指2":"💍"
}
