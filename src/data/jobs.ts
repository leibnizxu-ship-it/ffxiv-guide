import type { JobGuide } from '@/types/jobs'

export const jobs: JobGuide[] = [
  // ============ 防护职业 ============
  {
    id: 'pld', name: '骑士', role: 'tank', icon: '🛡️',
    summary: '均衡型坦克，拥有优秀的物理/魔法减伤与团队辅助。圣盾阵核心减伤，安魂祈祷开启魔法爆发。',
    opener: ['战逃反应 → 沥血剑', '赎罪剑×3', '安魂祈祷 → 圣灵×4 → 悔罪', '沥血剑刷新'],
    rotation: [
      { title:'物理阶段', description:'保持沥血剑 DOT，填充赎罪剑连击。战逃反应对齐 60s 爆发。', steps:['沥血剑 DOT 100%', '赎罪剑三连 > 王权剑', '战逃反应 CD 到了就用'] },
      { title:'魔法爆发', description:'安魂祈祷开启魔法阶段，4发圣灵+悔罪。', steps:['安魂祈祷 → 圣灵×4 → 悔罪', '穿插厄运流转', '注意 DOT 剩余时间'] },
      { title:'减伤使用', description:'减伤资源丰富，需按时间轴排轴。', steps:['圣盾阵：卡 CD 使用', '预警：30% 减伤', '神圣领域：无敌', '武装戍卫：15% 团队减伤'] }
    ],
    statPriority: ['暴击', '信念', '直击', '坚韧'],
    bisNote: '优先暴击到阈值，信念与直击均衡。坚韧根据副本坦度酌情。',
    timeline: {
      gcd: 2.42,
      openerTimeline: [
        { time:'-2s', skill:'战逃反应', type:'buff', note:'预开' },
        { time:'0.0s', skill:'沥血剑', type:'gcd', note:'DOT' },
        { time:'2.4s', skill:'赎罪剑', type:'combo' },
        { time:'4.8s', skill:'赎罪剑', type:'combo' },
        { time:'7.2s', skill:'赎罪剑', type:'combo' },
        { time:'9.7s', skill:'安魂祈祷', type:'buff', note:'进入魔法' },
        { time:'12.1s', skill:'圣灵', type:'gcd' },
        { time:'14.5s', skill:'圣灵', type:'gcd' },
        { time:'16.9s', skill:'圣灵', type:'gcd' },
        { time:'19.3s', skill:'圣灵', type:'gcd' },
        { time:'21.7s', skill:'悔罪', type:'gcd', note:'终结' },
        { time:'24.1s', skill:'沥血剑', type:'gcd', note:'DOT刷新' }
      ],
      burstWindows: [
        { label:'战逃反应', cooldown:60, description:'物理增伤 25%，对齐每分钟爆发' },
        { label:'安魂祈祷', cooldown:60, description:'魔法爆发阶段，4圣灵+悔罪' },
        { label:'厄运流转', cooldown:30, description:'DOT 续费，卡 CD 使用' }
      ]
    }
  },
  {
    id: 'war', name: '战士', role: 'tank', icon: '🪓',
    summary: '高自疗坦克，原初的解放开启超高爆发，原初的血烟强力团队减伤。',
    opener: ['战嚎 → 重劈 → 动乱', '原初的解放 → 裂石飞环×3 + 狂魂', '原初的勇猛'],
    rotation: [
      { title:'基础循环', description:'保持暴风碎 DOT，兽魂50用狂魂。', steps:['暴风碎 DOT 100%', '兽魂≥50→狂魂', '战嚎对齐60s'] },
      { title:'爆发阶段', description:'原初解放3发裂石飞环+狂魂。', steps:['原初解放 → 裂石飞环×3', '狂魂收尾', '穿插动乱'] },
      { title:'自疗使用', description:'战士自疗全职业最强。', steps:['原初勇猛：4段自疗卡CD', '战栗：提高受治疗量', '原初血烟：团队HOT'] }
    ],
    statPriority: ['暴击', '直击', '坚韧', '信念'],
    bisNote: '战士偏爱暴击直击，坚韧在开荒期有额外价值。',
    timeline: {
      gcd: 2.38,
      openerTimeline: [
        { time:'-2s', skill:'战嚎', type:'buff', note:'预开' },
        { time:'0.0s', skill:'重劈', type:'gcd' },
        { time:'2.4s', skill:'动乱', type:'ogcd' },
        { time:'4.8s', skill:'原初的解放', type:'buff', note:'爆发' },
        { time:'7.2s', skill:'裂石飞环', type:'gcd' },
        { time:'9.6s', skill:'裂石飞环', type:'gcd' },
        { time:'12.0s', skill:'裂石飞环', type:'gcd' },
        { time:'14.4s', skill:'狂魂', type:'gcd', note:'终结' },
        { time:'16.8s', skill:'原初的勇猛', type:'ogcd', note:'自疗' }
      ],
      burstWindows: [
        { label:'原初的解放', cooldown:60, description:'3发免兽魂裂石飞环+狂魂，核心爆发' },
        { label:'战嚎', cooldown:60, description:'获取50兽魂+增伤' },
        { label:'动乱', cooldown:30, description:'卡CD使用，不消耗资源的高伤害' }
      ]
    }
  },
  {
    id: 'drk', name: '暗黑骑士', role: 'tank', icon: '🗡️',
    summary: '高伤害坦克，暗血+暗影使者核心爆发。至黑之夜强力护盾。',
    opener: ['伤残预读→硬→噬魂斩', '血乱→血溅×3', '暗影使者×2'],
    rotation: [
      { title:'基础循环', description:'伤残DOT100%，噬魂斩连击攒暗血。', steps:['伤残DOT保持', '噬魂斩攒暗血', '暗血≥50→血溅'] },
      { title:'爆发阶段', description:'血乱3发免费血溅+暗影使者。', steps:['血乱→血溅×3', '暗血100→暗影使者', '精雕暗影增伤'] },
      { title:'减伤使用', description:'至黑之夜核心特色。', steps:['至黑之夜：25%HP盾卡CD', '暗影墙：30%减伤', '行尸走肉：无敌'] }
    ],
    statPriority: ['暴击', '直击', '信念', '坚韧'],
    bisNote: '暴击直击优先，坚韧酌情分配。',
    timeline: {
      gcd: 2.45,
      openerTimeline: [
        { time:'-3s', skill:'伤残', type:'gcd', note:'预读DOT' },
        { time:'0.0s', skill:'硬', type:'gcd' },
        { time:'2.5s', skill:'噬魂斩', type:'combo' },
        { time:'5.0s', skill:'血乱', type:'buff', note:'爆发' },
        { time:'7.5s', skill:'血溅', type:'gcd' },
        { time:'10.0s', skill:'血溅', type:'gcd' },
        { time:'12.5s', skill:'血溅', type:'gcd' },
        { time:'15.0s', skill:'暗影使者', type:'ogcd' },
        { time:'17.5s', skill:'暗影使者', type:'ogcd', note:'暗血100' }
      ],
      burstWindows: [
        { label:'血乱', cooldown:60, description:'3发免费血溅，核心爆发引擎' },
        { label:'暗影使者', cooldown:60, description:'消耗50暗血的大伤害' },
        { label:'精雕暗影', cooldown:120, description:'大幅增伤+暗血获取' }
      ]
    }
  },
  {
    id: 'gnb', name: '绝枪战士', role: 'tank', icon: '🔫',
    summary: '高操作量坦克，续剑系统打出密集爆发。无情开启后连续插入续剑。',
    opener: ['无情→音速破', '烈牙→猛兽爪→凶禽爪', '续剑×3穿插', '爆发击×3→超高速'],
    rotation: [
      { title:'基础循环', description:'音速破DOT100%，烈牙三连填充。', steps:['音速破DOT保持', '烈牙三连填充', '晶壤2→爆发击', '无情60sCD'] },
      { title:'爆发阶段', description:'无情+续剑核心窗口。', steps:['无情开启→音速破刷新', '3×爆发击+超高速', '续剑插入每次爆发击后', '血壤获取额外晶壤'] },
      { title:'减伤使用', description:'极光强力自疗。', steps:['极光：HOT卡CD', '伪装：格挡+减伤', '星云：30%减伤', '超火流星：无敌'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击优先。技速维持2.40-2.42s GCD。',
    timeline: {
      gcd: 2.40,
      openerTimeline: [
        { time:'-2s', skill:'无情', type:'buff', note:'预开' },
        { time:'0.0s', skill:'音速破', type:'gcd', note:'DOT' },
        { time:'2.4s', skill:'续剑1', type:'ogcd' },
        { time:'4.8s', skill:'烈牙', type:'gcd' },
        { time:'7.2s', skill:'续剑2', type:'ogcd' },
        { time:'9.6s', skill:'猛兽爪', type:'combo' },
        { time:'12.0s', skill:'续剑3', type:'ogcd' },
        { time:'14.4s', skill:'凶禽爪', type:'combo' },
        { time:'16.8s', skill:'爆发击', type:'gcd' },
        { time:'19.2s', skill:'爆发击', type:'gcd' },
        { time:'21.6s', skill:'超高速', type:'gcd', note:'终结' }
      ],
      burstWindows: [
        { label:'无情', cooldown:60, description:'核心增伤，每次插入3续剑+爆发击' },
        { label:'血壤', cooldown:120, description:'获取2晶壤，对齐无情使用' },
        { label:'续剑', cooldown:0, description:'每次GCD后插入，操作密度高' }
      ]
    }
  },

  // ============ 治疗职业 ============
  {
    id: 'whm', name: '白魔法师', role: 'healer', icon: '💐',
    summary: '纯粹治疗，最强直接治疗能力。天赐祝福最强单体治疗。',
    opener: ['闪耀预读→Dia(DOT)', '法令→天辉', '礼仪之石填充'],
    rotation: [
      { title:'治疗优先级', description:'能力技为主，减少GCD治疗。', steps:['神名>天赐祝福>安慰之心', '法令卡CD', '节制：团队减伤+增益'] },
      { title:'DPS循环', description:'DiaDOT100%，闪耀/礼仪之石填充。', steps:['Dia DOT 100%', '法令卡CD', '礼仪之石>闪耀', '神速咏唱对齐爆发'] }
    ],
    statPriority: ['暴击', '直击', '信念', '咏速'],
    bisNote: '暴击直击提升伤害。咏速 2.4-2.45s。',
    timeline: {
      gcd: 2.40,
      openerTimeline: [
        { time:'-2.5s', skill:'闪耀', type:'gcd', note:'预读' },
        { time:'0.0s', skill:'Dia', type:'gcd', note:'DOT' },
        { time:'2.4s', skill:'法令', type:'ogcd', note:'伤害+治疗' },
        { time:'4.8s', skill:'闪耀', type:'gcd' },
        { time:'7.2s', skill:'天辉', type:'ogcd' },
        { time:'9.6s', skill:'闪耀', type:'gcd' },
        { time:'12.0s', skill:'礼仪之石', type:'gcd', note:'蓝花' }
      ],
      burstWindows: [
        { label:'法令', cooldown:45, description:'AOE伤害+治疗，白魔核心能力技' },
        { label:'神名', cooldown:60, description:'最强单体治疗能力技' },
        { label:'神速咏唱', cooldown:120, description:'20%咏唱加速，对齐爆发期输出' }
      ]
    }
  },
  {
    id: 'sch', name: '学者', role: 'healer', icon: '📖',
    summary: '盾值治疗，减伤和护盾为核心。连环计优秀团队增伤。',
    opener: ['魔炎法预读→蛊毒菌(DOT)', '连环计→能量吸收', '炎法填充'],
    rotation: [
      { title:'减伤与护盾', description:'预判伤害提前给盾。', steps:['鼓舞激励之策：单体大盾', '野战治疗阵：团队减伤', '秘策+鼓舞=暴击盾'] },
      { title:'DPS循环', description:'DOT保持，能量吸收卡CD。', steps:['蛊毒菌DOT100%', '能量吸收CD好了就用', '连环计120s爆发'] }
    ],
    statPriority: ['暴击', '直击', '信念', '咏速'],
    bisNote: '暴击同时提升伤害和盾值。咏速保持2.4s。',
    timeline: {
      gcd: 2.40,
      openerTimeline: [
        { time:'-2.5s', skill:'魔炎法', type:'gcd', note:'预读' },
        { time:'0.0s', skill:'蛊毒菌', type:'gcd', note:'DOT' },
        { time:'2.4s', skill:'连环计', type:'buff', note:'团队增益' },
        { time:'4.8s', skill:'能量吸收', type:'ogcd' },
        { time:'7.2s', skill:'炎法', type:'gcd' },
        { time:'9.6s', skill:'炎法', type:'gcd' }
      ],
      burstWindows: [
        { label:'连环计', cooldown:120, description:'团队暴击率+10%，对齐爆发期' },
        { label:'能量吸收', cooldown:45, description:'3层豆子，每层可转换为100威力伤害' },
        { label:'野战治疗阵', cooldown:30, description:'团队减伤10%区域' }
      ]
    }
  },
  {
    id: 'ast', name: '占星术士', role: 'healer', icon: '🌟',
    summary: 'Buff型治疗，发卡系统为团队提供伤害增益。',
    opener: ['落陷凶星预读→焚灼(DOT)', '占卜→发卡', '凶星填充'],
    rotation: [
      { title:'发卡系统', description:'每30s抽卡，发给队友6%增伤。', steps:['抽卡30sCD', '优先给爆发期队友', '近战卡给近战/T', '占卜120s'] },
      { title:'治疗优先级', description:'GCD HOT为主，能力技应急。', steps:['吉星相位：强力HOT', '天星冲日：卡CD', '命运之轮：团队减伤'] }
    ],
    statPriority: ['暴击', '直击', '信念', '咏速'],
    bisNote: '暴击直击优先。咏速2.4s。',
    timeline: {
      gcd: 2.40,
      openerTimeline: [
        { time:'-2.5s', skill:'落陷凶星', type:'gcd', note:'预读' },
        { time:'0.0s', skill:'焚灼', type:'gcd', note:'DOT' },
        { time:'2.4s', skill:'占卜', type:'buff', note:'爆发' },
        { time:'4.8s', skill:'发卡', type:'ogcd', note:'队友增伤' },
        { time:'7.2s', skill:'凶星', type:'gcd' },
        { time:'9.6s', skill:'凶星', type:'gcd' }
      ],
      burstWindows: [
        { label:'占卜', cooldown:120, description:'团队6%增伤，核心团队增益' },
        { label:'发卡', cooldown:30, description:'单目标6%增伤，优先给爆发期队友' },
        { label:'命运之轮', cooldown:60, description:'团队10%减伤+HOT' }
      ]
    }
  },
  {
    id: 'sge', name: '贤者', role: 'healer', icon: '💉',
    summary: '均衡治疗，心关和均衡核心机制。恢复力高伤害不错。',
    opener: ['注药预读→均衡诊断(DOT)', '心关设置', '注药×3→均衡→发炎'],
    rotation: [
      { title:'心关与均衡', description:'心关注定目标自动治疗。', steps:['心关设在MT', '均衡诊断DOT100%', '均衡CD好了就用'] },
      { title:'治疗工具', description:'丰富治疗能力技。', steps:['自生：强力团队HOT', '活血：单体大治疗', '整体论：团队减伤', '泛输血：群体盾'] }
    ],
    statPriority: ['暴击', '直击', '信念', '咏速'],
    bisNote: '暴击直击优先。咏速2.4s。',
    timeline: {
      gcd: 2.40,
      openerTimeline: [
        { time:'-2.5s', skill:'注药', type:'gcd', note:'预读' },
        { time:'0.0s', skill:'均衡诊断', type:'gcd', note:'DOT' },
        { time:'2.4s', skill:'心关', type:'ogcd', note:'设置' },
        { time:'4.8s', skill:'注药', type:'gcd' },
        { time:'7.2s', skill:'发炎', type:'ogcd' },
        { time:'9.6s', skill:'注药', type:'gcd' }
      ],
      burstWindows: [
        { label:'自生', cooldown:60, description:'团队HOT+10%减伤' },
        { label:'发炎', cooldown:45, description:'伤害+治疗，充能技' },
        { label:'整体论', cooldown:120, description:'团队10%减伤' }
      ]
    }
  },

  // ============ 近战职业 ============
  {
    id: 'sam', name: '武士', role: 'melee', icon: '⚔️',
    summary: '纯输出近战，雪月花+回天斩核心爆发。全职业最高单发伤害。',
    opener: ['刃风→阵风→月光→花车', '明镜止水→回天斩→雪月花', '意气冲天→回返雪月花', '燕回返→雪月花'],
    rotation: [
      { title:'基础循环', description:'获取三闪打出雪月花。', steps:['阵风/月光BUFF保持', '三闪→回天斩→雪月花', '明镜止水60s', '意气冲天120s'] },
      { title:'爆发阶段', description:'意气冲天+明镜止水+燕回返双雪月花。', steps:['意气冲天→回返雪月花', '明镜止水→快速集闪', '燕回返→再打雪月花', '照破剑气50'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: 'GCD建议2.14s，达标后堆暴击直击。',
    timeline: {
      gcd: 2.14,
      openerTimeline: [
        { time:'0.0s', skill:'刃风', type:'gcd' },
        { time:'2.1s', skill:'阵风', type:'combo', note:'雪闪' },
        { time:'4.3s', skill:'月光', type:'combo', note:'月闪' },
        { time:'6.4s', skill:'花车', type:'combo', note:'花闪' },
        { time:'8.6s', skill:'明镜止水', type:'buff' },
        { time:'10.7s', skill:'回天斩', type:'ogcd' },
        { time:'12.8s', skill:'雪月花', type:'gcd', note:'三闪终结' },
        { time:'15.0s', skill:'意气冲天', type:'buff', note:'120s爆发' },
        { time:'17.1s', skill:'回返雪月花', type:'gcd', note:'大伤害' },
        { time:'19.3s', skill:'燕回返', type:'ogcd' }
      ],
      burstWindows: [
        { label:'意气冲天', cooldown:120, description:'最强爆发增伤，双雪月花窗口' },
        { label:'明镜止水', cooldown:60, description:'免连击条件获取三闪' },
        { label:'燕回返', cooldown:60, description:'重置雪月花CD，60s必用' }
      ]
    }
  },
  {
    id: 'mnk', name: '武僧', role: 'melee', icon: '👊',
    summary: '高速近战，疾风迅雷+阴阳斗气核心。斗气斩+梦幻斗舞可观爆发。',
    opener: ['演武→连击→正拳', '崩拳→双掌打→破碎拳', '阴阳斗气→斗气斩', '梦幻斗舞'],
    rotation: [
      { title:'基础循环', description:'维持疾风迅雷，六合星导脚循环。', steps:['疾风迅雷常驻', '双掌打BUFF保持', '破碎拳DOT保持'] },
      { title:'爆发阶段', description:'阴阳斗气60s，梦幻斗舞120s。', steps:['阴阳斗气：60s卡着用', '梦幻斗舞：120s大招', '红莲体势对齐爆发'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击优先。技速维持2.0s GCD。',
    timeline: {
      gcd: 2.00,
      openerTimeline: [
        { time:'0.0s', skill:'演武', type:'buff' },
        { time:'2.0s', skill:'连击', type:'gcd' },
        { time:'4.0s', skill:'正拳', type:'combo' },
        { time:'6.0s', skill:'崩拳', type:'combo' },
        { time:'8.0s', skill:'双掌打', type:'gcd', note:'BUFF' },
        { time:'10.0s', skill:'破碎拳', type:'combo', note:'DOT' },
        { time:'12.0s', skill:'阴阳斗气', type:'buff' },
        { time:'14.0s', skill:'斗气斩', type:'ogcd' },
        { time:'16.0s', skill:'梦幻斗舞', type:'ogcd', note:'大招' }
      ],
      burstWindows: [
        { label:'阴阳斗气', cooldown:60, description:'增伤+斗气斩触发' },
        { label:'梦幻斗舞', cooldown:120, description:'最高威力技能' },
        { label:'红莲体势', cooldown:90, description:'增伤窗口' }
      ]
    }
  },
  {
    id: 'drg', name: '龙骑士', role: 'melee', icon: '🐉',
    summary: '经典近战，跳跃技能+龙血核心。苍天龙血+坠星冲高爆发。',
    opener: ['精准刺→贯通刺→开膛刺', '龙眼雷电(5%增伤)', '跳跃→龙炎冲→坠星冲', '苍天龙血→死者之岸'],
    rotation: [
      { title:'基础循环', description:'开膛刺DOT保持。', steps:['开膛刺DOT保持', '龙牙龙爪填充', '龙眼雷电60s增伤'] },
      { title:'跳跃技能管理', description:'跳跃是龙骑核心。', steps:['跳跃：30s', '龙炎冲：60s', '坠星冲：120s', '注意动画锁定'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击优先。技速维持2.46s GCD。',
    timeline: {
      gcd: 2.46,
      openerTimeline: [
        { time:'0.0s', skill:'精准刺', type:'gcd' },
        { time:'2.5s', skill:'贯通刺', type:'combo' },
        { time:'5.0s', skill:'开膛刺', type:'combo', note:'DOT' },
        { time:'7.5s', skill:'龙眼雷电', type:'buff', note:'团队增伤' },
        { time:'10.0s', skill:'跳跃', type:'ogcd' },
        { time:'12.5s', skill:'龙炎冲', type:'ogcd' },
        { time:'15.0s', skill:'苍天龙血', type:'buff' },
        { time:'17.5s', skill:'坠星冲', type:'ogcd', note:'大招' },
        { time:'20.0s', skill:'死者之岸', type:'ogcd' }
      ],
      burstWindows: [
        { label:'苍天龙血', cooldown:60, description:'龙骑核心增伤buff' },
        { label:'坠星冲', cooldown:120, description:'最高单发伤害' },
        { label:'龙眼雷电', cooldown:60, description:'团队5%增伤' }
      ]
    }
  },
  {
    id: 'nin', name: '忍者', role: 'melee', icon: '🥷',
    summary: '技术型近战，印结+忍术核心。背刺团队增伤，天地人爆发极高。',
    opener: ['风断→隐→双刃旋', '印结→雷遁', '背刺→天地人→水遁→火遁→土遁', '六道轮回'],
    rotation: [
      { title:'忍术系统', description:'天地人组合打出高爆发忍术。', steps:['印结管理忍术CD', '雷遁最高单体忍术', '天地人：120s大爆发'] },
      { title:'爆发窗口', description:'背刺+天地人团队爆发。', steps:['背刺：团队60s增伤', '六道轮回：忍气终结技', '分身之术：复制攻击'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击优先。技速维持2.12s GCD。',
    timeline: {
      gcd: 2.12,
      openerTimeline: [
        { time:'0.0s', skill:'风断', type:'gcd' },
        { time:'2.1s', skill:'隐', type:'ogcd', note:'隐身' },
        { time:'4.2s', skill:'双刃旋', type:'combo' },
        { time:'6.4s', skill:'印结', type:'ogcd' },
        { time:'8.5s', skill:'雷遁', type:'ogcd', note:'忍术' },
        { time:'10.6s', skill:'背刺', type:'buff', note:'团队增伤' },
        { time:'12.7s', skill:'天地人', type:'buff', note:'爆发' },
        { time:'14.8s', skill:'水遁', type:'ogcd' },
        { time:'17.0s', skill:'火遁', type:'ogcd' },
        { time:'19.1s', skill:'土遁', type:'ogcd' },
        { time:'21.2s', skill:'六道轮回', type:'ogcd', note:'终结' }
      ],
      burstWindows: [
        { label:'天地人', cooldown:120, description:'连续释放3个忍术，核心爆发' },
        { label:'背刺', cooldown:60, description:'团队5%增伤10s' },
        { label:'分身之术', cooldown:120, description:'复制自身攻击' }
      ]
    }
  },
  {
    id: 'rpr', name: '钐镰师', role: 'melee', icon: '💀',
    summary: '收割型近战，灵魂+妖异核心。夜游魂衣超高爆发。',
    opener: ['灵魂切割×2', '绞首×2→死亡之影', '暴食→夜游魂衣', '交错收割×5'],
    rotation: [
      { title:'基础循环', description:'收割获取灵魂，交错收割填充。', steps:['死亡之影DOT保持', '灵魂50→绞首', '灵魂切割充能卡CD'] },
      { title:'爆发阶段', description:'夜游魂衣+暴食核心。', steps:['夜游魂衣→5×交错收割', '暴食：获取50灵魂', '大夜游魂衣：120s'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击优先。技速维持2.48s GCD。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'0.0s', skill:'灵魂切割', type:'ogcd' },
        { time:'2.5s', skill:'灵魂切割', type:'ogcd' },
        { time:'5.0s', skill:'绞首', type:'gcd' },
        { time:'7.5s', skill:'绞首', type:'gcd' },
        { time:'10.0s', skill:'死亡之影', type:'gcd', note:'DOT' },
        { time:'12.5s', skill:'暴食', type:'buff' },
        { time:'15.0s', skill:'夜游魂衣', type:'buff', note:'爆发' },
        { time:'17.5s', skill:'交错收割', type:'gcd' },
        { time:'20.0s', skill:'交错收割', type:'gcd' }
      ],
      burstWindows: [
        { label:'夜游魂衣', cooldown:120, description:'5发交错收割，核心爆发' },
        { label:'暴食', cooldown:60, description:'获取50灵魂' },
        { label:'神秘环', cooldown:120, description:'团队3%增伤' }
      ]
    }
  },
  {
    id: 'vpr', name: '蝰蛇剑士', role: 'melee', icon: '🐍',
    summary: '7.0新近战，双剑高速连击+蛇剑蓄力爆发。',
    opener: ['钢刺尾→牙连击', '蛇尾术→蛇牙术', '蛇灵气积蓄', '蛇王连击×3'],
    rotation: [
      { title:'双剑形态', description:'快速连击攒蛇灵气。', steps:['钢刺尾三连填充', '牙连击攒灵气', '蛇尾术/蛇牙术proc优先'] },
      { title:'蛇剑形态', description:'消耗蛇灵气蓄力爆发。', steps:['蛇灵气满→蛇王连击', '蛇王连击可蓄力', '防止灵气溢出'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击优先。技速维持2.48s GCD。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'0.0s', skill:'钢刺尾', type:'gcd' },
        { time:'2.5s', skill:'牙连击', type:'combo' },
        { time:'5.0s', skill:'蛇尾术', type:'ogcd' },
        { time:'7.5s', skill:'蛇牙术', type:'ogcd' },
        { time:'10.0s', skill:'蛇王连击', type:'gcd' },
        { time:'12.5s', skill:'蛇王连击', type:'gcd' },
        { time:'15.0s', skill:'蛇王连击', type:'gcd', note:'终结' }
      ],
      burstWindows: [
        { label:'蛇王连击', cooldown:0, description:'消耗蛇灵气的爆发连击' },
        { label:'蛇鳞', cooldown:60, description:'个人减伤' }
      ]
    }
  },

  // ============ 远程职业 ============
  {
    id: 'brd', name: '吟游诗人', role: 'ranged', icon: '🎵',
    summary: '辅助型远程，歌曲系统团队增益。三首歌循环，DoT触发诗心。',
    opener: ['风蚀箭→毒咬箭(DOT预铺)', '贤者→放浪神→军神', '九天连箭→侧风诱导箭', '强力射击填充'],
    rotation: [
      { title:'歌曲循环', description:'贤者→放浪神→军神循环。', steps:['贤者：触发九天连箭重置', '放浪神：触发完美音调', '军神：加攻速+直击', '每首约43s'] },
      { title:'DOT管理', description:'双DOT全程覆盖。', steps:['风蚀+毒咬100%', '钢铁jaws刷新双DOT', 'DOT触发→诗心', '猛者击120s'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击均衡。技速2.48s GCD。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'0.0s', skill:'风蚀箭', type:'gcd', note:'DOT' },
        { time:'2.5s', skill:'毒咬箭', type:'gcd', note:'DOT' },
        { time:'5.0s', skill:'贤者叙事谣', type:'buff', note:'第一首歌' },
        { time:'7.5s', skill:'九天连箭', type:'ogcd' },
        { time:'10.0s', skill:'强力射击', type:'gcd' },
        { time:'12.5s', skill:'侧风诱导箭', type:'ogcd' }
      ],
      burstWindows: [
        { label:'猛者击', cooldown:120, description:'25%增伤，对齐爆发' },
        { label:'战斗之声', cooldown:120, description:'团队直击+20%' },
        { label:'三首歌', cooldown:0, description:'每首约43s，循环演唱' }
      ]
    }
  },
  {
    id: 'mch', name: '机工士', role: 'ranged', icon: '🔧',
    summary: '纯输出远程，蓄能技+机器人召唤核心。过热状态密集爆发。',
    opener: ['整备→钻头', '空气锚→热冲击×3', '蓄能→机器人召唤', '热冲击×5(过热)'],
    rotation: [
      { title:'蓄能系统', description:'电能/蓄能管理对齐爆发。', steps:['钻头/空气锚卡CD', '蓄能50→机器人召唤', '过热：热冲击×5', '整备对齐钻头'] },
      { title:'爆发阶段', description:'过热+野火最强爆发。', steps:['野火→过热→热冲击×5', '钻头/空气锚插入', '蓄能技穿插'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击优先。技速维持2.48s GCD。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'0.0s', skill:'整备', type:'buff' },
        { time:'2.5s', skill:'钻头', type:'gcd', note:'大伤害' },
        { time:'5.0s', skill:'空气锚', type:'gcd' },
        { time:'7.5s', skill:'蓄能', type:'ogcd' },
        { time:'10.0s', skill:'机器人召唤', type:'ogcd', note:'召唤' },
        { time:'12.5s', skill:'过热', type:'buff', note:'爆发' },
        { time:'15.0s', skill:'热冲击', type:'gcd' },
        { time:'16.7s', skill:'热冲击', type:'gcd' },
        { time:'18.4s', skill:'热冲击', type:'gcd' },
        { time:'20.0s', skill:'热冲击', type:'gcd' },
        { time:'21.7s', skill:'热冲击', type:'gcd' }
      ],
      burstWindows: [
        { label:'过热', cooldown:55, description:'5发热冲击，核心爆发窗口' },
        { label:'野火', cooldown:120, description:'储存10%伤害后爆炸' },
        { label:'机器人召唤', cooldown:0, description:'蓄能50召唤，自动攻击' }
      ]
    }
  },
  {
    id: 'dnc', name: '舞者', role: 'ranged', icon: '💃',
    summary: '远程物理，舞蹈提供团队增益。标准+技巧舞步核心爆发。',
    opener: ['标准舞步预读→Finish', '技巧舞步→Finish', '剑舞→扇舞·序→扇舞·急', '剑舞填充'],
    rotation: [
      { title:'舞步管理', description:'标准舞步30s，技巧舞步120s。', steps:['标准舞步卡30s', '技巧舞步对齐120s', 'Finish后舞伴增伤'] },
      { title:'GCD循环', description:'舞步后以剑舞填充。', steps:['剑舞主要填充', '扇舞·序/急/终卡CD', '流星之舞触发优先'] }
    ],
    statPriority: ['暴击', '直击', '信念', '技速'],
    bisNote: '暴击直击均衡。技速2.48s GCD。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'-3s', skill:'标准舞步', type:'buff', note:'预读' },
        { time:'0.0s', skill:'标准Finish', type:'gcd', note:'爆发' },
        { time:'2.5s', skill:'技巧舞步', type:'buff' },
        { time:'5.0s', skill:'技巧Finish', type:'gcd', note:'大爆发' },
        { time:'7.5s', skill:'剑舞', type:'gcd' },
        { time:'10.0s', skill:'扇舞序', type:'ogcd' },
        { time:'12.5s', skill:'剑舞', type:'gcd' },
        { time:'15.0s', skill:'扇舞急', type:'ogcd' }
      ],
      burstWindows: [
        { label:'技巧舞步', cooldown:120, description:'最大爆发，1200威力' },
        { label:'标准舞步', cooldown:30, description:'720威力+舞伴增伤' },
        { label:'扇舞', cooldown:30, description:'充能技，卡CD使用' }
      ]
    }
  },

  // ============ 法系职业 ============
  {
    id: 'blm', name: '黑魔法师', role: 'caster', icon: '🔥',
    summary: '炮台式法系，星极火与灵极冰切换。绝望+异言核心爆发。',
    opener: ['闪雷预读→爆炎→天语', '悖论→炽炎×3→绝望', '冰澈→闪雷→雷云→悖论'],
    rotation: [
      { title:'火阶段', description:'星极火消耗魔力高伤害火系。', steps:['爆炎启动', '炽炎×4→绝望收尾', '火苗触发立即使用', '三连咏唱对齐移动'] },
      { title:'冰阶段', description:'灵极冰回复魔力。', steps:['冰澈→闪雷刷新', '悖论获取火苗', '雷云触发：高伤害DOT'] }
    ],
    statPriority: ['咏速', '暴击', '直击', '信念'],
    bisNote: '咏速阈值2.18s或2.32s GCD，其余堆暴击。',
    timeline: {
      gcd: 2.18,
      openerTimeline: [
        { time:'-3s', skill:'闪雷', type:'gcd', note:'预读DOT' },
        { time:'0.0s', skill:'爆炎', type:'gcd' },
        { time:'2.2s', skill:'天语', type:'ogcd' },
        { time:'4.4s', skill:'悖论', type:'gcd' },
        { time:'6.5s', skill:'炽炎', type:'gcd' },
        { time:'8.7s', skill:'炽炎', type:'gcd' },
        { time:'10.9s', skill:'炽炎', type:'gcd' },
        { time:'13.1s', skill:'绝望', type:'gcd', note:'终结' },
        { time:'15.3s', skill:'冰澈', type:'gcd' },
        { time:'17.5s', skill:'雷云', type:'ogcd' }
      ],
      burstWindows: [
        { label:'天语', cooldown:60, description:'增伤20%，核心buff' },
        { label:'三连咏唱', cooldown:60, description:'3发瞬发，机动性窗口' },
        { label:'魔罩', cooldown:120, description:'30%HP护盾' }
      ]
    }
  },
  {
    id: 'smn', name: '召唤师', role: 'caster', icon: '📕',
    summary: '召唤型法系，宝石兽+三神召唤核心。巴哈姆特+凤凰高爆发。',
    opener: ['宝石兽召唤→溃烂爆发', '巴哈姆特→星极脉冲×4', '死星核爆→溃烂爆发', '三神召唤'],
    rotation: [
      { title:'三神循环', description:'伊芙利特→泰坦→迦楼罗。', steps:['伊芙利特：高单体', '泰坦：AOE+DOT', '迦楼罗：机动性高', '每神约30s'] },
      { title:'巴哈/凤凰', description:'120s大爆发。', steps:['巴哈姆特：4×星极脉冲', '凤凰：HOT+AOE', '死星核爆收尾'] }
    ],
    statPriority: ['暴击', '直击', '信念', '咏速'],
    bisNote: '暴击直击优先。咏速不关键，维持2.48s。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'-2.5s', skill:'毁灭', type:'gcd', note:'预读' },
        { time:'0.0s', skill:'溃烂爆发', type:'ogcd' },
        { time:'2.5s', skill:'巴哈姆特召唤', type:'buff', note:'爆发' },
        { time:'5.0s', skill:'星极脉冲', type:'gcd' },
        { time:'7.5s', skill:'星极脉冲', type:'gcd' },
        { time:'10.0s', skill:'星极脉冲', type:'gcd' },
        { time:'12.5s', skill:'星极脉冲', type:'gcd' },
        { time:'15.0s', skill:'死星核爆', type:'gcd', note:'终结' }
      ],
      burstWindows: [
        { label:'巴哈姆特', cooldown:60, description:'4发星极脉冲+死星核爆' },
        { label:'凤凰', cooldown:60, description:'HOT+3发灵泉之炎' },
        { label:'三神召唤', cooldown:0, description:'轮换使用，各30s' }
      ]
    }
  },
  {
    id: 'rdm', name: '赤魔法师', role: 'caster', icon: '🎩',
    summary: '均衡型法系，黑白魔力平衡核心。近战三连高爆发，连续咏唱独特。',
    opener: ['飞刺预读→摇荡', '黑白魔法交替', '黑白平衡→近战三连', '移转→赤疾风→赤暴雷'],
    rotation: [
      { title:'魔力平衡', description:'黑白魔力差30以内。', steps:['黑白魔法交替使用', '差值>30→调整', '黑白满→近战三连'] },
      { title:'近战爆发', description:'近战三连核心伤害。', steps:['移转→魔回刺→魔交击斩→魔连攻', '飞刺/六分反击穿插', '鼓励：团队增伤'] }
    ],
    statPriority: ['暴击', '直击', '信念', '咏速'],
    bisNote: '暴击直击均衡。咏速保持2.48s。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'-2.5s', skill:'飞刺', type:'ogcd', note:'预读' },
        { time:'0.0s', skill:'摇荡', type:'gcd' },
        { time:'2.5s', skill:'黑魔法', type:'gcd' },
        { time:'5.0s', skill:'白魔法', type:'gcd' },
        { time:'7.5s', skill:'移转', type:'ogcd' },
        { time:'10.0s', skill:'魔回刺', type:'gcd' },
        { time:'12.5s', skill:'魔交击斩', type:'combo' },
        { time:'15.0s', skill:'魔连攻', type:'combo', note:'终结' },
        { time:'17.5s', skill:'赤疾风', type:'gcd' }
      ],
      burstWindows: [
        { label:'近战三连', cooldown:0, description:'黑白魔力80+80时使用' },
        { label:'鼓励', cooldown:120, description:'团队5%增伤+自身伤害' },
        { label:'飞刺/六分', cooldown:35, description:'充能技卡CD使用' }
      ]
    }
  },
  {
    id: 'pct', name: '绘灵法师', role: 'caster', icon: '🎨',
    summary: '7.0新法系，绘画系统核心。翅膀/锤子/生物不同效果，爆发灵活。',
    opener: ['火焰红预读→疾风绿', '绘画：翅膀', '幻影连击×3', '绘画：生物→大招'],
    rotation: [
      { title:'绘画系统', description:'三种绘画各有用途。', steps:['翅膀：移动+增伤', '锤子：高单体', '生物：AOE+DOT', '绘画CD防浪费'] },
      { title:'色彩管理', description:'红绿蓝白交替。', steps:['红：火焰系', '绿：风系DOT', '蓝：水系减速', '白：光系爆发'] }
    ],
    statPriority: ['暴击', '直击', '信念', '咏速'],
    bisNote: '暴击直击优先。咏速维持2.48s。',
    timeline: {
      gcd: 2.48,
      openerTimeline: [
        { time:'-2.5s', skill:'火焰红', type:'gcd', note:'预读' },
        { time:'0.0s', skill:'疾风绿', type:'gcd', note:'DOT' },
        { time:'2.5s', skill:'绘画：翅膀', type:'ogcd' },
        { time:'5.0s', skill:'幻影连击', type:'gcd' },
        { time:'7.5s', skill:'幻影连击', type:'gcd' },
        { time:'10.0s', skill:'幻影连击', type:'gcd' },
        { time:'12.5s', skill:'绘画：生物', type:'ogcd' },
        { time:'15.0s', skill:'大招', type:'gcd', note:'爆发' }
      ],
      burstWindows: [
        { label:'绘画', cooldown:0, description:'核心机制，三种效果轮换' },
        { label:'星天核爆', cooldown:120, description:'团队10%减伤' }
      ]
    }
  }
]

export function getJobById(id: string): JobGuide | undefined {
  return jobs.find(j => j.id === id)
}

export const roleLabels: Record<string, string> = {
  tank: '防护', healer: '治疗', melee: '近战', ranged: '远程', caster: '法系'
}

export const roleColors: Record<string, string> = {
  tank: '#4060e0', healer: '#40c060', melee: '#e06040', ranged: '#e0a040', caster: '#c040e0'
}
