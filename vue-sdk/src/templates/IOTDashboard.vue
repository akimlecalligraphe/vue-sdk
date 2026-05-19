<template>
  <div class="sdk-template sdk-template-iot">
    <header class="sdk-template-header">
      <div>
        <h1 class="sdk-template-title">IoT Dashboard</h1>
        <p class="sdk-template-subtitle">Real-time sensor monitoring & device health</p>
      </div>
      <div class="sdk-template-live-badge">
        <span class="sdk-live-dot" />
        Live
      </div>
    </header>

    <div class="sdk-template-kpi-row">
      <KPIWidget v-for="kpi in kpis" :key="kpi.id" :title="kpi.title" :data="kpi.data" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--3">
      <GaugeWidget title="Temperature (°C)" :data="tempGauge" />
      <GaugeWidget title="Humidity (%)" :data="humidityGauge" />
      <GaugeWidget title="Power Usage (kW)" :data="powerGauge" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Temperature Over 24h" :options="{ chartType: 'line', xLabel: 'Hour', yLabel: '°C', legend: true }" :data="tempData" />
      <ChartWidget title="Network Traffic (Mbps)" :options="{ chartType: 'line', xLabel: 'Hour', yLabel: 'Mbps' }" :data="networkData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <TableWidget title="Device Status" :options="deviceTableOptions" :data="devices" />
      <TimelineWidget title="System Alerts" :data="alerts" />
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
  { id: "devices", title: "Active Devices", data: { value: 2847, trend: 3.2, trendLabel: "vs yesterday", icon: "fa-solid:signal", color: "#22d3ee" } },
  { id: "alerts", title: "Active Alerts", data: { value: 7, trend: -41.7, trendLabel: "vs yesterday", icon: "fa-solid:triangle-exclamation", color: "#ef4444" } },
  { id: "uptime", title: "System Uptime", data: { value: 99.94, unit: "%", icon: "fa-solid:check-circle", color: "#10b981" } },
  { id: "datarate", title: "Data Rate", data: { value: 4.2, unit: "GB/h", trend: 8.3, trendLabel: "vs avg", icon: "fa-solid:chart-bar", color: "#6366f1" } },
];

const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const tempGauge = {
  value: 24.8,
  min: 0,
  max: 50,
  unit: "°C",
  thresholds: [
    { value: 20, color: "#22d3ee", label: "Cold" },
    { value: 30, color: "#10b981", label: "Normal" },
    { value: 40, color: "#f59e0b", label: "Warm" },
    { value: 50, color: "#ef4444", label: "Hot" },
  ],
};

const humidityGauge = {
  value: 62,
  min: 0,
  max: 100,
  unit: "%",
  thresholds: [
    { value: 30, color: "#f59e0b", label: "Dry" },
    { value: 70, color: "#10b981", label: "Optimal" },
    { value: 100, color: "#6366f1", label: "Humid" },
  ],
};

const powerGauge = {
  value: 42.6,
  min: 0,
  max: 100,
  unit: "kW",
  thresholds: [
    { value: 50, color: "#10b981", label: "Normal" },
    { value: 75, color: "#f59e0b", label: "High" },
    { value: 100, color: "#ef4444", label: "Critical" },
  ],
};

const tempData = {
  labels: hours,
  datasets: [
    { label: "Zone A", data: [22.1, 22.4, 22.2, 22.0, 21.8, 21.9, 22.3, 23.1, 24.2, 24.8, 25.1, 25.4, 25.2, 24.8, 24.6, 24.9, 25.2, 25.0, 24.7, 24.3, 23.9, 23.5, 23.2, 22.8], fill: false },
    { label: "Zone B", data: [20.8, 21.0, 20.9, 20.7, 20.5, 20.6, 21.0, 21.8, 22.9, 23.5, 23.8, 24.1, 23.9, 23.5, 23.3, 23.6, 23.9, 23.7, 23.4, 23.0, 22.6, 22.2, 21.9, 21.5], fill: false },
  ],
};

const networkData = {
  labels: hours,
  datasets: [{ label: "Mbps", data: [12, 8, 6, 5, 4, 6, 18, 42, 68, 82, 78, 71, 85, 89, 76, 72, 68, 74, 81, 88, 72, 54, 38, 22], fill: true }],
};

const deviceTableOptions = {
  columns: [
    { key: "device", label: "Device", sortable: true },
    { key: "type", label: "Type" },
    { key: "location", label: "Location" },
    { key: "status", label: "Status", sortable: true },
    { key: "lastSeen", label: "Last Seen" },
    { key: "battery", label: "Battery" },
  ],
  pagination: true, pageSize: 6, striped: true, searchable: true,
};

const devices = [
  { device: "Sensor-A01", type: "Temperature", location: "Server Room", status: "Online", lastSeen: "Now", battery: "100%" },
  { device: "Sensor-A02", type: "Humidity", location: "Server Room", status: "Online", lastSeen: "Now", battery: "87%" },
  { device: "Sensor-B01", type: "Motion", location: "Lobby", status: "Online", lastSeen: "2s ago", battery: "64%" },
  { device: "Sensor-C04", type: "Power", location: "Generator Room", status: "Warning", lastSeen: "8s ago", battery: "100%" },
  { device: "Sensor-D02", type: "Air Quality", location: "Office Floor 2", status: "Online", lastSeen: "1s ago", battery: "42%" },
  { device: "Sensor-E01", type: "Gas Leak", location: "Kitchen", status: "Offline", lastSeen: "4h ago", battery: "12%" },
  { device: "Gateway-01", type: "Gateway", location: "Data Center", status: "Online", lastSeen: "Now", battery: "N/A" },
];

const alerts = [
  { id: "a1", date: "2024-12-18T14:28:00", title: "High power consumption", description: "Generator Room power draw at 85% capacity", status: "error" as const, icon: "fa-solid:bolt" },
  { id: "a2", date: "2024-12-18T12:45:00", title: "Sensor-E01 offline", description: "Kitchen gas leak sensor lost connectivity", status: "error" as const, icon: "fa-solid:signal" },
  { id: "a3", date: "2024-12-18T10:12:00", title: "Temperature spike resolved", description: "Zone B returned to normal range (< 26°C)", status: "done" as const, icon: "fa-solid:thermometer-half" },
  { id: "a4", date: "2024-12-18T08:30:00", title: "System backup completed", description: "All device configs backed up successfully", status: "done" as const, icon: "fa-solid:floppy-disk" },
  { id: "a5", date: "2024-12-19T00:00:00", title: "Scheduled maintenance", description: "Gateway-01 firmware update pending", status: "pending" as const, icon: "fa-solid:wrench" },
];
</script>
