<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">Templates</h1>
      <p class="page-subtitle">Ready-to-use dashboard templates. Each is a Vue component you can copy and customize.</p>
    </div>

    <div class="templates-layout">
      <!-- Sidebar Navigation -->
      <nav class="templates-sidebar">
        <div class="templates-sidebar-title">Dashboards</div>
        <button
          v-for="t in templates"
          :key="t.id"
          class="template-nav-btn"
          :class="{ active: activeTemplate === t.id }"
          @click="activeTemplate = t.id"
        >
          <span class="template-nav-icon"><IconifyIcon :icon="t.icon" width="16" height="16" /></span>
          {{ t.label }}
        </button>
      </nav>

      <!-- Template Content -->
      <div class="templates-content">
        <component :is="activeComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import IconifyIcon from "../components/IconifyIcon.vue";
import { SalesDashboard, ProjectDashboard, HRDashboard, AnalyticsDashboard, EcommerceDashboard, IOTDashboard } from "@workspace/vue-sdk";

const templates = [
  { id: "sales", label: "Sales", icon: "fa-solid:money-bill-wave" },
  { id: "project", label: "Project", icon: "fa-solid:clipboard-list" },
  { id: "hr", label: "HR", icon: "fa-solid:users" },
  { id: "analytics", label: "Analytics", icon: "fa-solid:chart-bar" },
  { id: "ecommerce", label: "E-Commerce", icon: "fa-solid:shopping-cart" },
  { id: "iot", label: "IoT", icon: "fa-solid:signal" },
];

const activeTemplate = ref("sales");

const componentMap: Record<string, unknown> = {
  sales: SalesDashboard,
  project: ProjectDashboard,
  hr: HRDashboard,
  analytics: AnalyticsDashboard,
  ecommerce: EcommerceDashboard,
  iot: IOTDashboard,
};

const activeComponent = computed(() => componentMap[activeTemplate.value]);
</script>
