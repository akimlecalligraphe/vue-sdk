<template>
  <div class="sdk-template sdk-template-analytics">
    <header class="sdk-template-header">
      <div>
        <h1 class="sdk-template-title">Analytics Dashboard</h1>
        <p class="sdk-template-subtitle">Traffic, engagement & user behavior insights</p>
      </div>
    </header>

    <div class="sdk-template-kpi-row">
      <KPIWidget v-for="kpi in kpis" :key="kpi.id" :title="kpi.title" :data="kpi.data" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Daily Active Users" :options="{ chartType: 'line', xLabel: 'Day', yLabel: 'Users', legend: true }" :data="dauData" />
      <ChartWidget title="Traffic by Channel" :options="{ chartType: 'doughnut', legend: true }" :data="channelData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--3">
      <ChartWidget title="Session Duration Distribution" :options="{ chartType: 'bar', xLabel: 'Duration', yLabel: 'Sessions' }" :data="sessionData" />
      <ChartWidget title="Device Split" :options="{ chartType: 'pie', legend: true }" :data="deviceData" />
      <GaugeWidget title="Goal Completion" :data="goalGauge" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <MapWidget title="Users by Region" :data="mapData" />
      <TableWidget title="Top Pages" :options="pagesTableOptions" :data="topPages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import KPIWidget from "../components/KPI.vue";
import ChartWidget from "../components/Chart.vue";
import TableWidget from "../components/Table.vue";
import GaugeWidget from "../components/Gauge.vue";
import MapWidget from "../components/MapWidget.vue";

const kpis = [
  { id: "dau", title: "Daily Active Users", data: { value: 84200, trend: 18.6, trendLabel: "vs last week", icon: "fa-solid:user", color: "#6366f1" } },
  { id: "sessions", title: "Sessions", data: { value: 124600, trend: 22.4, trendLabel: "vs last week", icon: "fa-solid:link", color: "#22d3ee" } },
  { id: "bounce", title: "Bounce Rate", data: { value: 34.2, unit: "%", trend: -8.1, trendLabel: "vs last week", icon: "fa-solid:arrow-rotate-left", color: "#f59e0b" } },
  { id: "duration", title: "Avg Session", data: { value: "4m 18s", trend: 12.5, trendLabel: "vs last week", icon: "fa-solid:stopwatch", color: "#10b981" } },
];

const dauData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    { label: "This week", data: [72000, 84000, 79000, 91000, 88000, 65000, 54000], fill: true },
    { label: "Last week", data: [65000, 71000, 68000, 78000, 74000, 58000, 47000], fill: false },
  ],
};

const channelData = {
  labels: ["Organic Search", "Direct", "Social", "Referral", "Email", "Paid"],
  datasets: [{ data: [38, 25, 16, 10, 7, 4] }],
};

const sessionData = {
  labels: ["0-30s", "30s-1m", "1-2m", "2-5m", "5-10m", "10m+"],
  datasets: [{ label: "Sessions", data: [18400, 28200, 31500, 25800, 12400, 8300] }],
};

const deviceData = {
  labels: ["Mobile", "Desktop", "Tablet"],
  datasets: [{ data: [58, 36, 6] }],
};

const goalGauge = {
  value: 72,
  min: 0,
  max: 100,
  unit: "% goal",
  thresholds: [
    { value: 50, color: "#ef4444", label: "Low" },
    { value: 75, color: "#f59e0b", label: "Good" },
    { value: 100, color: "#10b981", label: "Excellent" },
  ],
};

const mapData = [
  { id: "us", label: "United States", value: 41200, lat: 38, lng: -97, color: "#6366f1" },
  { id: "uk", label: "United Kingdom", value: 18400, lat: 51, lng: -1, color: "#22d3ee" },
  { id: "de", label: "Germany", value: 12800, lat: 51, lng: 10, color: "#10b981" },
  { id: "fr", label: "France", value: 9600, lat: 46, lng: 2, color: "#f59e0b" },
  { id: "au", label: "Australia", value: 7200, lat: -25, lng: 133, color: "#8b5cf6" },
  { id: "ca", label: "Canada", value: 6800, lat: 60, lng: -96, color: "#ec4899" },
];

const pagesTableOptions = {
  columns: [
    { key: "page", label: "Page", sortable: true },
    { key: "views", label: "Views", sortable: true },
    { key: "unique", label: "Unique", sortable: true },
    { key: "bounce", label: "Bounce %", sortable: true },
    { key: "duration", label: "Avg Duration" },
  ],
  pagination: true, pageSize: 6, striped: true, searchable: true,
};

const topPages = [
  { page: "/home", views: 48200, unique: 31400, bounce: "28%", duration: "3m 24s" },
  { page: "/product", views: 32100, unique: 24800, bounce: "35%", duration: "4m 12s" },
  { page: "/pricing", views: 18700, unique: 15200, bounce: "42%", duration: "2m 48s" },
  { page: "/blog", views: 14300, unique: 11600, bounce: "52%", duration: "5m 36s" },
  { page: "/signup", views: 8900, unique: 8200, bounce: "22%", duration: "2m 10s" },
  { page: "/docs", views: 6400, unique: 4100, bounce: "18%", duration: "8m 45s" },
];
</script>
