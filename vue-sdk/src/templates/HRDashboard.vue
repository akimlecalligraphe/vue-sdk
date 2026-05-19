<template>
  <div class="sdk-template sdk-template-hr">
    <header class="sdk-template-header">
      <div>
        <h1 class="sdk-template-title">HR Dashboard</h1>
        <p class="sdk-template-subtitle">Headcount, hiring pipeline & workforce analytics</p>
      </div>
    </header>

    <div class="sdk-template-kpi-row">
      <KPIWidget v-for="kpi in kpis" :key="kpi.id" :title="kpi.title" :data="kpi.data" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Headcount by Department" :options="{ chartType: 'bar', xLabel: 'Department', yLabel: 'Employees' }" :data="headcountData" />
      <ChartWidget title="Hiring Funnel" :options="{ chartType: 'bar', xLabel: 'Stage', yLabel: 'Candidates' }" :data="funnelData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Monthly New Hires vs Attrition" :options="{ chartType: 'line', xLabel: 'Month', yLabel: 'People' }" :data="hiresData" />
      <ChartWidget title="Diversity Breakdown" :options="{ chartType: 'pie', legend: true }" :data="diversityData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <GaugeWidget title="Employee Satisfaction" :data="satisfactionGauge" />
      <TableWidget title="Open Positions" :options="rolesTableOptions" :data="openRoles" />
    </div>
  </div>
</template>

<script setup lang="ts">
import KPIWidget from "../components/KPI.vue";
import ChartWidget from "../components/Chart.vue";
import TableWidget from "../components/Table.vue";
import GaugeWidget from "../components/Gauge.vue";

const kpis = [
  { id: "headcount", title: "Total Headcount", data: { value: 1248, trend: 6.2, trendLabel: "YoY growth", icon: "fa-solid:users", color: "#6366f1" } },
  { id: "openreqs", title: "Open Requisitions", data: { value: 34, trend: -11.7, trendLabel: "vs last quarter", icon: "fa-solid:file-lines", color: "#f59e0b" } },
  { id: "ttf", title: "Avg Time to Fill", data: { value: 28, unit: "days", trend: -14.3, trendLabel: "vs last quarter", icon: "fa-solid:stopwatch", color: "#22d3ee" } },
  { id: "retention", title: "Retention Rate", data: { value: 94.2, unit: "%", trend: 1.8, trendLabel: "vs last year", icon: "fa-solid:lock", color: "#10b981" } },
];

const headcountData = {
  labels: ["Engineering", "Sales", "Marketing", "Product", "Operations", "Finance", "HR", "Legal"],
  datasets: [{ label: "Headcount", data: [420, 310, 185, 142, 98, 54, 28, 11] }],
};

const funnelData = {
  labels: ["Applied", "Screened", "Phone Interview", "Technical", "Final Round", "Offer", "Hired"],
  datasets: [{ label: "Candidates", data: [1840, 620, 280, 155, 72, 48, 34] }],
};

const hiresData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    { label: "New Hires", data: [22, 18, 31, 28, 35, 42, 38, 45, 29, 36, 41, 27], fill: false },
    { label: "Attrition", data: [8, 11, 9, 14, 10, 8, 12, 7, 9, 13, 8, 11], fill: false },
  ],
};

const diversityData = {
  labels: ["Prefer not to say", "Male", "Female", "Non-binary", "Other"],
  datasets: [{ data: [12, 48, 34, 4, 2] }],
};

const satisfactionGauge = {
  value: 7.8,
  min: 0,
  max: 10,
  unit: "/ 10 eNPS",
  thresholds: [
    { value: 5, color: "#ef4444", label: "Low" },
    { value: 7, color: "#f59e0b", label: "Moderate" },
    { value: 10, color: "#10b981", label: "High" },
  ],
};

const rolesTableOptions = {
  columns: [
    { key: "role", label: "Role", sortable: true },
    { key: "department", label: "Department", sortable: true },
    { key: "location", label: "Location" },
    { key: "level", label: "Level" },
    { key: "openDays", label: "Open (days)", sortable: true },
  ],
  pagination: true, pageSize: 5, striped: true, searchable: true,
};

const openRoles = [
  { role: "Senior Backend Engineer", department: "Engineering", location: "Remote", level: "IC5", openDays: 45 },
  { role: "Product Manager", department: "Product", location: "NYC", level: "L5", openDays: 31 },
  { role: "Account Executive", department: "Sales", location: "SF", level: "IC4", openDays: 18 },
  { role: "Data Analyst", department: "Finance", location: "Remote", level: "IC3", openDays: 22 },
  { role: "UX Designer", department: "Product", location: "NYC", level: "IC4", openDays: 38 },
  { role: "DevOps Engineer", department: "Engineering", location: "Remote", level: "IC4", openDays: 55 },
];
</script>
