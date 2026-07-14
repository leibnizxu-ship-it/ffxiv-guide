<template>
  <div class="encyclopedia">
    <h2 class="page-title">📚 数据百科</h2>
    <p class="page-sub">由 CafeMaker API 提供 · 50 副本 / 760 任务 / 2228 成就 · 实时数据</p>

    <nav class="sub-tabs">
      <button v-for="t in subTabs" :key="t.key" class="sub-tab" :class="{ active: activeSub === t.key }" @click="activeSub = t.key">
        {{ t.icon }} {{ t.label }} <span class="count">({{ t.count }})</span>
      </button>
    </nav>

    <div class="controls">
      <input v-model="query" type="text" :placeholder="'搜索' + currentTab.label + '...'" class="search-input" />
      <span class="result-count">{{ filtered.length }} / {{ currentData.length }}</span>
    </div>

    <div class="table-wrap">
      <!-- 副本表格 -->
      <table v-if="activeSub === 'instances'" class="data-table">
        <thead><tr>
          <th @click="sortBy('id')" class="sortable">ID {{ sortIcon('id') }}</th>
          <th @click="sortBy('name')" class="sortable">名称 {{ sortIcon('name') }}</th>
          <th @click="sortBy('name_en')" class="sortable">英文 {{ sortIcon('name_en') }}</th>
          <th @click="sortBy('level')" class="sortable">等级 {{ sortIcon('level') }}</th>
          <th @click="sortBy('timeLimit')" class="sortable">时限 {{ sortIcon('timeLimit') }}</th>
        </tr></thead>
        <tbody>
          <tr v-for="d in paged" :key="d.id">
            <td class="cell-id">{{ d.id }}</td>
            <td class="cell-name">{{ d.name }}</td>
            <td class="cell-en">{{ d.name_en }}</td>
            <td class="cell-num">{{ d.level ? 'Lv.' + d.level : '-' }}</td>
            <td class="cell-num">{{ d.timeLimit }}min</td>
          </tr>
        </tbody>
      </table>

      <!-- 任务表格 -->
      <table v-else class="data-table">
        <thead><tr>
          <th @click="sortBy('id')" class="sortable">ID {{ sortIcon('id') }}</th>
          <th @click="sortBy('name')" class="sortable">任务名称 {{ sortIcon('name') }}</th>
        </tr></thead>
        <tbody>
          <tr v-for="d in paged" :key="d.id">
            <td class="cell-id">{{ d.id }}</td>
            <td class="cell-name">{{ d.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="totalPages > 1" class="pagination">
      <button :disabled="page <= 1" @click="page--">←</button>
      <span>{{ page }} / {{ totalPages }}</span>
      <button :disabled="page >= totalPages" @click="page++">→</button>
    </div>

    <div class="attribution">
      数据来源：<a href="https://cafemaker.wakingsands.com" target="_blank">CafeMaker (wakingsands.com)</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { instanceData } from '@/data/instances'
import questsRaw from '@/data/quests.json'
import achievementsRaw from '@/data/achievements.json'

const questData = (questsRaw as any[]).map((q: any) => ({ id: q.id, name: q.name }))
const achievementData = (achievementsRaw as any[]).map((a: any) => ({ id: a.id, name: a.name }))

const activeSub = ref('instances')
const query = ref('')
const sortField = ref('id')
const sortDir = ref(1)
const page = ref(1)
const pageSize = 30

const subTabs = [
  { key: 'instances', label: '🗺️ 副本', count: instanceData.length, icon: '' },
  { key: 'quests', label: '📋 任务', count: questData.length, icon: '' },
  { key: 'achievements', label: '🏆 成就', count: achievementData.length, icon: '' }
]

const currentTab = computed(() => subTabs.find(t => t.key === activeSub.value)!)
const currentData = computed(() => {
  if (activeSub.value === 'instances') return instanceData
  if (activeSub.value === 'quests') return questData
  return achievementData
})

const filtered = computed(() => {
  let list = currentData.value as any[]
  if (query.value.trim()) {
    const q = query.value.toLowerCase()
    list = list.filter((d: any) =>
      (d.name || '').toLowerCase().includes(q) ||
      (d.name_en || '').toLowerCase().includes(q)
    )
  }
  list = [...list].sort((a: any, b: any) => {
    const va = a[sortField.value] ?? ''
    const vb = b[sortField.value] ?? ''
    if (typeof va === 'number') return (va - vb) * sortDir.value
    return String(va).localeCompare(String(vb)) * sortDir.value
  })
  return list
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
const paged = computed(() => filtered.value.slice((page.value - 1) * pageSize, page.value * pageSize))

function sortBy(field: string) {
  if (sortField.value === field) { sortDir.value *= -1 }
  else { sortField.value = field; sortDir.value = 1 }
  page.value = 1
}

function sortIcon(field: string) {
  if (sortField.value !== field) return ''
  return sortDir.value === 1 ? '▲' : '▼'
}
</script>

<style scoped>
.encyclopedia { flex: 1; overflow-y: auto; padding: 24px 32px; }
.page-title { font-size: 1.5rem; color: var(--accent); margin-bottom: 4px; }
.page-sub { font-size: 0.85rem; color: var(--text-dim); margin-bottom: 16px; }

.sub-tabs { display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
.sub-tab { padding: 8px 16px; border: 1px solid var(--border); border-radius: var(--radius) var(--radius) 0 0; background: transparent; color: var(--text-dim); font-size: 0.85rem; cursor: pointer; transition: all 0.15s; border-bottom: none; }
.sub-tab:hover { color: var(--text); }
.sub-tab.active { color: var(--accent); background: var(--bg-card); border-color: var(--accent); }
.count { font-size: 0.72rem; opacity: 0.7; }

.controls { display: flex; gap: 12px; align-items: center; margin-bottom: 14px; }
.search-input { flex: 1; min-width: 200px; padding: 10px 14px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--bg); color: var(--text); font-size: 0.9rem; outline: none; transition: border-color 0.2s; }
.search-input:focus { border-color: var(--accent); }
.result-count { font-size: 0.85rem; color: var(--text-dim); white-space: nowrap; }

.table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: var(--radius); max-height: 60vh; overflow-y: auto; }
.data-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
.data-table th { background: var(--bg-card); color: var(--accent); padding: 9px 12px; text-align: left; border-bottom: 2px solid var(--border); white-space: nowrap; position: sticky; top: 0; z-index: 1; }
.sortable { cursor: pointer; user-select: none; }
.sortable:hover { color: #fff; }
.data-table td { padding: 7px 12px; border-bottom: 1px solid var(--border); }
.data-table tr:hover td { background: var(--bg-card-hover); }
.cell-id { color: var(--text-dim); width: 60px; font-family: monospace; }
.cell-name { font-weight: 600; }
.cell-en { color: var(--text-dim); font-style: italic; }
.cell-num { text-align: center; color: var(--text-dim); width: 80px; }

.pagination { display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 14px; }
.pagination button { padding: 8px 16px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--bg-card); color: var(--text); cursor: pointer; transition: all 0.15s; }
.pagination button:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.pagination button:disabled { opacity: 0.4; cursor: default; }

.attribution { margin-top: 20px; text-align: center; font-size: 0.78rem; color: var(--text-dim); }
.attribution a { color: var(--accent); }

@media (max-width: 768px) { .encyclopedia { padding: 16px; } .sub-tab { font-size: 0.7rem; padding: 6px 10px; } }
</style>
