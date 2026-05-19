import type { JSONSchemaType } from "ajv";

export const chartSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string", const: "chart" },
    title: { type: "string" },
    options: {
      type: "object",
      properties: {
        chartType: { type: "string", enum: ["bar", "line", "pie", "doughnut", "radar", "polarArea"] },
        colors: { type: "array", items: { type: "string" } },
        legend: { type: "boolean" },
        xLabel: { type: "string" },
        yLabel: { type: "string" },
      },
      required: ["chartType"],
    },
    data: {
      type: "object",
      properties: {
        labels: { type: "array", items: { type: "string" } },
        datasets: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: { type: "string" },
              data: { type: "array", items: { type: "number" } },
            },
            required: ["data"],
          },
        },
      },
      required: ["labels", "datasets"],
    },
  },
  required: ["id", "type", "options", "data"],
} as const;

export const kpiSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string", const: "kpi" },
    title: { type: "string" },
    data: {
      type: "object",
      properties: {
        value: {},
        unit: { type: "string" },
        trend: { type: "number" },
        trendLabel: { type: "string" },
        icon: { type: "string" },
        color: { type: "string" },
      },
      required: ["value"],
    },
  },
  required: ["id", "type", "data"],
} as const;

export const tableSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string", const: "table" },
    title: { type: "string" },
    options: {
      type: "object",
      properties: {
        columns: {
          type: "array",
          items: {
            type: "object",
            properties: {
              key: { type: "string" },
              label: { type: "string" },
              sortable: { type: "boolean" },
              width: { type: "string" },
            },
            required: ["key", "label"],
          },
        },
        pagination: { type: "boolean" },
        pageSize: { type: "number" },
        striped: { type: "boolean" },
        searchable: { type: "boolean" },
      },
      required: ["columns"],
    },
    data: {
      type: "array",
      items: { type: "object" },
    },
  },
  required: ["id", "type", "options", "data"],
} as const;

export const gaugeSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string", const: "gauge" },
    title: { type: "string" },
    data: {
      type: "object",
      properties: {
        value: { type: "number" },
        min: { type: "number" },
        max: { type: "number" },
        unit: { type: "string" },
        thresholds: {
          type: "array",
          items: {
            type: "object",
            properties: {
              value: { type: "number" },
              color: { type: "string" },
              label: { type: "string" },
            },
            required: ["value", "color"],
          },
        },
      },
      required: ["value", "min", "max"],
    },
  },
  required: ["id", "type", "data"],
} as const;

export const timelineSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string", const: "timeline" },
    title: { type: "string" },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          date: { type: "string" },
          title: { type: "string" },
          description: { type: "string" },
          status: { type: "string", enum: ["done", "active", "pending", "error"] },
          icon: { type: "string" },
          color: { type: "string" },
        },
        required: ["id", "date", "title"],
      },
    },
  },
  required: ["id", "type", "data"],
} as const;

export const filterSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string", const: "filter" },
    title: { type: "string" },
    options: {
      type: "object",
      properties: {
        filters: {
          type: "array",
          items: {
            type: "object",
            properties: {
              key: { type: "string" },
              label: { type: "string" },
              type: { type: "string", enum: ["select", "text", "date", "range", "checkbox"] },
              options: { type: "array", items: { type: "string" } },
            },
            required: ["key", "label", "type"],
          },
        },
      },
      required: ["filters"],
    },
  },
  required: ["id", "type", "options"],
} as const;

export const mapSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string", const: "map" },
    title: { type: "string" },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          label: { type: "string" },
          value: { type: "number" },
          lat: { type: "number" },
          lng: { type: "number" },
          color: { type: "string" },
        },
        required: ["id", "label", "value"],
      },
    },
  },
  required: ["id", "type"],
} as const;

export const schemas: Record<string, unknown> = {
  chart: chartSchema,
  kpi: kpiSchema,
  table: tableSchema,
  gauge: gaugeSchema,
  timeline: timelineSchema,
  filter: filterSchema,
  map: mapSchema,
};
