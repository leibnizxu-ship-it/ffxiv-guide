<template>
  <div class="encyclopedia">
    <h2 class="page-title">📚 数据百科</h2>
    <p class="page-sub">由 CafeMaker API 提供的 FFXIV 游戏数据 · 支持搜索与筛选</p>

    <div class="controls">
      <input v-model="query" type="text" placeholder="搜索副本名称 / 英文名..." class="search-input" />
      <select v-model="patchFilter" class="select-filter">
        <option value="">全部版本</option>
        <option value="2">2.x 重生之境</option>
        <option value="3">3.x 苍穹之禁城</option>
        <option value="4">4.x 红莲之狂潮</option>
        <option value="5">5.x 暗影之逆焰</option>
        <option value="6">6.x 晓月之终途</option>
        <option value="7">7.x 金曦之遗辉</option>
      </select>
      <span class="result-count">{{ filtered.length }} / {{ instanceData.length }} 个副本</span>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th @click="sortBy('id')" class="sortable">ID {{ sortIcon('id') }}</th>
            <th @click="sortBy('name')" class="sortable">中文名称 {{ sortIcon('name') }}</th>
            <th @click="sortBy('name_en')" class="sortable">英文名称 {{ sortIcon('name_en') }}</th>
            <th @click="sortBy('name_ja')" class="sortable">日文名称 {{ sortIcon('name_ja') }}</th>
            <th @click="sortBy('level')" class="sortable">等级 {{ sortIcon('level') }}</th>
            <th @click="sortBy('timeLimit')" class="sortable">时限 {{ sortIcon('timeLimit') }}</th>
            <th @click="sortBy('patch')" class="sortable">版本 {{ sortIcon('patch') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inst in paged" :key="inst.id">
            <td class="cell-id">{{ inst.id }}</td>
            <td class="cell-name">{{ inst.name }}</td>
            <td class="cell-en">{{ inst.name_en }}</td>
            <td class="cell-ja">{{ inst.name_ja }}</td>
            <td class="cell-num">Lv.{{ inst.level }}</td>
            <td class="cell-num">{{ inst.timeLimit }}min</td>
            <td class="cell-num">{{ inst.patch }}.x</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="totalPages > 1" class="pagination">
      <button :disabled="page <= 1" @click="page--">← 上一页</button>
      <span>{{ page }} / {{ totalPages }}</span>
      <button :disabled="page >= totalPages" @click="page++">下一页 →</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { instanceData } from '@/data/instances'

const query = ref('')
const patchFilter = ref('')
const sortField = ref('id')
const sortDir = ref(1)
const page = ref(1)
const pageSize = 20

const filtered = computed(() => {
  let list = instanceData
  if (patchFilter.value) {
    list = list.filter(i => i.patch === Number(patchFilter.value))
  }
  if (query.value.trim()) {
    const q = query.value.toLowerCase()
    list = list.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.name_en.toLowerCase().includes(q) ||
      i.name_ja.includes(q)
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

const totalPages = computed(() => Math.ceil(filtered.value.length / pageSize))
const paged = computed(() => {
  const start = (page.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

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
.page-sub { font-size: 0.85rem; color: var(--text-dim); margin-bottom: 20px; }

.controls { display: flex; gap: 12px; align-items: center; margin-bottom: 16px; flex-wrap: wrap; }
.search-input {
  flex: 1; min-width: 200px; padding: 10px 14px; border: 1px solid var(--border);
  border-radius: var(--radius); background: var(--bg); color: var(--text); font-size: 0.9rem; outline: none;
  transition: border-color 0.2s;
}
.search-input:focus { border-color: var(--accent); }
.select-filter {
  padding: 10px 14px; border: 1px solid var(--border); border-radius: var(--radius);
  background: var(--bg); color: var(--text); font-size: 0.9rem; outline: none;
}
.result-count { font-size: 0.85rem; color: var(--text-dim); white-space: nowrap; }

.table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: var(--radius); }
.data-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.data-table th {
  background: var(--bg-card); color: var(--accent); padding: 10px 12px; text-align: left;
  border-bottom: 2px solid var(--border); white-space: nowrap; user-select: none;
}
.sortable { cursor: pointer; }
.sortable:hover { color: #fff; }
.data-table td { padding: 8px 12px; border-bottom: 1px solid var(--border); }
.data-table tr:hover td { background: var(--bg-card-hover); }
.cell-id { color: var(--text-dim); width: 40px; }
.cell-name { font-weight: 600; }
.cell-en { color: var(--text-dim); font-style: italic; }
.cell-ja { color: var(--text-dim); font-size: 0.8rem; }
.cell-num { text-align: center; color: var(--text-dim); }

.pagination { display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 16px; }
.pagination button {
  padding: 8px 16px; border: 1px solid var(--border); border-radius: var(--radius);
  background: var(--bg-card); color: var(--text); cursor: pointer; transition: all 0.15s;
}
.pagination button:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.pagination button:disabled { opacity: 0.4; cursor: default; }

@media (max-width: 768px) { .encyclopedia { padding: 16px; } }
</style>
