export type DataSourceType = "rest" | "graphql" | "static";

export interface DataSourceConfig {
  id: string;
  type: DataSourceType;
  url?: string;
  headers?: Record<string, string>;
  query?: string;
  transform?: (raw: unknown) => unknown;
  cacheTtl?: number;
}

interface CacheEntry {
  data: unknown;
  timestamp: number;
}

const sources = new Map<string, DataSourceConfig>();
const cache = new Map<string, CacheEntry>();

export function registerDataSource(config: DataSourceConfig): void {
  if (!config.id) throw new Error("DataSource requires an 'id'.");
  sources.set(config.id, config);
}

export function getDataSource(id: string): DataSourceConfig | undefined {
  return sources.get(id);
}

export function listDataSources(): string[] {
  return Array.from(sources.keys());
}

async function fetchRest(config: DataSourceConfig): Promise<unknown> {
  if (!config.url) throw new Error(`DataSource '${config.id}' requires a 'url'.`);
  const res = await fetch(config.url, { headers: config.headers });
  if (!res.ok) throw new Error(`DataSource '${config.id}' fetch failed: ${res.status} ${res.statusText}`);
  return res.json();
}

async function fetchGraphQL(config: DataSourceConfig): Promise<unknown> {
  if (!config.url) throw new Error(`DataSource '${config.id}' requires a 'url'.`);
  if (!config.query) throw new Error(`DataSource '${config.id}' (graphql) requires a 'query'.`);
  const res = await fetch(config.url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...config.headers },
    body: JSON.stringify({ query: config.query }),
  });
  if (!res.ok) throw new Error(`GraphQL fetch failed: ${res.status}`);
  const json = (await res.json()) as { data?: unknown; errors?: unknown[] };
  if (json.errors?.length) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  return json.data;
}

export async function getData(sourceId: string): Promise<unknown> {
  const config = sources.get(sourceId);
  if (!config) throw new Error(`No data source registered with id '${sourceId}'.`);

  const ttl = config.cacheTtl ?? 0;
  if (ttl > 0) {
    const cached = cache.get(sourceId);
    if (cached && Date.now() - cached.timestamp < ttl * 1000) {
      return cached.data;
    }
  }

  let raw: unknown;
  if (config.type === "rest") raw = await fetchRest(config);
  else if (config.type === "graphql") raw = await fetchGraphQL(config);
  else if (config.type === "static") raw = config.url ? (await fetch(config.url).then((r) => r.json())) : null;
  else throw new Error(`Unknown data source type: '${config.type}'`);

  const transformed = config.transform ? config.transform(raw) : raw;

  if (ttl > 0) cache.set(sourceId, { data: transformed, timestamp: Date.now() });

  return transformed;
}

export function clearCache(sourceId?: string): void {
  if (sourceId) cache.delete(sourceId);
  else cache.clear();
}
