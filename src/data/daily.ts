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

,

  // ==================== 深层迷宫 ====================
  {
    id: 'deepdungeon-potd',
    title: '死者宫殿 (PotD) 完全攻略',
    category: 'deepdungeon',
    icon: '🏚️',
    summary: '死者宫殿（Palace of the Dead）是 FFXIV 首个深层迷宫，B1-B200 层。完成 B50 后可获得死灵术士称号。是练副职和获取稀有道具的好地方。',
    sections: [
      { title: '基础规则', content: '死者宫殿使用独立的等级系统（从1级开始），不需要外部装备。所有玩家在内部装备强度取决于"武器强化值"和"防具强化值"。', items: [
        { label: '强化值系统', description: '开银宝箱随机获得武器/防具强化值（+1到+3）。最高武器+99、防具+99。', highlight: '核心机制' },
        { label: '复活机制', description: '全灭=重置当前10层。单人全灭=从头再来（死灵挑战核心难点）。' },
        { label: '魔陶石', description: '击杀怪物概率掉落。石化（最有用）、减少敌人、探地图三种。', highlight: '神器' }
      ]},
      { title: '层数与奖励', content: '每10层一个BOSS。B50/B100各获得一个剧情成就。', items: [
        { label: 'B1-B50', description: '主线剧情。完成后解锁B51-B200。推荐等级30+。' },
        { label: 'B51-B100', description: '深层。银宝箱出G10-G15宝图材料，稳定收入来源。' },
        { label: 'B51-B60练级', description: '60级以下最快练级方式。一次约15分钟。', highlight: '练级圣地' },
        { label: '死灵术士', description: '单人挑战B200获得。全服达成率<1%，终极挑战。', highlight: '终极称号' }
      ]},
      { title: '关键陷阱', content: '陷阱是死灵挑战的最大敌人。', items: [
        { label: '青蛙陷阱', description: '变成青蛙30秒。死灵挑战最致命的陷阱。', highlight: '最危险' },
        { label: '地雷陷阱', description: '爆炸大伤害。贴墙走可避开大部分。' },
        { label: '寂静陷阱', description: '封印技能30秒。在战斗中极危险。' },
        { label: '诱饵陷阱', description: '召唤大量怪物围攻。立刻用魔陶石或逃跑。' }
      ]}
    ],
    tips: [
      '死灵挑战非常困难，建议先在B51-B100组队积累经验',
      '战士/骑士最适合单刷（自疗+减伤），赤魔/召唤次之',
      'B180+不要在怪物房间停留，全部用魔陶石通过',
      '三种魔陶石：石化（最强）、减少敌人、探地图。优先保留石化'
    ]
  },
  {
    id: 'deepdungeon-hoh',
    title: '天之御柱 (HoH) 完全攻略',
    category: 'deepdungeon',
    icon: '🏯',
    summary: '天之御柱（Heaven-on-High）是红莲篇的深层迷宫，B1-B100 层。比死者宫殿难度略低，B21-B30是61-70级最佳练级点。',
    sections: [
      { title: '与死者宫殿的区别', content: '基本系统相同但改良不少。', items: [
        { label: '层数减少', description: '只有100层。完成B100获"孤胆英雄"称号。' },
        { label: '魔陶石更多', description: '新增魔法解除（解DEBUFF）和运气上升（提高宝箱质量）。' },
        { label: '黄昏之宝', description: '金宝箱出产。4个可兑换稀有宠物和坐骑。', highlight: '收藏党' }
      ]},
      { title: '练级推荐（61-70级）', content: 'B21-B30反复刷，每次约12-15分钟。约等于练级随机副本经验但无排队。', items: [
        { label: '准备', description: '武器/防具强化值越高越好。组满4人效率最高。' },
        { label: '打法', description: '速通为主，T拉一波AOE清。BOSS都很简单。' }
      ]}
    ],
    tips: [
      'B71+怪物伤害骤增，需要谨慎拉怪',
      '坐骑奖励（白虎/赤兔马等）市场价值很高',
      '孤胆英雄挑战建议使用绝枪战士（高减伤+自疗）'
    ]
  },
  {
    id: 'deepdungeon-eo',
    title: '正统优雷卡 (EO) 完全攻略',
    category: 'deepdungeon',
    icon: '⚡',
    summary: '正统优雷卡（Eureka Orthos）是晓月篇的深层迷宫，B1-B100 层。81级以上可进入。新增强力魔陶石，是三个深层迷宫中单人挑战最简单的。',
    sections: [
      { title: '新增系统', content: 'EO在HoH基础上大幅改良。', items: [
        { label: '半神魔陶石', description: '变为半神形态，30秒内无敌+全属性大幅提升。只能携带1个。', highlight: '最强' },
        { label: '德墨忒尔克隆体', description: '召唤NPC协助战斗5分钟。大幅降低单人难度。' },
        { label: '装备幻化奖励', description: '正统断片兑换EO专属发光武器外观。30个兑换1个武器。', highlight: '外观党' }
      ]},
      { title: '练级推荐（81-90级）', content: 'B21-B30效率不错，无需排队适合DPS练级。同时获取神典石+宝箱奖励。' }
    ],
    tips: [
      'EO单人挑战比前两作简单很多，推荐尝试',
      'B81-B90恶魔墙会"缩小"技能，需打断或躲开',
      '正统断片兑换的发光武器外观非常精美'
    ]
  },

  // ==================== 生产采集 ====================
  {
    id: 'crafting-leveling',
    title: '全生产职业 1-100 升级攻略',
    category: 'crafting',
    icon: '🔨',
    summary: '8个生产职业升级路线规划。核心思路：理符任务+蛮族日常+老主顾+伊修加德重建。8个职业同步升级最省材料。',
    sections: [
      { title: '升级核心Buff', content: '全程保持以下加成：部队buff（制作经验+15%）、工程学指南（军票兑换，+150%经验）、休息经验槽、任意食物（+3%经验）。', items: [
        { label: '工程学指南', description: '军票兑换的升级神器。+150%经验持续20次制作。军票多就大量换。', highlight: '必备' }
      ]},
      { title: '1-20级：快速起步', items: [
        { label: '行会任务', description: '完成各职业行会初始任务，送基础装备。' },
        { label: '配方填充', description: '所有1-15级配方各做1个。首次制作额外经验。约3-4小时8职业全20级。', highlight: '快速' }
      ]},
      { title: '20-80级：伊修加德重建', content: '伊修加德重建（苍穹街）是20-80级最快升级方式，无脑重复提交收藏品。', items: [
        { label: '伊修加德重建', description: '完成3.3主线+支线"迈向苍穹"。提交指定收藏品，经验极高。', highlight: '最快' },
        { label: '老主顾 (50+)', description: '每周12次。克莱夫/艾尔图/卡伊希尔等给大量经验+黄票/白票。', highlight: '每周必做' },
        { label: '蛮族日常', description: '莫古力族(50)→鲶鱼精族(60)→矮人族(70)。经验+蛮族货币。' }
      ]},
      { title: '80-100级：7.0新内容', items: [
        { label: '新理符', description: '图拉尔大陆的理符任务（90-100级）。大量缴纳型优先。' },
        { label: '佩鲁佩鲁族', description: '7.0新蛮族，90级解锁。日常给大量制作经验。' },
        { label: '收藏品', description: '90-100级收藏品提交。建议用宏一键搓HQ。' }
      ]}
    ],
    tips: [
      '8职业同步升级性价比最高：共享装备（除主副手），互相提供半成品材料',
      '烹饪是唯一必须练满的生产职业（爆发药+食物），优先练烹饪到满级',
      '伊修加德重建是最快升级方式但需大量材料，建议提前准备或市场板购买',
      '老主顾每周12次不要浪费，经验+票双收益'
    ]
  },
  {
    id: 'gathering-leveling',
    title: '全采集职业 1-100 升级攻略',
    category: 'gathering',
    icon: '⛏️',
    summary: '3个采集职业升级路线。比生产简单直接：迪亚デム（50-80级最快）+ 收藏品 + 出海捕鱼。全程保持采集指南buff。',
    sections: [
      { title: '升级核心Buff', items: [
        { label: '部队buff', description: '采集经验+15%。' },
        { label: '采集指南', description: '军票兑换（+150%经验），全程保持。', highlight: '必备' },
        { label: '食物', description: '任意加采集力食物，额外+3%经验。' }
      ]},
      { title: '1-50级', items: [
        { label: '采矿/园艺', description: '按照采集笔记逐个挖。每5级换装备。' },
        { label: '捕鱼', description: '最轻松。万能拟饵即可钓大部分鱼。海上捕鱼经验极高。', highlight: '最轻松' }
      ]},
      { title: '50-80级：迪亚デム时代', items: [
        { label: '迪亚デム采集', description: '采矿/园艺最佳选择。无限采集+高经验+材料换黄票。一直挖到80级。', highlight: '最快' },
        { label: '收藏品 (50+)', description: '提交给收藏品商人换白票+大量经验。' },
        { label: '限时采集点', description: '传说采集点每次给大量经验。用FFXIV Clock查时间。' }
      ]},
      { title: '80-100级', items: [
        { label: '7.0采集点', description: '图拉尔大陆普通采集点经验足够升到100级。' },
        { label: '出海捕鱼', description: '海上渔船5分钟一趟，经验极高还能赚Gil。' }
      ]}
    ],
    tips: [
      '迪亚デム是采矿/园艺的练级圣地，50级后直接去挖到80级',
      '捕鱼最快升级：出海捕鱼。5分钟一趟，经验+Gil双收',
      '采集指南全程保持，军票不够就去做狩猎/副本随机攒'
    ]
  },
  {
    id: 'crafting-gil',
    title: '生产赚钱完全指南',
    category: 'crafting',
    icon: '💎',
    summary: '利用生产职业赚钱是FFXIV最稳定的收入来源。版本初期新式HQ装备一天轻松赚1000-5000万Gil。掌握市场节奏就能稳定致富。',
    sections: [
      { title: '版本赚钱节奏', items: [
        { label: '版本初期 (x.0)', description: '新式HQ装备需求爆棚。8职业满级生产者一天轻松赚千万Gil。', highlight: '最赚钱' },
        { label: '零式开放周', description: '爆发药+食物价格飙升3-5倍。提前囤货在开放当天卖出。' },
        { label: '长草期 (x.5+)', description: '价格低迷。此时是囤货好时机，为新版本准备材料和Gil。' }
      ]},
      { title: '热门赚钱品类', items: [
        { label: 'HQ新式战斗装备', description: '利润最高但需全套禁断生产装。投入大回报大。', highlight: '高回报' },
        { label: 'HQ爆发药/食物', description: '零式/绝本常青需求。烹饪专精最佳。' },
        { label: 'HQ中间材料', description: '矿石→铸锭、木材→板材。懒人税空间+50-200%。', highlight: '懒人税' },
        { label: '房屋家具', description: '持续需求存在。部分稀有家具利润极高。' }
      ]},
      { title: '定价策略', items: [
        { label: '不要踩踏压价', description: '价格战只会让所有人都赚不到钱。合理匹配最低价即可。' },
        { label: '周末高峰', description: '周五晚到周日交易高峰，可适当提价10-20%。' },
        { label: '跨服套利', description: '同物品不同服务器差价可达50%+。用Universalis查找机会。', highlight: '进阶' }
      ]}
    ],
    tips: [
      '生产赚钱关键是执行力——马上去做比分析更重要',
      '烹饪+炼金+采矿+园艺是基础赚钱组合（自给自足爆发药产业链）',
      '保留500万+流动资金应对市场机会',
      '使用 Universalis 查看跨服价格趋势'
    ],
    links: [
      { label: 'Universalis 跨服比价', url: 'https://universalis.app' },
      { label: 'FFXIV Teamcraft', url: 'https://ffxivteamcraft.com' }
    ]
  },

  // ==================== 海岛开拓 ====================
  {
    id: 'island-sanctuary',
    title: '海岛开拓完全指南',
    category: 'island',
    icon: '🏝️',
    summary: '海岛开拓是6.2推出的单人休闲内容。在私人岛屿上建造设施、饲养动物、种植作物，享受田园生活并赚取大量蓝票兑换稀有奖励。',
    sections: [
      { title: '解锁与基础', items: [
        { label: '解锁条件', description: '完成6.0主线后，在拉札罕接"寻找丰饶的岛屿"。' },
        { label: '岛屿等级', description: '通过采集/建造/制作提升。最高等级随版本开放。', highlight: '核心' },
        { label: '工房系统', description: '设置生产日程让自由人自动生产。每2小时一轮，上限24小时。', highlight: '主要收入' }
      ]},
      { title: '动物饲养', items: [
        { label: '捕捉', description: '使用捕兽网捕捉。不同时间/天气出现不同稀有动物。' },
        { label: '稀有动物', description: '部分只在特定天气/时间出现。全收集可获得成就和称号。', highlight: '收集党' }
      ]},
      { title: '农作物种植', items: [
        { label: '洒水器', description: '优先升级自动化洒水系统，省去手动浇水。' },
        { label: '种植策略', description: '根据工房日程决定种什么。周期长的作物收益更高。' }
      ]},
      { title: '奖励', items: [
        { label: '坐骑', description: '海岛摩托、海岛陆行鸟等独特坐骑。' },
        { label: '染料', description: '绿票兑换稀有染料（纯白/纯黑等），可转卖市场板。' }
      ]}
    ],
    tips: [
      '工房日程是海岛主要收益来源。建议每天早晚各设一次日程',
      '优先升级工房和仓库等级。其他设施按需升级',
      '海岛是"挂机收益"系统，每天5分钟管理即可'
    ]
  },

  // ==================== 天书奇谭 ====================
  {
    id: 'wondrous-tails',
    title: '天书奇谭 (奇谭) 完全攻略',
    category: 'wondrous',
    icon: '📖',
    summary: '天书奇谭是每周一次的Bingo游戏。完成指定副本获贴纸，连线获取奖励。是每周最重要的周常之一，3线奖励金色证书最有价值。',
    sections: [
      { title: '基础规则', items: [
        { label: '领取', description: '每周四刷新。在伊修加德（田园郡）库洛处领取新天书。16个随机副本4×4网格。' },
        { label: '贴纸', description: '完成指定副本获得1-9点贴纸。目标9贴纸或连线。' },
        { label: '洗牌点数', description: '每本天书最多洗牌2次。通过完成天书副本获得洗牌点数。', highlight: '关键策略' }
      ]},
      { title: '最高效率策略', items: [
        { label: '3线最优', description: '3线奖励最好（金色证书+大量MGP/神典石）。优先追求3线。', highlight: '最优' },
        { label: '洗牌时机', description: '前7贴纸位置很差就尽早洗牌。不要第8个才洗。' },
        { label: '速刷技巧', description: '用"解除限制"单人速刷极蛮神（贴纸1-3点）。不需要打完整副本。', highlight: '省时间' }
      ]},
      { title: '奖励选择', items: [
        { label: '亚拉戈神典石', description: '1线奖励500神典石，每周最大来源之一。' },
        { label: 'MGP', description: '2线/3线可选大量MGP，最高10万。' },
        { label: '金色证书', description: '3线奖励。兑换稀有坐骑、宠物、魔晶石。', highlight: '终极目标' }
      ]}
    ],
    tips: [
      '每周四早上第一时间领天书，用"解除限制"单人速刷极蛮神最快',
      '当周有"副本随机"任务时优先打练级随机（必得1贴纸）',
      '3线后就可以停了，继续刷贴纸收益递减'
    ]
  },

  // ==================== 更多市场策略 ====================
  {
    id: 'market-flipping',
    title: '市场倒卖 (Flipping) 进阶指南',
    category: 'market',
    icon: '📈',
    summary: '倒卖（低买高卖）是利用市场信息差和时间差赚钱的策略。不需要任何生产职业，只需要资金和市场洞察力。',
    sections: [
      { title: '倒卖原理', items: [
        { label: '时间差', description: '周末买入（价格低），工作日卖出（供给少、价格高）。', highlight: '最简单' },
        { label: '版本差', description: '版本末期囤热门材料，新版本开放后翻倍卖出。' },
        { label: '跨服套利', description: '用Universalis找不同服务器差价，低价买高价卖。', highlight: '利润最高' }
      ]},
      { title: '适合倒卖的商品', items: [
        { label: '魔晶石', description: '流通量极大，价格波动频繁。每个版本初期刚需。' },
        { label: '爆发药材料', description: '每个零式/绝本版本刚需。HQ半成品懒人税空间大。' },
        { label: '染料', description: '纯白/纯黑需求稳定，每周内价格有规律可循。' }
      ]},
      { title: '风险管理', items: [
        { label: '分散投资', description: '不要把所有Gil押一种商品。改版可能血本无归。' },
        { label: '关注PLL', description: '密切关注制作人来信和补丁说明，版本改动可能让存货一夜贬值。', highlight: '必须' }
      ]}
    ],
    tips: [
      '倒卖需要耐心。有些商品需1-2周才出手，不要着急降价',
      'Universalis"价格历史"图表是最有用工具。学会看趋势',
      '9个雇员×20栏位=180出货位，充分利用'
    ],
    links: [
      { label: 'Universalis 跨服比价', url: 'https://universalis.app' },
      { label: 'FFXIVMB 市场趋势', url: 'https://ff14mb.com' }
    ]
  },

  // ==================== 房屋装修 ====================
  {
    id: 'housing-decorating',
    title: '房屋装修入门指南',
    category: 'housing',
    icon: '🏡',
    summary: 'FFXIV的房屋系统是最丰富的MMO房屋系统之一。从选房到装修，从浮空技巧到灯光设计，打造梦想中的家。',
    sections: [
      { title: '房屋获取', items: [
        { label: '抽选系统', description: '每轮抽选9天。前往有空房的住宅区点告示板参加。每人同时只能参加1个。' },
        { label: '公寓', description: '50万Gil永久拥有。100件家具。无需抽选。适合新人。' },
        { label: 'S/M/L房', description: '300万/1600万/4000万。家具限制200/300/400件。', highlight: '核心区别' }
      ]},
      { title: '装修技巧', items: [
        { label: '浮空技巧', description: '通过隔板和家具浮空BUG把家具放在任意高度。装修的灵魂。', highlight: '进阶必备' },
        { label: '染色', description: '大部分家具可染色。使用家具染色剂（市场板购买或制作）。' },
        { label: '预设模板', description: '可保存多个设计方案。切换模板需要家具有库存。' },
        { label: '灯光设计', description: '好的灯光能彻底改变房间氛围。不要忽视。' }
      ]},
      { title: '省钱策略', items: [
        { label: 'DIY制作', description: '自己采集+制作成本最低。时间投入较大。' },
        { label: '部队工房', description: '部分家具只能用工房制作（潜水艇材料）。' },
        { label: '季节活动', description: '活动送的家具是免费装饰资源。' }
      ]}
    ],
    tips: [
      '新手建议从公寓开始（50万Gil、100件家具），成本低压力小',
      '装修前先画平面图或找参考设计',
      '浮空技巧是装修灵魂——学会了天花板就不再是天花板',
      '灯光的重要性不亚于家具本身'
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
