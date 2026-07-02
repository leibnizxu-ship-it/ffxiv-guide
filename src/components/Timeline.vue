<template>
  <div class="timeline">
    <h4 class="phase-name">{{ phase.name }}</h4>
    <p class="phase-desc">{{ phase.description }}</p>
    <div class="timeline-track">
      <div
        v-for="(ability, i) in phase.abilities"
        :key="i"
        class="timeline-item"
      >
        <div class="tl-time">{{ ability.time }}</div>
        <div class="tl-dot" :class="'dot-' + ability.type"></div>
        <div class="tl-content">
          <div class="tl-name">
            {{ ability.name }}
            <span class="tl-type-badge" :class="'badge-' + ability.type">
              {{ typeLabels[ability.type] }}
            </span>
          </div>
          <div class="tl-desc">{{ ability.description }}</div>
          <div class="tl-tips">💡 {{ ability.tips }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BossPhase } from '@/types'

defineProps<{ phase: BossPhase }>()

const typeLabels: Record<string, string> = {
  tankbuster: '死刑',
  raidwide: 'AOE',
  mechanic: '机制',
  stack: '分摊',
  spread: '分散',
  knockback: '击退',
  other: '其他'
}
</script>

<style scoped>
.timeline {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 12px;
  border: 1px solid var(--border);
}

.phase-name {
  font-size: 1rem;
  color: #e6b422;
  margin-bottom: 4px;
}

.phase-desc {
  font-size: 0.82rem;
  color: var(--text-dim);
  margin-bottom: 14px;
}

.timeline-track {
  position: relative;
  padding-left: 60px;
}

.timeline-track::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;
  position: relative;
}

.tl-time {
  position: absolute;
  left: -60px;
  width: 48px;
  font-size: 0.75rem;
  color: var(--text-dim);
  font-family: 'Consolas', monospace;
  text-align: right;
}

.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 4px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  border: 2px solid var(--bg-card);
}

.dot-tankbuster { background: #e06060; }
.dot-raidwide { background: #e6b422; }
.dot-mechanic { background: #60b0e0; }
.dot-stack { background: #70c070; }
.dot-spread { background: #b070d0; }
.dot-knockback { background: #e08030; }
.dot-other { background: #8899aa; }

.tl-content { flex: 1; min-width: 0; }

.tl-name {
  font-size: 0.88rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.tl-type-badge {
  font-size: 0.65rem;
  padding: 1px 6px;
  border-radius: 3px;
  color: #fff;
}

.badge-tankbuster { background: #e06060; }
.badge-raidwide { background: #e6b422; }
.badge-mechanic { background: #60b0e0; }
.badge-stack { background: #70c070; }
.badge-spread { background: #b070d0; }
.badge-knockback { background: #e08030; }
.badge-other { background: #8899aa; }

.tl-desc {
  font-size: 0.82rem;
  color: var(--text);
  margin-top: 2px;
}

.tl-tips {
  font-size: 0.78rem;
  color: var(--accent);
  margin-top: 2px;
}

@media (max-width: 768px) {
  .timeline { padding: 12px; }
  .timeline-track { padding-left: 48px; }
  .tl-time { left: -48px; width: 38px; font-size: 0.7rem; }
}
</style>
