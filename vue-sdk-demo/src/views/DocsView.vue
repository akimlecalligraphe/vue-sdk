<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">Documentation</h1>
      <p class="page-subtitle">Référence complète des composants, exemples minimaux et guides d'intégration.</p>
    </div>

    <div class="docs-layout">
      <!-- Sidebar -->
      <nav class="docs-sidebar">
        <div class="docs-sidebar-section">
          <div class="docs-sidebar-heading">Démarrage</div>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'install' }" @click.prevent="activeSection = 'install'" href="#">Installation</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'plugin' }" @click.prevent="activeSection = 'plugin'" href="#">Vue Plugin</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'json-engine' }" @click.prevent="activeSection = 'json-engine'" href="#">Moteur JSON</a>
        </div>
        <div class="docs-sidebar-section">
          <div class="docs-sidebar-heading">Widgets</div>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'chart' }" @click.prevent="activeSection = 'chart'" href="#">Chart.vue</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'kpi' }" @click.prevent="activeSection = 'kpi'" href="#">KPI.vue</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'table' }" @click.prevent="activeSection = 'table'" href="#">Table.vue</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'gauge' }" @click.prevent="activeSection = 'gauge'" href="#">Gauge.vue</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'timeline' }" @click.prevent="activeSection = 'timeline'" href="#">Timeline.vue</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'filter' }" @click.prevent="activeSection = 'filter'" href="#">Filter.vue</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'map' }" @click.prevent="activeSection = 'map'" href="#">Map.vue</a>
        </div>
        <div class="docs-sidebar-section">
          <div class="docs-sidebar-heading">Modules</div>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'data' }" @click.prevent="activeSection = 'data'" href="#">Data Layer</a>
          <a class="docs-sidebar-link" :class="{ active: activeSection === 'validator' }" @click.prevent="activeSection = 'validator'" href="#">Validator</a>
        </div>
      </nav>

      <!-- Content -->
      <div class="docs-content">

        <!-- ── Installation ────────────────────────────────── -->
        <div v-if="activeSection === 'install'" class="doc-section">
          <div class="doc-badge">Démarrage</div>
          <h2>Installation</h2>
          <p>Installez le SDK et ses dépendances nécessaires :</p>
          <div class="code-block"><pre>npm install @krim24/vue-sdk vue chart.js vue-chartjs ajv</pre></div>
          <h3>Dépendances requises</h3>
          <ul>
            <li><code>vue@^3.5</code> — Vue 3 Composition API</li>
            <li><code>chart.js@^4</code> — Moteur de rendu des graphiques</li>
            <li><code>vue-chartjs@^5</code> — Wrappers Vue pour Chart.js</li>
            <li><code>ajv@^8</code> — Validation par schéma JSON</li>
            <li><code>vue-router@^4</code> — Routage (optionnel, pour les apps multi-pages)</li>
          </ul>
        </div>

        <!-- ── Vue Plugin ──────────────────────────────────── -->
        <div v-if="activeSection === 'plugin'" class="doc-section">
          <div class="doc-badge">Démarrage</div>
          <h2>Vue Plugin</h2>
          <p>Enregistrez le SDK comme plugin Vue pour rendre tous les composants disponibles globalement dans votre application :</p>
          <div class="code-block"><pre>{{ pluginCode }}</pre></div>
          <p>Après l'installation, tous les widgets sont utilisables sans import supplémentaire : <code>ChartWidget</code>, <code>KPIWidget</code>, <code>TableWidget</code>, <code>GaugeWidget</code>, <code>TimelineWidget</code>, <code>FilterWidget</code>, <code>MapWidget</code>, <code>Dashboard</code>.</p>
        </div>

        <!-- ── JSON Engine ─────────────────────────────────── -->
        <div v-if="activeSection === 'json-engine'" class="doc-section">
          <div class="doc-badge">Démarrage</div>
          <h2>Moteur de rendu JSON</h2>
          <p>Définissez un dashboard entier sous forme d'objet JSON et rendez-le avec le composant <code>Dashboard</code>. Aucun code HTML supplémentaire n'est nécessaire.</p>
          <div class="code-block"><pre>{{ jsonEngineCode }}</pre></div>
          <h3>Schéma DashboardConfig</h3>
          <table class="doc-prop-table">
            <thead><tr><th>Propriété</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>id</code></td><td><code>string</code></td><td>Identifiant unique du dashboard (obligatoire)</td></tr>
              <tr><td><code>title</code></td><td><code>string</code></td><td>Titre affiché en en-tête</td></tr>
              <tr><td><code>widgets</code></td><td><code>WidgetConfig[]</code></td><td>Tableau des configs de widgets (obligatoire)</td></tr>
              <tr><td><code>layout</code></td><td><code>'grid' | 'flex'</code></td><td>Mode de disposition (défaut : grid)</td></tr>
              <tr><td><code>columns</code></td><td><code>number</code></td><td>Nombre de colonnes de la grille (défaut : 3)</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ── Chart.vue ───────────────────────────────────── -->
        <div v-if="activeSection === 'chart'" class="doc-section">
          <div class="doc-badge">Widget</div>
          <h2>Chart.vue</h2>

          <div class="doc-objective">
            <div class="doc-objective-icon"><IconifyIcon icon="fa-solid:bullseye" width="20" height="20" /></div>
            <div>
              <strong>Objectif</strong>
              <p>Le composant <strong>Chart.vue</strong> permet d'afficher des données sous forme graphique (barres, lignes, camembert, etc.) en utilisant Chart.js. Il est conçu pour représenter des <strong>tendances</strong> ou des <strong>comparaisons</strong>.</p>
            </div>
          </div>

          <h3>Props attendues</h3>
          <p><strong><code>options</code></strong> (objet, obligatoire)</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>label</code></td><td><code>string</code></td><td>Titre du graphique</td></tr>
              <tr><td><code>type</code></td><td><code>'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea'</code></td><td>Type de graphique (obligatoire)</td></tr>
              <tr><td><code>xKey</code></td><td><code>string</code></td><td>Clé utilisée pour l'axe X</td></tr>
              <tr><td><code>yKey</code></td><td><code>string</code></td><td>Clé utilisée pour l'axe Y</td></tr>
            </tbody>
          </table>
          <p style="margin-top:1rem"><strong><code>data</code></strong> (tableau d'objets, obligatoire)</p>
          <div class="code-block"><pre>{{ chartDataExample }}</pre></div>

          <h3>🧑‍💻 Exemple minimal</h3>
          <div class="code-block"><pre>{{ chartMinimalCode }}</pre></div>

          <h3>Résultat attendu</h3>
          <ul>
            <li><strong>Chart.vue</strong> est autonome et configurable.</li>
            <li>Il accepte des données dynamiques et différents types de graphiques.</li>
            <li>Les développeurs peuvent facilement l'intégrer et le personnaliser.</li>
          </ul>

          <h3>🔎 Prévisualisation</h3>
          <div class="doc-preview">
            <ChartWidget title="Évolution mensuelle" :options="{ chartType: 'bar', xLabel: 'Mois', yLabel: 'Ventes (€)' }" :data="chartPreviewData" />
          </div>
        </div>

        <!-- ── KPI.vue ─────────────────────────────────────── -->
        <div v-if="activeSection === 'kpi'" class="doc-section">
          <div class="doc-badge">Widget</div>
          <h2>KPI.vue</h2>

          <div class="doc-objective">
            <div class="doc-objective-icon"><IconifyIcon icon="fa-solid:bullseye" width="20" height="20" /></div>
            <div>
              <strong>Objectif</strong>
              <p>Le composant <strong>KPI.vue</strong> sert à afficher un <strong>indicateur clé</strong> (Key Performance Indicator) sous forme de chiffre ou valeur mise en avant. Il est idéal pour montrer une métrique importante (ventes, taux de conversion, progression, etc.).</p>
            </div>
          </div>

          <h3>Props attendues</h3>
          <p><strong><code>options</code></strong> (objet)</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>label</code></td><td><code>string</code></td><td>Nom de l'indicateur (ex. "Ventes mensuelles")</td></tr>
              <tr><td><code>unit</code></td><td><code>string</code></td><td>Unité de mesure (€, %, etc.)</td></tr>
              <tr><td><code>valueKey</code></td><td><code>string</code></td><td>Clé de la valeur dans <code>data</code></td></tr>
            </tbody>
          </table>
          <p style="margin-top:1rem"><strong><code>data</code></strong> (objet)</p>
          <div class="code-block"><pre>{{ kpiDataExample }}</pre></div>

          <h3>🧑‍💻 Exemple minimal</h3>
          <div class="code-block"><pre>{{ kpiMinimalCode }}</pre></div>

          <h3>Résultat attendu</h3>
          <ul>
            <li><strong>KPI.vue</strong> est autonome et configurable.</li>
            <li>Il accepte des données dynamiques et affiche un chiffre clé avec label et unité.</li>
            <li>Les nombres ≥ 1 000 000 sont formatés "1.2M", ≥ 1 000 sont formatés "1.2K".</li>
          </ul>

          <h3>🔎 Prévisualisation</h3>
          <div class="doc-preview doc-preview--sm">
            <KPIWidget title="Ventes mensuelles" :data="{ value: 1200, unit: '€', trend: 8.4, trendLabel: 'vs mois dernier', icon: 'fa-solid:money-bill-wave', color: '#6366f1' }" />
          </div>
        </div>

        <!-- ── Table.vue ───────────────────────────────────── -->
        <div v-if="activeSection === 'table'" class="doc-section">
          <div class="doc-badge">Widget</div>
          <h2>Table.vue</h2>

          <div class="doc-objective">
            <div class="doc-objective-icon"><IconifyIcon icon="fa-solid:bullseye" width="20" height="20" /></div>
            <div>
              <strong>Objectif</strong>
              <p>Le composant <strong>Table.vue</strong> sert à afficher des données tabulaires sous forme de tableau HTML. Il est idéal pour représenter des <strong>listes</strong>, des <strong>rapports</strong> ou des données structurées.</p>
            </div>
          </div>

          <h3>Props attendues</h3>
          <p><strong><code>options</code></strong> (objet, obligatoire)</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>columns</code></td><td><code>Array&lt;&#123; key: string, label: string &#125;&gt;</code></td><td>Tableau des colonnes à afficher (obligatoire)</td></tr>
              <tr><td><code>pagination</code></td><td><code>boolean</code></td><td>Active la pagination (défaut : false)</td></tr>
              <tr><td><code>pageSize</code></td><td><code>number</code></td><td>Nombre de lignes par page (défaut : 10)</td></tr>
              <tr><td><code>striped</code></td><td><code>boolean</code></td><td>Lignes alternées (défaut : false)</td></tr>
              <tr><td><code>searchable</code></td><td><code>boolean</code></td><td>Affiche un champ de recherche</td></tr>
            </tbody>
          </table>
          <p style="margin-top:1rem"><strong><code>data</code></strong> (tableau d'objets, obligatoire)</p>
          <div class="code-block"><pre>{{ tableDataExample }}</pre></div>

          <h3>🧑‍💻 Exemple minimal</h3>
          <div class="code-block"><pre>{{ tableMinimalCode }}</pre></div>

          <h3>Résultat attendu</h3>
          <ul>
            <li><strong>Table.vue</strong> est autonome et configurable.</li>
            <li>Il accepte des données dynamiques et génère un tableau HTML avec colonnes et lignes.</li>
            <li>Tri par colonne, recherche plein texte et pagination sont activables indépendamment.</li>
          </ul>

          <h3>🔎 Prévisualisation</h3>
          <div class="doc-preview">
            <TableWidget title="Ventes par mois" :options="tablePreviewOptions" :data="tablePreviewData" />
          </div>
        </div>

        <!-- ── Gauge.vue ───────────────────────────────────── -->
        <div v-if="activeSection === 'gauge'" class="doc-section">
          <div class="doc-badge">Widget</div>
          <h2>Gauge.vue</h2>

          <div class="doc-objective">
            <div class="doc-objective-icon"><IconifyIcon icon="fa-solid:bullseye" width="20" height="20" /></div>
            <div>
              <strong>Objectif</strong>
              <p>Le composant <strong>Gauge.vue</strong> sert à afficher une valeur sous forme de <strong>jauge semi-circulaire</strong>. Il est idéal pour représenter un pourcentage, un niveau de progression ou une mesure par rapport à un seuil.</p>
            </div>
          </div>

          <h3>Props attendues</h3>
          <p><strong><code>options</code></strong> (objet)</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>label</code></td><td><code>string</code></td><td>Nom de l'indicateur (ex. "Progression")</td></tr>
              <tr><td><code>min</code></td><td><code>number</code></td><td>Valeur minimale (ex. 0)</td></tr>
              <tr><td><code>max</code></td><td><code>number</code></td><td>Valeur maximale (ex. 100)</td></tr>
              <tr><td><code>unit</code></td><td><code>string</code></td><td>Unité de mesure (%, °C, etc.)</td></tr>
              <tr><td><code>color</code></td><td><code>string</code></td><td>Couleur principale de la jauge</td></tr>
            </tbody>
          </table>
          <p style="margin-top:1rem"><strong><code>data</code></strong> (objet, obligatoire)</p>
          <div class="code-block"><pre>{{ gaugeDataExample }}</pre></div>

          <h3>🧑‍💻 Exemple minimal</h3>
          <div class="code-block"><pre>{{ gaugeMinimalCode }}</pre></div>

          <h3>Résultat attendu</h3>
          <ul>
            <li><strong>Gauge.vue</strong> est autonome et configurable.</li>
            <li>Il accepte une valeur dynamique et l'affiche sous forme de jauge SVG semi-circulaire.</li>
            <li>Les seuils de couleur (<code>thresholds</code>) permettent une lecture visuelle immédiate.</li>
          </ul>

          <h3>🔎 Prévisualisation</h3>
          <div class="doc-preview doc-preview--sm">
            <GaugeWidget title="Progression" :data="{ value: 65, min: 0, max: 100, unit: '%', thresholds: [{ value: 50, color: '#ef4444', label: 'Bas' }, { value: 75, color: '#f59e0b', label: 'Moyen' }, { value: 100, color: '#10b981', label: 'Élevé' }] }" />
          </div>
        </div>

        <!-- ── Timeline.vue ────────────────────────────────── -->
        <div v-if="activeSection === 'timeline'" class="doc-section">
          <div class="doc-badge">Widget</div>
          <h2>Timeline.vue</h2>

          <div class="doc-objective">
            <div class="doc-objective-icon"><IconifyIcon icon="fa-solid:bullseye" width="20" height="20" /></div>
            <div>
              <strong>Objectif</strong>
              <p>Le composant <strong>Timeline.vue</strong> sert à afficher une suite d'événements dans l'ordre chronologique. Il est idéal pour représenter des <strong>étapes de projet</strong>, des <strong>jalons historiques</strong> ou des activités séquencées.</p>
            </div>
          </div>

          <h3>Props attendues</h3>
          <p><strong><code>options</code></strong> (objet)</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>orientation</code></td><td><code>'vertical' | 'horizontal'</code></td><td>Sens d'affichage (défaut : vertical)</td></tr>
              <tr><td><code>label</code></td><td><code>string</code></td><td>Titre de la timeline</td></tr>
            </tbody>
          </table>
          <p style="margin-top:1rem"><strong><code>data</code></strong> (tableau d'objets, obligatoire) — chaque objet représente un événement :</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>id</code></td><td><code>string</code></td><td>Identifiant unique (obligatoire)</td></tr>
              <tr><td><code>date</code></td><td><code>string</code></td><td>Date ou période de l'événement (obligatoire)</td></tr>
              <tr><td><code>title</code></td><td><code>string</code></td><td>Titre de l'événement (obligatoire)</td></tr>
              <tr><td><code>description</code></td><td><code>string</code></td><td>Texte associé (optionnel)</td></tr>
              <tr><td><code>status</code></td><td><code>'done' | 'active' | 'pending' | 'error'</code></td><td>Détermine la couleur et le badge</td></tr>
              <tr><td><code>icon</code></td><td><code>string</code></td><td>Emoji affiché dans le point</td></tr>
            </tbody>
          </table>

          <h3>🧑‍💻 Exemple minimal</h3>
          <div class="code-block"><pre>{{ timelineMinimalCode }}</pre></div>

          <h3>Résultat attendu</h3>
          <ul>
            <li><strong>Timeline.vue</strong> est autonome et configurable.</li>
            <li>Il accepte des données dynamiques et les affiche dans l'ordre chronologique.</li>
            <li>Les statuts (<code>done</code>, <code>active</code>, <code>pending</code>, <code>error</code>) colorent automatiquement chaque point.</li>
          </ul>

          <h3>🔎 Prévisualisation</h3>
          <div class="doc-preview">
            <TimelineWidget title="Évolution du projet" :data="timelinePreviewData" />
          </div>
        </div>

        <!-- ── Filter.vue ──────────────────────────────────── -->
        <div v-if="activeSection === 'filter'" class="doc-section">
          <div class="doc-badge">Widget</div>
          <h2>Filter.vue</h2>

          <div class="doc-objective">
            <div class="doc-objective-icon"><IconifyIcon icon="fa-solid:bullseye" width="20" height="20" /></div>
            <div>
              <strong>Objectif</strong>
              <p>Le composant <strong>Filter.vue</strong> sert à afficher des filtres interactifs permettant de sélectionner ou restreindre des données. Il est idéal pour filtrer un tableau, un graphique ou un dashboard selon des critères choisis par l'utilisateur.</p>
            </div>
          </div>

          <h3>Props attendues</h3>
          <p><strong><code>options</code></strong> (objet, obligatoire)</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>filters</code></td><td><code>FilterField[]</code></td><td>Tableau des filtres disponibles (obligatoire)</td></tr>
            </tbody>
          </table>
          <p style="margin-top:.75rem">Chaque <code>FilterField</code> contient :</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>key</code></td><td><code>string</code></td><td>Identifiant du filtre</td></tr>
              <tr><td><code>label</code></td><td><code>string</code></td><td>Libellé affiché</td></tr>
              <tr><td><code>type</code></td><td><code>'select' | 'text' | 'date' | 'range' | 'checkbox'</code></td><td>Type de contrôle</td></tr>
              <tr><td><code>values</code></td><td><code>string[]</code></td><td>Valeurs disponibles (pour select et checkbox)</td></tr>
            </tbody>
          </table>
          <p style="margin-top:1rem"><strong>Événements émis</strong></p>
          <table class="doc-prop-table">
            <thead><tr><th>Événement</th><th>Déclencheur</th><th>Payload</th></tr></thead>
            <tbody>
              <tr><td><code>@change</code></td><td>À chaque modification d'un filtre</td><td>Objet des valeurs sélectionnées</td></tr>
              <tr><td><code>@apply</code></td><td>Clic sur "Appliquer"</td><td>Objet des valeurs sélectionnées</td></tr>
            </tbody>
          </table>

          <h3>🧑‍💻 Exemple minimal</h3>
          <div class="code-block"><pre>{{ filterMinimalCode }}</pre></div>

          <h3>Résultat attendu</h3>
          <ul>
            <li><strong>Filter.vue</strong> est autonome et configurable.</li>
            <li>Il accepte des filtres dynamiques et transmet les valeurs sélectionnées via des événements Vue.</li>
            <li>Le bouton "Reset" remet tous les filtres à zéro.</li>
          </ul>

          <h3>🔎 Prévisualisation</h3>
          <div class="doc-preview doc-preview--sm">
            <FilterWidget title="Filtres" :options="filterPreviewOptions" @change="() => {}" @apply="() => {}" />
          </div>
        </div>

        <!-- ── Map.vue ─────────────────────────────────────── -->
        <div v-if="activeSection === 'map'" class="doc-section">
          <div class="doc-badge">Widget</div>
          <h2>Map.vue</h2>

          <div class="doc-objective">
            <div class="doc-objective-icon"><IconifyIcon icon="fa-solid:bullseye" width="20" height="20" /></div>
            <div>
              <strong>Objectif</strong>
              <p>Le composant <strong>Map.vue</strong> sert à afficher une carte avec des marqueurs visuels. Il est idéal pour représenter des <strong>localisations géographiques</strong>, des points d'intérêt ou des données spatiales. La taille des bulles est proportionnelle à la valeur associée.</p>
            </div>
          </div>

          <h3>Props attendues</h3>
          <p><strong><code>options</code></strong> (objet)</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>zoom</code></td><td><code>number</code></td><td>Niveau de zoom initial (ex. 5)</td></tr>
              <tr><td><code>center</code></td><td><code>&#123; lat: number, lng: number &#125;</code></td><td>Coordonnées du centre de la carte</td></tr>
              <tr><td><code>mapType</code></td><td><code>'standard' | 'satellite'</code></td><td>Type de fond de carte</td></tr>
            </tbody>
          </table>
          <p style="margin-top:1rem"><strong><code>data</code></strong> (tableau d'objets) — chaque objet représente un point :</p>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>id</code></td><td><code>string</code></td><td>Identifiant unique (obligatoire)</td></tr>
              <tr><td><code>label</code></td><td><code>string</code></td><td>Nom du lieu (obligatoire)</td></tr>
              <tr><td><code>value</code></td><td><code>number</code></td><td>Détermine la taille de la bulle (obligatoire)</td></tr>
              <tr><td><code>lat</code></td><td><code>number</code></td><td>Latitude (-90 à 90)</td></tr>
              <tr><td><code>lng</code></td><td><code>number</code></td><td>Longitude (-180 à 180)</td></tr>
              <tr><td><code>color</code></td><td><code>string</code></td><td>Couleur de la bulle (hex)</td></tr>
            </tbody>
          </table>

          <h3>🧑‍💻 Exemple minimal</h3>
          <div class="code-block"><pre>{{ mapMinimalCode }}</pre></div>

          <h3>Résultat attendu</h3>
          <ul>
            <li><strong>Map.vue</strong> est autonome et configurable.</li>
            <li>Il accepte des données dynamiques et affiche une carte avec bulles proportionnelles aux valeurs.</li>
            <li>Si <code>lat</code>/<code>lng</code> sont omis, les points sont disposés automatiquement en grille.</li>
          </ul>

          <h3>🔎 Prévisualisation</h3>
          <div class="doc-preview">
            <MapWidget title="Ventes par région" :data="mapPreviewData" />
          </div>
        </div>

        <!-- ── Data Layer ──────────────────────────────────── -->
        <div v-if="activeSection === 'data'" class="doc-section">
          <div class="doc-badge">Module</div>
          <h2>Data Layer</h2>
          <p>Connectez vos widgets à de vraies APIs en utilisant <code>registerDataSource()</code> et <code>getData()</code>.</p>
          <div class="code-block"><pre>{{ dataLayerCode }}</pre></div>
          <h3>Paramètres de DataSourceConfig</h3>
          <table class="doc-prop-table">
            <thead><tr><th>Champ</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>id</code></td><td><code>string</code></td><td>Identifiant unique de la source (obligatoire)</td></tr>
              <tr><td><code>type</code></td><td><code>'rest' | 'graphql' | 'static'</code></td><td>Mode de récupération (obligatoire)</td></tr>
              <tr><td><code>url</code></td><td><code>string</code></td><td>URL de l'endpoint</td></tr>
              <tr><td><code>headers</code></td><td><code>Record&lt;string, string&gt;</code></td><td>En-têtes HTTP (ex. Authorization)</td></tr>
              <tr><td><code>query</code></td><td><code>string</code></td><td>Requête GraphQL</td></tr>
              <tr><td><code>transform</code></td><td><code>(raw) => unknown</code></td><td>Transforme la réponse brute de l'API</td></tr>
              <tr><td><code>cacheTtl</code></td><td><code>number</code></td><td>Durée du cache en secondes (0 = sans cache)</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ── Validator ───────────────────────────────────── -->
        <div v-if="activeSection === 'validator'" class="doc-section">
          <div class="doc-badge">Module</div>
          <h2>Validator</h2>
          <p>Validez les configurations de widgets contre des schémas JSON grâce à <a href="https://ajv.js.org" target="_blank">AJV</a>. Des messages d'erreur clairs sont fournis pour faciliter le débogage.</p>
          <div class="code-block"><pre>{{ validatorCode }}</pre></div>
          <h3>Fonctions disponibles</h3>
          <table class="doc-prop-table">
            <thead><tr><th>Fonction</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>validate(type, data)</code></td><td>Retourne <code>&#123; valid, errors[] &#125;</code></td></tr>
              <tr><td><code>validateWidgetConfig(config)</code></td><td>Détecte le type automatiquement depuis <code>config.type</code></td></tr>
              <tr><td><code>assertValid(type, data)</code></td><td>Lève une exception si invalide — recommandé en développement</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconifyIcon from "../components/IconifyIcon.vue";
import { ref } from "vue";
import { ChartWidget, KPIWidget, TableWidget, GaugeWidget, TimelineWidget, FilterWidget, MapWidget } from "@workspace/vue-sdk";

const activeSection = ref("chart");

// ── Previews ──────────────────────────────────────────────────

const chartPreviewData = {
  labels: ["Janvier", "Février", "Mars"],
  datasets: [{ label: "Ventes (€)", data: [1200, 1500, 1800] }],
};

const tablePreviewOptions = {
  columns: [
    { key: "mois", label: "Mois", sortable: true },
    { key: "ventes", label: "Ventes (€)", sortable: true },
  ],
  striped: true,
  searchable: true,
};
const tablePreviewData = [
  { mois: "Janvier", ventes: 1200 },
  { mois: "Février", ventes: 1500 },
  { mois: "Mars", ventes: 1800 },
];

const timelinePreviewData = [
  { id: "1", date: "Janvier 2024", title: "Lancement du projet", description: "Démarrage officiel du projet", status: "done" as const, icon: "fa-solid:rocket" },
  { id: "2", date: "Mars 2024", title: "Première version en production", description: "Déploiement de la v1.0", status: "done" as const, icon: "fa-solid:check-circle" },
  { id: "3", date: "Juin 2024", title: "Ajout de nouvelles fonctionnalités", description: "Widgets Map et Gauge intégrés", status: "active" as const, icon: "fa-solid:bolt" },
];

const filterPreviewOptions = {
  filters: [
    { key: "mois", label: "Mois", type: "select" as const, options: ["Janvier", "Février", "Mars"] },
    { key: "region", label: "Région", type: "select" as const, options: ["Europe", "Asie", "Amérique"] },
  ],
};

const mapPreviewData = [
  { id: "paris", label: "Paris", value: 42000, lat: 48.8566, lng: 2.3522, color: "#6366f1" },
  { id: "londres", label: "Londres", value: 31000, lat: 51.5074, lng: -0.1278, color: "#22d3ee" },
  { id: "berlin", label: "Berlin", value: 24000, lat: 52.52, lng: 13.405, color: "#10b981" },
  { id: "madrid", label: "Madrid", value: 18000, lat: 40.4168, lng: -3.7038, color: "#f59e0b" },
];

// ── Code snippets ─────────────────────────────────────────────

const chartDataExample = `// Exemple de données
[
  { mois: "Janvier", ventes: 1200 },
  { mois: "Février", ventes: 1500 },
  { mois: "Mars",    ventes: 1800 }
]`;

const chartMinimalCode = `<script setup>
import Chart from "vue-sdk/components/Chart.vue";

const chartWidget = {
  options: {
    label: "Évolution mensuelle",
    type: "bar",
    xKey: "mois",
    yKey: "ventes"
  },
  data: [
    { mois: "Janvier", ventes: 1200 },
    { mois: "Février", ventes: 1500 },
    { mois: "Mars",    ventes: 1800 }
  ]
};
<\/script>

<template>
  <Chart :widget="chartWidget" :data="chartWidget.data" />
</template>`;

const kpiDataExample = `// Exemple de données
{ ventes: 1200 }`;

const kpiMinimalCode = `<script setup>
import KPI from "vue-sdk/components/KPI.vue";

const kpiWidget = {
  options: {
    label: "Ventes mensuelles",
    unit: "€",
    valueKey: "ventes"
  },
  data: { ventes: 1200 }
};
<\/script>

<template>
  <KPI :widget="kpiWidget" :data="kpiWidget.data" />
</template>`;

const tableDataExample = `// Exemple de données
[
  { mois: "Janvier", ventes: 1200 },
  { mois: "Février", ventes: 1500 },
  { mois: "Mars",    ventes: 1800 }
]`;

const tableMinimalCode = `<script setup>
import Table from "vue-sdk/components/Table.vue";

const tableWidget = {
  options: {
    columns: [
      { key: "mois",   label: "Mois" },
      { key: "ventes", label: "Ventes (€)" }
    ]
  },
  data: [
    { mois: "Janvier", ventes: 1200 },
    { mois: "Février", ventes: 1500 },
    { mois: "Mars",    ventes: 1800 }
  ]
};
<\/script>

<template>
  <Table :widget="tableWidget" :data="tableWidget.data" />
</template>`;

const gaugeDataExample = `// Exemple de données
{ value: 65 }`;

const gaugeMinimalCode = `<script setup>
import Gauge from "vue-sdk/components/Gauge.vue";

const gaugeWidget = {
  options: {
    label: "Progression",
    min: 0,
    max: 100,
    unit: "%",
    color: "green"
  },
  data: { value: 65 }
};
<\/script>

<template>
  <Gauge :widget="gaugeWidget" :data="gaugeWidget.data" />
</template>`;

const timelineMinimalCode = `<script setup>
import Timeline from "vue-sdk/components/Timeline.vue";

const timelineWidget = {
  options: {
    orientation: "vertical",
    label: "Évolution du projet"
  },
  data: [
    { id: "1", date: "Janvier 2024", title: "Lancement du projet",
      description: "Démarrage officiel", status: "done" },
    { id: "2", date: "Mars 2024",    title: "Première version en prod",
      description: "Déploiement v1.0", status: "done" },
    { id: "3", date: "Juin 2024",    title: "Nouvelles fonctionnalités",
      description: "Map + Gauge ajoutés", status: "active" }
  ]
};
<\/script>

<template>
  <Timeline :widget="timelineWidget" :data="timelineWidget.data" />
</template>`;

const filterMinimalCode = `<script setup>
import Filter from "vue-sdk/components/Filter.vue";

const filterWidget = {
  options: {
    filters: [
      { key: "mois",   label: "Mois",   type: "select",
        values: ["Janvier", "Février", "Mars"] },
      { key: "region", label: "Région", type: "select",
        values: ["Europe", "Asie", "Amérique"] }
    ]
  }
};

function handleFilterChange(newValues) {
  console.log("Filtres appliqués :", newValues);
}
<\/script>

<template>
  <Filter
    :widget="filterWidget"
    @change="handleFilterChange"
    @apply="handleFilterChange"
  />
</template>`;

const mapMinimalCode = `<script setup>
import Map from "vue-sdk/components/Map.vue";

const mapWidget = {
  options: {
    zoom: 5,
    center: { lat: 48.8566, lng: 2.3522 },
    mapType: "standard"
  },
  data: [
    { id: "paris",   label: "Paris",   value: 42000,
      lat: 48.8566, lng:  2.3522, color: "#6366f1" },
    { id: "londres", label: "Londres", value: 31000,
      lat: 51.5074, lng: -0.1278, color: "#22d3ee" }
  ]
};
<\/script>

<template>
  <Map :widget="mapWidget" :data="mapWidget.data" />
</template>`;

const pluginCode = `// main.ts
import { createApp } from 'vue'
import { VueSdk } from 'vue-sdk'
import App from './App.vue'

const app = createApp(App)
app.use(VueSdk)   // enregistre tous les composants globalement
app.mount('#app')`;

const jsonEngineCode = `import { Dashboard, parseDashboardConfig } from 'vue-sdk'

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
})`;

const dataLayerCode = `import { registerDataSource, getData } from 'vue-sdk'

// Enregistrer un endpoint REST
registerDataSource({
  id: 'api-ventes',
  type: 'rest',
  url: 'https://api.exemple.com/ventes',
  headers: { Authorization: 'Bearer <token>' },
  cacheTtl: 60,                    // cache de 60 secondes
  transform: (raw) => raw.data     // extraire les données imbriquées
})

// Récupérer les données et les passer à un widget
const data = await getData('api-ventes')`;

const validatorCode = `import { validate, assertValid, validateWidgetConfig } from 'vue-sdk'

// Vérifier la validité
const result = validate('chart', maConfig)
if (!result.valid) {
  result.errors.forEach(e => console.warn(e.field, e.message))
}

// Assertion (lève une exception si invalide — utile en développement)
assertValid('kpi', { id: 'k1', type: 'kpi', data: { value: 42 } })

// Détection automatique du type depuis config.type
const r = validateWidgetConfig({ id: 'k1', type: 'kpi', data: { value: 42 } })`;
</script>