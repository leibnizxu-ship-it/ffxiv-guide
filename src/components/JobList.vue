<template>
  <aside class="job-list">
    <h3 class="list-title">职业选择</h3>
    <div class="role-groups">
      <div v-for="group in roleGroups" :key="group.role" class="role-group">
        <div class="role-header" :style="{ color: roleColors[group.role] }">
          {{ roleLabels[group.role] }}
        </div>
        <div
          v-for="job in group.jobs"
          :key="job.id"
          class="job-item"
          :class="{ active: selectedId === job.id }"
          @click="emit('select', job.id)"
        >
          <span class="job-icon">{{ job.icon }}</span>
          <span class="job-name">{{ job.name }}</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { jobs, roleLabels, roleColors } from '@/data/jobs'
import type { JobGuide } from '@/types/jobs'

defineProps<{ selectedId: string | null }>()
const emit = defineEmits<{ select: [id: string] }>()

const roleOrder = ['tank', 'healer', 'melee', 'caster', 'ranged']

const roleGroups = computed(() => {
  return roleOrder.map(role => ({
    role,
    jobs: jobs.filter(j => j.role === role)
  })).filter(g => g.jobs.length)
})
</script>

<style scoped>
.job-list {
  width: 220px;
  min-width: 220px;
  background: var(--bg-card);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  padding: 16px 12px;
}

.list-title { font-size: 0.95rem; color: var(--accent); margin-bottom: 12px; }

.role-group { margin-bottom: 12px; }

.role-header {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 4px;
  padding-left: 4px;
  letter-spacing: 1px;
}

.job-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}
.job-item:hover { background: var(--bg-card-hover); }
.job-item.active { background: var(--bg-card-hover); border-left: 2px solid var(--accent); padding-left: 8px; }

.job-icon { font-size: 1.1rem; }
.job-name { font-size: 0.85rem; }

@media (max-width: 768px) {
  .job-list { width: 100%; min-width: 0; max-height: 200px; border-right: none; border-bottom: 1px solid var(--border); }
  .role-groups { display: flex; gap: 16px; flex-wrap: wrap; }
}
</style>
