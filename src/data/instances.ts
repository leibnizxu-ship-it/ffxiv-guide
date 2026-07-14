export interface InstanceData {
  id: number
  name: string
  name_en: string
  name_ja: string
  timeLimit: number
  patch: number
  type: number
  level?: number
  itemLevel?: number
  boss?: string
}

export const instanceData: InstanceData[] = [
  { id:1, name:"监狱废墟托托·拉克千狱", name_en:"The Thousand Maws of Toto-Rak", name_ja:"監獄廃墟 トトラクの千獄", timeLimit:90, patch:2, type:2, level:24 },
  { id:2, name:"地下灵殿塔姆·塔拉墓园", name_en:"The Tam–Tara Deepcroft", name_ja:"地下霊殿 タムタラの墓所", timeLimit:90, patch:2, type:2, level:16 },
  { id:3, name:"封锁坑道铜铃铜山", name_en:"Copperbell Mines", name_ja:"封鎖坑道 カッパーベル銅山", timeLimit:90, patch:2, type:2, level:17 },
  { id:4, name:"天然要害沙斯塔夏溶洞", name_en:"Sastasha", name_ja:"天然要害 サスタシャ浸食洞", timeLimit:90, patch:2, type:2, level:15 },
  { id:5, name:"毒雾洞窟黄金谷", name_en:"The Aurum Vale", name_ja:"霧中行軍 オーラムヴェイル", timeLimit:90, patch:2, type:2, level:47 },
  { id:6, name:"名门府邸静语庄园", name_en:"Haukke Manor", name_ja:"名門屋敷 ハウケタ御用邸", timeLimit:90, patch:2, type:2, level:28 },
  { id:7, name:"魔兽领域日影地修炼所", name_en:"Brayflox Longstop", name_ja:"魔獣領域 ハラタリ修練所", timeLimit:90, patch:2, type:2, level:32 },
  { id:8, name:"休养胜地布雷福洛克斯野营地", name_en:"Brayflox Longstop", name_ja:"奪還支援 ブレイフロクスの野営地", timeLimit:90, patch:2, type:2, level:50 },
  { id:9, name:"古代遗迹喀恩埋没圣堂", name_en:"The Sunken Temple of Qarn", name_ja:"古代遺跡 カルン埋没寺院", timeLimit:90, patch:2, type:2, level:35 },
  { id:10, name:"神灵圣域放浪神古神殿", name_en:"The Wanderer Palace", name_ja:"神霊聖域 ワンダラーパレス", timeLimit:90, patch:2, type:2, level:50 },
  { id:11, name:"对龙城塞石卫塔", name_en:"The Stone Vigil", name_ja:"対竜城塞 ストーンヴィジル", timeLimit:90, patch:2, type:2, level:41 },
  { id:12, name:"流沙迷宫樵鸣洞", name_en:"Cutter Cry", name_ja:"流砂迷宮 カッターズクライ", timeLimit:90, patch:2, type:2, level:38 },
  { id:13, name:"山中战线泽梅尔要塞", name_en:"Dzemael Darkhold", name_ja:"山中戦線 ゼーメル要塞", timeLimit:90, patch:2, type:2, level:44 },
  { id:14, name:"邪教驻地无限城古堡", name_en:"The Lost City of Amdapor", name_ja:"邪教排撃 古城アムダプール", timeLimit:90, patch:2, type:2, level:50 },
  { id:15, name:"神兵要塞帝国南方堡", name_en:"Castrum Meridianum", name_ja:"神兵要塞 カストルム・メリディアヌム", timeLimit:90, patch:2, type:2, level:50 },
  { id:17, name:"领航明灯天狼星灯塔", name_en:"Pharos Sirius", name_ja:"怪鳥巨塔 シリウス大灯台", timeLimit:90, patch:2, type:2, level:50 },
  { id:18, name:"骚乱坑道铜铃铜山", name_en:"Copperbell Mines (Hard)", name_ja:"騒乱坑道 カッパーベル銅山", timeLimit:90, patch:2, type:2, level:50 },
  { id:19, name:"恶灵府邸静语庄园", name_en:"Haukke Manor (Hard)", name_ja:"凶夢屋敷 ハウケタ御用邸", timeLimit:90, patch:2, type:2, level:50 },
  { id:20, name:"纷争要地布雷福洛克斯野营地", name_en:"Brayflox Longstop (Hard)", name_ja:"紛争要地 ブレイフロクスの野営地", timeLimit:90, patch:2, type:2, level:50 },
  { id:21, name:"剑斗领域日影地修炼所", name_en:"Halatali (Hard)", name_ja:"剣闘領域 ハラタリ修練所", timeLimit:90, patch:2, type:2, level:50 },
  { id:22, name:"腐坏遗迹无限城市街古迹", name_en:"Amdapor Keep", name_ja:"腐敗遺跡 古アムダプール市街", timeLimit:90, patch:2, type:2, level:50 },
  { id:23, name:"财宝传说破舰岛", name_en:"Hullbreaker Isle", name_ja:"財宝伝説 ハルブレーカー・アイル", timeLimit:90, patch:2, type:2, level:50 },
  { id:24, name:"惨剧灵殿塔姆·塔拉墓园", name_en:"The Tam–Tara Deepcroft (Hard)", name_ja:"惨劇霊殿 タムタラの墓所", timeLimit:90, patch:2, type:2, level:50 },
  { id:25, name:"激战城塞石卫塔", name_en:"The Stone Vigil (Hard)", name_ja:"激戦城塞 ストーンヴィジル", timeLimit:90, patch:2, type:2, level:50 },
  { id:26, name:"苏醒遗迹喀恩埋没圣堂", name_en:"The Sunken Temple of Qarn (Hard)", name_ja:"遺跡救援 カルン埋没寺院", timeLimit:90, patch:2, type:2, level:50 },
  { id:27, name:"凛冽洞天披雪大冰壁", name_en:"Snowcloak", name_ja:"氷結潜窟 スノークローク大氷壁", timeLimit:90, patch:2, type:2, level:50 },
  { id:28, name:"逆转要害沙斯塔夏溶洞", name_en:"Sastasha (Hard)", name_ja:"逆襲要害 サスタシャ浸食洞", timeLimit:90, patch:2, type:2, level:50 },
  { id:29, name:"邪念妖地无限城古堡", name_en:"The Lost City of Amdapor (Hard)", name_ja:"邪念排撃 古城アムダプール", timeLimit:90, patch:2, type:2, level:50 },
  { id:30, name:"武装圣域放浪神古神殿", name_en:"The Wanderer Palace (Hard)", name_ja:"武装聖域 ワンダラーパレス", timeLimit:90, patch:2, type:2, level:50 },
  { id:31, name:"学识宝库迦巴勒幻想图书馆", name_en:"The Great Gubal Library", name_ja:"稀書収蔵 グブラ幻想図書館", timeLimit:90, patch:3, type:2, level:59 },
  { id:32, name:"幻龙残骸密约之塔", name_en:"The Aetherochemical Research Facility", name_ja:"幻龍残骸 黙約の塔", timeLimit:90, patch:3, type:2, level:60 },
  { id:33, name:"空中神域不获岛", name_en:"Neverreap", name_ja:"神域浮島 ネバーリープ", timeLimit:90, patch:3, type:2, level:60 },
  { id:34, name:"圣教中枢伊修加德教皇厅", name_en:"The Vault", name_ja:"強硬突入 イシュガルド教皇庁", timeLimit:90, patch:3, type:2, level:57 },
  { id:35, name:"博物战舰无限回廊", name_en:"The Fractal Continuum", name_ja:"巨大防壁 バエサルの長城", timeLimit:90, patch:3, type:2, level:60 },
  { id:36, name:"冰雪废堡暮卫塔", name_en:"The Dusk Vigil", name_ja:"廃砦調査 ダスクヴィジル", timeLimit:90, patch:3, type:2, level:51 },
  { id:37, name:"天山绝顶索姆阿尔灵峰", name_en:"Sohm Al", name_ja:"霊峰踏破 ソーム・アル", timeLimit:90, patch:3, type:2, level:53 },
  { id:38, name:"血战苍穹魔科学研究所", name_en:"The Aetherochemical Research Facility", name_ja:"蒼天聖戦 魔科学研究所", timeLimit:90, patch:3, type:2, level:60 },
  { id:39, name:"邪龙王座龙巢神殿", name_en:"The Aery", name_ja:"邪竜血戦 ドラゴンズエアリー", timeLimit:90, patch:3, type:2, level:55 },
  { id:40, name:"地脉灵灯天狼星灯塔", name_en:"Pharos Sirius (Hard)", name_ja:"制圧巨塔 シリウス大灯台", timeLimit:90, patch:3, type:2, level:60 },
  { id:41, name:"草木庭园圣茉夏娜植物园", name_en:"Saint Mocianne Arboretum", name_ja:"草木庭園 聖モシャーヌ植物園", timeLimit:90, patch:3, type:2, level:60 },
  { id:42, name:"神圣遗迹无限城市街古迹", name_en:"The Lost City of Amdapor (Normal)", name_ja:"神聖遺跡 古アムダプール市街", timeLimit:90, patch:3, type:2, level:50 },
  { id:43, name:"星海空间颠倒塔", name_en:"The Antitower", name_ja:"星海観測 逆さの塔", timeLimit:90, patch:3, type:2, level:60 },
  { id:44, name:"天龙宫殿忆罪宫", name_en:"Sohr Khai", name_ja:"天竜宮殿 ソール・カイ", timeLimit:90, patch:3, type:2, level:60 },
  { id:45, name:"黑涡传说破舰岛", name_en:"Hullbreaker Isle (Hard)", name_ja:"黒渦伝説 ハルブレーカー・アイル", timeLimit:90, patch:3, type:2, level:60 },
  { id:46, name:"险峻峡谷塞尔法特尔溪谷", name_en:"Xelphatol", name_ja:"峻厳渓谷 ゼルファトル", timeLimit:90, patch:3, type:2, level:60 },
  { id:47, name:"秘本宝库迦巴勒幻想图书馆", name_en:"The Great Gubal Library (Hard)", name_ja:"稀書検索 グブラ幻想図書館", timeLimit:90, patch:3, type:2, level:60 },
  { id:48, name:"坚牢铁壁巴埃萨长城", name_en:"Baelsar Wall", name_ja:"巨大防壁 バエサルの長城", timeLimit:90, patch:3, type:2, level:60 },
  { id:49, name:"天山深境索姆阿尔灵峰", name_en:"Sohm Al (Hard)", name_ja:"霊峰浄化 ソーム・アル", timeLimit:90, patch:3, type:2, level:60 },
  { id:86, name:"最终决战天幕魔导城", name_en:"The Praetorium", name_ja:"最終決戦 魔導城プラエトリウム", timeLimit:90, patch:2, type:2, level:50 }
]
