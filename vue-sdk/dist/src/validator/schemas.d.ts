export declare const chartSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly const: "chart";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly options: {
            readonly type: "object";
            readonly properties: {
                readonly chartType: {
                    readonly type: "string";
                    readonly enum: readonly ["bar", "line", "pie", "doughnut", "radar", "polarArea"];
                };
                readonly colors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly legend: {
                    readonly type: "boolean";
                };
                readonly xLabel: {
                    readonly type: "string";
                };
                readonly yLabel: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["chartType"];
        };
        readonly data: {
            readonly type: "object";
            readonly properties: {
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly datasets: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly data: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly required: readonly ["data"];
                    };
                };
            };
            readonly required: readonly ["labels", "datasets"];
        };
    };
    readonly required: readonly ["id", "type", "options", "data"];
};
export declare const kpiSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly const: "kpi";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly data: {
            readonly type: "object";
            readonly properties: {
                readonly value: {};
                readonly unit: {
                    readonly type: "string";
                };
                readonly trend: {
                    readonly type: "number";
                };
                readonly trendLabel: {
                    readonly type: "string";
                };
                readonly icon: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["value"];
        };
    };
    readonly required: readonly ["id", "type", "data"];
};
export declare const tableSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly const: "table";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly options: {
            readonly type: "object";
            readonly properties: {
                readonly columns: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                            };
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly sortable: {
                                readonly type: "boolean";
                            };
                            readonly width: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["key", "label"];
                    };
                };
                readonly pagination: {
                    readonly type: "boolean";
                };
                readonly pageSize: {
                    readonly type: "number";
                };
                readonly striped: {
                    readonly type: "boolean";
                };
                readonly searchable: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["columns"];
        };
        readonly data: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
            };
        };
    };
    readonly required: readonly ["id", "type", "options", "data"];
};
export declare const gaugeSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly const: "gauge";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly data: {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "number";
                };
                readonly min: {
                    readonly type: "number";
                };
                readonly max: {
                    readonly type: "number";
                };
                readonly unit: {
                    readonly type: "string";
                };
                readonly thresholds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly value: {
                                readonly type: "number";
                            };
                            readonly color: {
                                readonly type: "string";
                            };
                            readonly label: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["value", "color"];
                    };
                };
            };
            readonly required: readonly ["value", "min", "max"];
        };
    };
    readonly required: readonly ["id", "type", "data"];
};
export declare const timelineSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly const: "timeline";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly data: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly date: {
                        readonly type: "string";
                    };
                    readonly title: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly enum: readonly ["done", "active", "pending", "error"];
                    };
                    readonly icon: {
                        readonly type: "string";
                    };
                    readonly color: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "date", "title"];
            };
        };
    };
    readonly required: readonly ["id", "type", "data"];
};
export declare const filterSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly const: "filter";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly options: {
            readonly type: "object";
            readonly properties: {
                readonly filters: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                            };
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["select", "text", "date", "range", "checkbox"];
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly required: readonly ["key", "label", "type"];
                    };
                };
            };
            readonly required: readonly ["filters"];
        };
    };
    readonly required: readonly ["id", "type", "options"];
};
export declare const mapSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly const: "map";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly data: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly label: {
                        readonly type: "string";
                    };
                    readonly value: {
                        readonly type: "number";
                    };
                    readonly lat: {
                        readonly type: "number";
                    };
                    readonly lng: {
                        readonly type: "number";
                    };
                    readonly color: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "label", "value"];
            };
        };
    };
    readonly required: readonly ["id", "type"];
};
export declare const schemas: Record<string, unknown>;
