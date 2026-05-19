<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  icon: string;
  width?: number;
  height?: number;
  customClass?: string;
}>();

const iconMap: Record<string, string> = {
  "📊": "fa-solid:chart-bar",
  "📈": "fa-solid:chart-line",
  "📋": "fa-solid:clipboard-list",
  "🎯": "fa-solid:bullseye",
  "🕐": "fa-solid:clock",
  "🔍": "fa-solid:magnifying-glass",
  "🗺️": "fa-solid:map",
  "🚀": "fa-solid:rocket",
  "✅": "fa-solid:check-circle",
  "💰": "fa-solid:money-bill-wave",
  "👤": "fa-solid:user",
  "↩️": "fa-solid:arrow-rotate-left",
  "⏱️": "fa-solid:stopwatch",
  "⭐": "fa-solid:star",
  "🐳": "fa-solid:fish",
  "🌐": "fa-solid:globe",
  "🏗️": "fa-solid:hammer",
  "🔬": "fa-solid:microscope",
  "🐛": "fa-solid:bug",
  "🔧": "fa-solid:wrench",
  "📝": "fa-solid:file-lines",
  "👥": "fa-solid:users",
  "💳": "fa-solid:credit-card",
  "📦": "fa-solid:box",
  "🚚": "fa-solid:truck",
  "⏳": "fa-solid:hourglass-half",
  "📡": "fa-solid:signal",
  "🌡️": "fa-solid:thermometer-half",
  "💾": "fa-solid:floppy-disk",
  "⚡": "fa-solid:bolt",
  "🛒": "fa-solid:shopping-cart",
  "🔒": "fa-solid:lock",
  "🎉": "fa-solid:gift",
  "🧩": "fa-solid:puzzle-piece",
  "⚙️": "fa-solid:cog",
  "🔌": "fa-solid:plug",
  "🎨": "fa-solid:palette",
  "🚨": "fa-solid:triangle-exclamation",
  "🤝": "fa-solid:handshake",
  "📅": "fa-solid:calendar-days",
  "📚": "fa-solid:book-open",
  "🔗": "fa-solid:link",
  "🏁": "fa-solid:flag-checkered",
  "🏃": "fa-solid:running",
};

const resolvedIcon = computed(() => {
  if (props.icon.includes(":")) return props.icon;
  return iconMap[props.icon] ?? null;
});
</script>

<template>
  <Icon
    v-if="resolvedIcon"
    :icon="resolvedIcon"
    :width="width"
    :height="height"
    :class="customClass"
  />
  <span v-else :class="customClass">{{ icon }}</span>
</template>
