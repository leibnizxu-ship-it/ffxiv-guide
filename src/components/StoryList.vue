<template>
  <aside class="story-sidebar">
    <h3 class="sidebar-title">📖 剧情篇章</h3>
    <nav class="story-nav">
      <div v-for="s in storyGuides" :key="s.id" class="story-item"
        :class="{ active: selectedId===s.id }" @click="emit('select', s.id)">
        <span class="story-icon">{{ s.icon }}</span>
        <div class="story-info">
          <span class="story-title">{{ s.title }}</span>
          <span class="story-patch">{{ s.subtitle }} · {{ s.patch }}</span>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { storyGuides } from '@/data/story'
defineProps<{ selectedId: string|null }>()
const emit = defineEmits<{ select: [id:string] }>()
</script>

<style scoped>
.story-sidebar { width: 280px; min-width: 280px; background: var(--bg-card); border-right: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden; }
.sidebar-title { padding: 16px; font-size: 1rem; color: var(--accent); border-bottom: 1px solid var(--border); }
.story-nav { flex: 1; overflow-y: auto; padding: 8px; }
.story-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: var(--radius); cursor: pointer; transition: background 0.15s; margin-bottom: 2px; }
.story-item:hover { background: var(--bg-card-hover); }
.story-item.active { background: var(--bg-card-hover); border-left: 3px solid var(--accent); padding-left: 9px; }
.story-icon { font-size: 1.3rem; }
.story-info { display: flex; flex-direction: column; min-width: 0; }
.story-title { font-size: 0.9rem; font-weight: 600; }
.story-patch { font-size: 0.72rem; color: var(--text-dim); }
@media (max-width: 768px) { .story-sidebar { width: 100%; min-width: 0; max-height: 30vh; border-right: none; border-bottom: 1px solid var(--border); } }
</style>
