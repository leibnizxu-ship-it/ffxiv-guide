<template>
  <section class="job-view">
    <button class="back-btn" @click="emit('back')">← 返回列表</button>

    <div class="job-header">
      <span class="job-icon-lg">{{ job.icon }}</span>
      <div>
        <h2>{{ job.name }}</h2>
        <span class="role-badge" :style="{ background: roleColors[job.role] }">{{ roleLabels[job.role] }}</span>
      </div>
    </div>

    <p class="job-summary">{{ job.summary }}</p>

    <!-- ====== GCD 时间轴可视化 ====== -->
    <div class="job-section">
      <h3 class="section-title">⏱️ GCD 技能轴 · 起手爆发 ({{ job.timeline.gcd }}s GCD)</h3>
      <div class="timeline-visual">
        <div class="tl-track">
          <div v-for="(step, i) in job.timeline.openerTimeline" :key="i"
            class="tl-node" :class="'node-' + step.type"
            :style="{ left: timeToPercent(step.time) + '%' }">
            <div class="tl-dot"></div>
            <div class="tl-label">
              <span class="tl-skill">{{ step.skill }}</span>
              <span v-if="step.note" class="tl-note">{{ step.note }}</span>
              <span class="tl-time">{{ step.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== 爆发窗口对齐 ====== -->
    <div class="job-section">
      <h3 class="section-title">🔥 爆发窗口对齐 (0-180s)</h3>
      <div class="burst-timeline">
        <div v-for="bw in job.timeline.burstWindows" :key="bw.label" class="burst-row">
          <span class="burst-name">{{ bw.label }}</span>
          <div class="burst-bar-track">
            <div
              v-for="tick in 6" :key="tick"
              class="burst-tick"
              :class="{ active: (tick-1)*30 % bw.cooldown === 0 }"
            ></div>
          </div>
          <span class="burst-cd">{{ bw.cooldown === 0 ? '常驻' : bw.cooldown + 's' }}</span>
        </div>
      </div>
    </div>

    <!-- ====== 文字版起手 ====== -->
    <div class="job-section">
      <h3 class="section-title">🎯 起手爆发文字版</h3>
      <div class="opener-steps">
        <div v-for="(step, i) in job.opener" :key="i" class="opener-step">
          <span class="step-num">{{ i + 1 }}</span>
          <span>{{ step }}</span>
          <span v-if="i < job.opener.length - 1" class="step-arrow">→</span>
        </div>
      </div>
    </div>

    <!-- ====== 循环详解 ====== -->
    <div class="job-section">
      <h3 class="section-title">🔄 循环详解</h3>
      <div v-for="section in job.rotation" :key="section.title" class="rotation-block">
        <h4 class="rotation-title">{{ section.title }}</h4>
        <p class="rotation-desc">{{ section.description }}</p>
        <ul class="rotation-steps">
          <li v-for="step in section.steps" :key="step">{{ step }}</li>
        </ul>
      </div>
    </div>

    <!-- ====== 属性优先级 ====== -->
    <div class="job-section">
      <h3 class="section-title">📊 属性优先级</h3>
      <div class="stat-bar">
        <span v-for="(stat, i) in job.statPriority" :key="stat" class="stat-item" :style="{ flex: Math.max(1, 6 - i) }">
          {{ stat }}
        </span>
      </div>
    </div>

    <div class="job-section">
      <h3 class="section-title">💎 BiS 配装建议</h3>
      <p class="bis-note">{{ job.bisNote }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { JobGuide } from '@/types/jobs'
import { roleLabels, roleColors } from '@/data/jobs'

defineProps<{ job: JobGuide }>()
const emit = defineEmits<{ back: [] }>()

function timeToPercent(time: string): number {
  const val = parseFloat(time.replace('s', ''))
  const max = 25
  return Math.max(0, Math.min(95, (val / max) * 100))
}
</script>

<style scoped>
.job-view { flex: 1; overflow-y: auto; padding: 24px 32px; }
.back-btn { background: var(--bg-card); color: var(--text); border: 1px solid var(--border); padding: 8px 16px; border-radius: var(--radius); cursor: pointer; font-size: 0.9rem; margin-bottom: 20px; transition: background 0.15s; }
.back-btn:hover { background: var(--bg-card-hover); }

.job-header { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; }
.job-icon-lg { font-size: 3rem; }
.job-header h2 { font-size: 1.6rem; color: var(--accent); }
.role-badge { display: inline-block; color: #fff; padding: 2px 10px; border-radius: 3px; font-size: 0.8rem; margin-top: 4px; }
.job-summary { font-size: 0.95rem; line-height: 1.7; margin-bottom: 24px; }
.job-section { margin-bottom: 24px; }
.section-title { font-size: 1.1rem; color: var(--accent); margin-bottom: 12px; padding-bottom: 6px; border-bottom: 1px solid var(--border); }

/* ===== GCD Timeline ===== */
.timeline-visual { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px 16px 16px; overflow-x: auto; }
.tl-track { position: relative; height: 120px; min-width: 700px; }
.tl-track::before { content: ''; position: absolute; top: 12px; left: 0; right: 0; height: 2px; background: var(--border); }

.tl-node { position: absolute; top: 0; display: flex; flex-direction: column; align-items: center; transform: translateX(-50%); }
.tl-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid var(--border); background: var(--bg); margin-bottom: 8px; z-index: 1; }
.node-gcd .tl-dot { border-color: #60b0e0; background: #60b0e0; }
.node-ogcd .tl-dot { border-color: #e6b422; background: #e6b422; width: 10px; height: 10px; margin-top: 2px; }
.node-buff .tl-dot { border-color: #e06060; background: #e06060; width: 16px; height: 16px; margin-top: -1px; }
.node-combo .tl-dot { border-color: #70c070; background: #70c070; }

.tl-label { text-align: center; font-size: 0.72rem; line-height: 1.3; }
.tl-skill { display: block; color: var(--text); font-weight: 600; }
.tl-note { display: block; color: var(--accent); font-size: 0.68rem; }
.tl-time { display: block; color: var(--text-dim); font-size: 0.65rem; margin-top: 1px; }

/* ===== Burst Windows ===== */
.burst-timeline { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 18px; display: flex; flex-direction: column; gap: 6px; }
.burst-row { display: flex; align-items: center; gap: 12px; }
.burst-name { font-size: 0.82rem; font-weight: 600; width: 110px; flex-shrink: 0; }
.burst-bar-track { display: flex; gap: 4px; flex: 1; }
.burst-tick { flex: 1; height: 10px; border-radius: 2px; background: var(--border); }
.burst-tick.active { background: var(--accent); }
.burst-cd { font-size: 0.75rem; color: var(--text-dim); width: 45px; text-align: right; }

/* ===== Opener Steps ===== */
.opener-steps { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; padding: 12px; background: var(--bg); border-radius: var(--radius); border: 1px solid var(--border); }
.opener-step { display: flex; align-items: center; gap: 4px; font-size: 0.85rem; }
.step-num { background: var(--accent); color: #1a1a2e; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 0.7rem; font-weight: 700; flex-shrink: 0; }
.step-arrow { color: var(--text-dim); margin: 0 2px; }

/* ===== Rotation ===== */
.rotation-block { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 18px; margin-bottom: 10px; }
.rotation-title { font-size: 0.95rem; color: #e6b422; margin-bottom: 4px; }
.rotation-desc { font-size: 0.82rem; color: var(--text-dim); margin-bottom: 8px; }
.rotation-steps { padding-left: 18px; }
.rotation-steps li { font-size: 0.85rem; margin-bottom: 3px; }

/* ===== Stats ===== */
.stat-bar { display: flex; gap: 6px; border-radius: var(--radius); overflow: hidden; }
.stat-item { background: var(--bg-card); border: 1px solid var(--border); padding: 8px 16px; text-align: center; font-size: 0.85rem; font-weight: 600; color: var(--text); border-radius: 4px; }
.stat-item:first-child { background: var(--accent); color: #1a1a2e; }
.bis-note { font-size: 0.9rem; color: var(--text-dim); line-height: 1.6; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 16px; }

@media (max-width: 768px) {
  .job-view { padding: 16px; }
  .tl-track { min-width: 600px; }
  .opener-steps { flex-direction: column; align-items: flex-start; }
  .step-arrow { display: none; }
}
</style>
