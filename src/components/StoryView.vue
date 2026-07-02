<template>
  <section class="story-view">
    <button class="back-btn" @click="emit('back')">← 返回列表</button>

    <div class="story-hero">
      <span class="story-icon-hero">{{ guide.icon }}</span>
      <div>
        <h1 class="story-title">{{ guide.title }}</h1>
        <p class="story-subtitle">{{ guide.subtitle }} · {{ guide.patch }}</p>
      </div>
    </div>

    <p class="story-summary">{{ guide.summary }}</p>

    <div class="story-section">
      <h2 class="section-heading">📜 剧情篇章</h2>
      <div class="chapters">
        <div v-for="(ch, i) in guide.chapters" :key="i" class="chapter-card">
          <div class="chapter-num">{{ i + 1 }}</div>
          <div class="chapter-body">
            <h3 class="chapter-title">{{ ch.title }}</h3>
            <p class="chapter-content">{{ ch.content }}</p><p v-if="ch.highlights" class="chapter-highlight">✨ {{ ch.highlights }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="story-section">
      <h2 class="section-heading">👤 关键角色</h2>
      <div class="character-grid">
        <div v-for="c in guide.keyCharacters" :key="c.name" class="character-card">
          <div class="char-name">{{ c.name }}</div>
          <div class="char-role">{{ c.role }}</div>
          <div class="char-desc">{{ c.description }}</div>
        </div>
      </div>
    </div>

    <div class="story-section">
      <h2 class="section-heading">⚡ 关键时刻</h2>
      <div class="moment-list">
        <div v-for="(m, i) in guide.keyMoments" :key="i" class="moment-item">
          <span class="moment-dot"></span>
          <span>{{ m }}</span>
        </div>
      </div>
    </div>

    <div class="story-section">
      <h2 class="section-heading">👹 蛮神/讨伐战</h2>
      <div class="primal-grid">
        <div v-for="p in guide.primalBattles" :key="p.name" class="primal-card">
          <div class="primal-name">{{ p.name }}</div>
          <div class="primal-level">Lv.{{ p.level }}</div>
          <div class="primal-desc">{{ p.description }}</div>
        </div>
      </div>
    </div>

    <div class="story-section tips-section">
      <h2 class="section-heading">💡 游玩建议</h2>
      <ul class="tips-list">
        <li v-for="(t, i) in guide.tips" :key="i">{{ t }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { StoryGuide } from '@/types/story'
defineProps<{ guide: StoryGuide }>()
const emit = defineEmits<{ back: [] }>()
</script>

<style scoped>
.story-view { flex: 1; overflow-y: auto; padding: 24px 32px; }
.back-btn { background: var(--bg-card); color: var(--text); border: 1px solid var(--border); padding: 8px 16px; border-radius: var(--radius); cursor: pointer; font-size: 0.9rem; margin-bottom: 20px; transition: background 0.15s; }
.back-btn:hover { background: var(--bg-card-hover); }

.story-hero { display: flex; align-items: center; gap: 20px; margin-bottom: 16px; padding: 20px 24px; background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg) 100%); border-radius: var(--radius); border: 1px solid var(--border); }
.story-icon-hero { font-size: 3.5rem; }
.story-title { font-size: 1.6rem; color: var(--accent); margin: 0; }
.story-subtitle { font-size: 0.9rem; color: var(--text-dim); margin-top: 4px; }
.story-summary { font-size: 0.95rem; line-height: 1.8; margin-bottom: 28px; color: var(--text); }

.story-section { margin-bottom: 28px; }
.section-heading { font-size: 1.15rem; color: var(--accent); margin-bottom: 14px; padding-bottom: 6px; border-bottom: 1px solid var(--border); }

.chapters { display: flex; flex-direction: column; gap: 12px; }
.chapter-card { display: flex; gap: 14px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 20px; transition: border-color 0.15s; }
.chapter-card:hover { border-color: var(--accent); }
.chapter-num { width: 36px; height: 36px; border-radius: 50%; background: var(--accent); color: #1a1a2e; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; flex-shrink: 0; }
.chapter-body { flex: 1; }
.chapter-title { font-size: 1rem; color: #e6b422; margin: 0 0 6px; }
.chapter-highlight { font-size: 0.82rem; color: var(--accent); font-style: italic; margin-top: 8px; padding: 8px 12px; background: rgba(230,180,34,0.08); border-radius: 4px; border-left: 3px solid var(--accent); }.chapter-content { font-size: 0.87rem; line-height: 1.7; color: var(--text); margin: 0; }

.character-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.character-card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 16px; }
.char-name { font-size: 0.92rem; font-weight: 700; color: var(--accent); }
.char-role { font-size: 0.75rem; color: var(--text-dim); margin-bottom: 6px; }
.char-desc { font-size: 0.82rem; color: var(--text); line-height: 1.5; }

.moment-list { display: flex; flex-direction: column; gap: 8px; }
.moment-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: var(--text); }
.moment-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); margin-top: 6px; flex-shrink: 0; }

.primal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.primal-card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 14px; }
.primal-name { font-size: 0.88rem; font-weight: 600; color: #e06060; }
.primal-level { font-size: 0.72rem; color: var(--text-dim); margin-bottom: 4px; }
.primal-desc { font-size: 0.8rem; color: var(--text); line-height: 1.5; }

.tips-section { background: var(--bg-card); border: 1px solid var(--accent); border-radius: var(--radius); padding: 16px 20px; }
.tips-list { padding-left: 18px; margin: 0; }
.tips-list li { font-size: 0.87rem; margin-bottom: 6px; color: var(--text); }

@media (max-width: 768px) {
  .story-view { padding: 16px; }
  .character-grid, .primal-grid { grid-template-columns: 1fr; }
}
</style>
