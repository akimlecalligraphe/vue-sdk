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
type __VLS_Props = {
    title?: string;
    options: TableOptions;
    data: Record<string, unknown>[];
};
declare var __VLS_2: `cell-${string}`, __VLS_3: {
    value: unknown;
    row: Record<string, unknown>;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
