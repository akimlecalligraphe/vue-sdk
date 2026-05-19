<template>
  <div class="sdk-widget sdk-chart">
    <div v-if="title" class="sdk-widget-header">
      <h3 class="sdk-widget-title">{{ title }}</h3>
    </div>
    <div class="sdk-widget-body sdk-chart-body">
      <component
        :is="chartComponent"
        v-if="chartComponent && chartData"
        :data="chartData"
        :options="chartOptions"
        class="sdk-chart-canvas"
      />
      <div v-else class="sdk-empty">
        <IconifyIcon icon="fa-solid:chart-bar" width="32" height="32" customClass="sdk-empty-icon" />
        <p>No chart data provided</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IconifyIcon from "./IconifyIcon.vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "vue-chartjs";

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement, PointElement,
  ArcElement, RadialLinearScale, Title, Tooltip, Legend, Filler
);

export interface ChartData {
  labels: string[];
  datasets: Array<{
    label?: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    fill?: boolean;
    tension?: number;
  }>;
}

export interface ChartOptions {
  chartType: "bar" | "line" | "pie" | "doughnut" | "radar" | "polarArea";
  colors?: string[];
  legend?: boolean;
  xLabel?: string;
  yLabel?: string;
  stacked?: boolean;
}

const props = withDefaults(defineProps<{
  title?: string;
  options: ChartOptions;
  data: ChartData;
}>(), {
  title: undefined,
});

const DEFAULT_COLORS = [
  "#6366f1", "#22d3ee", "#10b981", "#f59e0b", "#ef4444",
  "#8b5cf6", "#ec4899", "#14b8a6", "#f97316", "#3b82f6",
];

const chartComponent = computed(() => {
  const map: Record<string, unknown> = { bar: Bar, line: Line, pie: Pie, doughnut: Doughnut, radar: Radar, polarArea: PolarArea };
  return map[props.options?.chartType ?? "bar"] ?? Bar;
});

const chartData = computed<ChartData>(() => {
  if (!props.data) return { labels: [], datasets: [] };
  const colors = props.options?.colors ?? DEFAULT_COLORS;
  return {
    labels: props.data.labels ?? [],
    datasets: (props.data.datasets ?? []).map((ds, i) => ({
      ...ds,
      backgroundColor: ds.backgroundColor ?? (["pie", "doughnut", "polarArea"].includes(props.options?.chartType) ? colors : colors[i % colors.length] + "cc"),
      borderColor: ds.borderColor ?? colors[i % colors.length],
      fill: ds.fill ?? false,
      tension: ds.tension ?? 0.4,
    })),
  };
});

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: props.options?.legend !== false, position: "top" as const },
    title: { display: false },
  },
  scales: ["pie", "doughnut", "polarArea", "radar"].includes(props.options?.chartType) ? {} : {
    x: {
      stacked: props.options?.stacked ?? false,
      title: { display: !!props.options?.xLabel, text: props.options?.xLabel ?? "" },
      grid: { color: "rgba(0,0,0,0.05)" },
    },
    y: {
      stacked: props.options?.stacked ?? false,
      title: { display: !!props.options?.yLabel, text: props.options?.yLabel ?? "" },
      grid: { color: "rgba(0,0,0,0.05)" },
    },
  },
}));
</script>
