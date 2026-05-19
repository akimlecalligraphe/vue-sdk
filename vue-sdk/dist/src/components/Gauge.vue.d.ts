export interface GaugeThreshold {
    value: number;
    color: string;
    label?: string;
}
export interface GaugeData {
    value: number;
    min: number;
    max: number;
    unit?: string;
    thresholds?: GaugeThreshold[];
}
type __VLS_Props = {
    title?: string;
    data: GaugeData;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
