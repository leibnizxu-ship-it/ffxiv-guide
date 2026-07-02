<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">⚔️ FFXIV 攻略工具箱</h1>
      <p class="app-subtitle">副本攻略 · 职业循环 · 日常指南 · 剧情故事</p>
    </header>
    <nav class="app-tabs">
      <button class="tab-btn" :class="{ active: activeTab==='dungeons' }" @click="switchTab('dungeons')">🏰 副本</button>
      <button class="tab-btn" :class="{ active: activeTab==='jobs' }" @click="switchTab('jobs')">⚔️ 职业</button>
      <button class="tab-btn" :class="{ active: activeTab==='daily' }" @click="switchTab('daily')">📖 日常</button>
      <button class="tab-btn" :class="{ active: activeTab==='story' }" @click="switchTab('story')">📜 剧情</button>
      <button class="tab-btn" :class="{ active: activeTab==='tools' }" @click="switchTab('tools')">🛠️ 工具</button>
    </nav>
    <main class="app-main">
      <template v-if="activeTab==='dungeons'">
        <DungeonList :guides="guides" :selectedId="selectedDungeonId" @select="selectDungeon" />
        <StrategyView v-if="selectedDungeon" :guide="selectedDungeon" @back="selectedDungeonId=null" />
        <div v-else class="empty-state"><div class="empty-icon">📜</div><p>选择一个副本查看详细攻略</p></div>
      </template>
      <template v-else-if="activeTab==='jobs'">
        <JobList :selectedId="selectedJobId" @select="selectJob" />
        <JobView v-if="selectedJob" :job="selectedJob" @back="selectedJobId=null" />
        <div v-else class="empty-state"><div class="empty-icon">⚔️</div><p>选择一个职业查看循环攻略</p></div>
      </template>
      <template v-else-if="activeTab==='daily'">
        <DailyList :selectedId="selectedDailyId" @select="selectDaily" />
        <DailyView v-if="selectedDaily" :guide="selectedDaily" @back="selectedDailyId=null" />
        <div v-else class="empty-state"><div class="empty-icon">📖</div><p>选择一个日常指南查看详情</p></div>
      </template>
      <template v-else-if="activeTab==='story'">
        <StoryList :selectedId="selectedStoryId" @select="selectStory" />
        <StoryView v-if="selectedStory" :guide="selectedStory" @back="selectedStoryId=null" />
        <div v-else class="empty-state"><div class="empty-icon">📜</div><p>选择一个篇章回顾剧情</p></div>
      </template>
      <template v-else>
        <ToolsPage />
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { guides } from '@/data/guides'
import { getJobById } from '@/data/jobs'
import { dailyGuides } from '@/data/daily'
import { getStoryById } from '@/data/story'
import type { StrategyGuide } from '@/types'
import type { JobGuide } from '@/types/jobs'
import type { DailyGuide } from '@/types/daily'
import type { StoryGuide } from '@/types/story'
import DungeonList from '@/components/DungeonList.vue'
import StrategyView from '@/components/StrategyView.vue'
import JobList from '@/components/JobList.vue'
import JobView from '@/components/JobView.vue'
import DailyList from '@/components/DailyList.vue'
import DailyView from '@/components/DailyView.vue'
import StoryList from '@/components/StoryList.vue'
import StoryView from '@/components/StoryView.vue'
import ToolsPage from '@/components/ToolsPage.vue'

const activeTab = ref('dungeons')
const selectedDungeonId = ref(null as string|null)
const selectedJobId = ref(null as string|null)
const selectedDailyId = ref(null as string|null)
const selectedStoryId = ref(null as string|null)

type Tab = 'dungeons'|'jobs'|'daily'|'story'|'tools'
function switchTab(tab: string) { activeTab.value = tab as Tab }
function selectDungeon(id: string) { selectedDungeonId.value = id }
function selectJob(id: string) { selectedJobId.value = id }
function selectDaily(id: string) { selectedDailyId.value = id }
function selectStory(id: string) { selectedStoryId.value = id }

const selectedDungeon = computed<StrategyGuide|null>(() => selectedDungeonId.value ? guides.find(g=>g.id===selectedDungeonId.value)??null : null)
const selectedJob = computed<JobGuide|null>(() => selectedJobId.value ? getJobById(selectedJobId.value)??null : null)
const selectedDaily = computed<DailyGuide|null>(() => selectedDailyId.value ? dailyGuides.find(g=>g.id===selectedDailyId.value)??null : null)
const selectedStory = computed<StoryGuide|null>(() => selectedStoryId.value ? getStoryById(selectedStoryId.value)??null : null)
</script>

<style scoped>
.app { min-height: 100vh; display: flex; flex-direction: column; }
.app-header { background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%); padding: 20px 40px; border-bottom: 2px solid var(--accent); flex-shrink: 0; }
.app-title { font-size: 1.8rem; color: var(--accent); letter-spacing: 2px; }
.app-subtitle { font-size: 0.88rem; color: var(--text-dim); margin-top: 4px; }
.app-tabs { display: flex; gap: 0; background: var(--bg-card); border-bottom: 1px solid var(--border); padding: 0 24px; flex-shrink: 0; }
.tab-btn { padding: 12px 18px; border: none; background: transparent; color: var(--text-dim); font-size: 0.9rem; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.15s; }
.tab-btn:hover { color: var(--text); }
.tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }
.app-main { flex: 1; display: flex; overflow: hidden; }
.empty-state { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-dim); font-size: 1.2rem; gap: 16px; }
.empty-icon { font-size: 4rem; opacity: 0.5; }
@media (max-width: 768px) {
  .app-header { padding: 16px 20px; }
  .app-title { font-size: 1.3rem; }
  .app-main { flex-direction: column; }
  .app-tabs { padding: 0 6px; flex-wrap: wrap; }
  .tab-btn { padding: 8px 10px; font-size: 0.75rem; }
}
</style>
