<template>
  <section class="daily-view">
    <button class="back-btn" @click="emit('back')">← 返回列表</button>

    <div class="guide-header">
      <span class="guide-icon-lg">{{ guide.icon }}</span>
      <div>
        <h2>{{ guide.title }}</h2>
        <span class="cat-badge">{{ categoryLabels[guide.category] }}</span>
      </div>
    </div>

    <p class="guide-summary">{{ guide.summary }}</p>

    <div v-for="(section, si) in guide.sections" :key="si" class="guide-section">
      <h3 class="section-title">{{ section.title }}</h3>
      <p v-if="section.content" class="section-content">{{ section.content }}</p>
      <div v-if="section.items" class="item-grid">
        <div v-for="(item, ii) in section.items" :key="ii" class="info-card"
          :class="{ 'card-highlight': item.highlight }">
          <div class="card-label">
            {{ item.label }}
            <span v-if="item.highlight" class="highlight-tag">{{ item.highlight }}</span>
          </div>
          <div class="card-desc">{{ item.description }}</div>
        </div>
      </div>
    </div>

    <div class="guide-section">
      <h3 class="section-title">💡 小贴士</h3>
      <ul class="tips-list">
        <li v-for="(tip, i) in guide.tips" :key="i">{{ tip }}</li>
      </ul>
    </div>

    <div v-if="guide.links && guide.links.length" class="guide-section">
      <h3 class="section-title">🔗 参考链接</h3>
      <div class="links-list">
        <a v-for="link in guide.links" :key="link.url"
          :href="link.url" target="_blank" rel="noopener" class="ext-link">
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DailyGuide } from '@/types/daily'
import { categoryLabels } from '@/data/daily'

defineProps<{ guide: DailyGuide }>()
const emit = defineEmits<{ back: [] }>()
</script>

<style scoped>
.daily-view { flex: 1; overflow-y: auto; padding: 24px 32px; }
.back-btn {
  background: var(--bg-card); color: var(--text); border: 1px solid var(--border);
  padding: 8px 16px; border-radius: var(--radius); cursor: pointer;
  font-size: 0.9rem; margin-bottom: 20px; transition: background 0.15s;
}
.back-btn:hover { background: var(--bg-card-hover); }

.guide-header { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; }
.guide-icon-lg { font-size: 2.5rem; }
.guide-header h2 { font-size: 1.5rem; color: var(--accent); }
.cat-badge { display: inline-block; color: #fff; background: #60b0e0; padding: 2px 10px; border-radius: 3px; font-size: 0.78rem; margin-top: 4px; }
.guide-summary { font-size: 0.95rem; line-height: 1.7; margin-bottom: 24px; color: var(--text); }

.guide-section { margin-bottom: 24px; }
.section-title { font-size: 1.1rem; color: var(--accent); margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1px solid var(--border); }
.section-content { font-size: 0.88rem; color: var(--text-dim); margin-bottom: 12px; line-height: 1.6; }

.item-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.info-card {
  background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 12px 14px; transition: border-color 0.15s;
}
.info-card:hover { border-color: var(--accent); }
.card-highlight { border-color: var(--accent); background: linear-gradient(135deg, var(--bg) 0%, rgba(230,180,34,0.08) 100%); }
.card-label { font-size: 0.88rem; font-weight: 600; margin-bottom: 3px; display: flex; align-items: center; gap: 6px; }
.highlight-tag { font-size: 0.65rem; background: var(--accent); color: #1a1a2e; padding: 1px 6px; border-radius: 3px; }
.card-desc { font-size: 0.82rem; color: var(--text-dim); line-height: 1.5; }

.tips-list { padding-left: 18px; }
.tips-list li { font-size: 0.88rem; margin-bottom: 6px; color: var(--text); }

.links-list { display: flex; flex-wrap: wrap; gap: 8px; }
.ext-link {
  display: inline-block; padding: 6px 14px; border: 1px solid var(--accent); border-radius: var(--radius);
  color: var(--accent); text-decoration: none; font-size: 0.85rem; transition: all 0.15s;
}
.ext-link:hover { background: var(--accent); color: #1a1a2e; }

@media (max-width: 768px) {
  .daily-view { padding: 16px; }
  .item-grid { grid-template-columns: 1fr; }
}
</style>
