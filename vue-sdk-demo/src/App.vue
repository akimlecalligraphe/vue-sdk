<template>
  <div class="app">
    <nav class="app-nav">
      <div class="app-nav-inner">
        <RouterLink to="/" class="app-logo">
          <span class="app-logo-icon">◈</span>
          <span class="app-logo-text">Dyndash</span>
          <span class="app-logo-badge">v0.1</span>
        </RouterLink>
        <div class="app-nav-links">
          <RouterLink to="/components" class="app-nav-link">Components</RouterLink>
          <RouterLink to="/templates" class="app-nav-link">Templates</RouterLink>
          <RouterLink to="/docs" class="app-nav-link">Docs</RouterLink>
          <!-- <a href="https://github.com" target="_blank" class="app-nav-link app-nav-link--ghost">GitHub ↗</a> -->
        </div>
      </div>
    </nav>
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
