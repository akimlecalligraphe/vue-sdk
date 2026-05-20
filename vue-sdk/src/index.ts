import './style.css';
import type { App } from "vue";
import { createVueSdk, registerWidget } from "./core/engine";

import ChartWidget from "./components/Chart.vue";
import KPIWidget from "./components/KPI.vue";
import TableWidget from "./components/Table.vue";
import GaugeWidget from "./components/Gauge.vue";
import TimelineWidget from "./components/Timeline.vue";
import FilterWidget from "./components/Filter.vue";
import MapWidget from "./components/MapWidget.vue";
import Dashboard from "./components/Dashboard.vue";

export * from "./core/engine";
export * from "./data/index";
export * from "./validator/index";
export * from "./components/index";
export * from "./templates/index";

export const VueSdk = {
  install(app: App) {
    registerWidget("chart", ChartWidget);
    registerWidget("kpi", KPIWidget);
    registerWidget("table", TableWidget);
    registerWidget("gauge", GaugeWidget);
    registerWidget("timeline", TimelineWidget);
    registerWidget("filter", FilterWidget);
    registerWidget("map", MapWidget);

    app.component("ChartWidget", ChartWidget);
    app.component("KPIWidget", KPIWidget);
    app.component("TableWidget", TableWidget);
    app.component("GaugeWidget", GaugeWidget);
    app.component("TimelineWidget", TimelineWidget);
    app.component("FilterWidget", FilterWidget);
    app.component("MapWidget", MapWidget);
    app.component("Dashboard", Dashboard);

    const sdkPlugin = createVueSdk();
    sdkPlugin.install(app);
  },
};

export default VueSdk;
