<template>
  <div class="sdk-widget sdk-kpi" :style="{ '--kpi-color': color }">
    <div class="sdk-kpi-inner">
      <div class="sdk-kpi-top">
        <div class="sdk-kpi-label">{{ title || data.label || "Metric" }}</div>
        <div v-if="data.icon" class="sdk-kpi-icon">
          <IconifyIcon :icon="data.icon" width="24" height="24" />
        </div>
      </div>
      <div class="sdk-kpi-value">
        <span class="sdk-kpi-number">{{ formattedValue }}</span>
        <span v-if="data.unit" class="sdk-kpi-unit">{{ data.unit }}</span>
      </div>
      <div v-if="data.trend !== undefined" class="sdk-kpi-trend" :class="trendClass">
        <span class="sdk-kpi-trend-arrow">{{ data.trend >= 0 ? "↑" : "↓" }}</span>
        <span class="sdk-kpi-trend-value">{{ Math.abs(data.trend) }}%</span>
        <span v-if="data.trendLabel" class="sdk-kpi-trend-label">{{ data.trendLabel }}</span>
      </div>
      <div v-if="data.subtitle" class="sdk-kpi-subtitle">{{ data.subtitle }}</div>
    </div>
    <div class="sdk-kpi-accent" :style="{ background: color }" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IconifyIcon from "./IconifyIcon.vue";

export interface KPIData {
  value: number | string;
  unit?: string;
  trend?: number;
  trendLabel?: string;
  icon?: string;
  color?: string;
  label?: string;
  subtitle?: string;
}

const props = defineProps<{
  title?: string;
  data: KPIData;
}>();

const color = computed(() => props.data.color ?? "#6366f1");

const formattedValue = computed(() => {
  const v = props.data.value;
  if (typeof v === "number") {
    if (v >= 1_000_000) return (v / 1_000_000).toFixed(1) + "M";
    if (v >= 1_000) return (v / 1_000).toFixed(1) + "K";
    return v.toLocaleString();
  }
  return v;
});

const trendClass = computed(() => {
  const t = props.data.trend;
  if (t === undefined) return "";
  return t > 0 ? "sdk-kpi-trend--up" : t < 0 ? "sdk-kpi-trend--down" : "sdk-kpi-trend--neutral";
});
</script>
