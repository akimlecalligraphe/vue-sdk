import { App, Component } from 'vue';
export type WidgetType = "chart" | "kpi" | "table" | "map" | "timeline" | "gauge" | "filter";
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
export declare function registerWidget(type: string, component: Component, lifecycle?: WidgetLifecycle): void;
export declare function getWidget(type: string): Component | undefined;
export declare function getLifecycle(type: string): WidgetLifecycle | undefined;
export declare function parseWidgetConfig(json: string | Record<string, unknown>): WidgetConfig;
export declare function parseDashboardConfig(json: string | Record<string, unknown>): DashboardConfig;
export interface VueSdkPlugin {
    install(app: App): void;
}
export declare function createVueSdk(): VueSdkPlugin;
