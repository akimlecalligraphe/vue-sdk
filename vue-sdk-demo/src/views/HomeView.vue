<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-eyebrow">◈ Open Source · Vue 3 · TypeScript</div>
      <h1 class="hero-title">
        Start building<br>
        with <span class="accent">Dyndash</span>
      </h1>
      <p class="hero-subtitle">
        A complete Vue.js SDK with modular widgets, ready-to-use dashboard templates,
        a JSON rendering engine, and built-in validation.
      </p>
      <div class="hero-actions">
        <RouterLink to="/components" class="hero-btn hero-btn-primary">Explore Components →</RouterLink>
        <RouterLink to="/templates" class="hero-btn hero-btn-ghost">View Templates</RouterLink>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <h2 class="features-title">Everything you need to ship dashboards</h2>
      <div class="features-grid">
        <div v-for="f in features" :key="f.title" class="feature-card">
          <div class="feature-icon"><IconifyIcon :icon="f.icon" width="24" height="24" /></div>
          <div class="feature-title">{{ f.title }}</div>
          <p class="feature-desc">{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Widget Preview -->
    <section class="widget-preview">
      <h2 class="section-title">7 widgets, batteries included</h2>
      <div class="preview-grid">
        <div style="height: 200px">
          <div class="preview-item-label">KPI Widget</div>
          <KPIWidget title="Monthly Revenue" :data="kpiData" />
        </div>
        <div>
          <div class="preview-item-label">Chart Widget — Bar</div>
          <ChartWidget title="Sales by Month" :options="{ chartType: 'bar' }" :data="barData" />
        </div>
        <div>
          <div class="preview-item-label">Gauge Widget</div>
          <GaugeWidget title="CPU Usage" :data="gaugeData" />
        </div>
        <div style="margin-top: 2rem">
          <div class="preview-item-label">Chart Widget — Doughnut</div>
          <ChartWidget title="Revenue by Channel" :options="{ chartType: 'doughnut', legend: true }" :data="doughnutData" />
        </div>
      </div>

      <div style="margin-top: 3.5rem">
        <div class="preview-item-label" style="margin-bottom: 8px">Timeline Widget</div>
        <TimelineWidget title="Recent Events" :data="timelineData" />
      </div>
    </section>

    <!-- CTA -->
    <div style="text-align:center; padding: 3rem 2rem; border-top: 1px solid var(--border); background: var(--surface-0)">
      <h2 style="font-size:1.5rem; font-weight:800; margin:0 0 8px; letter-spacing:-.03em">Ready to build?</h2>
      <p style="color:var(--text-muted); margin:0 0 1.5rem; font-size:.95rem">Browse all widgets and templates, or check the docs.</p>
      <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap">
        <RouterLink to="/templates" class="hero-btn hero-btn-primary">View Templates →</RouterLink>
        <RouterLink to="/docs" class="hero-btn hero-btn-ghost">Read the Docs</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import IconifyIcon from "../components/IconifyIcon.vue";
import { KPIWidget, ChartWidget, GaugeWidget, TimelineWidget } from "@workspace/vue-sdk";

const features = [
  { icon: "fa-solid:puzzle-piece", title: "7 Modular Widgets", desc: "Chart, KPI, Table, Map, Timeline, Gauge, Filter — each independently configurable via props." },
  { icon: "fa-solid:clipboard-list", title: "6 Dashboard Templates", desc: "Sales, Project, HR, Analytics, E-Commerce, IoT — full dashboards with realistic sample data." },
  { icon: "fa-solid:cog", title: "JSON Rendering Engine", desc: "Define entire dashboards as JSON configs. The core engine parses, validates, and renders them automatically." },
  { icon: "fa-solid:check-circle", title: "AJV Validation", desc: "Every widget config is validated against JSON schemas using ajv with clear, developer-friendly error messages." },
  { icon: "fa-solid:plug", title: "Data Source Layer", desc: "Connect to REST or GraphQL APIs with registerDataSource() and getData(). Built-in caching support." },
  { icon: "fa-solid:palette", title: "Vue 3 + TypeScript", desc: "Composition API throughout. Full TypeScript types for all props, configs, and data structures." },
];

const kpiData = { value: 2840000, unit: "USD", trend: 12.4, trendLabel: "vs last month", icon: "fa-solid:money-bill-wave", color: "#6366f1" };

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{ label: "Revenue", data: [42000, 58000, 51000, 74000, 68000, 89000] }],
};

const doughnutData = {
  labels: ["Direct", "Organic", "Paid", "Referral"],
  datasets: [{ data: [35, 28, 22, 15] }],
};

const gaugeData = {
  value: 72,
  min: 0,
  max: 100,
  unit: "%",
  thresholds: [
    { value: 60, color: "#10b981", label: "Normal" },
    { value: 85, color: "#f59e0b", label: "High" },
    { value: 100, color: "#ef4444", label: "Critical" },
  ],
};

const timelineData = [
  { id: "1", date: "2024-12-18", title: "v0.1 shipped", description: "Initial SDK release with 7 widgets", status: "done" as const, icon: "fa-solid:rocket" },
  { id: "2", date: "2024-12-20", title: "6 templates added", description: "Sales, Project, HR, Analytics, Ecommerce, IoT", status: "done" as const, icon: "fa-solid:clipboard-list" },
  { id: "3", date: "2025-01-05", title: "v0.2 — Map widget", description: "Full Leaflet integration + clustering", status: "active" as const, icon: "fa-solid:map" },
  { id: "4", date: "2025-01-20", title: "v0.3 — Docs site", description: "VitePress-powered interactive documentation", status: "pending" as const, icon: "fa-solid:book-open" },
];
</script>
