<template>
  <aside class="dungeon-list">
    <div class="search-box">
      <input
        v-model="query"
        type="text"
        placeholder="搜索副本名称 / Boss..."
        class="search-input"
      />
    </div>
    <div class="filter-tabs">
      <button
        v-for="f in filters"
        :key="f.key"
        class="filter-tab"
        :class="{ active: activeFilter === f.key }"
        @click="activeFilter = f.key"
      >
        {{ f.label }}
      </button>
    </div>
    <nav class="list-nav">
      <div
        v-for="guide in filtered"
        :key="guide.id"
        class="list-item"
        :class="{ active: guide.id === selectedId }"
        @click="emit('select', guide.id)"
      >
        <span class="item-badge" :style="{ background: typeColors[guide.type] }">
          {{ typeLabels[guide.type] }}
        </span>
        <div class="item-info">
          <span class="item-title">{{ guide.title }}</span>
          <span class="item-sub">{{ guide.bossName }} · Lv{{ guide.level }}</span>
        </div>
      </div>
    </nav>
    <div v-if="filtered.length === 0" class="no-result">
      未找到匹配的副本
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { typeLabels, typeColors, typeOrder } from '@/data/guides'
import type { StrategyGuide, ContentType } from '@/types'

const props = defineProps<{
  guides: StrategyGuide[]
  selectedId: string | null
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const query = ref('')
const activeFilter = ref<ContentType | 'all'>('all')

const filters = [
  { key: 'all' as const, label: '全部' },
  { key: 'ultimate' as const, label: '绝本' },
  { key: 'savage' as const, label: '零式' },
  { key: 'extreme' as const, label: '极神' },
  { key: 'alliance' as const, label: '团本' },
  { key: 'dungeon' as const, label: '副本' }
]

const filtered = computed(() => {
  let list = props.guides
  if (activeFilter.value !== 'all') {
    list = list.filter(g => g.type === activeFilter.value)
  }
  if (query.value.trim()) {
    const q = query.value.toLowerCase()
    list = list.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.bossName.toLowerCase().includes(q) ||
      g.tags.some(t => t.toLowerCase().includes(q)) ||
      g.summary.toLowerCase().includes(q)
    )
  }
  return list
})
</script>

<style scoped>
.dungeon-list {
  width: 280px;
  min-width: 280px;
  background: var(--bg-card);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.search-box { padding: 12px 12px 8px; }

.search-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}
.search-input:focus { border-color: var(--accent); }
.search-input::placeholder { color: var(--text-dim); }

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0 12px 10px;
}

.filter-tab {
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-dim);
  cursor: pointer;
  transition: all 0.15s;
}
.filter-tab:hover { border-color: var(--accent); color: var(--accent); }
.filter-tab.active { background: var(--accent); color: #1a1a2e; border-color: var(--accent); }

.list-nav { flex: 1; overflow-y: auto; padding: 0 8px 8px; }

.list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.15s;
  margin-bottom: 2px;
}
.list-item:hover { background: var(--bg-card-hover); }
.list-item.active { background: var(--bg-card-hover); border-left: 3px solid var(--accent); padding-left: 9px; }

.item-badge { font-size: 0.7rem; color: #fff; padding: 2px 6px; border-radius: 3px; white-space: nowrap; flex-shrink: 0; }
.item-info { display: flex; flex-direction: column; min-width: 0; }
.item-title { font-size: 0.9rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.item-sub { font-size: 0.75rem; color: var(--text-dim); }
.no-result { text-align: center; padding: 24px; color: var(--text-dim); }

@media (max-width: 768px) {
  .dungeon-list { width: 100%; min-width: 0; max-height: 40vh; border-right: none; border-bottom: 1px solid var(--border); }
}
</style>
