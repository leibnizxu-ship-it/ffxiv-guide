<template>
  <section class="tools-page">
    <h2 class="page-title">🛠️ 实用工具</h2>

    <!-- ====== 宏生成器 ====== -->
    <div class="tool-section">
      <h3 class="section-title">📋 常用宏生成器</h3>
      <p class="tool-desc">选择预设模板快速生成 FFXIV 常用宏 · 点击即可复制到剪贴板</p>

      <div class="macro-categories">
        <button v-for="cat in categories" :key="cat.key" class="cat-btn"
          :class="{ active: activeCat === cat.key }" @click="activeCat = cat.key">
          {{ cat.icon }} {{ cat.label }}
        </button>
      </div>

      <div class="macro-grid">
        <div v-for="tpl in filteredMacros" :key="tpl.id" class="macro-card"
          @click="selectTemplate(tpl)">
          <div class="macro-card-header">
            <span class="macro-card-name">{{ tpl.name }}</span>
            <span class="macro-card-cat">{{ categoryLabel(tpl.category) }}</span>
          </div>
          <pre class="macro-card-preview">{{ tpl.generate().split('\n').slice(0, 3).join('\n') }}</pre>
        </div>
      </div>

      <div v-if="selectedTpl" class="macro-output">
        <div class="macro-header">
          <span class="macro-name">{{ selectedTpl.name }}</span>
          <button class="copy-btn" @click="copyMacro">{{ copied ? '✅ 已复制' : '📋 复制' }}</button>
        </div>
        <pre class="macro-code">{{ generatedMacro }}</pre>
      </div>
    </div>

    <!-- ====== 配装推荐 ====== -->
    <div class="tool-section">
      <h3 class="section-title">💎 配装推荐</h3>
      <p class="tool-desc">选择职业查看 BiS 和开荒装配方案</p>
      <div class="gear-job-select">
        <button v-for="job in jobList" :key="job.id" class="gear-job-btn"
          :class="{ active: selectedJobId === job.id }" @click="selectedJobId = job.id">
          {{ job.icon }} {{ job.name }}
        </button>
      </div>
      <div v-if="selectedJobId && gearSets.length" class="gear-sets">
        <div v-for="set in gearSets" :key="set.id" class="gear-set">
          <h4 class="gear-set-title">
            {{ set.label }}
            <span class="gear-type-badge" :class="'badge-' + set.type">{{ typeLabels[set.type] }}</span>
          </h4>
          <div class="gear-pieces">
            <div v-for="piece in set.pieces" :key="piece.slot" class="gear-piece">
              <span class="gear-slot">{{ slotLabels[piece.slot] }} {{ piece.slot }}</span>
              <span class="gear-name">{{ piece.name }}</span>
              <span class="gear-source">{{ piece.source }}</span>
              <span class="gear-materia">🔮 {{ piece.materia }}</span>
            </div>
          </div>
          <div class="gear-summary"><strong>总属性：</strong>{{ set.totalStats }}</div>
        </div>
      </div>
      <div v-if="selectedJobId && gearSets.length === 0" class="no-data">该职业暂无配装数据，待更新...</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { jobs } from '@/data/jobs'
import { getGearByJob, slotLabels } from '@/data/gear'
import type { GearSet } from '@/data/gear'

const selectedJobId = ref('pld')
const jobList = computed(() => jobs.map(j => ({ id: j.id, name: j.name, icon: j.icon })))
const gearSets = computed<GearSet[]>(() => getGearByJob(selectedJobId.value))
const typeLabels: Record<string, string> = { bis: 'BiS', entry: '开荒', prog: '过渡' }

// ---- Macro System ----
interface MacroTemplate { id: string; name: string; category: string; generate: () => string }

const activeCat = ref('all')
const selectedTpl = ref<MacroTemplate | null>(null)
const copied = ref(false)

const categories = [
  { key: 'all', icon: '📚', label: '全部' },
  { key: 'battle', icon: '⚔️', label: '副本战斗' },
  { key: 'role', icon: '🎭', label: '职业专属' },
  { key: 'craft', icon: '🔨', label: '生产采集' },
  { key: 'qol', icon: '⚡', label: '日常便利' },
  { key: 'social', icon: '💬', label: '社交表情' }
]

const macros: MacroTemplate[] = [
  // ===== 副本战斗 =====
  { id:'countdown', name:'倒计时 (20s)', category:'battle', generate:()=>'/p ★ 战斗将在 <countdown:20> 后开始！请检查食物和爆发药。 <se.1>' },
  { id:'countdown-15', name:'倒计时 (15s)', category:'battle', generate:()=>'/p ★ <countdown:15> 准备开怪！<se.1>' },
  { id:'spread', name:'分散站位', category:'battle', generate:()=>'/p ★ 分散！MT:N ST:S / H1:NW H2:NE / D1:W D2:E / D3:SW D4:SE <se.2>' },
  { id:'spread-clock', name:'顺时针分散', category:'battle', generate:()=>'/p ★ 顺时针分散站位！/p MT:12点 ST:6点 / H1:9点 H2:3点 / D1:10点 D2:2点 / D3:8点 D4:4点 <se.2>' },
  { id:'stack', name:'全体分摊', category:'battle', generate:()=>'/p ★ 全体集合分摊！<se.3>\n/p 请向标记点集合！' },
  { id:'stack-light', name:'光之分摊', category:'battle', generate:()=>'/p ★ 光分摊：1组左 / 2组右 / 3组中间 <se.3>' },
  { id:'tank-swap', name:'换T', category:'battle', generate:()=>'/p ★ 换T！<se.4>\n/p ST 请挑衅，MT 请退避！' },
  { id:'knockback', name:'防击退', category:'battle', generate:()=>'/p ★ 击退预警！请使用防击退技能！<se.6>' },
  { id:'lb-tank', name:'T LB3', category:'battle', generate:()=>'/p ★ MT 准备释放 坦克 LB3！其他人站安全区！<se.5>' },
  { id:'lb-healer', name:'治疗 LB3', category:'battle', generate:()=>'/p ★ H1 准备释放 治疗 LB3！全员集合！<se.5>' },
  { id:'lb-melee', name:'近战 LB3', category:'battle', generate:()=>'/p ★ D1 准备释放 近战 LB3！<se.5>' },
  { id:'party-mitigation', name:'团队减伤链', category:'battle', generate:()=>'/p ★ 减伤链：\n/p ① MT 30%减伤\n/p ② ST 团队减伤\n/p ③ H1 节制/命运之轮\n/p ④ H2 野战治疗阵\n/p ⑤ 全员小减伤 <se.6>' },

  // ===== 职业专属 =====
  { id:'tank-invuln', name:'坦克无敌通知', category:'role', generate:()=>'/p ★ 使用无敌技能！\n/p 治疗请停止加血（接下来使用自疗） <se.4>' },
  { id:'healer-raise', name:'治疗复活通知', category:'role', generate:()=>'/p 正在复活 <t> 请等待 <se.8>' },
  { id:'healer-rescue', name:'营救提醒', category:'role', generate:()=>'/p 即将对 <t> 使用营救！注意不要使用防击退 <se.7>' },
  { id:'dps-lb-ready', name:'DPS LB就绪', category:'role', generate:()=>'/p ★ LB3 准备完毕！等待时机释放 <se.5>' },
  { id:'ninja-trick', name:'忍者背刺', category:'role', generate:()=>'/p ★ 背刺已就绪，10秒后释放！/p 请准备爆发 <se.2>\n/wait 10\n/p ★ 背刺！打入爆发！<se.3>' },
  { id:'ast-cards', name:'占星发卡', category:'role', generate:()=>'/p ★ 发卡中：/p 近战卡→<1> / 远程卡→<3> / 回复卡→<7>\n/p 占卜将在30秒后 <se.1>' },
  { id:'dancer-partner', name:'舞者舞伴', category:'role', generate:()=>'/p ★ 舞伴已设置：<2> /p ★ 标准Finish + 技巧Finish 即将爆发 <se.5>' },
  { id:'sch-chain', name:'学者连环计', category:'role', generate:()=>'/p ★ 连环计就绪！10秒后释放！请准备爆发！<se.3>\n/wait 10\n/p ★ 连环计已释放！打入爆发！<se.5>' },

  // ===== 生产采集 =====
  { id:'craft-80dur', name:'制作宏 (80耐久)', category:'craft', generate:()=>'/ac "坚信" <wait.3>\n/ac "崇敬" <wait.2>\n/ac "长期俭约" <wait.2>\n/ac "坯料制作" <wait.3>\n/ac "坯料制作" <wait.3>\n/ac "加工" <wait.3>\n/ac "中级加工" <wait.3>\n/ac "上级加工" <wait.3>\n/ac "工匠的神技" <wait.3>\n/ac "比尔格的祝福" <wait.3>\n/ac "模范制作" <wait.3>' },
  { id:'craft-70dur', name:'制作宏 (70耐久)', category:'craft', generate:()=>'/ac "坚信" <wait.3>\n/ac "崇敬" <wait.2>\n/ac "坯料制作" <wait.3>\n/ac "坯料制作" <wait.3>\n/ac "加工" <wait.3>\n/ac "中级加工" <wait.3>\n/ac "上级加工" <wait.3>\n/ac "工匠的神技" <wait.3>\n/ac "比尔格的祝福" <wait.3>\n/ac "模范制作" <wait.3>' },
  { id:'craft-40dur', name:'制作宏 (40耐久-半成品)', category:'craft', generate:()=>'/ac "坚信" <wait.3>\n/ac "坯料制作" <wait.3>\n/ac "坯料制作" <wait.3>\n/ac "中级加工" <wait.3>\n/ac "模范制作" <wait.3>' },
  { id:'craft-quick-synth', name:'简易制作连打', category:'craft', generate:()=>'/ac "简易制作" <wait.3>\n/ac "简易制作" <wait.3>\n/ac "简易制作" <wait.3>\n/ac "简易制作" <wait.3>\n/ac "简易制作" <wait.3>\n/ac "简易制作" <wait.3>' },
  { id:'craft-food', name:'食物+药水快捷', category:'craft', generate:()=>'/macroicon "高山茶"\n/merror off\n/item "高山茶" <wait.1>\n/item "顶级智力之幻药" <wait.1>' },
  { id:'gather-cordials', name:'采集强心剂', category:'craft', generate:()=>'/ac "开拓者之手" <wait.2>\n/ac "天赐的收成" <wait.2>\n/ac "集中检查"' },

  // ===== 日常便利 =====
  { id:'mount-roulette', name:'随机坐骑', category:'qol', generate:()=>'/macroicon "随机坐骑"\n/mount "随机坐骑"' },
  { id:'mount-favorite', name:'最爱坐骑轮换', category:'qol', generate:()=>'/hotbar mount "芬里尔" 1 12\n/hotbar mount "妖灵王" 1 12\n/hotbar mount "仙人掌" 1 12' },
  { id:'hotbar-swap', name:'快捷栏切换', category:'qol', generate:()=>'/hotbar copy current 1 share 7\n/hotbar copy current 2 share 8' },
  { id:'hud-switch', name:'战斗/休闲HUD切换', category:'qol', generate:()=>'/hudlayout 1\n/wait 1\n/hudlayout 2' },
  { id:'return-teleport', name:'返回+传送', category:'qol', generate:()=>'/ac "返回" <wait.8>\n/teleport <wait.5>' },
  { id:'repair', name:'一键修理', category:'qol', generate:()=>'/macroicon "修理"\n/merror off\n/item "暗物质G8" <wait.1>\n/ac "修理" <wait.1>' },
  { id:'sprint-mount', name:'冲刺+坐骑', category:'qol', generate:()=>'/macroicon "冲刺"\n/merror off\n/ac "冲刺" <wait.1>\n/mount "随机坐骑"' },
  { id:'target-mark', name:'标记目标 (1-5)', category:'qol', generate:()=>'/mk attack1 <t>\n/wait 1\n/mk attack2\n/wait 1\n/mk attack3\n/wait 1\n/mk attack4\n/wait 1\n/mk attack5' },
  { id:'echo-clear', name:'清屏+切换频道', category:'qol', generate:()=>'/echo ===============================\n/echo \n/echo \n/echo \n/echo \n/echo \n/echo \n/echo \n/echo ===============================' },

  // ===== 社交表情 =====
  { id:'welcome', name:'新人问候', category:'social', generate:()=>'/p 大家好！(^_^)ノ\n/p 第一次来，请多关照！~\n/p 有不懂的机制我会问哒 <se.7>' },
  { id:'greeting', name:'日常问候', category:'social', generate:()=>'/p 大家早上好/下午好/晚上好！(◕‿◕)\n/p 今天也是充满希望的一天！<se.1>' },
  { id:'thanks', name:'感谢宏', category:'social', generate:()=>'/p 谢谢大家！辛苦了！(≧∇≦)b\n/p 下次再见~ <se.12>' },
  { id:'afk', name:'暂离通知', category:'social', generate:()=>'/p 暂时离开一下，3分钟后回来！(￣▽￣)ゞ\n/away <se.9>' },
  { id:'goodbye', name:'告别退队', category:'social', generate:()=>'/p 辛苦了！我先退队了~\n/p 大家加油！ヽ(●´∀`●)ﾉ\n/leave' },
  { id:'cheer', name:'加油打气', category:'social', generate:()=>'/p 加油！我们可以的！┗(｀O´)┛\n/p 再来一把！<se.11>' },
  { id:'sorry', name:'道歉宏', category:'social', generate:()=>'/p 啊抱歉！我的锅！(>_<)\n/p 下次注意！<se.10>' }
]

const filteredMacros = computed(() => {
  if (activeCat.value === 'all') return macros
  return macros.filter(m => m.category === activeCat.value)
})

function categoryLabel(cat: string): string {
  const found = categories.find(c => c.key === cat)
  return found ? found.label : cat
}

const generatedMacro = computed(() => selectedTpl.value?.generate() ?? '')

function selectTemplate(tpl: MacroTemplate) {
  selectedTpl.value = tpl
  copied.value = false
}

async function copyMacro() {
  if (!generatedMacro.value) return
  try {
    await navigator.clipboard.writeText(generatedMacro.value)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = generatedMacro.value
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.tools-page { flex: 1; overflow-y: auto; padding: 24px 32px; }
.page-title { font-size: 1.5rem; color: var(--accent); margin-bottom: 24px; }
.tool-section { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 24px; margin-bottom: 20px; }
.section-title { font-size: 1.1rem; color: var(--accent); margin-bottom: 8px; }
.tool-desc { font-size: 0.85rem; color: var(--text-dim); margin-bottom: 14px; }

/* Macro Categories */
.macro-categories { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.cat-btn { font-size: 0.78rem; padding: 6px 14px; border: 1px solid var(--border); border-radius: 16px; background: transparent; color: var(--text-dim); cursor: pointer; transition: all 0.15s; }
.cat-btn:hover { border-color: var(--accent); color: var(--accent); }
.cat-btn.active { background: var(--accent); color: #1a1a2e; border-color: var(--accent); }

/* Macro Grid */
.macro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px; }
.macro-card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 14px; cursor: pointer; transition: all 0.15s; }
.macro-card:hover { border-color: var(--accent); background: var(--bg-card-hover); }
.macro-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.macro-card-name { font-size: 0.85rem; font-weight: 600; }
.macro-card-cat { font-size: 0.65rem; color: var(--text-dim); background: var(--bg-card); padding: 2px 8px; border-radius: 8px; }
.macro-card-preview { font-size: 0.7rem; color: var(--text-dim); font-family: 'Consolas', monospace; white-space: pre-wrap; line-height: 1.4; margin: 0; overflow: hidden; max-height: 48px; }

/* Macro Output */
.macro-output { background: var(--bg); border-radius: var(--radius); border: 2px solid var(--accent); overflow: hidden; }
.macro-header { display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; background: var(--bg-card-hover); border-bottom: 1px solid var(--border); }
.macro-name { font-size: 0.9rem; font-weight: 600; color: var(--accent); }
.copy-btn { font-size: 0.8rem; padding: 6px 14px; border: 1px solid var(--accent); border-radius: 4px; background: transparent; color: var(--accent); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { background: var(--accent); color: #1a1a2e; }
.macro-code { padding: 16px; font-family: 'Consolas', 'Courier New', monospace; font-size: 0.82rem; line-height: 1.6; white-space: pre-wrap; color: #a0d0a0; margin: 0; }

/* Gear */
.gear-job-select { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.gear-job-btn { font-size: 0.8rem; padding: 6px 12px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--bg); color: var(--text); cursor: pointer; transition: all 0.15s; }
.gear-job-btn:hover { border-color: var(--accent); }
.gear-job-btn.active { background: var(--accent); color: #1a1a2e; border-color: var(--accent); }
.gear-set { background: var(--bg); border-radius: var(--radius); padding: 16px; margin-bottom: 12px; }
.gear-set-title { font-size: 0.95rem; color: #e6b422; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
.gear-type-badge { font-size: 0.65rem; padding: 2px 8px; border-radius: 3px; color: #fff; }
.badge-bis { background: #e6b422; }
.badge-entry { background: #60b0e0; }
.badge-prog { background: #70c070; }
.gear-pieces { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.gear-piece { display: flex; align-items: center; gap: 8px; padding: 8px 10px; background: var(--bg-card); border-radius: 4px; font-size: 0.82rem; }
.gear-slot { color: var(--text-dim); white-space: nowrap; }
.gear-name { color: var(--text); font-weight: 500; flex: 1; }
.gear-source { color: var(--text-dim); font-size: 0.75rem; }
.gear-materia { color: #a0d0a0; font-size: 0.73rem; white-space: nowrap; }
.gear-summary { margin-top: 12px; padding: 10px 14px; background: var(--bg-card-hover); border-radius: var(--radius); font-size: 0.85rem; color: var(--accent); }
.no-data { text-align: center; padding: 20px; color: var(--text-dim); font-size: 0.9rem; }

@media (max-width: 768px) {
  .tools-page { padding: 16px; }
  .macro-grid { grid-template-columns: 1fr; }
  .gear-pieces { grid-template-columns: 1fr; }
}
</style>
