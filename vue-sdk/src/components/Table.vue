<template>
  <div class="sdk-widget sdk-table">
    <div v-if="title || options.searchable" class="sdk-widget-header">
      <h3 v-if="title" class="sdk-widget-title">{{ title }}</h3>
      <input
        v-if="options.searchable"
        v-model="search"
        type="search"
        placeholder="Search..."
        class="sdk-table-search"
      />
    </div>
    <div class="sdk-table-wrapper">
      <table class="sdk-table-el" :class="{ 'sdk-table-striped': options.striped }">
        <thead class="sdk-table-head">
          <tr>
            <th
              v-for="col in options.columns"
              :key="col.key"
              class="sdk-table-th"
              :style="col.width ? { width: col.width } : {}"
              :class="{ 'sdk-table-sortable': col.sortable }"
              @click="col.sortable && toggleSort(col.key)"
            >
              {{ col.label }}
              <span v-if="col.sortable" class="sdk-table-sort-icon">
                {{ sortKey === col.key ? (sortDir === "asc" ? "↑" : "↓") : "↕" }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in paginatedRows" :key="i" class="sdk-table-row">
            <td v-for="col in options.columns" :key="col.key" class="sdk-table-td">
              <slot :name="`cell-${col.key}`" :value="row[col.key]" :row="row">
                {{ formatCell(row[col.key]) }}
              </slot>
            </td>
          </tr>
          <tr v-if="paginatedRows.length === 0">
            <td :colspan="options.columns.length" class="sdk-table-empty">No data found</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="options.pagination && totalPages > 1" class="sdk-table-pagination">
      <button class="sdk-table-page-btn" :disabled="page === 1" @click="page--">‹</button>
      <span class="sdk-table-page-info">{{ page }} / {{ totalPages }}</span>
      <button class="sdk-table-page-btn" :disabled="page === totalPages" @click="page++">›</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface TableOptions {
  columns: TableColumn[];
  pagination?: boolean;
  pageSize?: number;
  striped?: boolean;
  searchable?: boolean;
}

const props = defineProps<{
  title?: string;
  options: TableOptions;
  data: Record<string, unknown>[];
}>();

const search = ref("");
const sortKey = ref<string | null>(null);
const sortDir = ref<"asc" | "desc">("asc");
const page = ref(1);
const pageSize = computed(() => props.options.pageSize ?? 10);

function toggleSort(key: string) {
  if (sortKey.value === key) sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
  else { sortKey.value = key; sortDir.value = "asc"; }
  page.value = 1;
}

const filteredRows = computed(() => {
  let rows = props.data ?? [];
  if (search.value) {
    const q = search.value.toLowerCase();
    rows = rows.filter((r) => Object.values(r).some((v) => String(v ?? "").toLowerCase().includes(q)));
  }
  if (sortKey.value) {
    const k = sortKey.value;
    const d = sortDir.value === "asc" ? 1 : -1;
    rows = [...rows].sort((a, b) => {
      const av = a[k], bv = b[k];
      if (av === bv) return 0;
      if (av === null || av === undefined) return d;
      if (bv === null || bv === undefined) return -d;
      return av < bv ? -d : d;
    });
  }
  return rows;
});

const totalPages = computed(() => Math.max(1, Math.ceil(filteredRows.value.length / pageSize.value)));

const paginatedRows = computed(() => {
  if (!props.options.pagination) return filteredRows.value;
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}
</script>
