<template>
  <div class="sdk-widget sdk-filter">
    <div v-if="title" class="sdk-widget-header">
      <h3 class="sdk-widget-title">{{ title }}</h3>
    </div>
    <div class="sdk-filter-body">
      <div v-for="f in options.filters" :key="f.key" class="sdk-filter-field">
        <label class="sdk-filter-label">{{ f.label }}</label>

        <select v-if="f.type === 'select'" v-model="values[f.key]" class="sdk-filter-input" @change="emit('change', { ...values })">
          <option value="">All</option>
          <option v-for="opt in f.options" :key="opt" :value="opt">{{ opt }}</option>
        </select>

        <input v-else-if="f.type === 'text'" v-model="values[f.key]" type="text" class="sdk-filter-input" :placeholder="`Filter by ${f.label}…`" @input="emit('change', { ...values })" />

        <input v-else-if="f.type === 'date'" v-model="values[f.key]" type="date" class="sdk-filter-input" @change="emit('change', { ...values })" />

        <div v-else-if="f.type === 'range'" class="sdk-filter-range">
          <input v-model="values[f.key + '_min']" type="number" class="sdk-filter-input sdk-filter-range-input" placeholder="Min" @input="emit('change', { ...values })" />
          <span class="sdk-filter-range-sep">—</span>
          <input v-model="values[f.key + '_max']" type="number" class="sdk-filter-input sdk-filter-range-input" placeholder="Max" @input="emit('change', { ...values })" />
        </div>

        <div v-else-if="f.type === 'checkbox'" class="sdk-filter-checkboxes">
          <label v-for="opt in f.options" :key="opt" class="sdk-filter-checkbox-label">
            <input type="checkbox" :value="opt" :checked="(values[f.key] as string[] ?? []).includes(opt)" class="sdk-filter-checkbox" @change="toggleCheckbox(f.key, opt)" />
            {{ opt }}
          </label>
        </div>
      </div>

      <div class="sdk-filter-actions">
        <button class="sdk-btn sdk-btn-ghost" @click="reset">Reset</button>
        <button class="sdk-btn sdk-btn-primary" @click="emit('apply', { ...values })">Apply</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

export interface FilterField {
  key: string;
  label: string;
  type: "select" | "text" | "date" | "range" | "checkbox";
  options?: string[];
}

export interface FilterOptions {
  filters: FilterField[];
}

const props = defineProps<{
  title?: string;
  options: FilterOptions;
}>();

const emit = defineEmits<{
  change: [values: Record<string, unknown>];
  apply: [values: Record<string, unknown>];
}>();

const values = reactive<Record<string, unknown>>({});

function toggleCheckbox(key: string, opt: string) {
  const current = (values[key] as string[]) ?? [];
  if (current.includes(opt)) values[key] = current.filter((v) => v !== opt);
  else values[key] = [...current, opt];
  emit("change", { ...values });
}

function reset() {
  for (const k of Object.keys(values)) delete values[k];
  emit("change", {});
  emit("apply", {});
}
</script>
