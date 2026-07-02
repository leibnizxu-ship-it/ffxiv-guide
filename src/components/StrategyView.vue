<template>
  <section class="strategy-view">
    <button class="back-btn" @click="('back')">← 返回列表</button>

    <div class="guide-header">
      <h2>{{ guide.title }}</h2>
      <div class="guide-meta">
        <span class="guide-badge" :style="{ background: typeColors[guide.type] }">
          {{ typeLabels[guide.type] }}
        </span>
        <span>Patch {{ guide.patch }}</span>
        <span>Lv{{ guide.level }}</span>
        <span v-if="guide.itemLevel">装等 {{ guide.itemLevel }}+</span>
      </div>
      <p class="guide-summary">{{ guide.summary }}</p>
    </div>

    <div class="guide-tags">
      <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <div class="guide-tips">
      <h3 class="section-title">💡 核心要点</h3>
      <ul>
        <li v-for="(tip, i) in guide.tips" :key="i">{{ tip }}</li>
      </ul>
    </div>

    <div class="guide-phases">
      <h3 class="section-title">⏱️ 时间轴</h3>
      <Timeline v-for="phase in guide.phases" :key="phase.name" :phase="phase" />
    </div>

    <div v-if="guide.positionDiagrams.length" class="guide-positions">
      <h3 class="section-title">🗺️ 站位图</h3>
      <PositionMap
        v-for="(diagram, i) in guide.positionDiagrams"
        :key="i"
        :diagram="diagram"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { StrategyGuide } from '@/types'
import { typeLabels, typeColors } from '@/data/guides'
import Timeline from '@/components/Timeline.vue'
import PositionMap from '@/components/PositionMap.vue'

defineProps<{ guide: StrategyGuide }>()
defineEmits<{ back: [] }>()
</script>

<style scoped>
.strategy-view {
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

.guide-header { margin-bottom: 16px; }
.guide-header h2 { font-size: 1.6rem; color: var(--accent); margin-bottom: 8px; }

.guide-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-dim);
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.guide-badge {
  color: #fff;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 0.8rem;
}

.guide-summary {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text);
}

.guide-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }

.tag {
  background: var(--bg-card);
  color: var(--text-dim);
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.78rem;
  border: 1px solid var(--border);
}

.guide-tips, .guide-phases, .guide-positions { margin-bottom: 28px; }

.section-title {
  font-size: 1.15rem;
  color: var(--accent);
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border);
}

.guide-tips ul {
  list-style: none;
  padding: 0;
}
.guide-tips li {
  padding: 6px 0;
  font-size: 0.9rem;
  color: var(--text);
}
.guide-tips li::before { content: '• '; color: var(--accent); }

@media (max-width: 768px) {
  .strategy-view { padding: 16px; }
}
</style>
