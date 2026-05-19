<template>
  <div class="sdk-template sdk-template-project">
    <header class="sdk-template-header">
      <div>
        <h1 class="sdk-template-title">Project Dashboard</h1>
        <p class="sdk-template-subtitle">Sprint tracking, team velocity & delivery health</p>
      </div>
    </header>

    <div class="sdk-template-kpi-row">
      <KPIWidget v-for="kpi in kpis" :key="kpi.id" :title="kpi.title" :data="kpi.data" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Sprint Velocity" :options="{ chartType: 'bar', xLabel: 'Sprint', yLabel: 'Story Points' }" :data="velocityData" />
      <ChartWidget title="Task Status Breakdown" :options="{ chartType: 'doughnut', legend: true }" :data="statusData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <TimelineWidget title="Project Milestones" :data="milestones" />
      <TableWidget title="Active Tasks" :options="taskTableOptions" :data="tasks" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <GaugeWidget title="Sprint Progress" :data="sprintGauge" />
      <ChartWidget title="Burndown Chart" :options="{ chartType: 'line', xLabel: 'Day', yLabel: 'Remaining Points' }" :data="burndownData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import KPIWidget from "../components/KPI.vue";
import ChartWidget from "../components/Chart.vue";
import TableWidget from "../components/Table.vue";
import GaugeWidget from "../components/Gauge.vue";
import TimelineWidget from "../components/Timeline.vue";

const kpis = [
  { id: "tasks", title: "Open Tasks", data: { value: 47, trend: -8.5, trendLabel: "vs last sprint", icon: "fa-solid:clipboard-list", color: "#6366f1" } },
  { id: "velocity", title: "Sprint Velocity", data: { value: 82, unit: "pts", trend: 14.2, trendLabel: "vs avg", icon: "fa-solid:bolt", color: "#10b981" } },
  { id: "bugs", title: "Open Bugs", data: { value: 12, trend: -25, trendLabel: "vs last sprint", icon: "fa-solid:bug", color: "#ef4444" } },
  { id: "dod", title: "Days to Deadline", data: { value: 8, unit: "days", icon: "fa-solid:stopwatch", color: "#f59e0b" } },
];

const velocityData = {
  labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
  datasets: [
    { label: "Completed", data: [65, 72, 68, 80, 75, 88, 76, 82] },
    { label: "Planned", data: [80, 80, 80, 85, 80, 90, 85, 85] },
  ],
};

const statusData = {
  labels: ["Done", "In Progress", "In Review", "Blocked", "To Do"],
  datasets: [{ data: [42, 18, 11, 5, 24] }],
};

const burndownData = {
  labels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
  datasets: [
    { label: "Actual", data: [85, 78, 72, 65, 58, 51, 44, 38, 25, 12], fill: false },
    { label: "Ideal", data: [85, 76.5, 68, 59.5, 51, 42.5, 34, 25.5, 17, 8.5], fill: false },
  ],
};

const milestones = [
  { id: "1", date: "2024-12-01", title: "Sprint 7 started", description: "84 story points scoped", status: "done" as const, icon: "fa-solid:flag-checkered" },
  { id: "2", date: "2024-12-08", title: "Alpha release", description: "Internal testing complete", status: "done" as const, icon: "fa-solid:microscope" },
  { id: "3", date: "2024-12-15", title: "Beta release", description: "External beta users onboarded", status: "done" as const, icon: "fa-solid:bullseye" },
  { id: "4", date: "2024-12-20", title: "Sprint 7 ends", description: "Demo & retrospective", status: "active" as const, icon: "fa-solid:running" },
  { id: "5", date: "2025-01-06", title: "v1.0 Launch", description: "Public release", status: "pending" as const, icon: "fa-solid:rocket" },
];

const taskTableOptions = {
  columns: [
    { key: "task", label: "Task", sortable: true },
    { key: "assignee", label: "Assignee" },
    { key: "priority", label: "Priority", sortable: true },
    { key: "status", label: "Status" },
    { key: "points", label: "Pts", sortable: true },
  ],
  pagination: true, pageSize: 5, striped: true, searchable: true,
};

const tasks = [
  { task: "API authentication module", assignee: "Alice", priority: "High", status: "In Progress", points: 8 },
  { task: "Dashboard layout redesign", assignee: "Bob", priority: "Medium", status: "In Review", points: 5 },
  { task: "Export to CSV feature", assignee: "Carol", priority: "Low", status: "To Do", points: 3 },
  { task: "Fix login edge case bug", assignee: "Dave", priority: "High", status: "Blocked", points: 2 },
  { task: "Write unit tests for core", assignee: "Alice", priority: "Medium", status: "In Progress", points: 5 },
  { task: "Performance profiling", assignee: "Eve", priority: "Medium", status: "To Do", points: 8 },
  { task: "Update API docs", assignee: "Bob", priority: "Low", status: "To Do", points: 2 },
];

const sprintGauge = {
  value: 62,
  min: 0,
  max: 100,
  unit: "% complete",
  thresholds: [
    { value: 40, color: "#ef4444", label: "Behind" },
    { value: 70, color: "#f59e0b", label: "On track" },
    { value: 100, color: "#10b981", label: "Ahead" },
  ],
};
</script>
