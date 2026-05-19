# vue-sdk

> Librairie Vue 3 pour construire des dashboards dynamiques avec des widgets configurables.

[![npm version](https://img.shields.io/npm/v/vue-sdk)](https://www.npmjs.com/package/vue-sdk)
[![license](https://img.shields.io/npm/l/vue-sdk)](./LICENSE)

## Widgets disponibles

`ChartWidget` · `KPIWidget` · `TableWidget` · `GaugeWidget` · `TimelineWidget` · `FilterWidget` · `MapWidget` · `Dashboard`

---

## Installation

```bash
npm install vue-sdk vue chart.js vue-chartjs ajv
```

### Dépendances requises

| Package | Version |
|---|---|
| `vue` | `^3.5` |
| `chart.js` | `^4` |
| `vue-chartjs` | `^5` |
| `ajv` | `^8` |

---

## Démarrage rapide

### 1. Enregistrer le plugin

```ts
// main.ts
import { createApp } from 'vue'
import { VueSdk } from 'vue-sdk'
import App from './App.vue'

const app = createApp(App)
app.use(VueSdk) // enregistre tous les composants globalement
app.mount('#app')
```

Après installation, tous les widgets sont disponibles sans import supplémentaire dans vos templates.

### 2. Utiliser un widget

```vue
<script setup>
import { KPIWidget } from 'vue-sdk'
</script>

<template>
  <KPIWidget
    title="Ventes mensuelles"
    :data="{ value: 1200, unit: '€', trend: 8.4, trendLabel: 'vs mois dernier' }"
  />
</template>
```

### 3. Dashboard piloté par JSON

Définissez un dashboard entier en JSON, sans HTML :

```ts
import { Dashboard, parseDashboardConfig } from 'vue-sdk'

const config = parseDashboardConfig({
  id: 'mon-dashboard',
  title: 'Mon tableau de bord',
  columns: 2,
  widgets: [
    {
      id: 'w1', type: 'kpi', title: 'Ventes',
      data: { value: 1200, unit: '€' }
    },
    {
      id: 'w2', type: 'chart',
      options: { chartType: 'bar' },
      data: {
        labels: ['Jan', 'Fév', 'Mar'],
        datasets: [{ data: [1200, 1500, 1800] }]
      }
    }
  ]
})
```

```vue
<template>
  <Dashboard :config="config" />
</template>
```

---

## Widgets

### ChartWidget

Affiche des données sous forme graphique (barres, lignes, camembert, etc.).

```vue
<ChartWidget
  title="Évolution mensuelle"
  :options="{ type: 'bar', xKey: 'mois', yKey: 'ventes' }"
  :data="[
    { mois: 'Janvier', ventes: 1200 },
    { mois: 'Février', ventes: 1500 },
    { mois: 'Mars',    ventes: 1800 }
  ]"
/>
```

Types supportés : `bar` · `line` · `pie` · `doughnut` · `radar` · `polarArea`

---

### KPIWidget

Affiche un indicateur clé (chiffre, tendance, icône). Les valeurs ≥ 1 000 000 sont formatées `1.2M`, ≥ 1 000 sont formatées `1.2K`.

```vue
<KPIWidget
  title="Ventes mensuelles"
  :data="{ value: 1200, unit: '€', trend: 8.4, trendLabel: 'vs mois dernier', icon: 'fa-solid:money-bill-wave', color: '#6366f1' }"
/>
```

---

### TableWidget

Affiche des données tabulaires avec tri, recherche et pagination.

```vue
<TableWidget
  title="Ventes par mois"
  :options="{
    columns: [
      { key: 'mois',   label: 'Mois' },
      { key: 'ventes', label: 'Ventes (€)' }
    ],
    striped: true,
    searchable: true,
    pagination: true,
    pageSize: 10
  }"
  :data="[
    { mois: 'Janvier', ventes: 1200 },
    { mois: 'Février', ventes: 1500 }
  ]"
/>
```

---

### GaugeWidget

Affiche une valeur sous forme de jauge semi-circulaire SVG avec seuils de couleur.

```vue
<GaugeWidget
  title="Progression"
  :data="{
    value: 65, min: 0, max: 100, unit: '%',
    thresholds: [
      { value: 50,  color: '#ef4444', label: 'Bas' },
      { value: 75,  color: '#f59e0b', label: 'Moyen' },
      { value: 100, color: '#10b981', label: 'Élevé' }
    ]
  }"
/>
```

---

### TimelineWidget

Affiche une suite d'événements dans l'ordre chronologique.

```vue
<TimelineWidget
  title="Évolution du projet"
  :data="[
    { id: '1', date: 'Janvier 2024', title: 'Lancement',      status: 'done',   icon: 'fa-solid:rocket' },
    { id: '2', date: 'Mars 2024',    title: 'Mise en prod',   status: 'done',   icon: 'fa-solid:check-circle' },
    { id: '3', date: 'Juin 2024',    title: 'Nouvelles fonc', status: 'active', icon: 'fa-solid:bolt' }
  ]"
/>
```

Statuts disponibles : `done` · `active` · `pending` · `error`

---

### FilterWidget

Affiche des filtres interactifs et émet les valeurs sélectionnées.

```vue
<FilterWidget
  title="Filtres"
  :options="{
    filters: [
      { key: 'mois',   label: 'Mois',   type: 'select', values: ['Janvier', 'Février', 'Mars'] },
      { key: 'region', label: 'Région', type: 'select', values: ['Europe', 'Asie', 'Amérique'] }
    ]
  }"
  @change="(values) => console.log(values)"
  @apply="(values) => console.log(values)"
/>
```

Types de filtre : `select` · `text` · `date` · `range` · `checkbox`

---

### MapWidget

Affiche une carte avec des marqueurs dont la taille est proportionnelle à la valeur associée.

```vue
<MapWidget
  title="Ventes par région"
  :options="{ zoom: 5, center: { lat: 48.8566, lng: 2.3522 } }"
  :data="[
    { id: 'paris',   label: 'Paris',   value: 42000, lat: 48.8566, lng:  2.3522, color: '#6366f1' },
    { id: 'londres', label: 'Londres', value: 31000, lat: 51.5074, lng: -0.1278, color: '#22d3ee' }
  ]"
/>
```

---

## Data Layer

Connectez vos widgets à de vraies APIs :

```ts
import { registerDataSource, getData } from 'vue-sdk'

registerDataSource({
  id: 'api-ventes',
  type: 'rest',                              // 'rest' | 'graphql' | 'static'
  url: 'https://api.exemple.com/ventes',
  headers: { Authorization: 'Bearer <token>' },
  cacheTtl: 60,                              // cache de 60 secondes
  transform: (raw) => raw.data
})

const data = await getData('api-ventes')
```

---

## Validation

Validez vos configurations avec des messages d'erreur clairs :

```ts
import { validate, assertValid, validateWidgetConfig } from 'vue-sdk'

// Vérification simple
const result = validate('chart', maConfig)
if (!result.valid) {
  result.errors.forEach(e => console.warn(e.field, e.message))
}

// Assertion — lève une exception si invalide (recommandé en développement)
assertValid('kpi', { id: 'k1', type: 'kpi', data: { value: 42 } })

// Détection automatique du type
validateWidgetConfig({ id: 'k1', type: 'kpi', data: { value: 42 } })
```

---

## Documentation complète

👉 **[Voir la documentation interactive](https://ton-site-demo.vercel.app)**

---

## Licence

MIT