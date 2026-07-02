<template>
  <section class="job-view">
    <button class="back-btn" @click="emit('back')">← 返回列表</button>

    <div class="job-header">
      <span class="job-icon-lg">{{ job.icon }}</span>
      <div>
        <h2>{{ job.name }}</h2>
        <span class="role-badge" :style="{ background: roleColors[job.role] }">
          {{ roleLabels[job.role] }}
        </span>
      </div>
    </div>

    <p class="job-summary">{{ job.summary }}</p>

    <div class="job-section">
      <h3 class="section-title">🎯 起手爆发</h3>
      <div class="opener-steps">
        <div v-for="(step, i) in job.opener" :key="i" class="opener-step">
          <span class="step-num">{{ i + 1 }}</span>
          <span>{{ step }}</span>
          <span v-if="i < job.opener.length - 1" class="step-arrow">→</span>
        </div>
      </div>
    </div>

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

    <div class="job-section">
      <h3 class="section-title">📊 属性优先级</h3>
      <div class="stat-bar">
        <span
          v-for="(stat, i) in job.statPriority"
          :key="stat"
          class="stat-item"
          :style="{ flex: Math.max(1, 6 - i) }"
        >
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
</script>

<style scoped>
.job-view {
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px;
}

.back-btn {
  background: var(--bg-card);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 8px 16px;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 20px;
  transition: background 0.15s;
}
.back-btn:hover { background: var(--bg-card-hover); }

.job-header { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; }
.job-icon-lg { font-size: 3rem; }
.job-header h2 { font-size: 1.6rem; color: var(--accent); }

.role-badge {
  display: inline-block;
  color: #fff;
  padding: 2px 10px;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-top: 4px;
}

.job-summary { font-size: 0.95rem; line-height: 1.7; margin-bottom: 20px; }

.job-section { margin-bottom: 24px; }

.section-title {
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border);
}

.opener-steps {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 12px;
  background: var(--bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.opener-step {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
}

.step-num {
  background: var(--accent);
  color: #1a1a2e;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-arrow { color: var(--text-dim); margin: 0 2px; }

.rotation-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 18px;
  margin-bottom: 10px;
}

.rotation-title { font-size: 0.95rem; color: #e6b422; margin-bottom: 4px; }
.rotation-desc { font-size: 0.82rem; color: var(--text-dim); margin-bottom: 8px; }

.rotation-steps { padding-left: 18px; }
.rotation-steps li { font-size: 0.85rem; margin-bottom: 3px; }

.stat-bar {
  display: flex;
  gap: 6px;
  border-radius: var(--radius);
  overflow: hidden;
}

.stat-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 8px 16px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  border-radius: 4px;
}
.stat-item:first-child { background: var(--accent); color: #1a1a2e; }

.bis-note { font-size: 0.9rem; color: var(--text-dim); line-height: 1.6; }

@media (max-width: 768px) {
  .job-view { padding: 16px; }
  .opener-steps { flex-direction: column; align-items: flex-start; }
  .step-arrow { display: none; }
}
</style>
