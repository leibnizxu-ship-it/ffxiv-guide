<template>
  <aside class="daily-sidebar">
    <div class="search-box">
      <input v-model="query" type="text" placeholder="搜索指南..." class="search-input" />
    </div>
    <div class="cat-filters">
      <button v-for="f in filters" :key="f.key" class="cat-btn"
        :class="{ active: activeCat === f.key }" @click="activeCat = f.key">
        {{ f.icon }} {{ f.label }}
      </button>
    </div>
    <nav class="guide-nav">
      <div v-for="g in filtered" :key="g.id" class="guide-item"
        :class="{ active: selectedId === g.id }" @click="emit('select', g.id)">
        <span class="guide-icon">{{ g.icon }}</span>
        <div class="guide-info">
          <span class="guide-title">{{ g.title }}</span>
          <span class="guide-cat">{{ categoryLabels[g.category] }}</span>
        </div>
      </div>
    </nav>
    <div v-if="filtered.length===0" class="no-result">未找到匹配的指南</div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { dailyGuides, categoryLabels } from '@/data/daily'
import type { DailyCategory } from '@/types/daily'

defineProps<{ selectedId: string|null }>()
const emit = defineEmits<{ select: [id:string] }>()

const query = ref('')
const activeCat = ref('all')

const filters = [
  { key:'all', icon:'📚', label:'全部' },
  { key:'fc', icon:'🏠', label:'部队' },
  { key:'market', icon:'💰', label:'市场' },
  { key:'crafting', icon:'🔨', label:'生产' },
  { key:'gathering', icon:'⛏️', label:'采集' },
  { key:'goldsaucer', icon:'🎰', label:'金碟' },
  { key:'deepdungeon', icon:'🏚️', label:'迷宫' },
  { key:'island', icon:'🏝️', label:'海岛' },
  { key:'weekly', icon:'📋', label:'周常' },
  { key:'wondrous', icon:'📖', label:'天书' },
  { key:'housing', icon:'🏡', label:'房屋' },
  { key:'gc', icon:'🪖', label:'军票' },
  { key:'retainer', icon:'👤', label:'雇员' },
  { key:'other', icon:'🌟', label:'综合' }
]

const filtered = computed(() => {
  let list = dailyGuides
  if (activeCat.value !== 'all') list = list.filter(g => g.category === activeCat.value)
  if (query.value.trim()) {
    const q = query.value.toLowerCase()
    list = list.filter(g => g.title.toLowerCase().includes(q) ||
      g.sections.some(s => s.title.toLowerCase().includes(q) || (s.content ?? '').toLowerCase().includes(q)))
  }
  return list
})
</script>

<style scoped>
.daily-sidebar {
  width: 280px; min-width: 280px; background: var(--bg-card);
  border-right: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden;
}
.search-box { padding: 12px; }
.search-input {
  width: 100%; padding: 10px 12px; border: 1px solid var(--border);
  border-radius: var(--radius); background: var(--bg); color: var(--text);
  font-size: 0.9rem; outline: none; transition: border-color 0.2s;
}
.search-input:focus { border-color: var(--accent); }
.search-input::placeholder { color: var(--text-dim); }

.cat-filters { display: flex; flex-wrap: wrap; gap: 4px; padding: 0 12px 8px; }
.cat-btn {
  font-size: 0.68rem; padding: 4px 8px; border-radius: 10px;
  border: 1px solid var(--border); background: transparent; color: var(--text-dim);
  cursor: pointer; transition: all 0.15s;
}
.cat-btn:hover { border-color: var(--accent); color: var(--accent); }
.cat-btn.active { background: var(--accent); color: #1a1a2e; border-color: var(--accent); }

.guide-nav { flex: 1; overflow-y: auto; padding: 0 8px 8px; }
.guide-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  border-radius: var(--radius); cursor: pointer; transition: background 0.15s; margin-bottom: 2px;
}
.guide-item:hover { background: var(--bg-card-hover); }
.guide-item.active { background: var(--bg-card-hover); border-left: 3px solid var(--accent); padding-left: 9px; }
.guide-icon { font-size: 1.2rem; }
.guide-info { display: flex; flex-direction: column; min-width: 0; }
.guide-title { font-size: 0.88rem; font-weight: 600; }
.guide-cat { font-size: 0.72rem; color: var(--text-dim); }
.no-result { text-align: center; padding: 24px; color: var(--text-dim); }

@media (max-width: 768px) {
  .daily-sidebar { width: 100%; min-width: 0; max-height: 35vh; border-right: none; border-bottom: 1px solid var(--border); }
}
</style>
