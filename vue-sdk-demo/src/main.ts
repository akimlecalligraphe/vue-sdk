import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

import HomeView from "./views/HomeView.vue";
import ComponentsView from "./views/ComponentsView.vue";
import TemplatesView from "./views/TemplatesView.vue";
import DocsView from "./views/DocsView.vue";

import VueSdk from "@workspace/vue-sdk";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/components", component: ComponentsView },
    { path: "/templates/:id?", component: TemplatesView },
    { path: "/docs", component: DocsView },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.use(VueSdk);
app.mount("#app");
