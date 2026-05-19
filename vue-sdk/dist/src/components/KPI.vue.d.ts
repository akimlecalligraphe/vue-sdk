export interface KPIData {
    value: number | string;
    unit?: string;
    trend?: number;
    trendLabel?: string;
    icon?: string;
    color?: string;
    label?: string;
    subtitle?: string;
}
type __VLS_Props = {
    title?: string;
    data: KPIData;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
