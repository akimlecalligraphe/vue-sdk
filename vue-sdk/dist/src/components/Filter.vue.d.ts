export interface FilterField {
    key: string;
    label: string;
    type: "select" | "text" | "date" | "range" | "checkbox";
    options?: string[];
}
export interface FilterOptions {
    filters: FilterField[];
}
type __VLS_Props = {
    title?: string;
    options: FilterOptions;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (values: Record<string, unknown>) => any;
    apply: (values: Record<string, unknown>) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((values: Record<string, unknown>) => any) | undefined;
    onApply?: ((values: Record<string, unknown>) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
