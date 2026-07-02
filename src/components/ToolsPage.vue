<template>
  <section class="tools-page">
    <h2 class="page-title">🛠️ 实用工具</h2>

    <div class="tool-section">
      <h3 class="section-title">📋 常用宏生成器</h3>
      <p class="tool-desc">选择预设模板快速生成 FFXIV 常用宏</p>
      <div class="macro-templates">
        <button
          v-for="tpl in templates"
          :key="tpl.id"
          class="macro-tpl-btn"
          @click="selectTemplate(tpl)"
        >
          {{ tpl.name }}
        </button>
      </div>
      <div v-if="selectedTpl" class="macro-output">
        <div class="macro-header">
          <span class="macro-name">{{ selectedTpl.name }}</span>
          <button class="copy-btn" @click="copyMacro">📋 复制</button>
        </div>
        <pre class="macro-code">{{ generatedMacro }}</pre>
      </div>
    </div>

    <div class="tool-section">
      <h3 class="section-title">💎 配装推荐</h3>
      <p class="tool-desc">选择职业查看 BiS 和开荒装配方案</p>
      <div class="gear-job-select">
        <button
          v-for="job in jobList"
          :key="job.id"
          class="gear-job-btn"
          :class="{ active: selectedJobId === job.id }"
          @click="selectedJobId = job.id"
        >{{ job.icon }} {{ job.name }}</button>
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
          <div class="gear-summary">
            <strong>总属性：</strong>{{ set.totalStats }}
          </div>
        </div>
      </div>
      <div v-if="selectedJobId && gearSets.length === 0" class="no-data">
        该职业暂无配装数据，待更新...
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { jobs } from '@/data/jobs'
import { getGearByJob, slotLabels } from '@/data/gear'
import type { GearSet } from '@/data/gear'

const selectedJobId = ref('pld')

const jobList = computed(() =>
  jobs.map(j => ({ id: j.id, name: j.name, icon: j.icon }))
)

const gearSets = computed<GearSet[]>(() => getGearByJob(selectedJobId.value))

const typeLabels: Record<string, string> = {
  bis: 'BiS', entry: '开荒', prog: '过渡'
}

// ---- Macro Generator ----
interface MacroTemplate {
  id: string
  name: string
  generate: () => string
}

const selectedTpl = ref<MacroTemplate | null>(null)

const templates: MacroTemplate[] = [
  {
    id: 'mt-countdown',
    name: '倒计时宏',
    generate: () => '/p ★ 战斗将在 <countdown:20> 后开始！请检查食物和爆发药。 <se.1>'
  },
  {
    id: 'spread',
    name: '分散宏',
    generate: () => `/p ★ 分散站位！\n/p MT: N | ST: S\n/p H1: NW | H2: NE\n/p D1: W | D2: E\n/p D3: SW | D4: SE <se.2>`
  },
  {
    id: 'stack',
    name: '分摊宏',
    generate: () => '/p ★ 全体集合分摊！<se.3>\n/p 请向标记点集合！'
  },
  {
    id: 'tank-swap',
    name: '换T宏',
    generate: () => '/p ★ 换T！<se.4>\n/p ST请挑衅，MT请退避！'
  },
  {
    id: 'lb3',
    name: 'LB3宏',
    generate: () => '/p ★ 准备释放极限技！<se.5>\n/p T LB3 → 治疗 LB3 → DPS LB3（按需）'
  },
  {
    id: 'party-shield',
    name: '团队减伤链',
    generate: () => `/p ★ 减伤链：\n/p ① MT 30% 减伤\n/p ② ST 团队减伤\n/p ③ H1 节制/命运之轮\n/p ④ H2 野战治疗阵\n/p ⑤ 全员小减伤 <se.6>`
  },
  {
    id: 'welcome',
    name: '欢迎宏',
    generate: () => '/p 大家好！(^_^)ノ\n/p 第一次来，请多关照！~\n/p 有不懂的机制我会问哒 <se.7>'
  }
]

const generatedMacro = computed(() => selectedTpl.value?.generate() ?? '')

function selectTemplate(tpl: MacroTemplate) {
  selectedTpl.value = tpl
}

async function copyMacro() {
  if (!generatedMacro.value) return
  try {
    await navigator.clipboard.writeText(generatedMacro.value)
  } catch {
    // fallback
    const ta = document.createElement('textarea')
    ta.value = generatedMacro.value
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
}
</script>

<style scoped>
.tools-page {
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px;
}

.page-title { font-size: 1.5rem; color: var(--accent); margin-bottom: 24px; }

.tool-section {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-bottom: 20px;
}

.section-title { font-size: 1.1rem; color: var(--accent); margin-bottom: 8px; }
.tool-desc { font-size: 0.85rem; color: var(--text-dim); margin-bottom: 14px; }

.macro-templates {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.macro-tpl-btn {
  font-size: 0.82rem;
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  cursor: pointer;
  transition: all 0.15s;
}
.macro-tpl-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--bg-card-hover); }

.macro-output { background: var(--bg); border-radius: var(--radius); border: 1px solid var(--border); overflow: hidden; }

.macro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: var(--bg-card-hover);
  border-bottom: 1px solid var(--border);
}

.macro-name { font-size: 0.9rem; font-weight: 600; }
.copy-btn {
  font-size: 0.8rem;
  padding: 4px 12px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  color: var(--text);
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }

.macro-code {
  padding: 16px;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  white-space: pre-wrap;
  color: #a0d0a0;
  margin: 0;
}

/* ---- Gear ---- */
.gear-job-select {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.gear-job-btn {
  font-size: 0.8rem;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  cursor: pointer;
  transition: all 0.15s;
}
.gear-job-btn:hover { border-color: var(--accent); }
.gear-job-btn.active { background: var(--accent); color: #1a1a2e; border-color: var(--accent); }

.gear-set {
  background: var(--bg);
  border-radius: var(--radius);
  padding: 16px;
  margin-bottom: 12px;
}

.gear-set-title { font-size: 0.95rem; color: #e6b422; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }

.gear-type-badge { font-size: 0.65rem; padding: 2px 8px; border-radius: 3px; color: #fff; }
.badge-bis { background: #e6b422; }
.badge-entry { background: #60b0e0; }
.badge-prog { background: #70c070; }

.gear-pieces { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }

.gear-piece {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: var(--bg-card);
  border-radius: 4px;
  font-size: 0.82rem;
}

.gear-slot { color: var(--text-dim); white-space: nowrap; }
.gear-name { color: var(--text); font-weight: 500; flex: 1; }
.gear-source { color: var(--text-dim); font-size: 0.75rem; }
.gear-materia { color: #a0d0a0; font-size: 0.73rem; white-space: nowrap; }

.gear-summary {
  margin-top: 12px;
  padding: 10px 14px;
  background: var(--bg-card-hover);
  border-radius: var(--radius);
  font-size: 0.85rem;
  color: var(--accent);
}

.no-data { text-align: center; padding: 20px; color: var(--text-dim); font-size: 0.9rem; }

@media (max-width: 768px) {
  .tools-page { padding: 16px; }
  .gear-pieces { grid-template-columns: 1fr; }
}
</style>
