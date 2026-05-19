export interface ChartData {
    labels: string[];
    datasets: Array<{
        label?: string;
        data: number[];
        backgroundColor?: string | string[];
        borderColor?: string | string[];
        fill?: boolean;
        tension?: number;
    }>;
}
export interface ChartOptions {
    chartType: "bar" | "line" | "pie" | "doughnut" | "radar" | "polarArea";
    colors?: string[];
    legend?: boolean;
    xLabel?: string;
    yLabel?: string;
    stacked?: boolean;
}
type __VLS_Props = {
    title?: string;
    options: ChartOptions;
    data: ChartData;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    title: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
