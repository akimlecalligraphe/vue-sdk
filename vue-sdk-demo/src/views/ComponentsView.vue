<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">Components</h1>
      <p class="page-subtitle">All 7 SDK widgets with live demos and usage examples. Each is configurable via props.</p>
    </div>

    <!-- Tab Navigation -->
    <div class="tabs">
      <div class="tab-list">
        <button v-for="w in widgets" :key="w.id" class="tab-btn" :class="{ active: activeWidget === w.id }" @click="activeWidget = w.id">
          <IconifyIcon :icon="w.icon" width="16" height="16" customClass="tab-btn-icon" />
          {{ w.label }}
        </button>
      </div>

      <!-- Chart -->
      <section v-if="activeWidget === 'chart'" class="component-section">
        <div class="component-section-title">Chart Widget</div>
        <p style="font-size:.9rem; color:var(--text-muted); margin:0 0 1.25rem">Powered by Chart.js. Supports bar, line, pie, doughnut, radar, and polar area types.</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:1rem">
          <div>
            <div class="preview-item-label">Bar Chart</div>
            <ChartWidget title="Monthly Sales" :options="{ chartType: 'bar', xLabel: 'Month', yLabel: 'Units' }" :data="chartBarData" />
          </div>
          <div>
            <div class="preview-item-label">Line Chart</div>
            <ChartWidget title="Revenue Trend" :options="{ chartType: 'line', xLabel: 'Week', yLabel: '$' }" :data="chartLineData" />
          </div>
          <div>
            <div class="preview-item-label">Doughnut Chart</div>
            <ChartWidget title="Market Share" :options="{ chartType: 'doughnut', legend: true }" :data="chartPieData" />
          </div>
          <div>
            <div class="preview-item-label">Radar Chart</div>
            <ChartWidget title="Skills Assessment" :options="{ chartType: 'radar', legend: true }" :data="chartRadarData" />
          </div>
        </div>
        <div class="component-demo" style="margin-top:1rem">
          <details class="component-demo-code">
            <summary>Show usage example</summary>
            <div class="code-block"><pre>{{ chartCode }}</pre></div>
          </details>
        </div>
      </section>

      <!-- KPI -->
      <section v-if="activeWidget === 'kpi'" class="component-section">
        <div class="component-section-title">KPI Widget</div>
        <p style="font-size:.9rem; color:var(--text-muted); margin:0 0 1.25rem">Display a key metric with optional trend indicator, unit, and icon.</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:1rem">
          <KPIWidget v-for="k in kpiSamples" :key="k.title" :title="k.title" :data="k.data" />
        </div>
        <div class="component-demo" style="margin-top:1rem">
          <details class="component-demo-code">
            <summary>Show usage example</summary>
            <div class="code-block"><pre>{{ kpiCode }}</pre></div>
          </details>
        </div>
      </section>

      <!-- Table -->
      <section v-if="activeWidget === 'table'" class="component-section">
        <div class="component-section-title">Table Widget</div>
        <p style="font-size:.9rem; color:var(--text-muted); margin:0 0 1.25rem">Sortable, searchable, paginated table. Pass columns + row data.</p>
        <TableWidget title="User Accounts" :options="tableOptions" :data="tableData" />
        <div class="component-demo" style="margin-top:1rem">
          <details class="component-demo-code">
            <summary>Show usage example</summary>
            <div class="code-block"><pre>{{ tableCode }}</pre></div>
          </details>
        </div>
      </section>

      <!-- Gauge -->
      <section v-if="activeWidget === 'gauge'" class="component-section">
        <div class="component-section-title">Gauge Widget</div>
        <p style="font-size:.9rem; color:var(--text-muted); margin:0 0 1.25rem">Semicircular SVG gauge with color thresholds. Pass value, min, max.</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1rem">
          <GaugeWidget v-for="g in gaugeSamples" :key="g.title" :title="g.title" :data="g.data" />
        </div>
        <div class="component-demo" style="margin-top:1rem">
          <details class="component-demo-code">
            <summary>Show usage example</summary>
            <div class="code-block"><pre>{{ gaugeCode }}</pre></div>
          </details>
        </div>
      </section>

      <!-- Timeline -->
      <section v-if="activeWidget === 'timeline'" class="component-section">
        <div class="component-section-title">Timeline Widget</div>
        <p style="font-size:.9rem; color:var(--text-muted); margin:0 0 1.25rem">Vertical timeline with status badges and icons. Done, active, pending, error states.</p>
        <div style="max-width:600px">
          <TimelineWidget title="Deployment Pipeline" :data="timelineData" />
        </div>
        <div class="component-demo" style="margin-top:1rem">
          <details class="component-demo-code">
            <summary>Show usage example</summary>
            <div class="code-block"><pre>{{ timelineCode }}</pre></div>
          </details>
        </div>
      </section>

      <!-- Filter -->
      <section v-if="activeWidget === 'filter'" class="component-section">
        <div class="component-section-title">Filter Widget</div>
        <p style="font-size:.9rem; color:var(--text-muted); margin:0 0 1.25rem">Supports select, text, date, range, and checkbox filter types. Emits change and apply events.</p>
        <div style="display:grid; grid-template-columns:360px 1fr; gap:1.5rem; align-items:start">
          <FilterWidget title="Data Filters" :options="filterOptions" @change="onFilterChange" @apply="onFilterApply" />
          <div v-if="filterValues" style="background:var(--surface-0); border:1px solid var(--border); border-radius:var(--radius); padding:1.25rem">
            <div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:.75rem">Active Filter Values</div>
            <div class="code-block" style="font-size:.8rem"><pre>{{ JSON.stringify(filterValues, null, 2) }}</pre></div>
          </div>
        </div>
        <div class="component-demo" style="margin-top:1rem">
          <details class="component-demo-code">
            <summary>Show usage example</summary>
            <div class="code-block"><pre>{{ filterCode }}</pre></div>
          </details>
        </div>
      </section>

      <!-- Map -->
      <section v-if="activeWidget === 'map'" class="component-section">
        <div class="component-section-title">Map Widget</div>
        <p style="font-size:.9rem; color:var(--text-muted); margin:0 0 1.25rem">Bubble map visualization for geographic data. Size proportional to value.</p>
        <MapWidget title="Revenue by Region" :data="mapData" />
        <div class="component-demo" style="margin-top:1rem">
          <details class="component-demo-code">
            <summary>Show usage example</summary>
            <div class="code-block"><pre>{{ mapCode }}</pre></div>
          </details>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconifyIcon from "../components/IconifyIcon.vue";
import { ChartWidget, KPIWidget, TableWidget, GaugeWidget, TimelineWidget, FilterWidget, MapWidget } from "@workspace/vue-sdk";

const widgets = [
  { id: "chart", label: "Chart", icon: "fa-solid:chart-bar" },
  { id: "kpi", label: "KPI", icon: "fa-solid:chart-line" },
  { id: "table", label: "Table", icon: "fa-solid:clipboard-list" },
  { id: "gauge", label: "Gauge", icon: "fa-solid:bullseye" },
  { id: "timeline", label: "Timeline", icon: "fa-solid:clock" },
  { id: "filter", label: "Filter", icon: "fa-solid:magnifying-glass" },
  { id: "map", label: "Map", icon: "fa-solid:map" },
];

const activeWidget = ref("chart");

// ── Chart data ──
const chartBarData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    { label: "2024", data: [65, 78, 72, 91, 88, 105] },
    { label: "2023", data: [52, 61, 58, 74, 71, 84] },
  ],
};
const chartLineData = {
  labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
  datasets: [{ label: "Revenue", data: [18000, 22000, 19500, 28000, 24000, 31000, 27000, 36000], fill: true }],
};
const chartPieData = {
  labels: ["Product A", "Product B", "Product C", "Other"],
  datasets: [{ data: [42, 28, 18, 12] }],
};
const chartRadarData = {
  labels: ["Speed", "Quality", "Design", "Support", "Features", "Price"],
  datasets: [
    { label: "Our product", data: [88, 92, 85, 78, 90, 72] },
    { label: "Competitor", data: [74, 80, 70, 85, 76, 88] },
  ],
};

// ── KPI data ──
const kpiSamples = [
  { title: "Total Revenue", data: { value: 2840000, unit: "USD", trend: 12.4, trendLabel: "vs last month", icon: "fa-solid:money-bill-wave", color: "#10b981" } },
  { title: "Active Users", data: { value: 84200, trend: 18.6, trendLabel: "vs last week", icon: "fa-solid:user", color: "#6366f1" } },
  { title: "Bounce Rate", data: { value: 34.2, unit: "%", trend: -8.1, trendLabel: "vs last week", icon: "fa-solid:arrow-rotate-left", color: "#f59e0b" } },
  { title: "Avg Session", data: { value: "4m 18s", trend: 12.5, trendLabel: "vs last week", icon: "fa-solid:stopwatch", color: "#22d3ee" } },
  { title: "Conversion Rate", data: { value: 4.2, unit: "%", trend: 0, trendLabel: "unchanged", icon: "fa-solid:bullseye", color: "#8b5cf6" } },
  { title: "NPS Score", data: { value: 72, trend: 5.2, trendLabel: "vs last quarter", icon: "fa-solid:star", color: "#ec4899" } },
];

// ── Table data ──
const tableOptions = {
  columns: [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { key: "status", label: "Status" },
    { key: "joined", label: "Joined", sortable: true },
  ],
  pagination: true, pageSize: 5, striped: true, searchable: true,
};
const tableData = [
  { name: "Alice Martin", email: "alice@example.com", role: "Admin", status: "Active", joined: "2023-01-12" },
  { name: "Bob Chen", email: "bob@example.com", role: "Editor", status: "Active", joined: "2023-03-08" },
  { name: "Carol Singh", email: "carol@example.com", role: "Viewer", status: "Inactive", joined: "2023-05-22" },
  { name: "Dave Kim", email: "dave@example.com", role: "Editor", status: "Active", joined: "2023-07-14" },
  { name: "Eve Johnson", email: "eve@example.com", role: "Admin", status: "Active", joined: "2022-11-30" },
  { name: "Frank Lee", email: "frank@example.com", role: "Viewer", status: "Pending", joined: "2024-01-05" },
  { name: "Grace Liu", email: "grace@example.com", role: "Editor", status: "Active", joined: "2024-02-18" },
];

// ── Gauge data ──
const gaugeSamples = [
  { title: "CPU Usage", data: { value: 72, min: 0, max: 100, unit: "%", thresholds: [{ value: 60, color: "#10b981", label: "Normal" }, { value: 80, color: "#f59e0b", label: "High" }, { value: 100, color: "#ef4444", label: "Critical" }] } },
  { title: "Memory Usage", data: { value: 6.8, min: 0, max: 16, unit: "GB", thresholds: [{ value: 8, color: "#22d3ee", label: "Low" }, { value: 12, color: "#f59e0b", label: "Medium" }, { value: 16, color: "#ef4444", label: "High" }] } },
  { title: "Goal Progress", data: { value: 78, min: 0, max: 100, unit: "% complete", thresholds: [{ value: 50, color: "#ef4444", label: "Behind" }, { value: 75, color: "#f59e0b", label: "On track" }, { value: 100, color: "#10b981", label: "Ahead" }] } },
];

// ── Timeline data ──
const timelineData = [
  { id: "1", date: "2024-12-18T09:00:00", title: "Build started", description: "CI pipeline triggered by push to main", status: "done" as const, icon: "fa-solid:hammer" },
  { id: "2", date: "2024-12-18T09:04:00", title: "Tests passed", description: "142 tests passed, 0 failed", status: "done" as const, icon: "fa-solid:check-circle" },
  { id: "3", date: "2024-12-18T09:08:00", title: "Docker image built", description: "Image pushed to registry: v1.4.2", status: "done" as const, icon: "fa-solid:fish" },
  { id: "4", date: "2024-12-18T09:12:00", title: "Deploying to staging", description: "Rolling update in progress", status: "active" as const, icon: "fa-solid:rocket" },
  { id: "5", date: "2024-12-18T09:20:00", title: "Production deploy", description: "Awaiting staging health check", status: "pending" as const, icon: "fa-solid:globe" },
];

// ── Filter data ──
const filterValues = ref<Record<string, unknown>>({});
const filterOptions = {
  filters: [
    { key: "status", label: "Status", type: "select" as const, options: ["Active", "Inactive", "Pending"] },
    { key: "role", label: "Role", type: "checkbox" as const, options: ["Admin", "Editor", "Viewer"] },
    { key: "name", label: "Name contains", type: "text" as const },
    { key: "joined", label: "Joined after", type: "date" as const },
    { key: "score", label: "Score range", type: "range" as const },
  ],
};
function onFilterChange(vals: Record<string, unknown>) { filterValues.value = vals; }
function onFilterApply(vals: Record<string, unknown>) { filterValues.value = vals; }

// ── Map data ──
const mapData = [
  { id: "us", label: "United States", value: 1240000, lat: 38, lng: -97, color: "#6366f1" },
  { id: "uk", label: "United Kingdom", value: 580000, lat: 51, lng: -1, color: "#22d3ee" },
  { id: "de", label: "Germany", value: 420000, lat: 51, lng: 10, color: "#10b981" },
  { id: "jp", label: "Japan", value: 380000, lat: 36, lng: 138, color: "#f59e0b" },
  { id: "au", label: "Australia", value: 210000, lat: -25, lng: 133, color: "#8b5cf6" },
  { id: "ca", label: "Canada", value: 195000, lat: 60, lng: -96, color: "#ec4899" },
];

// ── Usage code snippets ──
const chartCode = `<ChartWidget
  title="Monthly Sales"
  :options="{
    chartType: 'bar',
    xLabel: 'Month',
    yLabel: 'Units',
    legend: true
  }"
  :data="{
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ label: 'Sales', data: [65, 78, 91] }]
  }"
/>`;

const kpiCode = `<KPIWidget
  title="Monthly Revenue"
  :data="{
    value: 2840000,
    unit: 'USD',
    trend: 12.4,
    trendLabel: 'vs last month',
    icon: 'fa-solid:money-bill-wave',
    color: '#10b981'
  }"
/>`;

const tableCode = `<TableWidget
  title="Users"
  :options="{
    columns: [
      { key: 'name', label: 'Name', sortable: true },
      { key: 'email', label: 'Email' },
      { key: 'status', label: 'Status' }
    ],
    pagination: true,
    pageSize: 10,
    striped: true,
    searchable: true
  }"
  :data="users"
/>`;

const gaugeCode = `<GaugeWidget
  title="CPU Usage"
  :data="{
    value: 72,
    min: 0,
    max: 100,
    unit: '%',
    thresholds: [
      { value: 60, color: '#10b981', label: 'Normal' },
      { value: 80, color: '#f59e0b', label: 'High' },
      { value: 100, color: '#ef4444', label: 'Critical' }
    ]
  }"
/>`;

const timelineCode = `<TimelineWidget
  title="Pipeline"
  :data="[
    { id: '1', date: '2024-12-18', title: 'Build started', status: 'done', icon: 'fa-solid:hammer' },
    { id: '2', date: '2024-12-18', title: 'Tests passed', status: 'done', icon: 'fa-solid:check-circle' },
    { id: '3', date: '2024-12-18', title: 'Deploying', status: 'active', icon: 'fa-solid:rocket' },
  ]"
/>`;

const filterCode = `<FilterWidget
  title="Filters"
  :options="{
    filters: [
      { key: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] },
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'joined', label: 'Joined after', type: 'date' },
      { key: 'score', label: 'Score', type: 'range' }
    ]
  }"
  @apply="onApply"
  @change="onChange"
/>`;

const mapCode = `<MapWidget
  title="Revenue by Region"
  :data="[
    { id: 'us', label: 'United States', value: 1240000, lat: 38, lng: -97, color: '#6366f1' },
    { id: 'uk', label: 'United Kingdom', value: 580000, lat: 51, lng: -1, color: '#22d3ee' },
  ]"
/>`;
</script>
