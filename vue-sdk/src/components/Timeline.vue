<template>
  <div class="sdk-widget sdk-timeline">
    <div v-if="title" class="sdk-widget-header">
      <h3 class="sdk-widget-title">{{ title }}</h3>
    </div>
    <div class="sdk-timeline-body">
      <div
        v-for="(item, i) in data"
        :key="item.id"
        class="sdk-timeline-item"
        :class="`sdk-timeline-item--${item.status ?? 'pending'}`"
      >
        <div class="sdk-timeline-connector">
          <div class="sdk-timeline-dot" :style="{ background: item.color ?? statusColor(item.status) }">
            <IconifyIcon v-if="item.icon" :icon="item.icon" width="18" height="18" customClass="sdk-timeline-dot-icon" />
            <span v-else class="sdk-timeline-dot-check">{{ statusIcon(item.status) }}</span>
          </div>
          <div v-if="i < data.length - 1" class="sdk-timeline-line" />
        </div>
        <div class="sdk-timeline-content">
          <div class="sdk-timeline-meta">
            <span class="sdk-timeline-date">{{ formatDate(item.date) }}</span>
            <span v-if="item.status" class="sdk-timeline-badge" :style="{ background: (item.color ?? statusColor(item.status)) + '22', color: item.color ?? statusColor(item.status) }">
              {{ item.status }}
            </span>
          </div>
          <div class="sdk-timeline-title">{{ item.title }}</div>
          <p v-if="item.description" class="sdk-timeline-desc">{{ item.description }}</p>
        </div>
      </div>
      <div v-if="!data.length" class="sdk-empty">
        <IconifyIcon icon="fa-solid:clock" width="32" height="32" customClass="sdk-empty-icon" />
        <p>No timeline events</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconifyIcon from "./IconifyIcon.vue";

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description?: string;
  status?: "done" | "active" | "pending" | "error";
  icon?: string;
  color?: string;
}

defineProps<{
  title?: string;
  data: TimelineItem[];
}>();

function statusColor(status?: string): string {
  const map: Record<string, string> = { done: "#10b981", active: "#6366f1", pending: "#9ca3af", error: "#ef4444" };
  return map[status ?? "pending"] ?? "#9ca3af";
}

function statusIcon(status?: string): string {
  const map: Record<string, string> = { done: "✓", active: "●", pending: "○", error: "✕" };
  return map[status ?? "pending"] ?? "○";
}

function formatDate(d: string): string {
  try { return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); }
  catch { return d; }
}
</script>
