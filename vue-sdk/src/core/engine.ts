import type { App, Component } from "vue";

export type WidgetType =
  | "chart"
  | "kpi"
  | "table"
  | "map"
  | "timeline"
  | "gauge"
  | "filter";

export interface WidgetConfig {
  id: string;
  type: WidgetType;
  title?: string;
  options?: Record<string, unknown>;
  data?: unknown;
  dataSource?: string;
}

export interface DashboardConfig {
  id: string;
  title?: string;
  widgets: WidgetConfig[];
  layout?: "grid" | "flex";
  columns?: number;
}

export interface WidgetLifecycle {
  onMount?: (config: WidgetConfig) => void;
  onUpdate?: (config: WidgetConfig, prev: WidgetConfig) => void;
  onUnmount?: (config: WidgetConfig) => void;
}

const widgetRegistry = new Map<string, Component>();
const lifecycleHooks = new Map<string, WidgetLifecycle>();

export function registerWidget(type: string, component: Component, lifecycle?: WidgetLifecycle): void {
  widgetRegistry.set(type, component);
  if (lifecycle) lifecycleHooks.set(type, lifecycle);
}

export function getWidget(type: string): Component | undefined {
  return widgetRegistry.get(type);
}

export function getLifecycle(type: string): WidgetLifecycle | undefined {
  return lifecycleHooks.get(type);
}

export function parseWidgetConfig(json: string | Record<string, unknown>): WidgetConfig {
  const raw = typeof json === "string" ? JSON.parse(json) : json;
  if (!raw.id || !raw.type) throw new Error("Widget config requires 'id' and 'type' fields.");
  return raw as WidgetConfig;
}

export function parseDashboardConfig(json: string | Record<string, unknown>): DashboardConfig {
  const raw = typeof json === "string" ? JSON.parse(json) : json;
  if (!raw.id || !Array.isArray(raw.widgets)) throw new Error("Dashboard config requires 'id' and 'widgets' array.");
  return raw as DashboardConfig;
}

export interface VueSdkPlugin {
  install(app: App): void;
}

export function createVueSdk(): VueSdkPlugin {
  return {
    install(app: App) {
      app.config.globalProperties.$vueSdk = {
        registerWidget,
        getWidget,
        parseWidgetConfig,
        parseDashboardConfig,
      };
    },
  };
}
