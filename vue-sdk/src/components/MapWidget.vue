<template>
  <div class="sdk-widget sdk-map">
    <div v-if="title" class="sdk-widget-header">
      <h3 class="sdk-widget-title">{{ title }}</h3>
    </div>
    <div class="sdk-map-body">
      <div class="sdk-map-visual">
        <!-- Simplified bubble map visualization -->
        <svg viewBox="0 0 800 400" class="sdk-map-svg" preserveAspectRatio="xMidYMid meet">
          <!-- World map outline (simplified) -->
          <rect width="800" height="400" fill="#f0f4f8" rx="8" />
          <foreignObject x="0" y="0" width="800" height="400">
            <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:.12;pointer-events:none;">
              <IconifyIcon icon="fa-solid:globe" width="96" height="96" />
            </div>
          </foreignObject>

          <!-- Bubble data points -->
          <g v-for="point in normalizedPoints" :key="point.id">
            <circle
              :cx="point.x"
              :cy="point.y"
              :r="point.r"
              :fill="point.color + '88'"
              :stroke="point.color"
              stroke-width="2"
              class="sdk-map-bubble"
            />
            <text
              :x="point.x"
              :y="point.y - point.r - 6"
              text-anchor="middle"
              font-size="11"
              fill="#374151"
              font-weight="500"
            >{{ point.label }}</text>
            <text
              :x="point.x"
              :y="point.y + 4"
              text-anchor="middle"
              font-size="10"
              fill="#1f2937"
              font-weight="600"
            >{{ formatValue(point.value) }}</text>
          </g>
        </svg>
      </div>

      <!-- Legend -->
      <div v-if="data?.length" class="sdk-map-legend">
        <div v-for="point in sortedPoints" :key="point.id" class="sdk-map-legend-item">
          <span class="sdk-map-legend-dot" :style="{ background: point.color ?? '#6366f1' }" />
          <span class="sdk-map-legend-label">{{ point.label }}</span>
          <span class="sdk-map-legend-value">{{ formatValue(point.value) }}</span>
        </div>
      </div>

      <div v-if="!data?.length" class="sdk-empty">
        <IconifyIcon icon="fa-solid:map" width="32" height="32" customClass="sdk-empty-icon" />
        <p>No map data provided</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IconifyIcon from "./IconifyIcon.vue";

export interface MapPoint {
  id: string;
  label: string;
  value: number;
  lat?: number;
  lng?: number;
  color?: string;
}

const props = defineProps<{
  title?: string;
  data?: MapPoint[];
}>();

const DEFAULT_COLORS = ["#6366f1", "#22d3ee", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

const sortedPoints = computed(() =>
  [...(props.data ?? [])].sort((a, b) => b.value - a.value)
);

const normalizedPoints = computed(() => {
  const pts = props.data ?? [];
  if (!pts.length) return [];
  const maxVal = Math.max(...pts.map((p) => p.value));
  const minVal = Math.min(...pts.map((p) => p.value));
  const range = maxVal - minVal || 1;

  return pts.map((p, i) => {
    const pct = (p.value - minVal) / range;
    // Layout points in a grid if no lat/lng provided
    const cols = Math.ceil(Math.sqrt(pts.length));
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = p.lng != null ? ((p.lng + 180) / 360) * 760 + 20 : 80 + col * (640 / Math.max(cols - 1, 1));
    const y = p.lat != null ? ((90 - p.lat) / 180) * 360 + 20 : 80 + row * (240 / Math.max(Math.ceil(pts.length / cols) - 1, 1));
    return {
      ...p,
      x,
      y,
      r: 12 + pct * 28,
      color: p.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
    };
  });
});

function formatValue(v: number): string {
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(1) + "M";
  if (v >= 1_000) return (v / 1_000).toFixed(1) + "K";
  return v.toLocaleString();
}
</script>
