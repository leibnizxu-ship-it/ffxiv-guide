import type { DailyGuide } from '@/types/daily'

export const dailyGuides: DailyGuide[] = [
  // ==================== 部队相关 ====================
  {
    id: 'fc-buffs',
    title: '部队 buff 完全指南',
    category: 'fc',
    icon: '🏠',
    summary: '部队可以激活多种 buff，包括经验加成、传送费折扣、修理费折扣等。合理安排 buff 可大幅提升游戏体验。',
    sections: [
      {
        title: '部队 buff 一览',
        content: '部队长或军官可使用部队信用点购买 buff，每次持续 24 小时。可以同时激活 2 个 buff。',
        items: [
          { label: '战斗经验值 +10%/15%', description: '最常用 buff，练级必备。消耗大量信用点。', highlight: '首选' },
          { label: '采集经验值 +10%/15%', description: '采集职业练级时使用。', highlight: '采集专用' },
          { label: '制作经验值 +10%/15%', description: '制作职业练级时使用。' },
          { label: '传送费折扣 20%/30%', description: '传送费降低。常驻 buff 之一。', highlight: '推荐常驻' },
          { label: '修理费折扣 10%/20%', description: '减少修理费用。次要选择。' },
          { label: '部队点数 +10%/15%', description: '获取更多部队信用点，为部队贡献。' },
          { label: '食物效果延长 +10/15分钟', description: '延长食物持续时间。对高难副本很有用。', highlight: '高难必备' },
          { label: '军票获取量 +10%/15%', description: '刷军票时开启。' }
        ]
      },
      {
        title: '如何获取部队信用点',
        content: '部队信用点通过部队成员完成各种活动获得，是激活 buff 的资源。',
        items: [
          { label: '完成副本/任务', description: '任何战斗、采集、制作活动都会产生少量部队信用点。' },
          { label: '部队工房', description: '通过潜水艇和飞空艇探险获得大量信用点，是最有效的方式。' },
          { label: '每日部队任务', description: '部队公告板任务，简单易完成。' },
          { label: '每周部队点数捐赠', description: '成员可主动捐赠点数换取 buff 时间。' }
        ]
      }
    ],
    tips: [
      '建议常驻 buff 组合：经验+传送折扣（练级期）或食物延长+传送折扣（满级期）',
      '部队二级 buff（+15%效果）需要部队等级达到一定要求',
      '潜水艇探险是部队信用点最大来源，建议部队至少配置 2 艘潜水艇'
    ]
  },
  {
    id: 'fc-workshop',
    title: '部队工房与潜水艇',
    category: 'fc',
    icon: '🔧',
    summary: '部队工房是部队最赚钱的系统。通过制造潜水艇和飞空艇进行探险，获取稀有材料和大量金币。',
    sections: [
      {
        title: '解锁条件',
        content: '部队需要拥有部队房屋才能解锁工房。在部队房屋中与工房管理员对话即可进入。',
        items: [
          { label: '部队等级', description: '需达到 6 级以上。' },
          { label: '部队房屋', description: '需要拥有部队房屋（S/M/L均可）。' },
          { label: '工房权限', description: '需要部队长授予工房使用权限。' }
        ]
      },
      {
        title: '潜水艇建造',
        content: '潜水艇是工房的核心产出工具。每个部队最多拥有 4 艘潜水艇。建造需要多种材料，可从市场板购买或自行制作。',
        items: [
          { label: '艇体材料', description: '铁/钢/秘银等金属材料，氪金潜水艇需要鉴定埋没寺院材料。' },
          { label: '等级提升', description: '潜水艇通过探险获得经验，最高 90 级。等级越高，能去的海域越多。' },
          { label: '配件', description: '不同的艇首/艇尾/艇桥影响探险效率和获取物。推荐优先提升"探索性能"。' }
        ]
      },
      {
        title: '探险收益',
        content: '潜水艇探险每天可以进行 2-3 轮，每轮持续 18-48 小时。稀有材料市场价值很高。',
        items: [
          { label: '纯白/纯黑染料', description: '潜水艇独家产出，每个约 30-50 万 Gil。', highlight: '最赚钱' },
          { label: '各种材料', description: '金矿/白金矿/暗物质晶簇等，用于制作或转卖。' },
          { label: '回收品', description: '可兑换稀有道具。' }
        ]
      }
    ],
    tips: [
      '建议至少练 2 艘潜水艇到满级（90级），可稳定日产 50-100万 Gil',
      '潜水艇配方和探险路线建议参考 NGA 或 ff14teamcraft 等社区资源',
      '飞空艇收益远不如潜水艇，优先投入资源建造潜水艇',
      '部队工房也可以制作房屋外墙、房顶等装饰品，利润可观'
    ]
  },

  // ==================== 市场相关 ====================
  {
    id: 'market-basics',
    title: '市场板交易指南',
    category: 'market',
    icon: '💰',
    summary: '市场板是 FFXIV 的核心经济系统。掌握交易技巧可以轻松积累财富，支持高难副本的爆发药和食物开销。',
    sections: [
      {
        title: '市场板基本规则',
        content: '玩家通过雇员在市场板上架物品出售。每个角色有 2 个免费雇员，每个雇员 20 个出售栏位。',
        items: [
          { label: '出售税', description: '市场板收取 5% 交易税，使用其他城市市场板额外加 5%。建议在物品所在城市出售。' },
          { label: '价格竞争', description: '系统默认显示最低价，买家通常会买最便宜的。注意不要被 bot 压价。', highlight: '重要' },
          { label: '历史价格', description: '出售界面可查看该物品近 20 笔成交价，用于定价参考。' }
        ]
      },
      {
        title: '稳定收入来源',
        content: '以下是各版本都有效的稳定赚钱方式。',
        items: [
          { label: '新式装备', description: '偶数版本（x.0/x.2/x.4）推出的新式战斗/生产装备，头两周利润极高。', highlight: '爆发期' },
          { label: '爆发药和食物', description: '零式/绝本开放期间，爆发药和高阶食物需求量大，价格稳定。' },
          { label: '魔晶石', description: '新版本初期，暴击/直击等热门魔晶石价格飙升。可通过精炼装备获取。' },
          { label: '限时采集物', description: '传说采集点的材料在版本初期价格高。' },
          { label: '蛮族货币兑换', description: '用蛮族货币兑换稀有材料转卖。' },
          { label: '潜水艇材料', description: '纯白/纯黑染料、稀有宠物、外观装备。每周稳定产出。', highlight: '长线收入' }
        ]
      },
      {
        title: '交易心理学',
        content: '了解买家心态可以帮助定价和选择商品。',
        items: [
          { label: '懒人税', description: '中间材料比原材料贵 2-3 倍是常态。做成半成品卖给懒得搓的玩家。', highlight: '利润最高' },
          { label: '急用税', description: 'HQ 装备、爆发药在副本开放日溢价 50-100%。' },
          { label: '外观税', description: '好看的发光武器、宠物、坐骑价格远高于实用价值。' },
          { label: '绝版焦虑', description: '季节活动物品活动结束后价格逐渐上涨，可囤货。' }
        ]
      }
    ],
    tips: [
      '不要盲目跟风压价，你的货物总会卖掉的。保持耐心，市场波动是正常的',
      '多比价：同一个物品在不同服务器价格差异可能很大，跨服比价很重要',
      '关注版本更新日程：版本更新前后的市场波动是利润最大的时机',
      '使用 Universalis 或 ff14mb 网站查询跨服价格趋势'
    ],
    links: [
      { label: 'Universalis 跨服比价', url: 'https://universalis.app' },
      { label: 'FF14 Teamcraft', url: 'https://ffxivteamcraft.com' }
    ]
  },
  {
    id: 'retainer-guide',
    title: '雇员管理完全攻略',
    category: 'retainer',
    icon: '👤',
    summary: '雇员是市场板交易的基础，也是获取材料的稳定来源。合理配置雇员职业和探险任务可以最大化收益。',
    sections: [
      {
        title: '雇员类型选择',
        content: '每个角色有 2 个免费雇员。可在雇员菜单（主城雇员窗口）创建。',
        items: [
          { label: '战斗雇员', description: '可穿戴你的旧装备。派去探险获取指定怪物掉落材料。推荐职业：战士（高生存）。', highlight: '推荐首个' },
          { label: '采矿/园艺雇员', description: '探险获取矿石/木材等采集材料。18 小时探索可获取稀有材料。' },
          { label: '捕鱼雇员', description: '探险获取鱼类/海产品。特定鱼类只有捕鱼雇员可获得。' }
        ]
      },
      {
        title: '雇员探险',
        content: '雇员探险是挂机获取材料的主要方式。探险有 1小时（即时）和 18小时 两种。',
        items: [
          { label: '1小时探险', description: '常用于获取常见材料。可立即完成。' },
          { label: '18小时探险', description: '可获取珍稀材料（如坚韧/刚力魔晶石、稀有染料等），睡前挂上。', highlight: '每日必做' },
          { label: '装备影响', description: '雇员的装备等级影响探险收益。尽可能给雇员穿上当前版本最高装等装备。' }
        ]
      },
      {
        title: '雇员出售技巧',
        content: '利用雇员出售栏位时的一些策略。',
        items: [
          { label: '定价策略', description: '参考历史成交价，略低于最低价 1 Gil 即可。不要大幅压价损害市场。' },
          { label: '分类管理', description: '一个雇员卖装备，一个卖材料，一个卖外观。便于管理和补货。' },
          { label: '补货节奏', description: '热门商品（爆发药、HQ装备）2-3 天补一次货。冷门商品 1 周 1 次。' }
        ]
      }
    ],
    tips: [
      '每多买一个额外雇员（月卡 2 美元/个），可以多 20 个出售栏位 + 探险槽位',
      '雇员探险每天 2 次（1h+18h），坚持做回报稳定',
      '为雇员穿上高等级装备可大幅提高探险收益，满装等战斗雇员的 18h 探险收益最高'
    ]
  },

  // ==================== 金碟游乐场 ====================
  {
    id: 'goldsaucer-guide',
    title: '金碟游乐场完全攻略',
    category: 'goldsaucer',
    icon: '🎰',
    summary: '金碟游乐场是获取 MGP（金碟币）的场所，可用于兑换坐骑、宠物、发型、舞蹈、卡牌等丰富奖励。',
    sections: [
      {
        title: 'MGP 获取方式',
        content: '以下是按效率排序的 MGP 获取方式。',
        items: [
          { label: '时尚品鉴（每周）', description: '每周一次，达到 80 分即可获得 60000 MGP。最高 100 分获得额外奖励。', highlight: '最优先' },
          { label: '仙人掌彩券', description: '每天 3 次，每次成本 10 MGP。拉中 123 可获 10000 MGP。长期是正收益。' },
          { label: '迷你仙人掌彩券', description: '每天 3 次，每次成本 100 MGP。收益是普通彩券的 10 倍。' },
          { label: '陆行鸟赛跑', description: '培养陆行鸟参赛，满级鸟每场可稳定赚 500-1000 MGP。' },
          { label: '幻卡对战', description: '与 NPC 对战，挑战赛每周可获大量 MGP。' },
          { label: '机遇挑战（GATE）', description: '每 20 分钟在金碟地图触发。完成可获 3000-5000 MGP。' },
          { label: '挑战日志', description: '每周完成金碟相关挑战条目获得额外 MGP。' }
        ]
      },
      {
        title: '最值得兑换的奖励',
        content: '以下奖励性价比最高，建议优先兑换。',
        items: [
          { label: '坐骑：芬里尔', description: '100万 MGP。最便宜的金碟坐骑，外观酷炫。' },
          { label: '坐骑：仙人掌', description: '200万 MGP。标志性坐骑。' },
          { label: '发型：现代美学', description: '多个现代发型，每个约 2-5 万 MGP。' },
          { label: '舞蹈：各种舞蹈', description: '曼波舞/皇家舞等，每个约 8 万 MGP。' },
          { label: '幻卡：各种卡牌', description: '收集党必备，各价格段位都有。' }
        ]
      },
      {
        title: '时尚品鉴攻略',
        content: '时尚品鉴是每周最重要的 MGP 来源。每周五更新主题，需要穿戴特定装备获得评分。',
        items: [
          { label: '80分策略', description: '只需要达到 80 分即可拿满 MGP 奖励。不必追求 100 分。' },
          { label: '查找攻略', description: '每周五 reddit/nga/ffxiv 社区会发布本周的 80 分方案。跟着做只需几分钟。', highlight: '每周必看' },
          { label: '染色提示', description: '如果装备买不到指定的，有时用正确颜色染色也能加分。' },
          { label: '奖励', description: '80 分：60000 MGP。100 分：额外获得时尚品鉴兑换券（累积后可兑换专属装备）。' }
        ]
      }
    ],
    tips: [
      '每周时尚品鉴 + 每日彩券 = 每周约 15-20 万 MGP，坚持一个月可买芬里尔',
      '挑战日志的金碟条目奖励丰厚，建议每周清理',
      'GATE 在地图上有标记，看到"即将开始"就过去，只需 1-2 分钟',
      '陆行鸟赛跑培养一只满级鸟需要一定投入但长期回报可观'
    ]
  },

  // ==================== 周常指南 ====================
  {
    id: 'weekly-guide',
    title: '每周必做清单',
    category: 'weekly',
    icon: '📋',
    summary: '每周四 16:00（北京时间）服务器重置。以下是每个玩家应该优先完成的周常任务清单。',
    sections: [
      {
        title: '高优先级（收益最高）',
        content: '以下周常优先完成，收益极高。',
        items: [
          { label: '时尚品鉴', description: '金碟游乐场。80 分即可拿 6 万 MGP。5 分钟搞定。', highlight: '★★★★★' },
          { label: '奇谭 (Wondrous Tails)', description: '伊修加德。完成 9 个贴纸拿 500 亚拉戈神典石 + 大量 MGP/金币。' },
          { label: '老主顾 (Custom Deliveries)', description: '每周 12 次（6 个老主顾 ×2 次）。给大量黄票/白票 + 经验。' },
          { label: '挑战日志', description: '自动完成类。战斗/采集/制作/金碟/蛮族等条目完成有额外奖励。' }
        ]
      },
      {
        title: '中优先级（稳定收入）',
        content: '有时间就做，收益稳定。',
        items: [
          { label: '蛮族日常', description: '每天 12 个日常（3 个蛮族 ×4 个任务）。经验 + 蛮族货币换材料。' },
          { label: '狩猎通缉令', description: '1-3 级通缉目标每周各有数量限制。获取狩猎点数和亚拉戈神典石。' },
          { label: '副本随机', description: '每天首次随机：练级/50-80级/讨伐/主线/团队 各额外奖励神典石。' }
        ]
      },
      {
        title: '低优先级（可选）',
        content: '有时间有兴趣再做。',
        items: [
          { label: '无人岛', description: '每周更新工房订单。适合休闲养老。' },
          { label: '幻卡大赛', description: '金碟每周幻卡对手挑战。' },
          { label: '陆行鸟赛跑', description: '挑战赛每周可拿额外奖励。' }
        ]
      }
    ],
    tips: [
      '周四重置后建议先做时尚品鉴（最简单）+ 奇谭（检查贴纸是否需要补），再做老主顾',
      '挑战日志不用刻意去刷，正常游戏基本都能完成大半',
      '使用 FFXIV 快捷指令 "/任务列表" 可以查看当前所有周常进度'
    ]
  },
  {
    id: 'wondrous-tails',
    title: '奇谭 (Wondrous Tails) 攻略',
    category: 'weekly',
    icon: '📖',
    summary: 'Wondrous Tails（奇异冒险书/奇谭）是伊修加德的每周贴纸收集活动。完成 9 个贴纸可获得丰厚奖励。',
    sections: [
      {
        title: '基本玩法',
        content: '每周在伊修加德 (X:7.0, Y:5.5) NPC 处领取一本冒险书。书中有 16 个任务，完成任意任务后在对应位置贴贴纸。目标：4 条线完整。',
        items: [
          { label: '贴纸点数', description: '每个完成任务可获得 1-9 枚贴纸。使用 2 点可"洗牌"重新排列贴纸位置。' },
          { label: '4线奖励', description: '形成 4 条完整直线（横/竖/斜）即可领取大奖。奖励包括：金碟币、亚拉戈神典石、军团徽章等。' },
          { label: '任务类型', description: '包含副本、讨伐、PvP、深层迷宫等 16 种随机任务。' }
        ]
      },
      {
        title: '高效完成策略',
        content: '不需要完成全部 16 个任务，只需完成 9 个并排列得当即可。',
        items: [
          { label: '优先选择简单任务', description: '比如随机讨伐、随机团队等自动组队的任務。' },
          { label: '使用贴纸点洗牌', description: '完成 9 个任务后，用贴纸点重新排列贴纸位置，尝试形成 4 线。', highlight: '关键技巧' },
          { label: '任务未完成也可领取', description: '即使没形成 4 线，完成 3-9 个贴纸也有对应的奖励等级。但不建议：尽量冲 4 线。' }
        ]
      }
    ],
    tips: [
      '贴纸点数用完可以继续做任务获取。确保每次洗牌前有足够的点数',
      '如果排不出 4 线，可以先领奖励，下周再赌。奖励不会更好但也不亏',
      '奇谭还有最终大奖：金碟币 100万+，但概率极低（约 1%）'
    ]
  },

  // ==================== 军票相关 ====================
  {
    id: 'gc-guide',
    title: '军票系统完全指南',
    category: 'gc',
    icon: '🪖',
    summary: '军票（Grand Company Seals）通过上交装备/物品获取，可用于兑换各种实用道具，也可以换传送券。',
    sections: [
      {
        title: '军票获取方式',
        content: '以下是效率最高的军票获取方式。',
        items: [
          { label: '上交副本装备', description: '副本掉落的绿装/蓝装全部上交。一件 70 级以上装备约 1000-1500 军票。', highlight: '最推荐' },
          { label: '每日补给任务', description: '制作/采集指定物品上交，优先级高且经验丰厚（练级期）。' },
          { label: '狩猎通缉令', description: '完成军团狩猎目标获得军票。' },
          { label: '寻宝', description: 'G10+ 寻宝副本中可获取大量可上交的素材。' }
        ]
      },
      {
        title: '值得兑换的物品',
        content: '军票商店中的实用物品。',
        items: [
          { label: '传送券', description: '消耗军票换取免费传送。1 张 = 1 次传送。', highlight: '最常用' },
          { label: '幻象棱晶', description: '用于幻化装备外观。500 军票/个。' },
          { label: '暗物质', description: '修理装备用。G7 暗物质（90 级以上装备修理），G8 暗物质（100 级）。' },
          { label: '探险币', description: '用于雇员 18 小时探险消耗。保持存货充足。' },
          { label: '装备箱', description: '开出随机装备（可上交获得更多军票，滚雪球）。' }
        ]
      },
      {
        title: '军阶提升',
        content: '提升军阶可解锁更多兑换物品和功能。',
        items: [
          { label: '少尉', description: '解锁冒险者分队（Squadron），可派遣NPC下副本。' },
          { label: '大尉', description: '解锁狩猎通缉令 2 级。' },
          { label: '少校', description: '解锁狩猎通缉令 3 级。' },
          { label: '大佐', description: '最高军阶。所有兑换品解锁。' }
        ]
      }
    ],
    tips: [
      '副本掉落的绿装全部上交换军票，比卖给 NPC 划算得多',
      '传送券是军票兑换最值的物品：1 张券 ≈ 1000+ Gil 的传送费',
      '每个资料片的顶阶暗物质（G8）只能在军票商店买到，建议常备 50+ 个'
    ]
  },

  // ==================== 房屋相关 ====================
  {
    id: 'housing-guide',
    title: '房屋购买与装修入门',
    category: 'housing',
    icon: '🏡',
    summary: '房屋是 FFXIV 中最珍贵的资产之一。购买房屋需要满足条件，且在不同服务器竞争程度不同。',
    sections: [
      {
        title: '购房条件',
        content: '购买个人房屋需要满足以下条件。',
        items: [
          { label: '等级要求', description: '任一职业达到 50 级，且军阶在少尉以上。' },
          { label: '购买权限', description: '个人房屋：任一职业 50 级 + 军阶少尉 / 部队房屋：部队等级 6 级 + 购买权限。' },
          { label: '随机抽选', description: '目前房屋采用抽选制。每轮抽签持续 5 天（实装 4 天 + 结果公示 1 天）。', highlight: '重要' },
          { label: '资金要求', description: 'S：300-375万 / M：1600-2000万 / L：4000-5000万 Gil（不同区域价格不同）。' }
        ]
      },
      {
        title: '购房策略',
        content: '在人口密集的服务器，购房竞争激烈。以下策略可提高成功率。',
        items: [
          { label: '选择冷门区域', description: '白银乡和穹顶皓天的竞争远低于海雾村和薰衣草园。同样大小的房屋价格相同。' },
          { label: '选择 S 房', description: 'S 房的中签率最高，因为投入门槛低。先用 S 房占坑，后续再搬家。' },
          { label: '多号抽签', description: '多个角色（同一账号不同角色）可以各自参与同一房屋抽签，提高中签率。' },
          { label: '关注新区域', description: '资料片更新通常会开放新住宅区，此时是最佳购房时机。' }
        ]
      },
      {
        title: '装修入门',
        content: '房屋装修是创造力的发挥空间。即使 S 房也能装修得很精致。',
        items: [
          { label: '家具获取', description: '制作、购买、NPC兑换、副本掉落等途径。市场板是主要来源。' },
          { label: '浮空技巧', description: '通过"悬浮家具"BUG技巧可以实现物品浮空放置。从墙上浮起或从桌面浮起。' },
          { label: 'MOD预览', description: '使用 BDTH/Burning Down The House 等插件可以突破家具放置限制（注意：第三方工具）。' },
          { label: '装修分享', description: '参考 housing snap 等社区获取灵感。twitter 搜索 #FFXIVHousing 标签。' }
        ]
      },
      {
        title: '公寓 vs. 个人房',
        content: '如果你暂时买不到个人房，公寓也是一个好选择。',
        items: [
          { label: '公寓', description: '50万 Gil 一次性购买，每个住宅区都有。可放置 100 个家具，不能种地。', highlight: '性价比高' },
          { label: '个人房', description: '可以种地（田地 1-3 块），放置 200-400 个家具（S/M/L），有室外装饰。' },
          { label: '部队个人房间', description: '30万 Gil，在部队房屋内。家具数较少但可随时回部队。' }
        ]
      }
    ],
    tips: [
      '即使买不起大房，公寓也是体验装修的好起点。100 个家具足够做精致小窝',
      '房屋如果不定期进入会被自动拆除。个人房：45 天 / 部队房：一直保留',
      '搬家（换房）时，之前投入的购房款的 30% 可抵扣新房价款',
      '种地（杂交）是房子的一大优势。可以种萨维奈洋葱等高价作物'
    ]
  },
  {
    id: 'garden-guide',
    title: '种地与杂交指南',
    category: 'housing',
    icon: '🌱',
    summary: '拥有个人房或部队房的玩家可以种地。通过杂交可以获得稀有作物，其中一些价值很高。',
    sections: [
      {
        title: '种地基础',
        content: '房屋室外有田地（盆栽或田地）。被个人房或部队房拥有者可种植。',
        items: [
          { label: '田地类型', description: 'S 房 1 块 / M 房 2 块 / L 房 3 块田地。每块 8 格 = 24 株（L房）。' },
          { label: '种子来源', description: 'NPC商店、蛮族货币、副本掉落、市场板。大多数种子市场板有售。' },
          { label: '生长周期', description: '大部分作物 24-48 小时 Eorzea 时间（约 IRL 24-48 小时）成熟。需要浇水和施肥。' }
        ]
      },
      {
        title: '杂交系统',
        content: '将两种不同种子相邻种植，可能产生杂交新品种。FFXIV 杂交系统复杂但回报丰厚。',
        items: [
          { label: '杂交条件', description: '相邻格子种植不同种子。成熟时如果满足杂交条件，会产出新品种种子。' },
          { label: '热门杂交产物', description: '萨维奈洋葱（陆行鸟升 11-20 级）、血椒（食物材料）、魔法草（爆发药材料）。', highlight: '最赚钱' },
          { label: '杂交配方', description: '配方较为复杂，建议参考 ffxivgardening.com 等专门网站。' }
        ]
      }
    ],
    tips: [
      '萨维奈洋葱是杂交产物中利润最高的，每个 8-15 万 Gil，市场需求大',
      '公寓不能种地但可以用花盆种花（杂交不可行）',
      '如果没房子又想种地，可以找有房子的朋友帮你种，或使用部队房田地'
    ]
  },

  // ==================== 综合 ====================
  {
    id: 'newbie-guide',
    title: '新手指南（满级后该做什么）',
    category: 'other',
    icon: '🌟',
    summary: '刚刚主线通关，满级之后该从哪里开始？这份指南帮你规划满级后的游戏路线。',
    sections: [
      {
        title: '第一阶段：装备追赶',
        content: '满级后第一件事是提升装备等级，以便参与高级副本。',
        items: [
          { label: '诗学神典石', description: '兑换 530/660 诗学装备（根据版本不同）。直接购买 HQ 新式装备更省时。', highlight: '第一步' },
          { label: '市场板', description: '买一套 HQ 新式装备（全套约 100-200万），比刷副本快速得多。' },
          { label: '普通团队副本', description: '满级普通 8 人本掉落装备是进入极神的敲门砖。' }
        ]
      },
      {
        title: '第二阶段：解锁核心系统',
        content: '以下系统是长期玩法核心，建议尽早解锁。',
        items: [
          { label: '金碟游乐场', description: '乌尔达哈 (X:9.6, Y:9.0)。解锁后马上可以做时尚品鉴（每周 6 万 MGP）。' },
          { label: '奇谭', description: '伊修加德 (X:7.0, Y:5.5)。每周完成拿神典石 + MGP。' },
          { label: '蛮族任务', description: '当前版本蛮族每天 12 个日常。经验（副职练级）+ 货币兑换。' },
          { label: '深层迷宫', description: '死者宫殿（50级）/ 天之御柱（70级）/ 正统优雷卡（90级）。练副职最佳方式。' }
        ]
      },
      {
        title: '第三阶段：选择方向',
        content: 'FFXIV 满级后有丰富的平行玩法，不需要全部参与。选喜欢的即可。',
        items: [
          { label: '高难副本', description: '极神 → 零式 → 绝本。逐级挑战。需要固定队和时间投入。' },
          { label: '制作/采集', description: '全职业制霸。可以自给自足或通过市场板赚钱。' },
          { label: '金碟游乐场', description: '收集坐骑/宠物/幻卡/外观。佛系养老玩家的天堂。' },
          { label: 'RP/装修', description: '角色扮演 + 房屋装修。社区氛围极好。' },
          { label: 'PVP', description: '水晶冲突（5v5）或战场（72人）。有独立的技能系统和专属奖励。' }
        ]
      }
    ],
    tips: [
      '不用着急追大部队的进度。FFXIV 的内容永不过期，按自己的节奏玩',
      '找个友好的部队能极大提升游戏体验：buff、潜水艇收益、固定队、社交',
      '花 Gil 买装备比刷副本快得多。满级后花 100-200 万买一套 HQ 新式装就可以直接参与零式'
    ]
  }
]

export const categoryLabels: Record<string, string> = {
  fc: '部队', market: '市场', goldsaucer: '金碟', housing: '房屋',
  weekly: '周常', retainer: '雇员', gc: '军票', other: '综合'
}

export const categoryIcons: Record<string, string> = {
  fc: '🏠', market: '💰', goldsaucer: '🎰', housing: '🏡',
  weekly: '📋', retainer: '👤', gc: '🪖', other: '🌟'
}
