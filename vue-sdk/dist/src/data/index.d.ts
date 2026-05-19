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
export declare function registerDataSource(config: DataSourceConfig): void;
export declare function getDataSource(id: string): DataSourceConfig | undefined;
export declare function listDataSources(): string[];
export declare function getData(sourceId: string): Promise<unknown>;
export declare function clearCache(sourceId?: string): void;
