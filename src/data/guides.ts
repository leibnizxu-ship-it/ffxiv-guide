import type { StrategyGuide, ContentType } from '@/types'

export const guides: StrategyGuide[] = [
  // ==================== 绝本 ====================
  {
    id: 'dsr',
    title: '绝龙诗战争',
    type: 'ultimate', patch: '6.1', level: 90, itemLevel: 605,
    bossName: '骑神托尔丹',
    summary: '以苍穹之禁城主线中龙诗战争为蓝本的高难绝本，包含骑神托尔丹、邪龙尼德霍格及圣龙赫拉斯瓦尔格的连续战斗。共分 7 个阶段。',
    tips: ['P3 陨石阶段注意分散站位', 'P5 双龙阶段双T各拉一龙', 'P6 邪眼阶段观察眼睛方向', 'P7 最终阶段治疗压力极大'],
    tags: ['绝本', '90级', '6.x', '龙诗战争'],
    phases: [
      { name: 'P1 - 骑神托尔丹 (100%-80%)', description: '开场与骑神交锋，以剑技为主。', abilities: [
        { time:'0:15',name:'圣光剑舞',type:'raidwide',description:'全场AOE',tips:'减伤覆盖' },
        { time:'0:30',name:'天罚之剑',type:'tankbuster',description:'对当前T死刑',tips:'T开大减伤' },
        { time:'0:45',name:'骑士方阵',type:'mechanic',description:'召唤骑士分身范围攻击',tips:'观察分身位置' },
        { time:'1:15',name:'苍穹龙炎',type:'raidwide',description:'高伤害全屏AOE',tips:'全团减伤+群盾' }
      ]},
      { name: 'P2 - 圣骑士团 (80%-60%)', description: '骑神召唤圣骑士团，需处理连线机制。', abilities: [
        { time:'2:00',name:'圣骑士召唤',type:'mechanic',description:'召唤两名圣骑士连线玩家',tips:'被连线者远离人群' },
        { time:'2:20',name:'光之枪',type:'spread',description:'点名多名玩家范围AOE',tips:'分散站位' },
        { time:'2:45',name:'绝对零度',type:'mechanic',description:'场地边缘冰柱需击碎',tips:'DPS优先处理' }
      ]},
      { name: 'P3 - 陨石阶段 (60%-45%)', description: '高强度陨石处理，精确站位分配。', abilities: [
        { time:'3:30',name:'陨石预报',type:'mechanic',description:'场地标记陨石落点',tips:'8人分配到8个标记点' },
        { time:'3:50',name:'天降陨石',type:'spread',description:'所有玩家位置落下陨石',tips:'确保不重叠不覆盖中场' },
        { time:'4:15',name:'陨石冲击',type:'raidwide',description:'陨石残留区域爆炸',tips:'远离陨石落点' }
      ]},
      { name: 'P4 - 邪龙尼德霍格 (45%-30%)', description: '邪龙登场，死亡轮回与塔机制。', abilities: [
        { time:'5:00',name:'死亡轮回',type:'mechanic',description:'点名多人连续范围攻击',tips:'被点名依次移动' },
        { time:'5:30',name:'暗影之塔',type:'mechanic',description:'需要玩家踩塔分摊',tips:'每塔至少2人' },
        { time:'6:00',name:'龙之咆哮',type:'knockback',description:'全屏击退+高伤害',tips:'防击退+减伤' }
      ]},
      { name: 'P5 - 双龙阶段 (30%-20%)', description: '邪龙与圣龙同时登场。', abilities: [
        { time:'6:45',name:'双龙吐息',type:'mechanic',description:'两龙同时锥形AOE',tips:'双T将龙面向场外' },
        { time:'7:10',name:'龙之羁绊',type:'tankbuster',description:'双T同时大量伤害',tips:'各自开好大减伤' },
        { time:'7:35',name:'圣龙之加护',type:'raidwide',description:'全屏AOE+治疗debuff',tips:'减伤+HOT预铺' }
      ]},
      { name: 'P6 - 邪眼阶段 (20%-10%)', description: '全屏邪眼机制。', abilities: [
        { time:'8:15',name:'邪眼凝视',type:'mechanic',description:'多个眼睛释放直线/扇形AOE',tips:'根据眼睛方向站安全区' },
        { time:'8:40',name:'千眼',type:'mechanic',description:'大量眼睛同时判定',tips:'记住出现顺序逐次躲避' }
      ]},
      { name: 'P7 - 最终阶段 (10%-0%)', description: '骑神与双龙融合的最终形态。', abilities: [
        { time:'9:30',name:'终焉之剑',type:'tankbuster',description:'极高伤害T死刑',tips:'T必须开无敌或全减伤' },
        { time:'10:00',name:'龙诗终结',type:'raidwide',description:'连续多次全屏AOE',tips:'全团减伤链，LB3备用' }
      ]}
    ],
    positionDiagrams: [{ title:'P3 陨石站位', width:400, height:400, marks:[
      {id:'n',label:'N',x:200,y:30},{id:'ne',label:'NE',x:340,y:80},{id:'e',label:'E',x:370,y:200},{id:'se',label:'SE',x:340,y:320},
      {id:'s',label:'S',x:200,y:370},{id:'sw',label:'SW',x:60,y:320},{id:'w',label:'W',x:30,y:200},{id:'nw',label:'NW',x:60,y:80}
    ]}]
  },
  {
    id: 'top',
    title: '绝欧米茄检证战',
    type: 'ultimate', patch: '6.3', level: 90, itemLevel: 630,
    bossName: '欧米茄',
    summary: '以欧米茄系列任务为蓝本的绝本，包含多种形态。共 6 个阶段，P5/P6 为最终检测。',
    tips: ['P1男女组注意蓝黄debuff传递', 'P2欧米茄-M阶段注意远近线', 'P3需要精确光线反射站位', 'P5三角攻击是核心灭点', 'P6 DPS检测极高'],
    tags: ['绝本', '90级', '6.x', '欧米茄'],
    phases: [
      { name: 'P1 - 欧米茄 (100%-85%)', description: '基础攻击模式。', abilities: [
        { time:'0:10',name:'波动炮',type:'tankbuster',description:'直线范围死刑',tips:'T面向场外' },
        { time:'0:25',name:'目标分析',type:'mechanic',description:'点名多人需处理',tips:'根据debuff分散或集合' },
        { time:'0:50',name:'扩散射线',type:'raidwide',description:'全屏AOE',tips:'减伤' }
      ]},
      { name: 'P2 - 欧米茄-M/F (85%-65%)', description: '男女双形态，蓝黄debuff。', abilities: [
        { time:'1:30',name:'蓝黄连线',type:'mechanic',description:'蓝debuff远离黄debuff靠近',tips:'记住颜色规则' },
        { time:'2:00',name:'分摊/分散',type:'stack',description:'黄debuff集合分摊',tips:'被点名者集合' },
        { time:'2:30',name:'远近线',type:'mechanic',description:'根据线颜色判断远近',tips:'蓝近黄远' }
      ]},
      { name: 'P3 - 光线反射 (65%-50%)', description: '光线经镜子反射机制。', abilities: [
        { time:'3:00',name:'光线发射',type:'mechanic',description:'BOSS发射光线经镜子反射',tips:'站镜子后方安全区' },
        { time:'3:30',name:'镜子调整',type:'mechanic',description:'镜子位置改变',tips:'快速调整站位' }
      ]},
      { name: 'P4 - 欧米茄-F (50%-35%)', description: '女性形态强化。', abilities: [
        { time:'4:00',name:'三角攻击',type:'mechanic',description:'三角范围攻击',tips:'按宏站三角安全区' },
        { time:'4:30',name:'波动连射',type:'raidwide',description:'连续AOE',tips:'减伤链' }
      ]},
      { name: 'P5 - 最终欧米茄 (35%-15%)', description: '核心检测阶段。', abilities: [
        { time:'5:15',name:'三角攻击·改',type:'mechanic',description:'强化三角攻击',tips:'严格按AFK宏站位' },
        { time:'5:45',name:'光线+三角',type:'mechanic',description:'光线与三角同时判定',tips:'优先级：光线>三角' }
      ]},
      { name: 'P6 - 狂暴阶段 (15%-0%)', description: '软狂暴。', abilities: [
        { time:'6:30',name:'极限波动炮',type:'tankbuster',description:'极高伤害死刑',tips:'无敌或全部减伤' },
        { time:'7:00',name:'最终波动炮',type:'raidwide',description:'全屏极高伤害',tips:'LB3' }
      ]}
    ],
    positionDiagrams: [{ title:'P5三角攻击站位', width:400, height:400, marks:[
      {id:'t1',label:'T1',x:120,y:120,role:'tank'},{id:'t2',label:'T2',x:280,y:120,role:'tank'},
      {id:'h1',label:'H1',x:120,y:280,role:'healer'},{id:'h2',label:'H2',x:280,y:280,role:'healer'},
      {id:'d1',label:'D1',x:60,y:60,role:'dps'},{id:'d2',label:'D2',x:340,y:60,role:'dps'},
      {id:'d3',label:'D3',x:60,y:340,role:'dps'},{id:'d4',label:'D4',x:340,y:340,role:'dps'}
    ]}]
  },
  {
    id: 'tea',
    title: '绝亚历山大',
    type: 'ultimate', patch: '5.1', level: 80, itemLevel: 475,
    bossName: '亚历山大',
    summary: '以亚历山大系列为蓝本的绝本。水基佬、BJ/CC、时光停止、最终亚历山大的经典机制。共 4 个阶段。',
    tips: ['P1水基佬双T精准换嘲', 'P2 BJ/CC注意双目标血量平衡', 'P3时光停止全员背板', 'P4命运之轮+神圣审判'],
    tags: ['绝本', '80级', '5.x', '亚历山大'],
    phases: [
      { name: 'P1 - 水基佬 (100%-80%)', description: '双目标Boss。', abilities: [
        { time:'0:12',name:'水炮',type:'tankbuster',description:'双T死刑',tips:'各自开减伤' },
        { time:'0:30',name:'水龙卷',type:'mechanic',description:'场地水柱',tips:'躲避水柱区域' },
        { time:'0:50',name:'水牢',type:'mechanic',description:'点名玩家冰冻',tips:'队友打破冰冻' }
      ]},
      { name: 'P2 - BJ/CC (80%-55%)', description: '双目标阶段。', abilities: [
        { time:'1:40',name:'双重攻击',type:'raidwide',description:'双Boss同时AOE',tips:'双倍减伤' },
        { time:'2:10',name:'电流连线',type:'mechanic',description:'多人连线传播伤害',tips:'被连线者保持距离' }
      ]},
      { name: 'P3 - 时光停止 (55%-25%)', description: '核心机制背板阶段。', abilities: [
        { time:'3:00',name:'时光停止',type:'mechanic',description:'全场冻结需提前站位',tips:'背板时间轴' },
        { time:'3:30',name:'命运之轮',type:'mechanic',description:'转盘判定',tips:'观察转盘方向' }
      ]},
      { name: 'P4 - 最终亚历山大 (25%-0%)', description: '最终阶段。', abilities: [
        { time:'4:30',name:'神圣审判',type:'mechanic',description:'连续大规模机制',tips:'按攻略站位图执行' },
        { time:'5:30',name:'三段LB',type:'mechanic',description:'3次极限技',tips:'T LB->治疗LB->DPS LB' },
        { time:'6:30',name:'终焉判决',type:'raidwide',description:'狂暴全屏',tips:'在此之前击杀' }
      ]}
    ],
    positionDiagrams: [{ title:'P4神圣审判站位', width:400, height:400, marks:[
      {id:'mt',label:'MT',x:200,y:60,role:'tank'},{id:'st',label:'ST',x:200,y:340,role:'tank'},
      {id:'h1',label:'H1',x:60,y:140,role:'healer'},{id:'h2',label:'H2',x:340,y:140,role:'healer'},
      {id:'d1',label:'D1',x:100,y:260,role:'dps'},{id:'d2',label:'D2',x:300,y:260,role:'dps'},
      {id:'d3',label:'D3',x:60,y:320,role:'dps'},{id:'d4',label:'D4',x:340,y:320,role:'dps'}
    ]}]
  },
  {
    id: 'uwu',
    title: '究极神兵绝境战',
    type: 'ultimate', patch: '4.3', level: 70, itemLevel: 375,
    bossName: '究极神兵',
    summary: '以2.0主线究极神兵为蓝本的绝本。迦楼罗→泰坦→伊芙利特→究极神兵的顺序战斗，包含经典的"觉醒"阶段。',
    tips: ['迦楼罗阶段注意羽毛处理', '泰坦阶段注意石牢位置', '伊芙利特阶段注意地火爆发', '觉醒阶段需要严格减伤链'],
    tags: ['绝本', '70级', '4.x', '究极神兵'],
    phases: [
      { name: 'P1 - 迦楼罗', description: '风神先发，羽毛处理是关键。', abilities: [
        { time:'0:15',name:'烈风波',type:'raidwide',description:'全屏风AOE',tips:'减伤' },
        { time:'0:35',name:'羽毛爆散',type:'mechanic',description:'羽毛落点AOE',tips:'远离羽毛落点' },
        { time:'0:55',name:'大气爆发',type:'knockback',description:'击退+高伤害',tips:'防击退' }
      ]},
      { name: 'P2 - 泰坦', description: '土神登场，石牢处理。', abilities: [
        { time:'1:30',name:'大地之怒',type:'raidwide',description:'全屏AOE',tips:'减伤' },
        { time:'1:50',name:'岩石牢狱',type:'mechanic',description:'点名石牢',tips:'远离石牢' },
        { time:'2:15',name:'山崩',type:'knockback',description:'击退',tips:'防击退' }
      ]},
      { name: 'P3 - 伊芙利特', description: '火神阶段，地火处理。', abilities: [
        { time:'2:45',name:'地狱火炎',type:'raidwide',description:'全屏火AOE',tips:'减伤' },
        { time:'3:10',name:'地火喷发',type:'mechanic',description:'地面爆发',tips:'观察地面躲安全区' }
      ]},
      { name: 'P4 - 究极神兵', description: '最终Boss，三神能力合一。', abilities: [
        { time:'3:50',name:'究极',type:'raidwide',description:'究极魔法全屏',tips:'LB3' },
        { time:'4:20',name:'三神之力',type:'mechanic',description:'同时释放三神技能',tips:'优先级处理' }
      ]},
      { name: '觉醒', description: '隐藏阶段，极高伤害。', abilities: [
        { time:'5:00',name:'觉醒',type:'raidwide',description:'连续爆发',tips:'全团减伤全开' }
      ]}
    ],
    positionDiagrams: [{ title:'P2泰坦石牢站位', width:400, height:400, marks:[
      {id:'mt',label:'MT',x:200,y:60,role:'tank'},{id:'st',label:'ST',x:200,y:340,role:'tank'},
      {id:'h1',label:'H1',x:60,y:140,role:'healer'},{id:'h2',label:'H2',x:340,y:140,role:'healer'},
      {id:'p1',label:'D1',x:80,y:280,role:'dps'},{id:'p2',label:'D2',x:180,y:340,role:'dps'},
      {id:'p3',label:'D3',x:220,y:340,role:'dps'},{id:'p4',label:'D4',x:320,y:280,role:'dps'}
    ]}]
  },
  {
    id: 'ucob',
    title: '绝巴哈姆特',
    type: 'ultimate', patch: '4.1', level: 70, itemLevel: 345,
    bossName: '巴哈姆特',
    summary: '以巴哈姆特大迷宫为蓝本的绝本。双塔→奈尔→巴哈姆特→黄金巴哈姆特的经典流程。共 5 个阶段。',
    tips: ['双塔阶段注意换嘲', '奈尔阶段注意黑球处理', '连击阶段需要精确站位', '黄金巴哈姆特DPS检测', '全程注意死亡轮回机制'],
    tags: ['绝本', '70级', '4.x', '巴哈姆特'],
    phases: [
      { name: 'P1 - 双塔', description: '两个塔型Boss轮流处理。', abilities: [
        { time:'0:10',name:'塔攻击',type:'tankbuster',description:'双T死刑',tips:'各自减伤' },
        { time:'0:30',name:'死亡轮回',type:'mechanic',description:'连线传递伤害',tips:'按顺序传递' },
        { time:'0:50',name:'塔爆',type:'raidwide',description:'塔爆炸全屏',tips:'减伤' }
      ]},
      { name: 'P2 - 奈尔', description: '奈尔·神·达纳斯登场。', abilities: [
        { time:'1:20',name:'黑球',type:'mechanic',description:'召唤黑球需处理',tips:'远离黑球' },
        { time:'1:45',name:'月流',type:'mechanic',description:'月流AOE',tips:'躲避引导' }
      ]},
      { name: 'P3 - 巴哈姆特', description: '巴哈姆特本体登场。', abilities: [
        { time:'2:20',name:'百万核爆',type:'raidwide',description:'高伤害全屏',tips:'全减伤' },
        { time:'2:50',name:'天坠',type:'mechanic',description:'点名落陨石',tips:'边放陨石' }
      ]},
      { name: 'P4 - 连击阶段', description: '高强度连击机制。', abilities: [
        { time:'3:30',name:'连击·序',type:'mechanic',description:'连续机制第一波',tips:'按攻略站安全点' },
        { time:'4:00',name:'连击·破',type:'mechanic',description:'连续机制第二波',tips:'背板走位' },
        { time:'4:30',name:'连击·急',type:'mechanic',description:'连续机制第三波',tips:'全员站位固定' }
      ]},
      { name: 'P5 - 黄金巴哈姆特', description: '最终形态。', abilities: [
        { time:'5:15',name:'黄金核爆',type:'raidwide',description:'极高伤害全屏',tips:'LB3 + 全减伤' },
        { time:'5:45',name:'狂暴',type:'raidwide',description:'不可承受伤害',tips:'DPS检测，在此之前击杀' }
      ]}
    ],
    positionDiagrams: [{ title:'P3天坠站位', width:400, height:400, marks:[
      {id:'h1',label:'H1',x:120,y:120,role:'healer'},{id:'h2',label:'H2',x:280,y:120,role:'healer'},
      {id:'mt',label:'MT',x:120,y:200,role:'tank'},{id:'st',label:'ST',x:280,y:200,role:'tank'},
      {id:'d1',label:'D1',x:80,y:320,role:'dps'},{id:'d2',label:'D2',x:180,y:340,role:'dps'},
      {id:'d3',label:'D3',x:220,y:340,role:'dps'},{id:'d4',label:'D4',x:320,y:320,role:'dps'}
    ]}]
  },

  // ==================== 零式 ====================
  {
    id: 'm4s',
    title: '至天之座零式 4层',
    type: 'savage', patch: '7.05', level: 100, itemLevel: 710,
    bossName: '至天女王',
    summary: '7.0零式第4层，至天女王最终形态。机制密集需高度协调，剑技+魔法双形态。',
    tips: ['一运注意剑朝向判断安全区', '二运陨石+分散需严格站位', '剑形态死刑需T换嘲', '魔法形态AOE频率极高'],
    tags: ['零式', '100级', '7.x', '至天之座'],
    phases: [
      { name: 'P1 - 开场 (100%-75%)', description: '剑技为主。', abilities: [
        { time:'0:10',name:'王者之剑',type:'tankbuster',description:'物理死刑',tips:'T开减伤可换嘲' },
        { time:'0:25',name:'剑阵',type:'mechanic',description:'多把剑判断安全区',tips:'站剑背向' },
        { time:'0:50',name:'女王裁决',type:'raidwide',description:'全屏AOE',tips:'减伤+群盾' }
      ]},
      { name: 'P2 - 剑技一运 (75%-55%)', description: '核心机制一运。', abilities: [
        { time:'1:20',name:'剑之试炼',type:'mechanic',description:'点名4人连线',tips:'互相远离' },
        { time:'1:45',name:'光之塔',type:'stack',description:'4座塔需踩',tips:'每塔2人' },
        { time:'2:10',name:'剑雨',type:'spread',description:'全员分散',tips:'预设站位点' }
      ]},
      { name: 'P3 - 魔法转阶段 (55%-40%)', description: '切换魔法形态。', abilities: [
        { time:'2:50',name:'陨石召唤',type:'mechanic',description:'点名放陨石',tips:'陨石靠边不重叠' },
        { time:'3:20',name:'魔力爆发',type:'raidwide',description:'连续魔法AOE',tips:'减伤链排好' }
      ]},
      { name: 'P4 - 魔法二运 (40%-20%)', description: '陨石+分摊+分散。', abilities: [
        { time:'4:00',name:'陨石分散',type:'spread',description:'放陨石同时分散',tips:'按宏站位' },
        { time:'4:30',name:'魔法分摊',type:'stack',description:'集合分摊',tips:'全员集标记点' },
        { time:'5:00',name:'女王怒火',type:'tankbuster',description:'双T魔法死刑',tips:'双T开大减伤' }
      ]},
      { name:'狂暴 (20%-0%)', description:'软狂暴。', abilities: [
        { time:'5:45',name:'终末之剑',type:'raidwide',description:'极高伤害连续AOE',tips:'全减伤LB3' },
        { time:'6:30',name:'狂暴',type:'raidwide',description:'强制结束',tips:'DPS检测' }
      ]}
    ],
    positionDiagrams: [{ title:'一运分散站位', width:400, height:400, marks:[
      {id:'h1',label:'H1',x:100,y:100,role:'healer'},{id:'h2',label:'H2',x:300,y:100,role:'healer'},
      {id:'mt',label:'MT',x:100,y:200,role:'tank'},{id:'st',label:'ST',x:300,y:200,role:'tank'},
      {id:'d1',label:'D1',x:80,y:320,role:'dps'},{id:'d2',label:'D2',x:180,y:340,role:'dps'},
      {id:'d3',label:'D3',x:220,y:340,role:'dps'},{id:'d4',label:'D4',x:320,y:320,role:'dps'}
    ]}]
  },
  {
    id: 'm3s',
    title: '至天之座零式 3层',
    type: 'savage', patch: '7.05', level: 100, itemLevel: 710,
    bossName: '融合体',
    summary: '7.0零式第3层，融合体Boss。二重融合与极性转换，需灵活应对组合机制。',
    tips: ['二重融合组合两种机制同时处理', '极性转换注意正负极连线', '融合体分裂时注意分身处理优先级'],
    tags: ['零式', '100级', '7.x', '至天之座'],
    phases: [
      { name: 'P1 - 融合体 (100%-75%)', description: '单一Boss机制直接。', abilities: [
        { time:'0:10',name:'融合打击',type:'tankbuster',description:'物理死刑',tips:'T开减伤' },
        { time:'0:25',name:'分裂攻击',type:'mechanic',description:'BOSS分裂为多个分身',tips:'优先击杀指定分身' },
        { time:'0:50',name:'融合爆发',type:'raidwide',description:'全屏AOE',tips:'减伤' }
      ]},
      { name: 'P2 - 二重融合 (75%-50%)', description: '两种机制同时出现。', abilities: [
        { time:'1:20',name:'二重融合',type:'mechanic',description:'组合两种机制',tips:'根据组合判断' },
        { time:'1:50',name:'融合·火炎',type:'stack',description:'火焰分摊',tips:'集合' },
        { time:'2:10',name:'融合·冰霜',type:'spread',description:'冰霜分散',tips:'分散' }
      ]},
      { name: 'P3 - 极性转换 (50%-30%)', description: '正负极配对。', abilities: [
        { time:'2:45',name:'极性转换',type:'mechanic',description:'全员获得正/负极',tips:'正负配对抵消' },
        { time:'3:15',name:'极性爆发',type:'raidwide',description:'极性判定后全屏AOE',tips:'配对失败会团灭' }
      ]},
      { name:'狂暴 (30%-0%)', description:'软狂暴。', abilities: [
        { time:'4:00',name:'融合狂暴',type:'raidwide',description:'连续全屏AOE',tips:'全减伤+LB3' }
      ]}
    ],
    positionDiagrams: [{ title:'极性配对站位', width:400, height:400, marks:[
      {id:'p1',label:'+1',x:80,y:120},{id:'n1',label:'-1',x:120,y:120},
      {id:'p2',label:'+2',x:280,y:120},{id:'n2',label:'-2',x:320,y:120},
      {id:'p3',label:'+3',x:80,y:280},{id:'n3',label:'-3',x:120,y:280},
      {id:'p4',label:'+4',x:280,y:280},{id:'n4',label:'-4',x:320,y:280}
    ], lines:[{from:'p1',to:'n1'},{from:'p2',to:'n2'},{from:'p3',to:'n3'},{from:'p4',to:'n4'}] }]
  },
  {
    id: 'm2s',
    title: '至天之座零式 2层',
    type: 'savage', patch: '7.05', level: 100, itemLevel: 710,
    bossName: '恶作剧之蜂',
    summary: '7.0零式第2层，蜂型Boss。心控和毒液为主，需频繁处理爱心和debuff传递。',
    tips: ['爱心机制：队友靠近解除', '毒液debuff需传递给下一个人', '蜂群阶段优先击杀小怪', 'Boss频繁移动注意身位'],
    tags: ['零式', '100级', '7.x', '至天之座'],
    phases: [
      { name: 'P1 - 蜂后 (100%-70%)', description: '处理爱心机制。', abilities: [
        { time:'0:08',name:'甜蜜毒针',type:'tankbuster',description:'T死刑+毒DOT',tips:'T开减伤' },
        { time:'0:30',name:'爱心爆炸',type:'mechanic',description:'点名多名玩家爱心',tips:'队友靠近解除' },
        { time:'1:00',name:'蜂毒喷射',type:'raidwide',description:'全屏AOE+毒DOT',tips:'减伤+HOT' }
      ]},
      { name: 'P2 - 蜂群召唤 (70%-45%)', description: '召唤小怪。', abilities: [
        { time:'1:30',name:'蜂群召唤',type:'mechanic',description:'召唤多只蜜蜂',tips:'DPS优先击杀' },
        { time:'2:00',name:'毒液传递',type:'mechanic',description:'毒液debuff需传递',tips:'按顺序传递不可漏' }
      ]},
      { name: 'P3 - 狂暴蜂刺 (45%-0%)', description: '加速阶段。', abilities: [
        { time:'2:45',name:'连续蜂刺',type:'raidwide',description:'高频AOE',tips:'治疗全力加血' },
        { time:'3:15',name:'致死毒针',type:'tankbuster',description:'极高伤害死刑',tips:'T无敌或全减伤' }
      ]}
    ],
    positionDiagrams: [{ title:'毒液传递顺序', width:400, height:200, marks:[
      {id:'1',label:'1st',x:40,y:100},{id:'2',label:'2nd',x:130,y:100},
      {id:'3',label:'3rd',x:220,y:100},{id:'4',label:'4th',x:310,y:100}
    ], lines:[{from:'1',to:'2'},{from:'2',to:'3'},{from:'3',to:'4'}] }]
  },
  {
    id: 'm1s',
    title: '至天之座零式 1层',
    type: 'savage', patch: '7.05', level: 100, itemLevel: 710,
    bossName: '暗黑猎人',
    summary: '7.0零式第1层，相对友好的入门零式。四连攻击和分摊机制为主。',
    tips: ['四连攻击顺序：左-右-左-右', '分摊标记注意分配编号', '不要在毒圈里站太久'],
    tags: ['零式', '100级', '7.x', '至天之座'],
    phases: [{ name:'全程', description:'单一阶段循环处理。', abilities: [
      { time:'0:12',name:'暗黑斩',type:'tankbuster',description:'物理死刑',tips:'T开减伤' },
      { time:'0:30',name:'四连击',type:'mechanic',description:'连续四次范围攻击',tips:'左右交替躲避' },
      { time:'1:00',name:'暗影分摊',type:'stack',description:'需多人分摊',tips:'至少4人集合' },
      { time:'1:30',name:'毒液喷涌',type:'spread',description:'全员分散',tips:'按站位点分散' },
      { time:'2:00',name:'暗影之雨',type:'raidwide',description:'全屏AOE',tips:'减伤覆盖' }
    ]}],
    positionDiagrams: []
  },

  // ==================== 极神 ====================
  {
    id: 'valigarmanda-ex',
    title: '弑神 Valigarmanda 歼殛战',
    type: 'extreme', patch: '7.0', level: 100, itemLevel: 690,
    bossName: 'Valigarmanda',
    summary: '7.0极神，冰火雷三属性机制。根据属性判断处理方式。',
    tips: ['冰阶段远离BOSS避免冻结', '火阶段集合分摊烧伤', '雷阶段分散避免传递', '三色地板注意颜色对应安全区'],
    tags: ['极神', '100级', '7.x'],
    phases: [
      { name:'冰阶段', description:'全场冻结机制。', abilities: [
        { time:'0:15',name:'冰霜吐息',type:'raidwide',description:'全屏冰AOE',tips:'减伤' },
        { time:'0:35',name:'冻结',type:'mechanic',description:'点名多人放冰圈',tips:'冰圈靠边' },
        { time:'1:00',name:'冰柱',type:'stack',description:'集合分摊',tips:'全团集合' }
      ]},
      { name:'火阶段', description:'高伤害阶段。', abilities: [
        { time:'1:30',name:'火焰风暴',type:'raidwide',description:'高伤害火AOE',tips:'全减伤' },
        { time:'1:50',name:'灼热烙印',type:'tankbuster',description:'T死刑+DOT',tips:'T开无敌或全减伤' }
      ]},
      { name:'雷阶段', description:'分散处理传递伤害。', abilities: [
        { time:'2:20',name:'雷电链',type:'mechanic',description:'连线传递伤害',tips:'远离人群' },
        { time:'2:45',name:'雷击',type:'spread',description:'全员分散',tips:'按预设站位' }
      ]}
    ],
    positionDiagrams: [{ title:'冰阶段分散站位', width:400, height:400, marks:[
      {id:'n',label:'N-冰圈',x:200,y:50},{id:'e',label:'E-冰圈',x:350,y:200},
      {id:'s',label:'S-冰圈',x:200,y:350},{id:'w',label:'W-冰圈',x:50,y:200},
      {id:'boss',label:'BOSS',x:200,y:200}
    ]}]
  },
  {
    id: 'zoraal-ja-ex',
    title: '武王 Zoraal Ja 歼殛战',
    type: 'extreme', patch: '7.0', level: 100, itemLevel: 690,
    bossName: 'Zoraal Ja',
    summary: '7.0极神，刀技和分身机制。同时处理真身和分身的攻击。',
    tips: ['分身阶段区分真假身', '刀气判定观察刀的方向', '分散站位避免多重刀气', '转阶段快速击杀双刀分身'],
    tags: ['极神', '100级', '7.x'],
    phases: [
      { name:'P1 - 武王 (100%-60%)', description:'单刀形态。', abilities: [
        { time:'0:12',name:'居合斩',type:'tankbuster',description:'直线死刑',tips:'T侧身回避或开减伤' },
        { time:'0:30',name:'剑气',type:'raidwide',description:'全屏AOE',tips:'减伤' },
        { time:'0:50',name:'刀气斩',type:'mechanic',description:'扇形刀气攻击',tips:'观察刀方向' }
      ]},
      { name:'P2 - 双刀分身 (60%-30%)', description:'召唤分身。', abilities: [
        { time:'1:30',name:'分身召唤',type:'mechanic',description:'召唤双刀分身',tips:'双T各拉一个' },
        { time:'2:00',name:'双刀乱舞',type:'stack',description:'集合分摊',tips:'全团集合' },
        { time:'2:30',name:'分身合击',type:'raidwide',description:'双目标同时AOE',tips:'高减伤覆盖' }
      ]},
      { name:'狂暴 (30%-0%)', description:'加速狂暴。', abilities: [
        { time:'3:15',name:'武王真打',type:'raidwide',description:'连续AOE+死刑',tips:'全减伤+LB3' }
      ]}
    ],
    positionDiagrams: [{ title:'分身阶段站位', width:400, height:400, marks:[
      {id:'boss1',label:'真身',x:120,y:200},{id:'boss2',label:'分身',x:280,y:200},
      {id:'party',label:'小队',x:200,y:340}
    ]}]
  },
  {
    id: 'hydaelyn-ex',
    title: '海德林歼殛战',
    type: 'extreme', patch: '6.0', level: 90, itemLevel: 560,
    bossName: '海德林',
    summary: '6.0极神，以水晶机制为核心。光之水晶和暗之水晶交替出现，需要正确站位触发。',
    tips: ['水晶机制是核心：按颜色站对应水晶', '光水晶阶段需要集合', '暗水晶阶段需要分散', 'BOSS会切换形态注意技能变化'],
    tags: ['极神', '90级', '6.x'],
    phases: [
      { name:'光之形态', description:'光属性攻击。', abilities: [
        { time:'0:12',name:'光之波动',type:'raidwide',description:'全屏光AOE',tips:'减伤' },
        { time:'0:30',name:'水晶-光',type:'mechanic',description:'光水晶出现',tips:'靠近光水晶' }
      ]},
      { name:'暗之形态', description:'暗属性攻击。', abilities: [
        { time:'1:00',name:'暗之波动',type:'raidwide',description:'全屏暗AOE',tips:'减伤' },
        { time:'1:20',name:'水晶-暗',type:'mechanic',description:'暗水晶出现',tips:'远离暗水晶' }
      ]}
    ],
    positionDiagrams: []
  },

  // ==================== 团本 ====================
  {
    id: 'jeuno',
    title: '朱诺：第一区画',
    type: 'alliance', patch: '7.1', level: 100, itemLevel: 695,
    bossName: '暗影领主',
    summary: '7.1 24人团本，FF11联动内容。四个BOSS各有特色机制，三队协同。',
    tips: ['三队各有分工听指挥分配', 'BOSS机制影响全场', 'Alliance Raid机制不致命但拖累全队'],
    tags: ['团本', '100级', '7.x', '联动'],
    phases: [{ name:'全程', description:'四个BOSS 24人分三队。', abilities: [
      { time:'BOSS1',name:'暗影爆破',type:'raidwide',description:'全团AOE',tips:'团队减伤' },
      { time:'BOSS2',name:'区域分割',type:'mechanic',description:'场地分割为三个区域',tips:'三队各占一个区域' },
      { time:'BOSS3',name:'暗影连线',type:'mechanic',description:'跨队连线',tips:'被连线者靠近彼此' }
    ]}],
    positionDiagrams: []
  },

  // ==================== 副本 ====================
  {
    id: 'tam-tara',
    title: '天然要害 沙斯塔夏溶洞',
    type: 'dungeon', patch: '2.0', level: 15, itemLevel: 0,
    bossName: '克拉肯',
    summary: '低等级练级副本，机制简单，适合新手。',
    tips: ['注意打断触手AOE', '优先击杀小触手', 'BOSS房不要站墨汁里'],
    tags: ['副本', '15级', '2.x', '练级'],
    phases: [{ name:'全程', description:'三组BOSS。', abilities: [
      { time:'任意',name:'墨汁喷射',type:'mechanic',description:'前方锥形范围攻击',tips:'站BOSS侧面' },
      { time:'任意',name:'触手横扫',type:'raidwide',description:'全屏AOE',tips:'治疗注意加血' }
    ]}],
    positionDiagrams: []
  },
  {
    id: 'dead-ends',
    title: '终末幻想 死亡尽头',
    type: 'dungeon', patch: '6.0', level: 90, itemLevel: 540,
    bossName: '终末之兽',
    summary: '6.0主线满级副本，三个BOSS代表不同的终末危机。道中注意即死机制。',
    tips: ['老一躲避陨石和风圈', '老二蝴蝶阶段不要看BOSS', '老三即死圈必须第一时间远离'],
    tags: ['副本', '90级', '6.x', '主线'],
    phases: [{ name:'全程', description:'三个BOSS。', abilities: [
      { time:'老一',name:'陨石召唤',type:'mechanic',description:'场地落陨石',tips:'观察落点躲避' },
      { time:'老二',name:'死亡凝视',type:'mechanic',description:'看到BOSS会石化',tips:'转身背对' },
      { time:'老三',name:'即死宣告',type:'mechanic',description:'地面即死圈',tips:'立即远离' }
    ]}],
    positionDiagrams: []
  },
  {
    id: 'smileton',
    title: '异界遗构 微笑之都',
    type: 'dungeon', patch: '6.0', level: 90, itemLevel: 540,
    bossName: '微笑管理员',
    summary: '6.0满级副本，以科技感和幽默为主题。机制有创意但难度适中。',
    tips: ['BOSS1注意躲避激光网格', 'BOSS2注意小怪处理', 'BOSS3注意地板变化'],
    tags: ['副本', '90级', '6.x'],
    phases: [{ name:'全程', description:'三个BOSS。', abilities: [
      { time:'BOSS1',name:'激光网格',type:'mechanic',description:'地面发射激光',tips:'站网格空隙' },
      { time:'BOSS2',name:'小怪召唤',type:'mechanic',description:'召唤小怪',tips:'AOE清理' },
      { time:'BOSS3',name:'地板反转',type:'mechanic',description:'地板变化',tips:'观察安全区' }
    ]}],
    positionDiagrams: []
  }
]

export function getGuideById(id: string): StrategyGuide | undefined {
  return guides.find(g => g.id === id)
}

export function searchGuides(query: string): StrategyGuide[] {
  const q = query.toLowerCase()
  return guides.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.bossName.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q)) ||
    g.summary.toLowerCase().includes(q)
  )
}

export const typeLabels: Record<ContentType, string> = {
  ultimate: '绝本', savage: '零式', extreme: '极神', dungeon: '副本', alliance: '团本'
}

export const typeColors: Record<ContentType, string> = {
  ultimate: '#e6b422', savage: '#e06060', extreme: '#60b0e0', dungeon: '#70c070', alliance: '#b070d0'
}

export const typeOrder: Record<ContentType, number> = {
  ultimate: 0, savage: 1, extreme: 2, alliance: 3, dungeon: 4
}
