<template>
  <div class="sdk-widget sdk-gauge">
    <div v-if="title" class="sdk-widget-header">
      <h3 class="sdk-widget-title">{{ title }}</h3>
    </div>
    <div class="sdk-gauge-body">
      <svg :viewBox="`0 0 ${SIZE} ${SIZE * 0.6}`" class="sdk-gauge-svg">
        <defs>
          <linearGradient :id="`gtrack-${uid}`" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" :stop-color="trackColors[0]" />
            <stop offset="50%" :stop-color="trackColors[1]" />
            <stop offset="100%" :stop-color="trackColors[2]" />
          </linearGradient>
        </defs>

        <!-- Background arc -->
        <path :d="bgArc" fill="none" stroke="#e5e7eb" :stroke-width="STROKE" stroke-linecap="round" />

        <!-- Colored segments -->
        <path
          v-for="(seg, i) in segments"
          :key="i"
          :d="seg.d"
          fill="none"
          :stroke="seg.color"
          :stroke-width="STROKE"
          stroke-linecap="round"
          class="sdk-gauge-segment"
        />

        <!-- Value arc overlay -->
        <path :d="valueArc" fill="none" :stroke="currentColor" :stroke-width="STROKE" stroke-linecap="round" class="sdk-gauge-value-arc" />

        <!-- Needle -->
        <line
          :x1="cx" :y1="cy"
          :x2="needleX" :y2="needleY"
          :stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          class="sdk-gauge-needle"
        />
        <circle :cx="cx" :cy="cy" r="6" :fill="currentColor" />

        <!-- Value text -->
        <text :x="cx" :y="cy * 1.15" text-anchor="middle" class="sdk-gauge-value-text" :fill="currentColor">
          {{ displayValue }}
        </text>
        <text :x="cx" :y="cy * 1.35" text-anchor="middle" class="sdk-gauge-label-text" fill="#6b7280">
          {{ data.unit ?? "" }}
        </text>

        <!-- Min/Max labels -->
        <text :x="minX" :y="minY" text-anchor="middle" class="sdk-gauge-minmax" fill="#9ca3af">{{ data.min }}</text>
        <text :x="maxX" :y="maxY" text-anchor="middle" class="sdk-gauge-minmax" fill="#9ca3af">{{ data.max }}</text>
      </svg>

      <div v-if="data.thresholds?.length" class="sdk-gauge-legend">
        <div v-for="t in data.thresholds" :key="t.value" class="sdk-gauge-legend-item">
          <span class="sdk-gauge-legend-dot" :style="{ background: t.color }" />
          <span>{{ t.label ?? t.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface GaugeThreshold {
  value: number;
  color: string;
  label?: string;
}

export interface GaugeData {
  value: number;
  min: number;
  max: number;
  unit?: string;
  thresholds?: GaugeThreshold[];
}

const props = defineProps<{
  title?: string;
  data: GaugeData;
}>();

const uid = Math.random().toString(36).slice(2);
const SIZE = 200;
const STROKE = 16;
const cx = SIZE / 2;
const cy = SIZE * 0.55;
const R = SIZE * 0.38;
const START_ANGLE = Math.PI;
const END_ANGLE = 0;

function polarToCartesian(angle: number) {
  return { x: cx + R * Math.cos(angle), y: cy - R * Math.sin(angle) };
}

function describeArc(startAngle: number, endAngle: number) {
  const s = polarToCartesian(startAngle);
  const e = polarToCartesian(endAngle);
  const largeArc = Math.abs(endAngle - startAngle) > Math.PI ? 0 : 1;
  return `M ${s.x} ${s.y} A ${R} ${R} 0 ${largeArc} 0 ${e.x} ${e.y}`;
}

const bgArc = computed(() => describeArc(START_ANGLE, END_ANGLE));

const pct = computed(() => {
  const { value, min, max } = props.data;
  return Math.min(1, Math.max(0, (value - min) / (max - min)));
});

const valueAngle = computed(() => START_ANGLE - pct.value * Math.PI);
const valueArc = computed(() => describeArc(START_ANGLE, valueAngle.value));

const needleX = computed(() => cx + (R * 0.85) * Math.cos(valueAngle.value));
const needleY = computed(() => cy - (R * 0.85) * Math.sin(valueAngle.value));

const displayValue = computed(() => {
  const v = props.data.value;
  return typeof v === "number" ? v.toLocaleString() : v;
});

const defaultColors = ["#22d3ee", "#10b981", "#f59e0b", "#ef4444"];

const segments = computed(() => {
  const ts = props.data.thresholds;
  if (!ts?.length) return [];
  const { min, max } = props.data;
  const range = max - min;
  const sorted = [...ts].sort((a, b) => a.value - b.value);
  return sorted.map((t, i) => {
    const prev = i === 0 ? min : sorted[i - 1].value;
    const sa = START_ANGLE - ((prev - min) / range) * Math.PI;
    const ea = START_ANGLE - ((t.value - min) / range) * Math.PI;
    return { d: describeArc(sa, ea), color: t.color };
  });
});

const currentColor = computed(() => {
  const ts = props.data.thresholds;
  if (!ts?.length) return "#6366f1";
  const v = props.data.value;
  const sorted = [...ts].sort((a, b) => a.value - b.value);
  for (const t of sorted) if (v <= t.value) return t.color;
  return sorted[sorted.length - 1].color;
});

const trackColors = computed(() => {
  const ts = props.data.thresholds;
  if (ts?.length) return ts.slice(0, 3).map((t) => t.color).concat(["#6366f1", "#22d3ee", "#10b981"]).slice(0, 3);
  return ["#6366f1", "#22d3ee", "#10b981"];
});

const minPt = computed(() => polarToCartesian(START_ANGLE));
const maxPt = computed(() => polarToCartesian(END_ANGLE));
const minX = computed(() => minPt.value.x);
const minY = computed(() => minPt.value.y + 14);
const maxX = computed(() => maxPt.value.x);
const maxY = computed(() => maxPt.value.y + 14);
</script>
