<template>
  <div class="sdk-dashboard" :class="`sdk-dashboard--${config.layout ?? 'grid'}`" :style="gridStyle">
    <div v-if="config.title" class="sdk-dashboard-header">
      <h2 class="sdk-dashboard-title">{{ config.title }}</h2>
    </div>
    <div class="sdk-dashboard-grid" :style="gridStyle">
      <div v-for="widget in config.widgets" :key="widget.id" class="sdk-dashboard-cell">
        <component
          :is="resolveComponent(widget.type)"
          v-if="resolveComponent(widget.type)"
          :title="widget.title"
          :options="widget.options as any"
          :data="widget.data as any"
        />
        <div v-else class="sdk-widget sdk-unknown">
          <p>Unknown widget type: <code>{{ widget.type }}</code></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import type { DashboardConfig } from "../core/engine";
import ChartWidget from "./Chart.vue";
import KPIWidget from "./KPI.vue";
import TableWidget from "./Table.vue";
import GaugeWidget from "./Gauge.vue";
import TimelineWidget from "./Timeline.vue";
import FilterWidget from "./Filter.vue";
import MapWidget from "./MapWidget.vue";

const props = defineProps<{
  config: DashboardConfig;
}>();

const widgetMap: Record<string, Component> = {
  chart: ChartWidget,
  kpi: KPIWidget,
  table: TableWidget,
  gauge: GaugeWidget,
  timeline: TimelineWidget,
  filter: FilterWidget,
  map: MapWidget,
};

function resolveComponent(type: string): Component | undefined {
  return widgetMap[type];
}

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.config.columns ?? 3}, minmax(0, 1fr))`,
}));
</script>
