<template>
  <div class="position-map">
    <h4 class="diagram-title">{{ diagram.title }}</h4>
    <div
      class="diagram-canvas"
      :style="{ width: diagram.width + 'px', height: diagram.height + 'px' }"
    >
      <svg
        :width="diagram.width"
        :height="diagram.height"
        :viewBox="'0 0 ' + diagram.width + ' ' + diagram.height"
      >
        <!-- Arena border -->
        <circle
          :cx="diagram.width / 2"
          :cy="diagram.height / 2"
          :r="diagram.width * 0.45"
          fill="none"
          stroke="#2a3a5e"
          stroke-width="2"
          stroke-dasharray="8 4"
        />
        <circle
          :cx="diagram.width / 2"
          :cy="diagram.height / 2"
          :r="diagram.width * 0.08"
          fill="none"
          stroke="#2a3a5e"
          stroke-width="1"
        />

        <!-- Boss marker -->
        <text
          :x="diagram.width / 2"
          :y="diagram.height / 2 - 2"
          text-anchor="middle"
          fill="#e06060"
          font-size="12"
        >BOSS</text>

        <!-- Connection lines -->
        <line
          v-for="(line, i) in diagram.lines"
          :key="'l' + i"
          :x1="getMark(line.from)?.x ?? 0"
          :y1="getMark(line.from)?.y ?? 0"
          :x2="getMark(line.to)?.x ?? 0"
          :y2="getMark(line.to)?.y ?? 0"
          stroke="#2a3a5e"
          stroke-width="1"
          stroke-dasharray="4 3"
        />

        <!-- Position marks -->
        <g v-for="mark in diagram.marks" :key="mark.id">
          <circle
            :cx="mark.x"
            :cy="mark.y"
            r="18"
            :fill="getRoleColor(mark.role) + '33'"
            :stroke="getRoleColor(mark.role)"
            stroke-width="1.5"
          />
          <text
            :x="mark.x"
            :y="mark.y + 4"
            text-anchor="middle"
            :fill="getRoleColor(mark.role)"
            font-size="10"
            font-weight="bold"
          >{{ mark.label }}</text>
          <text
            v-if="mark.description"
            :x="mark.x"
            :y="mark.y + 32"
            text-anchor="middle"
            fill="#8899aa"
            font-size="9"
          >{{ mark.description }}</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PositionDiagram } from '@/types'

const props = defineProps<{ diagram: PositionDiagram }>()

function getMark(id: string) {
  return props.diagram.marks.find(m => m.id === id)
}

function getRoleColor(role?: string): string {
  switch (role) {
    case 'tank': return '#4060e0'
    case 'healer': return '#40c060'
    case 'dps': return '#e06040'
    default: return '#e6b422'
  }
}
</script>

<style scoped>
.position-map {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 12px;
  border: 1px solid var(--border);
}

.diagram-title {
  font-size: 0.95rem;
  color: var(--accent);
  margin-bottom: 12px;
}

.diagram-canvas {
  max-width: 100%;
  display: flex;
  justify-content: center;
}
.diagram-canvas svg { max-width: 100%; height: auto; }
</style>
