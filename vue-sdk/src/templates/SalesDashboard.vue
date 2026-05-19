<template>
  <div class="sdk-template sdk-template-sales">
    <header class="sdk-template-header">
      <div>
        <h1 class="sdk-template-title">Sales Dashboard</h1>
        <p class="sdk-template-subtitle">Revenue, pipeline & performance overview</p>
      </div>
      <FilterWidget title="Filters" :options="filterOptions" @apply="onFilter" />
    </header>

    <div class="sdk-template-kpi-row">
      <KPIWidget v-for="kpi in kpis" :key="kpi.id" :title="kpi.title" :data="kpi.data" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Monthly Revenue" :options="{ chartType: 'bar', xLabel: 'Month', yLabel: 'Revenue ($)' }" :data="revenueData" />
      <ChartWidget title="Revenue by Channel" :options="{ chartType: 'doughnut', legend: true }" :data="channelData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Conversion Rate" :options="{ chartType: 'line', xLabel: 'Week', yLabel: '%' }" :data="conversionData" />
      <TableWidget title="Top Deals" :options="dealsTableOptions" :data="topDeals" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <GaugeWidget title="Quota Attainment" :data="quotaGauge" />
      <TimelineWidget title="Recent Activity" :data="timeline" />
    </div>
  </div>
</template>

<script setup lang="ts">
import KPIWidget from "../components/KPI.vue";
import ChartWidget from "../components/Chart.vue";
import TableWidget from "../components/Table.vue";
import GaugeWidget from "../components/Gauge.vue";
import TimelineWidget from "../components/Timeline.vue";
import FilterWidget from "../components/Filter.vue";

const kpis = [
  { id: "rev", title: "Total Revenue", data: { value: 2840000, unit: "USD", trend: 12.4, trendLabel: "vs last month", icon: "fa-solid:money-bill-wave", color: "#10b981" } },
  { id: "deals", title: "Deals Closed", data: { value: 148, trend: 8.2, trendLabel: "vs last month", icon: "fa-solid:handshake", color: "#6366f1" } },
  { id: "pipeline", title: "Pipeline Value", data: { value: 6200000, unit: "USD", trend: -3.1, trendLabel: "vs last month", icon: "fa-solid:chart-line", color: "#f59e0b" } },
  { id: "aov", title: "Avg Order Value", data: { value: 19189, unit: "USD", trend: 4.7, trendLabel: "vs last month", icon: "fa-solid:bullseye", color: "#22d3ee" } },
];

const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    { label: "2024", data: [180000, 220000, 195000, 260000, 310000, 280000, 340000, 360000, 290000, 410000, 380000, 450000] },
    { label: "2023", data: [150000, 180000, 160000, 210000, 250000, 230000, 280000, 300000, 240000, 340000, 310000, 380000] },
  ],
};

const channelData = {
  labels: ["Direct", "Online", "Partners", "Referral", "Events"],
  datasets: [{ data: [35, 28, 18, 12, 7] }],
};

const conversionData = {
  labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
  datasets: [{ label: "Conversion Rate", data: [3.2, 4.1, 3.8, 5.2, 4.7, 6.1, 5.8, 6.4], fill: true }],
};

const dealsTableOptions = {
  columns: [
    { key: "company", label: "Company", sortable: true },
    { key: "value", label: "Value", sortable: true },
    { key: "stage", label: "Stage" },
    { key: "rep", label: "Sales Rep" },
  ],
  pagination: true,
  pageSize: 5,
  striped: true,
  searchable: true,
};

const topDeals = [
  { company: "Acme Corp", value: "$420K", stage: "Closed Won", rep: "Sarah J." },
  { company: "Globex Inc", value: "$380K", stage: "Negotiation", rep: "Mike R." },
  { company: "Initech", value: "$290K", stage: "Proposal", rep: "Lisa M." },
  { company: "Umbrella Co", value: "$250K", stage: "Closed Won", rep: "Tom S." },
  { company: "Oscorp", value: "$210K", stage: "Discovery", rep: "Anna K." },
  { company: "Stark Industries", value: "$195K", stage: "Proposal", rep: "James W." },
  { company: "Wayne Enterprises", value: "$185K", stage: "Negotiation", rep: "Sarah J." },
];

const quotaGauge = {
  value: 78,
  min: 0,
  max: 100,
  unit: "% attained",
  thresholds: [
    { value: 50, color: "#ef4444", label: "Below target" },
    { value: 75, color: "#f59e0b", label: "On track" },
    { value: 100, color: "#10b981", label: "Exceeded" },
  ],
};

const timeline = [
  { id: "1", date: "2024-12-18", title: "Q4 target exceeded", description: "Team surpassed $2.8M target by 12%", status: "done" as const, icon: "fa-solid:gift" },
  { id: "2", date: "2024-12-15", title: "Enterprise deal closed", description: "Acme Corp — $420K ARR signed", status: "done" as const, icon: "fa-solid:check-circle" },
  { id: "3", date: "2024-12-12", title: "Pipeline review meeting", description: "Q1 pipeline alignment with leadership", status: "done" as const, icon: "fa-solid:clipboard-list" },
  { id: "4", date: "2024-12-20", title: "Sales kick-off planning", description: "2025 strategy and territory planning", status: "active" as const, icon: "fa-solid:rocket" },
  { id: "5", date: "2025-01-08", title: "Q1 kickoff", description: "All-hands sales kickoff event", status: "pending" as const, icon: "fa-solid:calendar-days" },
];

const filterOptions = {
  filters: [
    { key: "period", label: "Period", type: "select" as const, options: ["This Month", "Last Month", "Q4 2024", "YTD", "Custom"] },
    { key: "region", label: "Region", type: "select" as const, options: ["All", "North America", "EMEA", "APAC", "LATAM"] },
    { key: "rep", label: "Sales Rep", type: "text" as const },
  ],
};

function onFilter(vals: Record<string, unknown>) {
  console.log("Sales filter applied:", vals);
}
</script>
