export interface MapPoint {
    id: string;
    label: string;
    value: number;
    lat?: number;
    lng?: number;
    color?: string;
}
type __VLS_Props = {
    title?: string;
    data?: MapPoint[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
