<template>
  <div class="sdk-template sdk-template-ecommerce">
    <header class="sdk-template-header">
      <div>
        <h1 class="sdk-template-title">E-Commerce Dashboard</h1>
        <p class="sdk-template-subtitle">Orders, revenue & product performance</p>
      </div>
    </header>

    <div class="sdk-template-kpi-row">
      <KPIWidget v-for="kpi in kpis" :key="kpi.id" :title="kpi.title" :data="kpi.data" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <ChartWidget title="Revenue Over Time" :options="{ chartType: 'line', xLabel: 'Date', yLabel: 'Revenue ($)', legend: true }" :data="revenueData" />
      <ChartWidget title="Sales by Category" :options="{ chartType: 'doughnut', legend: true }" :data="categoryData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--3">
      <GaugeWidget title="Conversion Rate" :data="conversionGauge" />
      <GaugeWidget title="Cart Abandonment" :data="abandonGauge" />
      <ChartWidget title="Order Status" :options="{ chartType: 'pie', legend: true }" :data="orderStatusData" />
    </div>

    <div class="sdk-template-grid sdk-template-grid--2">
      <TableWidget title="Top Products" :options="productsTableOptions" :data="topProducts" />
      <TimelineWidget title="Recent Orders" :data="recentOrders" />
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
  { id: "gmv", title: "GMV (30d)", data: { value: 1840000, unit: "USD", trend: 23.7, trendLabel: "vs last month", icon: "fa-solid:shopping-cart", color: "#10b981" } },
  { id: "orders", title: "Total Orders", data: { value: 8420, trend: 18.2, trendLabel: "vs last month", icon: "fa-solid:box", color: "#6366f1" } },
  { id: "aov", title: "Average Order Value", data: { value: 218, unit: "USD", trend: 4.6, trendLabel: "vs last month", icon: "fa-solid:credit-card", color: "#22d3ee" } },
  { id: "refunds", title: "Refund Rate", data: { value: 2.1, unit: "%", trend: -0.8, trendLabel: "vs last month", icon: "fa-solid:arrow-rotate-left", color: "#f59e0b" } },
];

const revenueData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
  datasets: [
    { label: "This Period", data: [195000, 228000, 214000, 267000, 289000, 312000, 298000, 337000], fill: true },
    { label: "Last Period", data: [168000, 192000, 178000, 224000, 241000, 258000, 247000, 281000], fill: false },
  ],
};

const categoryData = {
  labels: ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty", "Toys"],
  datasets: [{ data: [32, 24, 16, 11, 8, 6, 3] }],
};

const conversionGauge = {
  value: 4.2,
  min: 0,
  max: 10,
  unit: "% CVR",
  thresholds: [
    { value: 2, color: "#ef4444", label: "Below avg" },
    { value: 4, color: "#f59e0b", label: "Industry avg" },
    { value: 10, color: "#10b981", label: "Above avg" },
  ],
};

const abandonGauge = {
  value: 68,
  min: 0,
  max: 100,
  unit: "% abandoned",
  thresholds: [
    { value: 60, color: "#10b981", label: "Good" },
    { value: 75, color: "#f59e0b", label: "Average" },
    { value: 100, color: "#ef4444", label: "High" },
  ],
};

const orderStatusData = {
  labels: ["Delivered", "Shipped", "Processing", "Pending", "Cancelled", "Refunded"],
  datasets: [{ data: [58, 18, 11, 8, 4, 1] }],
};

const productsTableOptions = {
  columns: [
    { key: "product", label: "Product", sortable: true },
    { key: "sku", label: "SKU" },
    { key: "revenue", label: "Revenue", sortable: true },
    { key: "units", label: "Units Sold", sortable: true },
    { key: "rating", label: "Rating" },
  ],
  pagination: true, pageSize: 5, striped: true, searchable: true,
};

const topProducts = [
  { product: "Wireless Headphones Pro", sku: "WHP-001", revenue: "$84,200", units: 421, rating: "4.8 / 5" },
  { product: "Smart Watch Series X", sku: "SWX-003", revenue: "$72,600", units: 218, rating: "4.6 / 5" },
  { product: "Ergonomic Chair", sku: "EGC-012", revenue: "$61,400", units: 143, rating: "4.7 / 5" },
  { product: "Mechanical Keyboard", sku: "MKB-008", revenue: "$48,900", units: 326, rating: "4.9 / 5" },
  { product: "4K Webcam", sku: "WBC-004", revenue: "$38,700", units: 258, rating: "4.5 / 5" },
  { product: "USB-C Hub 7-port", sku: "UCH-016", revenue: "$29,100", units: 485, rating: "4.4 / 5" },
];

const recentOrders = [
  { id: "o1", date: "2024-12-18T14:30:00", title: "Order #84210 — $342", description: "Wireless Headphones Pro × 2", status: "done" as const, icon: "fa-solid:box" },
  { id: "o2", date: "2024-12-18T12:15:00", title: "Order #84208 — $218", description: "Smart Watch Series X × 1", status: "done" as const, icon: "fa-solid:box" },
  { id: "o3", date: "2024-12-18T10:00:00", title: "Order #84204 — $695", description: "Ergonomic Chair × 1", status: "active" as const, icon: "fa-solid:truck" },
  { id: "o4", date: "2024-12-17T18:45:00", title: "Order #84196 — $149", description: "Mechanical Keyboard × 1", status: "active" as const, icon: "fa-solid:truck" },
  { id: "o5", date: "2024-12-17T14:20:00", title: "Order #84188 — $89", description: "USB-C Hub × 3", status: "pending" as const, icon: "fa-solid:hourglass-half" },
];
</script>
