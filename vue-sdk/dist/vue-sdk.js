import { defineComponent as me, computed as se, openBlock as V, createBlock as Ft, unref as Ta, normalizeClass as Le, createElementBlock as F, toDisplayString as Y, createElementVNode as q, createCommentVNode as oe, resolveDynamicComponent as ja, createVNode as B, normalizeStyle as Oe, ref as Ye, withDirectives as Ke, vModelText as Qe, Fragment as ce, renderList as de, createTextVNode as At, renderSlot as Ka, reactive as Ha, vModelSelect as xa, createStaticVNode as Ga } from "vue";
import { Icon as Wa } from "@iconify/vue";
import { Chart as Ba, CategoryScale as Ja, LinearScale as Qa, BarElement as Ya, LineElement as Xa, PointElement as Za, ArcElement as es, RadialLinearScale as ts, Title as rs, Tooltip as as, Legend as ss, Filler as ns } from "chart.js";
import { PolarArea as os, Radar as is, Doughnut as ls, Pie as cs, Line as ds, Bar as mr } from "vue-chartjs";
const Ca = /* @__PURE__ */ new Map(), Da = /* @__PURE__ */ new Map();
function De(e, t, p) {
  Ca.set(e, t), p && Da.set(e, p);
}
function us(e) {
  return Ca.get(e);
}
function rl(e) {
  return Da.get(e);
}
function fs(e) {
  const t = typeof e == "string" ? JSON.parse(e) : e;
  if (!t.id || !t.type) throw new Error("Widget config requires 'id' and 'type' fields.");
  return t;
}
function hs(e) {
  const t = typeof e == "string" ? JSON.parse(e) : e;
  if (!t.id || !Array.isArray(t.widgets)) throw new Error("Dashboard config requires 'id' and 'widgets' array.");
  return t;
}
function ps() {
  return {
    install(e) {
      e.config.globalProperties.$vueSdk = {
        registerWidget: De,
        getWidget: us,
        parseWidgetConfig: fs,
        parseDashboardConfig: hs
      };
    }
  };
}
const He = /* @__PURE__ */ me({
  __name: "IconifyIcon",
  props: {
    icon: {},
    width: {},
    height: {},
    customClass: {}
  },
  setup(e) {
    const t = e, p = {
      "📊": "fa-solid:chart-bar",
      "📈": "fa-solid:chart-line",
      "📋": "fa-solid:clipboard-list",
      "🎯": "fa-solid:bullseye",
      "🕐": "fa-solid:clock",
      "🔍": "fa-solid:magnifying-glass",
      "🗺️": "fa-solid:map",
      "🚀": "fa-solid:rocket",
      "✅": "fa-solid:check-circle",
      "💰": "fa-solid:money-bill-wave",
      "👤": "fa-solid:user",
      "↩️": "fa-solid:arrow-rotate-left",
      "⏱️": "fa-solid:stopwatch",
      "⭐": "fa-solid:star",
      "🐳": "fa-solid:fish",
      "🌐": "fa-solid:globe",
      "🏗️": "fa-solid:hammer",
      "🔬": "fa-solid:microscope",
      "🐛": "fa-solid:bug",
      "🔧": "fa-solid:wrench",
      "📝": "fa-solid:file-lines",
      "👥": "fa-solid:users",
      "💳": "fa-solid:credit-card",
      "📦": "fa-solid:box",
      "🚚": "fa-solid:truck",
      "⏳": "fa-solid:hourglass-half",
      "📡": "fa-solid:signal",
      "🌡️": "fa-solid:thermometer-half",
      "💾": "fa-solid:floppy-disk",
      "⚡": "fa-solid:bolt",
      "🛒": "fa-solid:shopping-cart",
      "🔒": "fa-solid:lock",
      "🎉": "fa-solid:gift",
      "🧩": "fa-solid:puzzle-piece",
      "⚙️": "fa-solid:cog",
      "🔌": "fa-solid:plug",
      "🎨": "fa-solid:palette",
      "🚨": "fa-solid:triangle-exclamation",
      "🤝": "fa-solid:handshake",
      "📅": "fa-solid:calendar-days",
      "📚": "fa-solid:book-open",
      "🔗": "fa-solid:link",
      "🏁": "fa-solid:flag-checkered",
      "🏃": "fa-solid:running"
    }, i = se(() => t.icon.includes(":") ? t.icon : p[t.icon] ?? null);
    return (g, r) => i.value ? (V(), Ft(Ta(Wa), {
      key: 0,
      icon: i.value,
      width: e.width,
      height: e.height,
      class: Le(e.customClass)
    }, null, 8, ["icon", "width", "height", "class"])) : (V(), F("span", {
      key: 1,
      class: Le(e.customClass)
    }, Y(e.icon), 3));
  }
}), ms = { class: "sdk-widget sdk-chart" }, ys = {
  key: 0,
  class: "sdk-widget-header"
}, gs = { class: "sdk-widget-title" }, vs = { class: "sdk-widget-body sdk-chart-body" }, _s = {
  key: 1,
  class: "sdk-empty"
}, le = /* @__PURE__ */ me({
  __name: "Chart",
  props: {
    title: { default: void 0 },
    options: {},
    data: {}
  },
  setup(e) {
    Ba.register(
      Ja,
      Qa,
      Ya,
      Xa,
      Za,
      es,
      ts,
      rs,
      as,
      ss,
      ns
    );
    const t = e, p = [
      "#6366f1",
      "#22d3ee",
      "#10b981",
      "#f59e0b",
      "#ef4444",
      "#8b5cf6",
      "#ec4899",
      "#14b8a6",
      "#f97316",
      "#3b82f6"
    ], i = se(() => {
      var s;
      return { bar: mr, line: ds, pie: cs, doughnut: ls, radar: is, polarArea: os }[((s = t.options) == null ? void 0 : s.chartType) ?? "bar"] ?? mr;
    }), g = se(() => {
      var s;
      if (!t.data) return { labels: [], datasets: [] };
      const o = ((s = t.options) == null ? void 0 : s.colors) ?? p;
      return {
        labels: t.data.labels ?? [],
        datasets: (t.data.datasets ?? []).map((c, h) => {
          var f;
          return {
            ...c,
            backgroundColor: c.backgroundColor ?? (["pie", "doughnut", "polarArea"].includes((f = t.options) == null ? void 0 : f.chartType) ? o : o[h % o.length] + "cc"),
            borderColor: c.borderColor ?? o[h % o.length],
            fill: c.fill ?? !1,
            tension: c.tension ?? 0.4
          };
        })
      };
    }), r = se(() => {
      var o, s, c, h, f, b, $, w;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: {
          legend: { display: ((o = t.options) == null ? void 0 : o.legend) !== !1, position: "top" },
          title: { display: !1 }
        },
        scales: ["pie", "doughnut", "polarArea", "radar"].includes((s = t.options) == null ? void 0 : s.chartType) ? {} : {
          x: {
            stacked: ((c = t.options) == null ? void 0 : c.stacked) ?? !1,
            title: { display: !!((h = t.options) != null && h.xLabel), text: ((f = t.options) == null ? void 0 : f.xLabel) ?? "" },
            grid: { color: "rgba(0,0,0,0.05)" }
          },
          y: {
            stacked: ((b = t.options) == null ? void 0 : b.stacked) ?? !1,
            title: { display: !!(($ = t.options) != null && $.yLabel), text: ((w = t.options) == null ? void 0 : w.yLabel) ?? "" },
            grid: { color: "rgba(0,0,0,0.05)" }
          }
        }
      };
    });
    return (o, s) => (V(), F("div", ms, [
      e.title ? (V(), F("div", ys, [
        q("h3", gs, Y(e.title), 1)
      ])) : oe("", !0),
      q("div", vs, [
        i.value && g.value ? (V(), Ft(ja(i.value), {
          key: 0,
          data: g.value,
          options: r.value,
          class: "sdk-chart-canvas"
        }, null, 8, ["data", "options"])) : (V(), F("div", _s, [
          B(He, {
            icon: "fa-solid:chart-bar",
            width: "32",
            height: "32",
            customClass: "sdk-empty-icon"
          }),
          s[0] || (s[0] = q("p", null, "No chart data provided", -1))
        ]))
      ])
    ]));
  }
}), bs = { class: "sdk-kpi-inner" }, $s = { class: "sdk-kpi-top" }, ks = { class: "sdk-kpi-label" }, ws = {
  key: 0,
  class: "sdk-kpi-icon"
}, Ss = { class: "sdk-kpi-value" }, Es = { class: "sdk-kpi-number" }, Ps = {
  key: 0,
  class: "sdk-kpi-unit"
}, Rs = { class: "sdk-kpi-trend-arrow" }, Os = { class: "sdk-kpi-trend-value" }, Ns = {
  key: 0,
  class: "sdk-kpi-trend-label"
}, Ts = {
  key: 1,
  class: "sdk-kpi-subtitle"
}, Ne = /* @__PURE__ */ me({
  __name: "KPI",
  props: {
    title: {},
    data: {}
  },
  setup(e) {
    const t = e, p = se(() => t.data.color ?? "#6366f1"), i = se(() => {
      const r = t.data.value;
      return typeof r == "number" ? r >= 1e6 ? (r / 1e6).toFixed(1) + "M" : r >= 1e3 ? (r / 1e3).toFixed(1) + "K" : r.toLocaleString() : r;
    }), g = se(() => {
      const r = t.data.trend;
      return r === void 0 ? "" : r > 0 ? "sdk-kpi-trend--up" : r < 0 ? "sdk-kpi-trend--down" : "sdk-kpi-trend--neutral";
    });
    return (r, o) => (V(), F("div", {
      class: "sdk-widget sdk-kpi",
      style: Oe({ "--kpi-color": p.value })
    }, [
      q("div", bs, [
        q("div", $s, [
          q("div", ks, Y(e.title || e.data.label || "Metric"), 1),
          e.data.icon ? (V(), F("div", ws, [
            B(He, {
              icon: e.data.icon,
              width: "24",
              height: "24"
            }, null, 8, ["icon"])
          ])) : oe("", !0)
        ]),
        q("div", Ss, [
          q("span", Es, Y(i.value), 1),
          e.data.unit ? (V(), F("span", Ps, Y(e.data.unit), 1)) : oe("", !0)
        ]),
        e.data.trend !== void 0 ? (V(), F("div", {
          key: 0,
          class: Le(["sdk-kpi-trend", g.value])
        }, [
          q("span", Rs, Y(e.data.trend >= 0 ? "↑" : "↓"), 1),
          q("span", Os, Y(Math.abs(e.data.trend)) + "%", 1),
          e.data.trendLabel ? (V(), F("span", Ns, Y(e.data.trendLabel), 1)) : oe("", !0)
        ], 2)) : oe("", !0),
        e.data.subtitle ? (V(), F("div", Ts, Y(e.data.subtitle), 1)) : oe("", !0)
      ]),
      q("div", {
        class: "sdk-kpi-accent",
        style: Oe({ background: p.value })
      }, null, 4)
    ], 4));
  }
}), js = { class: "sdk-widget sdk-table" }, Cs = {
  key: 0,
  class: "sdk-widget-header"
}, Ds = {
  key: 0,
  class: "sdk-widget-title"
}, Is = { class: "sdk-table-wrapper" }, qs = { class: "sdk-table-head" }, As = ["onClick"], Ms = {
  key: 0,
  class: "sdk-table-sort-icon"
}, Ls = { key: 0 }, Vs = ["colspan"], Us = {
  key: 1,
  class: "sdk-table-pagination"
}, zs = ["disabled"], Fs = { class: "sdk-table-page-info" }, Ks = ["disabled"], Te = /* @__PURE__ */ me({
  __name: "Table",
  props: {
    title: {},
    options: {},
    data: {}
  },
  setup(e) {
    const t = e, p = Ye(""), i = Ye(null), g = Ye("asc"), r = Ye(1), o = se(() => t.options.pageSize ?? 10);
    function s($) {
      i.value === $ ? g.value = g.value === "asc" ? "desc" : "asc" : (i.value = $, g.value = "asc"), r.value = 1;
    }
    const c = se(() => {
      let $ = t.data ?? [];
      if (p.value) {
        const w = p.value.toLowerCase();
        $ = $.filter((S) => Object.values(S).some((P) => String(P ?? "").toLowerCase().includes(w)));
      }
      if (i.value) {
        const w = i.value, S = g.value === "asc" ? 1 : -1;
        $ = [...$].sort((P, m) => {
          const y = P[w], l = m[w];
          return y === l ? 0 : y == null ? S : l == null || y < l ? -S : S;
        });
      }
      return $;
    }), h = se(() => Math.max(1, Math.ceil(c.value.length / o.value))), f = se(() => {
      if (!t.options.pagination) return c.value;
      const $ = (r.value - 1) * o.value;
      return c.value.slice($, $ + o.value);
    });
    function b($) {
      return $ == null ? "—" : typeof $ == "boolean" ? $ ? "Yes" : "No" : String($);
    }
    return ($, w) => (V(), F("div", js, [
      e.title || e.options.searchable ? (V(), F("div", Cs, [
        e.title ? (V(), F("h3", Ds, Y(e.title), 1)) : oe("", !0),
        e.options.searchable ? Ke((V(), F("input", {
          key: 1,
          "onUpdate:modelValue": w[0] || (w[0] = (S) => p.value = S),
          type: "search",
          placeholder: "Search...",
          class: "sdk-table-search"
        }, null, 512)), [
          [Qe, p.value]
        ]) : oe("", !0)
      ])) : oe("", !0),
      q("div", Is, [
        q("table", {
          class: Le(["sdk-table-el", { "sdk-table-striped": e.options.striped }])
        }, [
          q("thead", qs, [
            q("tr", null, [
              (V(!0), F(ce, null, de(e.options.columns, (S) => (V(), F("th", {
                key: S.key,
                class: Le(["sdk-table-th", { "sdk-table-sortable": S.sortable }]),
                style: Oe(S.width ? { width: S.width } : {}),
                onClick: (P) => S.sortable && s(S.key)
              }, [
                At(Y(S.label) + " ", 1),
                S.sortable ? (V(), F("span", Ms, Y(i.value === S.key ? g.value === "asc" ? "↑" : "↓" : "↕"), 1)) : oe("", !0)
              ], 14, As))), 128))
            ])
          ]),
          q("tbody", null, [
            (V(!0), F(ce, null, de(f.value, (S, P) => (V(), F("tr", {
              key: P,
              class: "sdk-table-row"
            }, [
              (V(!0), F(ce, null, de(e.options.columns, (m) => (V(), F("td", {
                key: m.key,
                class: "sdk-table-td"
              }, [
                Ka($.$slots, `cell-${m.key}`, {
                  value: S[m.key],
                  row: S
                }, () => [
                  At(Y(b(S[m.key])), 1)
                ])
              ]))), 128))
            ]))), 128)),
            f.value.length === 0 ? (V(), F("tr", Ls, [
              q("td", {
                colspan: e.options.columns.length,
                class: "sdk-table-empty"
              }, "No data found", 8, Vs)
            ])) : oe("", !0)
          ])
        ], 2)
      ]),
      e.options.pagination && h.value > 1 ? (V(), F("div", Us, [
        q("button", {
          class: "sdk-table-page-btn",
          disabled: r.value === 1,
          onClick: w[1] || (w[1] = (S) => r.value--)
        }, "‹", 8, zs),
        q("span", Fs, Y(r.value) + " / " + Y(h.value), 1),
        q("button", {
          class: "sdk-table-page-btn",
          disabled: r.value === h.value,
          onClick: w[2] || (w[2] = (S) => r.value++)
        }, "›", 8, Ks)
      ])) : oe("", !0)
    ]));
  }
}), Hs = { class: "sdk-widget sdk-gauge" }, xs = {
  key: 0,
  class: "sdk-widget-header"
}, Gs = { class: "sdk-widget-title" }, Ws = { class: "sdk-gauge-body" }, Bs = ["viewBox"], Js = ["id"], Qs = ["stop-color"], Ys = ["stop-color"], Xs = ["stop-color"], Zs = ["d"], en = ["d", "stroke"], tn = ["d", "stroke"], rn = ["x2", "y2", "stroke"], an = ["fill"], sn = ["y", "fill"], nn = ["y"], on = ["x", "y"], ln = ["x", "y"], cn = {
  key: 0,
  class: "sdk-gauge-legend"
}, Ge = 200, Yt = 16, yr = 0, $e = /* @__PURE__ */ me({
  __name: "Gauge",
  props: {
    title: {},
    data: {}
  },
  setup(e) {
    const t = e, p = Math.random().toString(36).slice(2), i = Ge / 2, g = Ge * 0.55, r = Ge * 0.38, o = Math.PI;
    function s(R) {
      return { x: i + r * Math.cos(R), y: g - r * Math.sin(R) };
    }
    function c(R, C) {
      const N = s(R), A = s(C), K = Math.abs(C - R) > Math.PI ? 0 : 1;
      return `M ${N.x} ${N.y} A ${r} ${r} 0 ${K} 0 ${A.x} ${A.y}`;
    }
    const h = se(() => c(o, yr)), f = se(() => {
      const { value: R, min: C, max: N } = t.data;
      return Math.min(1, Math.max(0, (R - C) / (N - C)));
    }), b = se(() => o - f.value * Math.PI), $ = se(() => c(o, b.value)), w = se(() => i + r * 0.85 * Math.cos(b.value)), S = se(() => g - r * 0.85 * Math.sin(b.value)), P = se(() => {
      const R = t.data.value;
      return typeof R == "number" ? R.toLocaleString() : R;
    }), m = se(() => {
      const R = t.data.thresholds;
      if (!(R != null && R.length)) return [];
      const { min: C, max: N } = t.data, A = N - C, K = [...R].sort((x, Z) => x.value - Z.value);
      return K.map((x, Z) => {
        const ie = Z === 0 ? C : K[Z - 1].value, ye = o - (ie - C) / A * Math.PI, re = o - (x.value - C) / A * Math.PI;
        return { d: c(ye, re), color: x.color };
      });
    }), y = se(() => {
      const R = t.data.thresholds;
      if (!(R != null && R.length)) return "#6366f1";
      const C = t.data.value, N = [...R].sort((A, K) => A.value - K.value);
      for (const A of N) if (C <= A.value) return A.color;
      return N[N.length - 1].color;
    }), l = se(() => {
      const R = t.data.thresholds;
      return R != null && R.length ? R.slice(0, 3).map((C) => C.color).concat(["#6366f1", "#22d3ee", "#10b981"]).slice(0, 3) : ["#6366f1", "#22d3ee", "#10b981"];
    }), _ = se(() => s(o)), E = se(() => s(yr)), a = se(() => _.value.x), n = se(() => _.value.y + 14), u = se(() => E.value.x), v = se(() => E.value.y + 14);
    return (R, C) => {
      var N;
      return V(), F("div", Hs, [
        e.title ? (V(), F("div", xs, [
          q("h3", Gs, Y(e.title), 1)
        ])) : oe("", !0),
        q("div", Ws, [
          (V(), F("svg", {
            viewBox: `0 0 ${Ge} ${Ge * 0.6}`,
            class: "sdk-gauge-svg"
          }, [
            q("defs", null, [
              q("linearGradient", {
                id: `gtrack-${Ta(p)}`,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%"
              }, [
                q("stop", {
                  offset: "0%",
                  "stop-color": l.value[0]
                }, null, 8, Qs),
                q("stop", {
                  offset: "50%",
                  "stop-color": l.value[1]
                }, null, 8, Ys),
                q("stop", {
                  offset: "100%",
                  "stop-color": l.value[2]
                }, null, 8, Xs)
              ], 8, Js)
            ]),
            q("path", {
              d: h.value,
              fill: "none",
              stroke: "#e5e7eb",
              "stroke-width": Yt,
              "stroke-linecap": "round"
            }, null, 8, Zs),
            (V(!0), F(ce, null, de(m.value, (A, K) => (V(), F("path", {
              key: K,
              d: A.d,
              fill: "none",
              stroke: A.color,
              "stroke-width": Yt,
              "stroke-linecap": "round",
              class: "sdk-gauge-segment"
            }, null, 8, en))), 128)),
            q("path", {
              d: $.value,
              fill: "none",
              stroke: y.value,
              "stroke-width": Yt,
              "stroke-linecap": "round",
              class: "sdk-gauge-value-arc"
            }, null, 8, tn),
            q("line", {
              x1: i,
              y1: g,
              x2: w.value,
              y2: S.value,
              stroke: y.value,
              "stroke-width": "3",
              "stroke-linecap": "round",
              class: "sdk-gauge-needle"
            }, null, 8, rn),
            q("circle", {
              cx: i,
              cy: g,
              r: "6",
              fill: y.value
            }, null, 8, an),
            q("text", {
              x: i,
              y: g * 1.15,
              "text-anchor": "middle",
              class: "sdk-gauge-value-text",
              fill: y.value
            }, Y(P.value), 9, sn),
            q("text", {
              x: i,
              y: g * 1.35,
              "text-anchor": "middle",
              class: "sdk-gauge-label-text",
              fill: "#6b7280"
            }, Y(e.data.unit ?? ""), 9, nn),
            q("text", {
              x: a.value,
              y: n.value,
              "text-anchor": "middle",
              class: "sdk-gauge-minmax",
              fill: "#9ca3af"
            }, Y(e.data.min), 9, on),
            q("text", {
              x: u.value,
              y: v.value,
              "text-anchor": "middle",
              class: "sdk-gauge-minmax",
              fill: "#9ca3af"
            }, Y(e.data.max), 9, ln)
          ], 8, Bs)),
          (N = e.data.thresholds) != null && N.length ? (V(), F("div", cn, [
            (V(!0), F(ce, null, de(e.data.thresholds, (A) => (V(), F("div", {
              key: A.value,
              class: "sdk-gauge-legend-item"
            }, [
              q("span", {
                class: "sdk-gauge-legend-dot",
                style: Oe({ background: A.color })
              }, null, 4),
              q("span", null, Y(A.label ?? A.value), 1)
            ]))), 128))
          ])) : oe("", !0)
        ])
      ]);
    };
  }
}), dn = { class: "sdk-widget sdk-timeline" }, un = {
  key: 0,
  class: "sdk-widget-header"
}, fn = { class: "sdk-widget-title" }, hn = { class: "sdk-timeline-body" }, pn = { class: "sdk-timeline-connector" }, mn = {
  key: 1,
  class: "sdk-timeline-dot-check"
}, yn = {
  key: 0,
  class: "sdk-timeline-line"
}, gn = { class: "sdk-timeline-content" }, vn = { class: "sdk-timeline-meta" }, _n = { class: "sdk-timeline-date" }, bn = { class: "sdk-timeline-title" }, $n = {
  key: 0,
  class: "sdk-timeline-desc"
}, kn = {
  key: 0,
  class: "sdk-empty"
}, Ve = /* @__PURE__ */ me({
  __name: "Timeline",
  props: {
    title: {},
    data: {}
  },
  setup(e) {
    function t(g) {
      return { done: "#10b981", active: "#6366f1", pending: "#9ca3af", error: "#ef4444" }[g ?? "pending"] ?? "#9ca3af";
    }
    function p(g) {
      return { done: "✓", active: "●", pending: "○", error: "✕" }[g ?? "pending"] ?? "○";
    }
    function i(g) {
      try {
        return new Date(g).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      } catch {
        return g;
      }
    }
    return (g, r) => (V(), F("div", dn, [
      e.title ? (V(), F("div", un, [
        q("h3", fn, Y(e.title), 1)
      ])) : oe("", !0),
      q("div", hn, [
        (V(!0), F(ce, null, de(e.data, (o, s) => (V(), F("div", {
          key: o.id,
          class: Le(["sdk-timeline-item", `sdk-timeline-item--${o.status ?? "pending"}`])
        }, [
          q("div", pn, [
            q("div", {
              class: "sdk-timeline-dot",
              style: Oe({ background: o.color ?? t(o.status) })
            }, [
              o.icon ? (V(), Ft(He, {
                key: 0,
                icon: o.icon,
                width: "18",
                height: "18",
                customClass: "sdk-timeline-dot-icon"
              }, null, 8, ["icon"])) : (V(), F("span", mn, Y(p(o.status)), 1))
            ], 4),
            s < e.data.length - 1 ? (V(), F("div", yn)) : oe("", !0)
          ]),
          q("div", gn, [
            q("div", vn, [
              q("span", _n, Y(i(o.date)), 1),
              o.status ? (V(), F("span", {
                key: 0,
                class: "sdk-timeline-badge",
                style: Oe({ background: (o.color ?? t(o.status)) + "22", color: o.color ?? t(o.status) })
              }, Y(o.status), 5)) : oe("", !0)
            ]),
            q("div", bn, Y(o.title), 1),
            o.description ? (V(), F("p", $n, Y(o.description), 1)) : oe("", !0)
          ])
        ], 2))), 128)),
        e.data.length ? oe("", !0) : (V(), F("div", kn, [
          B(He, {
            icon: "fa-solid:clock",
            width: "32",
            height: "32",
            customClass: "sdk-empty-icon"
          }),
          r[0] || (r[0] = q("p", null, "No timeline events", -1))
        ]))
      ])
    ]));
  }
}), wn = { class: "sdk-widget sdk-filter" }, Sn = {
  key: 0,
  class: "sdk-widget-header"
}, En = { class: "sdk-widget-title" }, Pn = { class: "sdk-filter-body" }, Rn = { class: "sdk-filter-label" }, On = ["onUpdate:modelValue"], Nn = ["value"], Tn = ["onUpdate:modelValue", "placeholder"], jn = ["onUpdate:modelValue"], Cn = {
  key: 3,
  class: "sdk-filter-range"
}, Dn = ["onUpdate:modelValue"], In = ["onUpdate:modelValue"], qn = {
  key: 4,
  class: "sdk-filter-checkboxes"
}, An = ["value", "checked", "onChange"], Mn = { class: "sdk-filter-actions" }, Mt = /* @__PURE__ */ me({
  __name: "Filter",
  props: {
    title: {},
    options: {}
  },
  emits: ["change", "apply"],
  setup(e, { emit: t }) {
    const p = t, i = Ha({});
    function g(o, s) {
      const c = i[o] ?? [];
      c.includes(s) ? i[o] = c.filter((h) => h !== s) : i[o] = [...c, s], p("change", { ...i });
    }
    function r() {
      for (const o of Object.keys(i)) delete i[o];
      p("change", {}), p("apply", {});
    }
    return (o, s) => (V(), F("div", wn, [
      e.title ? (V(), F("div", Sn, [
        q("h3", En, Y(e.title), 1)
      ])) : oe("", !0),
      q("div", Pn, [
        (V(!0), F(ce, null, de(e.options.filters, (c) => (V(), F("div", {
          key: c.key,
          class: "sdk-filter-field"
        }, [
          q("label", Rn, Y(c.label), 1),
          c.type === "select" ? Ke((V(), F("select", {
            key: 0,
            "onUpdate:modelValue": (h) => i[c.key] = h,
            class: "sdk-filter-input",
            onChange: s[0] || (s[0] = (h) => p("change", { ...i }))
          }, [
            s[6] || (s[6] = q("option", { value: "" }, "All", -1)),
            (V(!0), F(ce, null, de(c.options, (h) => (V(), F("option", {
              key: h,
              value: h
            }, Y(h), 9, Nn))), 128))
          ], 40, On)), [
            [xa, i[c.key]]
          ]) : c.type === "text" ? Ke((V(), F("input", {
            key: 1,
            "onUpdate:modelValue": (h) => i[c.key] = h,
            type: "text",
            class: "sdk-filter-input",
            placeholder: `Filter by ${c.label}…`,
            onInput: s[1] || (s[1] = (h) => p("change", { ...i }))
          }, null, 40, Tn)), [
            [Qe, i[c.key]]
          ]) : c.type === "date" ? Ke((V(), F("input", {
            key: 2,
            "onUpdate:modelValue": (h) => i[c.key] = h,
            type: "date",
            class: "sdk-filter-input",
            onChange: s[2] || (s[2] = (h) => p("change", { ...i }))
          }, null, 40, jn)), [
            [Qe, i[c.key]]
          ]) : c.type === "range" ? (V(), F("div", Cn, [
            Ke(q("input", {
              "onUpdate:modelValue": (h) => i[c.key + "_min"] = h,
              type: "number",
              class: "sdk-filter-input sdk-filter-range-input",
              placeholder: "Min",
              onInput: s[3] || (s[3] = (h) => p("change", { ...i }))
            }, null, 40, Dn), [
              [Qe, i[c.key + "_min"]]
            ]),
            s[7] || (s[7] = q("span", { class: "sdk-filter-range-sep" }, "—", -1)),
            Ke(q("input", {
              "onUpdate:modelValue": (h) => i[c.key + "_max"] = h,
              type: "number",
              class: "sdk-filter-input sdk-filter-range-input",
              placeholder: "Max",
              onInput: s[4] || (s[4] = (h) => p("change", { ...i }))
            }, null, 40, In), [
              [Qe, i[c.key + "_max"]]
            ])
          ])) : c.type === "checkbox" ? (V(), F("div", qn, [
            (V(!0), F(ce, null, de(c.options, (h) => (V(), F("label", {
              key: h,
              class: "sdk-filter-checkbox-label"
            }, [
              q("input", {
                type: "checkbox",
                value: h,
                checked: (i[c.key] ?? []).includes(h),
                class: "sdk-filter-checkbox",
                onChange: (f) => g(c.key, h)
              }, null, 40, An),
              At(" " + Y(h), 1)
            ]))), 128))
          ])) : oe("", !0)
        ]))), 128)),
        q("div", Mn, [
          q("button", {
            class: "sdk-btn sdk-btn-ghost",
            onClick: r
          }, "Reset"),
          q("button", {
            class: "sdk-btn sdk-btn-primary",
            onClick: s[5] || (s[5] = (c) => p("apply", { ...i }))
          }, "Apply")
        ])
      ])
    ]));
  }
}), Ln = { class: "sdk-widget sdk-map" }, Vn = {
  key: 0,
  class: "sdk-widget-header"
}, Un = { class: "sdk-widget-title" }, zn = { class: "sdk-map-body" }, Fn = { class: "sdk-map-visual" }, Kn = {
  viewBox: "0 0 800 400",
  class: "sdk-map-svg",
  preserveAspectRatio: "xMidYMid meet"
}, Hn = {
  x: "0",
  y: "0",
  width: "800",
  height: "400"
}, xn = {
  xmlns: "http://www.w3.org/1999/xhtml",
  style: { width: "100%", height: "100%", display: "flex", "align-items": "center", "justify-content": "center", opacity: ".12", "pointer-events": "none" }
}, Gn = ["cx", "cy", "r", "fill", "stroke"], Wn = ["x", "y"], Bn = ["x", "y"], Jn = {
  key: 0,
  class: "sdk-map-legend"
}, Qn = { class: "sdk-map-legend-label" }, Yn = { class: "sdk-map-legend-value" }, Xn = {
  key: 1,
  class: "sdk-empty"
}, Lt = /* @__PURE__ */ me({
  __name: "MapWidget",
  props: {
    title: {},
    data: {}
  },
  setup(e) {
    const t = e, p = ["#6366f1", "#22d3ee", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"], i = se(
      () => [...t.data ?? []].sort((o, s) => s.value - o.value)
    ), g = se(() => {
      const o = t.data ?? [];
      if (!o.length) return [];
      const s = Math.max(...o.map((f) => f.value)), c = Math.min(...o.map((f) => f.value)), h = s - c || 1;
      return o.map((f, b) => {
        const $ = (f.value - c) / h, w = Math.ceil(Math.sqrt(o.length)), S = b % w, P = Math.floor(b / w), m = f.lng != null ? (f.lng + 180) / 360 * 760 + 20 : 80 + S * (640 / Math.max(w - 1, 1)), y = f.lat != null ? (90 - f.lat) / 180 * 360 + 20 : 80 + P * (240 / Math.max(Math.ceil(o.length / w) - 1, 1));
        return {
          ...f,
          x: m,
          y,
          r: 12 + $ * 28,
          color: f.color ?? p[b % p.length]
        };
      });
    });
    function r(o) {
      return o >= 1e6 ? (o / 1e6).toFixed(1) + "M" : o >= 1e3 ? (o / 1e3).toFixed(1) + "K" : o.toLocaleString();
    }
    return (o, s) => {
      var c, h;
      return V(), F("div", Ln, [
        e.title ? (V(), F("div", Vn, [
          q("h3", Un, Y(e.title), 1)
        ])) : oe("", !0),
        q("div", zn, [
          q("div", Fn, [
            (V(), F("svg", Kn, [
              s[0] || (s[0] = q("rect", {
                width: "800",
                height: "400",
                fill: "#f0f4f8",
                rx: "8"
              }, null, -1)),
              (V(), F("foreignObject", Hn, [
                q("div", xn, [
                  B(He, {
                    icon: "fa-solid:globe",
                    width: "96",
                    height: "96"
                  })
                ])
              ])),
              (V(!0), F(ce, null, de(g.value, (f) => (V(), F("g", {
                key: f.id
              }, [
                q("circle", {
                  cx: f.x,
                  cy: f.y,
                  r: f.r,
                  fill: f.color + "88",
                  stroke: f.color,
                  "stroke-width": "2",
                  class: "sdk-map-bubble"
                }, null, 8, Gn),
                q("text", {
                  x: f.x,
                  y: f.y - f.r - 6,
                  "text-anchor": "middle",
                  "font-size": "11",
                  fill: "#374151",
                  "font-weight": "500"
                }, Y(f.label), 9, Wn),
                q("text", {
                  x: f.x,
                  y: f.y + 4,
                  "text-anchor": "middle",
                  "font-size": "10",
                  fill: "#1f2937",
                  "font-weight": "600"
                }, Y(r(f.value)), 9, Bn)
              ]))), 128))
            ]))
          ]),
          (c = e.data) != null && c.length ? (V(), F("div", Jn, [
            (V(!0), F(ce, null, de(i.value, (f) => (V(), F("div", {
              key: f.id,
              class: "sdk-map-legend-item"
            }, [
              q("span", {
                class: "sdk-map-legend-dot",
                style: Oe({ background: f.color ?? "#6366f1" })
              }, null, 4),
              q("span", Qn, Y(f.label), 1),
              q("span", Yn, Y(r(f.value)), 1)
            ]))), 128))
          ])) : oe("", !0),
          (h = e.data) != null && h.length ? oe("", !0) : (V(), F("div", Xn, [
            B(He, {
              icon: "fa-solid:map",
              width: "32",
              height: "32",
              customClass: "sdk-empty-icon"
            }),
            s[1] || (s[1] = q("p", null, "No map data provided", -1))
          ]))
        ])
      ]);
    };
  }
}), Zn = {
  key: 0,
  class: "sdk-dashboard-header"
}, eo = { class: "sdk-dashboard-title" }, to = {
  key: 1,
  class: "sdk-widget sdk-unknown"
}, ro = /* @__PURE__ */ me({
  __name: "Dashboard",
  props: {
    config: {}
  },
  setup(e) {
    const t = e, p = {
      chart: le,
      kpi: Ne,
      table: Te,
      gauge: $e,
      timeline: Ve,
      filter: Mt,
      map: Lt
    };
    function i(r) {
      return p[r];
    }
    const g = se(() => ({
      gridTemplateColumns: `repeat(${t.config.columns ?? 3}, minmax(0, 1fr))`
    }));
    return (r, o) => (V(), F("div", {
      class: Le(["sdk-dashboard", `sdk-dashboard--${e.config.layout ?? "grid"}`]),
      style: Oe(g.value)
    }, [
      e.config.title ? (V(), F("div", Zn, [
        q("h2", eo, Y(e.config.title), 1)
      ])) : oe("", !0),
      q("div", {
        class: "sdk-dashboard-grid",
        style: Oe(g.value)
      }, [
        (V(!0), F(ce, null, de(e.config.widgets, (s) => (V(), F("div", {
          key: s.id,
          class: "sdk-dashboard-cell"
        }, [
          i(s.type) ? (V(), Ft(ja(i(s.type)), {
            key: 0,
            title: s.title,
            options: s.options,
            data: s.data
          }, null, 8, ["title", "options", "data"])) : (V(), F("div", to, [
            q("p", null, [
              o[0] || (o[0] = At("Unknown widget type: ", -1)),
              q("code", null, Y(s.type), 1)
            ])
          ]))
        ]))), 128))
      ], 4)
    ], 6));
  }
}), Kt = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map();
function al(e) {
  if (!e.id) throw new Error("DataSource requires an 'id'.");
  Kt.set(e.id, e);
}
function sl(e) {
  return Kt.get(e);
}
function nl() {
  return Array.from(Kt.keys());
}
async function ao(e) {
  if (!e.url) throw new Error(`DataSource '${e.id}' requires a 'url'.`);
  const t = await fetch(e.url, { headers: e.headers });
  if (!t.ok) throw new Error(`DataSource '${e.id}' fetch failed: ${t.status} ${t.statusText}`);
  return t.json();
}
async function so(e) {
  var i;
  if (!e.url) throw new Error(`DataSource '${e.id}' requires a 'url'.`);
  if (!e.query) throw new Error(`DataSource '${e.id}' (graphql) requires a 'query'.`);
  const t = await fetch(e.url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...e.headers },
    body: JSON.stringify({ query: e.query })
  });
  if (!t.ok) throw new Error(`GraphQL fetch failed: ${t.status}`);
  const p = await t.json();
  if ((i = p.errors) != null && i.length) throw new Error(`GraphQL errors: ${JSON.stringify(p.errors)}`);
  return p.data;
}
async function ol(e) {
  const t = Kt.get(e);
  if (!t) throw new Error(`No data source registered with id '${e}'.`);
  const p = t.cacheTtl ?? 0;
  if (p > 0) {
    const r = Vt.get(e);
    if (r && Date.now() - r.timestamp < p * 1e3)
      return r.data;
  }
  let i;
  if (t.type === "rest") i = await ao(t);
  else if (t.type === "graphql") i = await so(t);
  else if (t.type === "static") i = t.url ? await fetch(t.url).then((r) => r.json()) : null;
  else throw new Error(`Unknown data source type: '${t.type}'`);
  const g = t.transform ? t.transform(i) : i;
  return p > 0 && Vt.set(e, { data: g, timestamp: Date.now() }), g;
}
function il(e) {
  e ? Vt.delete(e) : Vt.clear();
}
function no(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xe = { exports: {} }, Xt = {}, Ee = {}, qe = {}, Zt = {}, er = {}, tr = {}, gr;
function Ut() {
  return gr || (gr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class p extends t {
      constructor(l) {
        if (super(), !e.IDENTIFIER.test(l))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = l;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = p;
    class i extends t {
      constructor(l) {
        super(), this._items = typeof l == "string" ? [l] : l;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const l = this._items[0];
        return l === "" || l === '""';
      }
      get str() {
        var l;
        return (l = this._str) !== null && l !== void 0 ? l : this._str = this._items.reduce((_, E) => `${_}${E}`, "");
      }
      get names() {
        var l;
        return (l = this._names) !== null && l !== void 0 ? l : this._names = this._items.reduce((_, E) => (E instanceof p && (_[E.str] = (_[E.str] || 0) + 1), _), {});
      }
    }
    e._Code = i, e.nil = new i("");
    function g(y, ...l) {
      const _ = [y[0]];
      let E = 0;
      for (; E < l.length; )
        s(_, l[E]), _.push(y[++E]);
      return new i(_);
    }
    e._ = g;
    const r = new i("+");
    function o(y, ...l) {
      const _ = [w(y[0])];
      let E = 0;
      for (; E < l.length; )
        _.push(r), s(_, l[E]), _.push(r, w(y[++E]));
      return c(_), new i(_);
    }
    e.str = o;
    function s(y, l) {
      l instanceof i ? y.push(...l._items) : l instanceof p ? y.push(l) : y.push(b(l));
    }
    e.addCodeArg = s;
    function c(y) {
      let l = 1;
      for (; l < y.length - 1; ) {
        if (y[l] === r) {
          const _ = h(y[l - 1], y[l + 1]);
          if (_ !== void 0) {
            y.splice(l - 1, 3, _);
            continue;
          }
          y[l++] = "+";
        }
        l++;
      }
    }
    function h(y, l) {
      if (l === '""')
        return y;
      if (y === '""')
        return l;
      if (typeof y == "string")
        return l instanceof p || y[y.length - 1] !== '"' ? void 0 : typeof l != "string" ? `${y.slice(0, -1)}${l}"` : l[0] === '"' ? y.slice(0, -1) + l.slice(1) : void 0;
      if (typeof l == "string" && l[0] === '"' && !(y instanceof p))
        return `"${y}${l.slice(1)}`;
    }
    function f(y, l) {
      return l.emptyStr() ? y : y.emptyStr() ? l : o`${y}${l}`;
    }
    e.strConcat = f;
    function b(y) {
      return typeof y == "number" || typeof y == "boolean" || y === null ? y : w(Array.isArray(y) ? y.join(",") : y);
    }
    function $(y) {
      return new i(w(y));
    }
    e.stringify = $;
    function w(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = w;
    function S(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new i(`.${y}`) : g`[${y}]`;
    }
    e.getProperty = S;
    function P(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new i(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = P;
    function m(y) {
      return new i(y.toString());
    }
    e.regexpCode = m;
  })(tr)), tr;
}
var rr = {}, vr;
function _r() {
  return vr || (vr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Ut();
    class p extends Error {
      constructor(h) {
        super(`CodeGen: "code" for ${h} not defined`), this.value = h.value;
      }
    }
    var i;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(i || (e.UsedValueState = i = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class g {
      constructor({ prefixes: h, parent: f } = {}) {
        this._names = {}, this._prefixes = h, this._parent = f;
      }
      toName(h) {
        return h instanceof t.Name ? h : this.name(h);
      }
      name(h) {
        return new t.Name(this._newName(h));
      }
      _newName(h) {
        const f = this._names[h] || this._nameGroup(h);
        return `${h}${f.index++}`;
      }
      _nameGroup(h) {
        var f, b;
        if (!((b = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || b === void 0) && b.has(h) || this._prefixes && !this._prefixes.has(h))
          throw new Error(`CodeGen: prefix "${h}" is not allowed in this scope`);
        return this._names[h] = { prefix: h, index: 0 };
      }
    }
    e.Scope = g;
    class r extends t.Name {
      constructor(h, f) {
        super(f), this.prefix = h;
      }
      setValue(h, { property: f, itemIndex: b }) {
        this.value = h, this.scopePath = (0, t._)`.${new t.Name(f)}[${b}]`;
      }
    }
    e.ValueScopeName = r;
    const o = (0, t._)`\n`;
    class s extends g {
      constructor(h) {
        super(h), this._values = {}, this._scope = h.scope, this.opts = { ...h, _n: h.lines ? o : t.nil };
      }
      get() {
        return this._scope;
      }
      name(h) {
        return new r(h, this._newName(h));
      }
      value(h, f) {
        var b;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(h), { prefix: w } = $, S = (b = f.key) !== null && b !== void 0 ? b : f.ref;
        let P = this._values[w];
        if (P) {
          const l = P.get(S);
          if (l)
            return l;
        } else
          P = this._values[w] = /* @__PURE__ */ new Map();
        P.set(S, $);
        const m = this._scope[w] || (this._scope[w] = []), y = m.length;
        return m[y] = f.ref, $.setValue(f, { property: w, itemIndex: y }), $;
      }
      getValue(h, f) {
        const b = this._values[h];
        if (b)
          return b.get(f);
      }
      scopeRefs(h, f = this._values) {
        return this._reduceValues(f, (b) => {
          if (b.scopePath === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return (0, t._)`${h}${b.scopePath}`;
        });
      }
      scopeCode(h = this._values, f, b) {
        return this._reduceValues(h, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, f, b);
      }
      _reduceValues(h, f, b = {}, $) {
        let w = t.nil;
        for (const S in h) {
          const P = h[S];
          if (!P)
            continue;
          const m = b[S] = b[S] || /* @__PURE__ */ new Map();
          P.forEach((y) => {
            if (m.has(y))
              return;
            m.set(y, i.Started);
            let l = f(y);
            if (l) {
              const _ = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              w = (0, t._)`${w}${_} ${y} = ${l};${this.opts._n}`;
            } else if (l = $ == null ? void 0 : $(y))
              w = (0, t._)`${w}${l}${this.opts._n}`;
            else
              throw new p(y);
            m.set(y, i.Completed);
          });
        }
        return w;
      }
    }
    e.ValueScope = s;
  })(rr)), rr;
}
var br;
function X() {
  return br || (br = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Ut(), p = /* @__PURE__ */ _r();
    var i = /* @__PURE__ */ Ut();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return i._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return i.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return i.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return i.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return i.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return i.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return i.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return i.Name;
    } });
    var g = /* @__PURE__ */ _r();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return g.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return g.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return g.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return g.varKinds;
    } }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class r {
      optimizeNodes() {
        return this;
      }
      optimizeNames(d, k) {
        return this;
      }
    }
    class o extends r {
      constructor(d, k, I) {
        super(), this.varKind = d, this.name = k, this.rhs = I;
      }
      render({ es5: d, _n: k }) {
        const I = d ? p.varKinds.var : this.varKind, H = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${H};` + k;
      }
      optimizeNames(d, k) {
        if (d[this.name.str])
          return this.rhs && (this.rhs = x(this.rhs, d, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class s extends r {
      constructor(d, k, I) {
        super(), this.lhs = d, this.rhs = k, this.sideEffects = I;
      }
      render({ _n: d }) {
        return `${this.lhs} = ${this.rhs};` + d;
      }
      optimizeNames(d, k) {
        if (!(this.lhs instanceof t.Name && !d[this.lhs.str] && !this.sideEffects))
          return this.rhs = x(this.rhs, d, k), this;
      }
      get names() {
        const d = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return K(d, this.rhs);
      }
    }
    class c extends s {
      constructor(d, k, I, H) {
        super(d, I, H), this.op = k;
      }
      render({ _n: d }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + d;
      }
    }
    class h extends r {
      constructor(d) {
        super(), this.label = d, this.names = {};
      }
      render({ _n: d }) {
        return `${this.label}:` + d;
      }
    }
    class f extends r {
      constructor(d) {
        super(), this.label = d, this.names = {};
      }
      render({ _n: d }) {
        return `break${this.label ? ` ${this.label}` : ""};` + d;
      }
    }
    class b extends r {
      constructor(d) {
        super(), this.error = d;
      }
      render({ _n: d }) {
        return `throw ${this.error};` + d;
      }
      get names() {
        return this.error.names;
      }
    }
    class $ extends r {
      constructor(d) {
        super(), this.code = d;
      }
      render({ _n: d }) {
        return `${this.code};` + d;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(d, k) {
        return this.code = x(this.code, d, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class w extends r {
      constructor(d = []) {
        super(), this.nodes = d;
      }
      render(d) {
        return this.nodes.reduce((k, I) => k + I.render(d), "");
      }
      optimizeNodes() {
        const { nodes: d } = this;
        let k = d.length;
        for (; k--; ) {
          const I = d[k].optimizeNodes();
          Array.isArray(I) ? d.splice(k, 1, ...I) : I ? d[k] = I : d.splice(k, 1);
        }
        return d.length > 0 ? this : void 0;
      }
      optimizeNames(d, k) {
        const { nodes: I } = this;
        let H = I.length;
        for (; H--; ) {
          const W = I[H];
          W.optimizeNames(d, k) || (Z(d, W.names), I.splice(H, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((d, k) => A(d, k.names), {});
      }
    }
    class S extends w {
      render(d) {
        return "{" + d._n + super.render(d) + "}" + d._n;
      }
    }
    class P extends w {
    }
    class m extends S {
    }
    m.kind = "else";
    class y extends S {
      constructor(d, k) {
        super(k), this.condition = d;
      }
      render(d) {
        let k = `if(${this.condition})` + super.render(d);
        return this.else && (k += "else " + this.else.render(d)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const d = this.condition;
        if (d === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const I = k.optimizeNodes();
          k = this.else = Array.isArray(I) ? new m(I) : I;
        }
        if (k)
          return d === !1 ? k instanceof y ? k : k.nodes : this.nodes.length ? this : new y(ie(d), k instanceof y ? [k] : k.nodes);
        if (!(d === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(d, k) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(d, k), !!(super.optimizeNames(d, k) || this.else))
          return this.condition = x(this.condition, d, k), this;
      }
      get names() {
        const d = super.names;
        return K(d, this.condition), this.else && A(d, this.else.names), d;
      }
    }
    y.kind = "if";
    class l extends S {
    }
    l.kind = "for";
    class _ extends l {
      constructor(d) {
        super(), this.iteration = d;
      }
      render(d) {
        return `for(${this.iteration})` + super.render(d);
      }
      optimizeNames(d, k) {
        if (super.optimizeNames(d, k))
          return this.iteration = x(this.iteration, d, k), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class E extends l {
      constructor(d, k, I, H) {
        super(), this.varKind = d, this.name = k, this.from = I, this.to = H;
      }
      render(d) {
        const k = d.es5 ? p.varKinds.var : this.varKind, { name: I, from: H, to: W } = this;
        return `for(${k} ${I}=${H}; ${I}<${W}; ${I}++)` + super.render(d);
      }
      get names() {
        const d = K(super.names, this.from);
        return K(d, this.to);
      }
    }
    class a extends l {
      constructor(d, k, I, H) {
        super(), this.loop = d, this.varKind = k, this.name = I, this.iterable = H;
      }
      render(d) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(d);
      }
      optimizeNames(d, k) {
        if (super.optimizeNames(d, k))
          return this.iterable = x(this.iterable, d, k), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class n extends S {
      constructor(d, k, I) {
        super(), this.name = d, this.args = k, this.async = I;
      }
      render(d) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(d);
      }
    }
    n.kind = "func";
    class u extends w {
      render(d) {
        return "return " + super.render(d);
      }
    }
    u.kind = "return";
    class v extends S {
      render(d) {
        let k = "try" + super.render(d);
        return this.catch && (k += this.catch.render(d)), this.finally && (k += this.finally.render(d)), k;
      }
      optimizeNodes() {
        var d, k;
        return super.optimizeNodes(), (d = this.catch) === null || d === void 0 || d.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(d, k) {
        var I, H;
        return super.optimizeNames(d, k), (I = this.catch) === null || I === void 0 || I.optimizeNames(d, k), (H = this.finally) === null || H === void 0 || H.optimizeNames(d, k), this;
      }
      get names() {
        const d = super.names;
        return this.catch && A(d, this.catch.names), this.finally && A(d, this.finally.names), d;
      }
    }
    class R extends S {
      constructor(d) {
        super(), this.error = d;
      }
      render(d) {
        return `catch(${this.error})` + super.render(d);
      }
    }
    R.kind = "catch";
    class C extends S {
      render(d) {
        return "finally" + super.render(d);
      }
    }
    C.kind = "finally";
    class N {
      constructor(d, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = d, this._scope = new p.Scope({ parent: d }), this._nodes = [new P()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(d) {
        return this._scope.name(d);
      }
      // reserves unique name in the external scope
      scopeName(d) {
        return this._extScope.name(d);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(d, k) {
        const I = this._extScope.value(d, k);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(d, k) {
        return this._extScope.getValue(d, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(d) {
        return this._extScope.scopeRefs(d, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(d, k, I, H) {
        const W = this._scope.toName(k);
        return I !== void 0 && H && (this._constants[W.str] = I), this._leafNode(new o(d, W, I)), W;
      }
      // `const` declaration (`var` in es5 mode)
      const(d, k, I) {
        return this._def(p.varKinds.const, d, k, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(d, k, I) {
        return this._def(p.varKinds.let, d, k, I);
      }
      // `var` declaration with optional assignment
      var(d, k, I) {
        return this._def(p.varKinds.var, d, k, I);
      }
      // assignment code
      assign(d, k, I) {
        return this._leafNode(new s(d, k, I));
      }
      // `+=` code
      add(d, k) {
        return this._leafNode(new c(d, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(d) {
        return typeof d == "function" ? d() : d !== t.nil && this._leafNode(new $(d)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...d) {
        const k = ["{"];
        for (const [I, H] of d)
          k.length > 1 && k.push(","), k.push(I), (I !== H || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, H));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(d, k, I) {
        if (this._blockNode(new y(d)), k && I)
          this.code(k).else().code(I).endIf();
        else if (k)
          this.code(k).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(d) {
        return this._elseNode(new y(d));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new m());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(y, m);
      }
      _for(d, k) {
        return this._blockNode(d), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(d, k) {
        return this._for(new _(d), k);
      }
      // `for` statement for a range of values
      forRange(d, k, I, H, W = this.opts.es5 ? p.varKinds.var : p.varKinds.let) {
        const ae = this._scope.toName(d);
        return this._for(new E(W, ae, k, I), () => H(ae));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(d, k, I, H = p.varKinds.const) {
        const W = this._scope.toName(d);
        if (this.opts.es5) {
          const ae = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${ae}.length`, (ee) => {
            this.var(W, (0, t._)`${ae}[${ee}]`), I(W);
          });
        }
        return this._for(new a("of", H, W, k), () => I(W));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(d, k, I, H = this.opts.es5 ? p.varKinds.var : p.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(d, (0, t._)`Object.keys(${k})`, I);
        const W = this._scope.toName(d);
        return this._for(new a("in", H, W, k), () => I(W));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(l);
      }
      // `label` statement
      label(d) {
        return this._leafNode(new h(d));
      }
      // `break` statement
      break(d) {
        return this._leafNode(new f(d));
      }
      // `return` statement
      return(d) {
        const k = new u();
        if (this._blockNode(k), this.code(d), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(u);
      }
      // `try` statement
      try(d, k, I) {
        if (!k && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const H = new v();
        if (this._blockNode(H), this.code(d), k) {
          const W = this.name("e");
          this._currNode = H.catch = new R(W), k(W);
        }
        return I && (this._currNode = H.finally = new C(), this.code(I)), this._endBlockNode(R, C);
      }
      // `throw` statement
      throw(d) {
        return this._leafNode(new b(d));
      }
      // start self-balancing block
      block(d, k) {
        return this._blockStarts.push(this._nodes.length), d && this.code(d).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock(d) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - k;
        if (I < 0 || d !== void 0 && I !== d)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${d} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(d, k = t.nil, I, H) {
        return this._blockNode(new n(d, k, I)), H && this.code(H).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(n);
      }
      optimize(d = 1) {
        for (; d-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(d) {
        return this._currNode.nodes.push(d), this;
      }
      _blockNode(d) {
        this._currNode.nodes.push(d), this._nodes.push(d);
      }
      _endBlockNode(d, k) {
        const I = this._currNode;
        if (I instanceof d || k && I instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${d.kind}/${k.kind}` : d.kind}"`);
      }
      _elseNode(d) {
        const k = this._currNode;
        if (!(k instanceof y))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = d, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const d = this._nodes;
        return d[d.length - 1];
      }
      set _currNode(d) {
        const k = this._nodes;
        k[k.length - 1] = d;
      }
    }
    e.CodeGen = N;
    function A(D, d) {
      for (const k in d)
        D[k] = (D[k] || 0) + (d[k] || 0);
      return D;
    }
    function K(D, d) {
      return d instanceof t._CodeOrName ? A(D, d.names) : D;
    }
    function x(D, d, k) {
      if (D instanceof t.Name)
        return I(D);
      if (!H(D))
        return D;
      return new t._Code(D._items.reduce((W, ae) => (ae instanceof t.Name && (ae = I(ae)), ae instanceof t._Code ? W.push(...ae._items) : W.push(ae), W), []));
      function I(W) {
        const ae = k[W.str];
        return ae === void 0 || d[W.str] !== 1 ? W : (delete d[W.str], ae);
      }
      function H(W) {
        return W instanceof t._Code && W._items.some((ae) => ae instanceof t.Name && d[ae.str] === 1 && k[ae.str] !== void 0);
      }
    }
    function Z(D, d) {
      for (const k in d)
        D[k] = (D[k] || 0) - (d[k] || 0);
    }
    function ie(D) {
      return typeof D == "boolean" || typeof D == "number" || D === null ? !D : (0, t._)`!${L(D)}`;
    }
    e.not = ie;
    const ye = T(e.operators.AND);
    function re(...D) {
      return D.reduce(ye);
    }
    e.and = re;
    const je = T(e.operators.OR);
    function U(...D) {
      return D.reduce(je);
    }
    e.or = U;
    function T(D) {
      return (d, k) => d === t.nil ? k : k === t.nil ? d : (0, t._)`${L(d)} ${D} ${L(k)}`;
    }
    function L(D) {
      return D instanceof t.Name ? D : (0, t._)`(${D})`;
    }
  })(er)), er;
}
var J = {}, $r;
function te() {
  if ($r) return J;
  $r = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ Ut();
  function p(a) {
    const n = {};
    for (const u of a)
      n[u] = !0;
    return n;
  }
  J.toHash = p;
  function i(a, n) {
    return typeof n == "boolean" ? n : Object.keys(n).length === 0 ? !0 : (g(a, n), !r(n, a.self.RULES.all));
  }
  J.alwaysValidSchema = i;
  function g(a, n = a.schema) {
    const { opts: u, self: v } = a;
    if (!u.strictSchema || typeof n == "boolean")
      return;
    const R = v.RULES.keywords;
    for (const C in n)
      R[C] || E(a, `unknown keyword: "${C}"`);
  }
  J.checkUnknownRules = g;
  function r(a, n) {
    if (typeof a == "boolean")
      return !a;
    for (const u in a)
      if (n[u])
        return !0;
    return !1;
  }
  J.schemaHasRules = r;
  function o(a, n) {
    if (typeof a == "boolean")
      return !a;
    for (const u in a)
      if (u !== "$ref" && n.all[u])
        return !0;
    return !1;
  }
  J.schemaHasRulesButRef = o;
  function s({ topSchemaRef: a, schemaPath: n }, u, v, R) {
    if (!R) {
      if (typeof u == "number" || typeof u == "boolean")
        return u;
      if (typeof u == "string")
        return (0, e._)`${u}`;
    }
    return (0, e._)`${a}${n}${(0, e.getProperty)(v)}`;
  }
  J.schemaRefOrVal = s;
  function c(a) {
    return b(decodeURIComponent(a));
  }
  J.unescapeFragment = c;
  function h(a) {
    return encodeURIComponent(f(a));
  }
  J.escapeFragment = h;
  function f(a) {
    return typeof a == "number" ? `${a}` : a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  J.escapeJsonPointer = f;
  function b(a) {
    return a.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  J.unescapeJsonPointer = b;
  function $(a, n) {
    if (Array.isArray(a))
      for (const u of a)
        n(u);
    else
      n(a);
  }
  J.eachItem = $;
  function w({ mergeNames: a, mergeToName: n, mergeValues: u, resultToName: v }) {
    return (R, C, N, A) => {
      const K = N === void 0 ? C : N instanceof e.Name ? (C instanceof e.Name ? a(R, C, N) : n(R, C, N), N) : C instanceof e.Name ? (n(R, N, C), C) : u(C, N);
      return A === e.Name && !(K instanceof e.Name) ? v(R, K) : K;
    };
  }
  J.mergeEvaluated = {
    props: w({
      mergeNames: (a, n, u) => a.if((0, e._)`${u} !== true && ${n} !== undefined`, () => {
        a.if((0, e._)`${n} === true`, () => a.assign(u, !0), () => a.assign(u, (0, e._)`${u} || {}`).code((0, e._)`Object.assign(${u}, ${n})`));
      }),
      mergeToName: (a, n, u) => a.if((0, e._)`${u} !== true`, () => {
        n === !0 ? a.assign(u, !0) : (a.assign(u, (0, e._)`${u} || {}`), P(a, u, n));
      }),
      mergeValues: (a, n) => a === !0 ? !0 : { ...a, ...n },
      resultToName: S
    }),
    items: w({
      mergeNames: (a, n, u) => a.if((0, e._)`${u} !== true && ${n} !== undefined`, () => a.assign(u, (0, e._)`${n} === true ? true : ${u} > ${n} ? ${u} : ${n}`)),
      mergeToName: (a, n, u) => a.if((0, e._)`${u} !== true`, () => a.assign(u, n === !0 ? !0 : (0, e._)`${u} > ${n} ? ${u} : ${n}`)),
      mergeValues: (a, n) => a === !0 ? !0 : Math.max(a, n),
      resultToName: (a, n) => a.var("items", n)
    })
  };
  function S(a, n) {
    if (n === !0)
      return a.var("props", !0);
    const u = a.var("props", (0, e._)`{}`);
    return n !== void 0 && P(a, u, n), u;
  }
  J.evaluatedPropsToName = S;
  function P(a, n, u) {
    Object.keys(u).forEach((v) => a.assign((0, e._)`${n}${(0, e.getProperty)(v)}`, !0));
  }
  J.setEvaluated = P;
  const m = {};
  function y(a, n) {
    return a.scopeValue("func", {
      ref: n,
      code: m[n.code] || (m[n.code] = new t._Code(n.code))
    });
  }
  J.useFunc = y;
  var l;
  (function(a) {
    a[a.Num = 0] = "Num", a[a.Str = 1] = "Str";
  })(l || (J.Type = l = {}));
  function _(a, n, u) {
    if (a instanceof e.Name) {
      const v = n === l.Num;
      return u ? v ? (0, e._)`"[" + ${a} + "]"` : (0, e._)`"['" + ${a} + "']"` : v ? (0, e._)`"/" + ${a}` : (0, e._)`"/" + ${a}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return u ? (0, e.getProperty)(a).toString() : "/" + f(a);
  }
  J.getErrorPath = _;
  function E(a, n, u = a.opts.strictSchema) {
    if (u) {
      if (n = `strict mode: ${n}`, u === !0)
        throw new Error(n);
      a.self.logger.warn(n);
    }
  }
  return J.checkStrictMode = E, J;
}
var Ze = {}, kr;
function Ie() {
  if (kr) return Ze;
  kr = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return Ze.default = t, Ze;
}
var wr;
function Ht() {
  return wr || (wr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ X(), p = /* @__PURE__ */ te(), i = /* @__PURE__ */ Ie();
    e.keywordError = {
      message: ({ keyword: m }) => (0, t.str)`must pass "${m}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: m, schemaType: y }) => y ? (0, t.str)`"${m}" keyword must be ${y} ($data)` : (0, t.str)`"${m}" keyword is invalid ($data)`
    };
    function g(m, y = e.keywordError, l, _) {
      const { it: E } = m, { gen: a, compositeRule: n, allErrors: u } = E, v = b(m, y, l);
      _ ?? (n || u) ? c(a, v) : h(E, (0, t._)`[${v}]`);
    }
    e.reportError = g;
    function r(m, y = e.keywordError, l) {
      const { it: _ } = m, { gen: E, compositeRule: a, allErrors: n } = _, u = b(m, y, l);
      c(E, u), a || n || h(_, i.default.vErrors);
    }
    e.reportExtraError = r;
    function o(m, y) {
      m.assign(i.default.errors, y), m.if((0, t._)`${i.default.vErrors} !== null`, () => m.if(y, () => m.assign((0, t._)`${i.default.vErrors}.length`, y), () => m.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = o;
    function s({ gen: m, keyword: y, schemaValue: l, data: _, errsCount: E, it: a }) {
      if (E === void 0)
        throw new Error("ajv implementation error");
      const n = m.name("err");
      m.forRange("i", E, i.default.errors, (u) => {
        m.const(n, (0, t._)`${i.default.vErrors}[${u}]`), m.if((0, t._)`${n}.instancePath === undefined`, () => m.assign((0, t._)`${n}.instancePath`, (0, t.strConcat)(i.default.instancePath, a.errorPath))), m.assign((0, t._)`${n}.schemaPath`, (0, t.str)`${a.errSchemaPath}/${y}`), a.opts.verbose && (m.assign((0, t._)`${n}.schema`, l), m.assign((0, t._)`${n}.data`, _));
      });
    }
    e.extendErrors = s;
    function c(m, y) {
      const l = m.const("err", y);
      m.if((0, t._)`${i.default.vErrors} === null`, () => m.assign(i.default.vErrors, (0, t._)`[${l}]`), (0, t._)`${i.default.vErrors}.push(${l})`), m.code((0, t._)`${i.default.errors}++`);
    }
    function h(m, y) {
      const { gen: l, validateName: _, schemaEnv: E } = m;
      E.$async ? l.throw((0, t._)`new ${m.ValidationError}(${y})`) : (l.assign((0, t._)`${_}.errors`, y), l.return(!1));
    }
    const f = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function b(m, y, l) {
      const { createErrors: _ } = m.it;
      return _ === !1 ? (0, t._)`{}` : $(m, y, l);
    }
    function $(m, y, l = {}) {
      const { gen: _, it: E } = m, a = [
        w(E, l),
        S(m, l)
      ];
      return P(m, y, a), _.object(...a);
    }
    function w({ errorPath: m }, { instancePath: y }) {
      const l = y ? (0, t.str)`${m}${(0, p.getErrorPath)(y, p.Type.Str)}` : m;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, l)];
    }
    function S({ keyword: m, it: { errSchemaPath: y } }, { schemaPath: l, parentSchema: _ }) {
      let E = _ ? y : (0, t.str)`${y}/${m}`;
      return l && (E = (0, t.str)`${E}${(0, p.getErrorPath)(l, p.Type.Str)}`), [f.schemaPath, E];
    }
    function P(m, { params: y, message: l }, _) {
      const { keyword: E, data: a, schemaValue: n, it: u } = m, { opts: v, propertyName: R, topSchemaRef: C, schemaPath: N } = u;
      _.push([f.keyword, E], [f.params, typeof y == "function" ? y(m) : y || (0, t._)`{}`]), v.messages && _.push([f.message, typeof l == "function" ? l(m) : l]), v.verbose && _.push([f.schema, n], [f.parentSchema, (0, t._)`${C}${N}`], [i.default.data, a]), R && _.push([f.propertyName, R]);
    }
  })(Zt)), Zt;
}
var Sr;
function oo() {
  if (Sr) return qe;
  Sr = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.boolOrEmptySchema = qe.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Ht(), t = /* @__PURE__ */ X(), p = /* @__PURE__ */ Ie(), i = {
    message: "boolean schema is false"
  };
  function g(s) {
    const { gen: c, schema: h, validateName: f } = s;
    h === !1 ? o(s, !1) : typeof h == "object" && h.$async === !0 ? c.return(p.default.data) : (c.assign((0, t._)`${f}.errors`, null), c.return(!0));
  }
  qe.topBoolOrEmptySchema = g;
  function r(s, c) {
    const { gen: h, schema: f } = s;
    f === !1 ? (h.var(c, !1), o(s)) : h.var(c, !0);
  }
  qe.boolOrEmptySchema = r;
  function o(s, c) {
    const { gen: h, data: f } = s, b = {
      gen: h,
      keyword: "false schema",
      data: f,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: s
    };
    (0, e.reportError)(b, i, void 0, c);
  }
  return qe;
}
var he = {}, Ae = {}, Er;
function Ia() {
  if (Er) return Ae;
  Er = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.getRules = Ae.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function p(g) {
    return typeof g == "string" && t.has(g);
  }
  Ae.isJSONType = p;
  function i() {
    const g = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...g, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, g.number, g.string, g.array, g.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ae.getRules = i, Ae;
}
var Pe = {}, Pr;
function qa() {
  if (Pr) return Pe;
  Pr = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.shouldUseRule = Pe.shouldUseGroup = Pe.schemaHasRulesForType = void 0;
  function e({ schema: i, self: g }, r) {
    const o = g.RULES.types[r];
    return o && o !== !0 && t(i, o);
  }
  Pe.schemaHasRulesForType = e;
  function t(i, g) {
    return g.rules.some((r) => p(i, r));
  }
  Pe.shouldUseGroup = t;
  function p(i, g) {
    var r;
    return i[g.keyword] !== void 0 || ((r = g.definition.implements) === null || r === void 0 ? void 0 : r.some((o) => i[o] !== void 0));
  }
  return Pe.shouldUseRule = p, Pe;
}
var Rr;
function zt() {
  if (Rr) return he;
  Rr = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.reportTypeError = he.checkDataTypes = he.checkDataType = he.coerceAndCheckDataType = he.getJSONTypes = he.getSchemaTypes = he.DataType = void 0;
  const e = /* @__PURE__ */ Ia(), t = /* @__PURE__ */ qa(), p = /* @__PURE__ */ Ht(), i = /* @__PURE__ */ X(), g = /* @__PURE__ */ te();
  var r;
  (function(l) {
    l[l.Correct = 0] = "Correct", l[l.Wrong = 1] = "Wrong";
  })(r || (he.DataType = r = {}));
  function o(l) {
    const _ = s(l.type);
    if (_.includes("null")) {
      if (l.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!_.length && l.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      l.nullable === !0 && _.push("null");
    }
    return _;
  }
  he.getSchemaTypes = o;
  function s(l) {
    const _ = Array.isArray(l) ? l : l ? [l] : [];
    if (_.every(e.isJSONType))
      return _;
    throw new Error("type must be JSONType or JSONType[]: " + _.join(","));
  }
  he.getJSONTypes = s;
  function c(l, _) {
    const { gen: E, data: a, opts: n } = l, u = f(_, n.coerceTypes), v = _.length > 0 && !(u.length === 0 && _.length === 1 && (0, t.schemaHasRulesForType)(l, _[0]));
    if (v) {
      const R = S(_, a, n.strictNumbers, r.Wrong);
      E.if(R, () => {
        u.length ? b(l, _, u) : m(l);
      });
    }
    return v;
  }
  he.coerceAndCheckDataType = c;
  const h = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(l, _) {
    return _ ? l.filter((E) => h.has(E) || _ === "array" && E === "array") : [];
  }
  function b(l, _, E) {
    const { gen: a, data: n, opts: u } = l, v = a.let("dataType", (0, i._)`typeof ${n}`), R = a.let("coerced", (0, i._)`undefined`);
    u.coerceTypes === "array" && a.if((0, i._)`${v} == 'object' && Array.isArray(${n}) && ${n}.length == 1`, () => a.assign(n, (0, i._)`${n}[0]`).assign(v, (0, i._)`typeof ${n}`).if(S(_, n, u.strictNumbers), () => a.assign(R, n))), a.if((0, i._)`${R} !== undefined`);
    for (const N of E)
      (h.has(N) || N === "array" && u.coerceTypes === "array") && C(N);
    a.else(), m(l), a.endIf(), a.if((0, i._)`${R} !== undefined`, () => {
      a.assign(n, R), $(l, R);
    });
    function C(N) {
      switch (N) {
        case "string":
          a.elseIf((0, i._)`${v} == "number" || ${v} == "boolean"`).assign(R, (0, i._)`"" + ${n}`).elseIf((0, i._)`${n} === null`).assign(R, (0, i._)`""`);
          return;
        case "number":
          a.elseIf((0, i._)`${v} == "boolean" || ${n} === null
              || (${v} == "string" && ${n} && ${n} == +${n})`).assign(R, (0, i._)`+${n}`);
          return;
        case "integer":
          a.elseIf((0, i._)`${v} === "boolean" || ${n} === null
              || (${v} === "string" && ${n} && ${n} == +${n} && !(${n} % 1))`).assign(R, (0, i._)`+${n}`);
          return;
        case "boolean":
          a.elseIf((0, i._)`${n} === "false" || ${n} === 0 || ${n} === null`).assign(R, !1).elseIf((0, i._)`${n} === "true" || ${n} === 1`).assign(R, !0);
          return;
        case "null":
          a.elseIf((0, i._)`${n} === "" || ${n} === 0 || ${n} === false`), a.assign(R, null);
          return;
        case "array":
          a.elseIf((0, i._)`${v} === "string" || ${v} === "number"
              || ${v} === "boolean" || ${n} === null`).assign(R, (0, i._)`[${n}]`);
      }
    }
  }
  function $({ gen: l, parentData: _, parentDataProperty: E }, a) {
    l.if((0, i._)`${_} !== undefined`, () => l.assign((0, i._)`${_}[${E}]`, a));
  }
  function w(l, _, E, a = r.Correct) {
    const n = a === r.Correct ? i.operators.EQ : i.operators.NEQ;
    let u;
    switch (l) {
      case "null":
        return (0, i._)`${_} ${n} null`;
      case "array":
        u = (0, i._)`Array.isArray(${_})`;
        break;
      case "object":
        u = (0, i._)`${_} && typeof ${_} == "object" && !Array.isArray(${_})`;
        break;
      case "integer":
        u = v((0, i._)`!(${_} % 1) && !isNaN(${_})`);
        break;
      case "number":
        u = v();
        break;
      default:
        return (0, i._)`typeof ${_} ${n} ${l}`;
    }
    return a === r.Correct ? u : (0, i.not)(u);
    function v(R = i.nil) {
      return (0, i.and)((0, i._)`typeof ${_} == "number"`, R, E ? (0, i._)`isFinite(${_})` : i.nil);
    }
  }
  he.checkDataType = w;
  function S(l, _, E, a) {
    if (l.length === 1)
      return w(l[0], _, E, a);
    let n;
    const u = (0, g.toHash)(l);
    if (u.array && u.object) {
      const v = (0, i._)`typeof ${_} != "object"`;
      n = u.null ? v : (0, i._)`!${_} || ${v}`, delete u.null, delete u.array, delete u.object;
    } else
      n = i.nil;
    u.number && delete u.integer;
    for (const v in u)
      n = (0, i.and)(n, w(v, _, E, a));
    return n;
  }
  he.checkDataTypes = S;
  const P = {
    message: ({ schema: l }) => `must be ${l}`,
    params: ({ schema: l, schemaValue: _ }) => typeof l == "string" ? (0, i._)`{type: ${l}}` : (0, i._)`{type: ${_}}`
  };
  function m(l) {
    const _ = y(l);
    (0, p.reportError)(_, P);
  }
  he.reportTypeError = m;
  function y(l) {
    const { gen: _, data: E, schema: a } = l, n = (0, g.schemaRefOrVal)(l, a, "type");
    return {
      gen: _,
      keyword: "type",
      data: E,
      schema: a.type,
      schemaCode: n,
      schemaValue: n,
      parentSchema: a,
      params: {},
      it: l
    };
  }
  return he;
}
var We = {}, Or;
function io() {
  if (Or) return We;
  Or = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.assignDefaults = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te();
  function p(g, r) {
    const { properties: o, items: s } = g.schema;
    if (r === "object" && o)
      for (const c in o)
        i(g, c, o[c].default);
    else r === "array" && Array.isArray(s) && s.forEach((c, h) => i(g, h, c.default));
  }
  We.assignDefaults = p;
  function i(g, r, o) {
    const { gen: s, compositeRule: c, data: h, opts: f } = g;
    if (o === void 0)
      return;
    const b = (0, e._)`${h}${(0, e.getProperty)(r)}`;
    if (c) {
      (0, t.checkStrictMode)(g, `default is ignored for: ${b}`);
      return;
    }
    let $ = (0, e._)`${b} === undefined`;
    f.useDefaults === "empty" && ($ = (0, e._)`${$} || ${b} === null || ${b} === ""`), s.if($, (0, e._)`${b} = ${(0, e.stringify)(o)}`);
  }
  return We;
}
var we = {}, ne = {}, Nr;
function Se() {
  if (Nr) return ne;
  Nr = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.validateUnion = ne.validateArray = ne.usePattern = ne.callValidateCode = ne.schemaProperties = ne.allSchemaProperties = ne.noPropertyInData = ne.propertyInData = ne.isOwnProperty = ne.hasPropFunc = ne.reportMissingProp = ne.checkMissingProp = ne.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), p = /* @__PURE__ */ Ie(), i = /* @__PURE__ */ te();
  function g(l, _) {
    const { gen: E, data: a, it: n } = l;
    E.if(f(E, a, _, n.opts.ownProperties), () => {
      l.setParams({ missingProperty: (0, e._)`${_}` }, !0), l.error();
    });
  }
  ne.checkReportMissingProp = g;
  function r({ gen: l, data: _, it: { opts: E } }, a, n) {
    return (0, e.or)(...a.map((u) => (0, e.and)(f(l, _, u, E.ownProperties), (0, e._)`${n} = ${u}`)));
  }
  ne.checkMissingProp = r;
  function o(l, _) {
    l.setParams({ missingProperty: _ }, !0), l.error();
  }
  ne.reportMissingProp = o;
  function s(l) {
    return l.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ne.hasPropFunc = s;
  function c(l, _, E) {
    return (0, e._)`${s(l)}.call(${_}, ${E})`;
  }
  ne.isOwnProperty = c;
  function h(l, _, E, a) {
    const n = (0, e._)`${_}${(0, e.getProperty)(E)} !== undefined`;
    return a ? (0, e._)`${n} && ${c(l, _, E)}` : n;
  }
  ne.propertyInData = h;
  function f(l, _, E, a) {
    const n = (0, e._)`${_}${(0, e.getProperty)(E)} === undefined`;
    return a ? (0, e.or)(n, (0, e.not)(c(l, _, E))) : n;
  }
  ne.noPropertyInData = f;
  function b(l) {
    return l ? Object.keys(l).filter((_) => _ !== "__proto__") : [];
  }
  ne.allSchemaProperties = b;
  function $(l, _) {
    return b(_).filter((E) => !(0, t.alwaysValidSchema)(l, _[E]));
  }
  ne.schemaProperties = $;
  function w({ schemaCode: l, data: _, it: { gen: E, topSchemaRef: a, schemaPath: n, errorPath: u }, it: v }, R, C, N) {
    const A = N ? (0, e._)`${l}, ${_}, ${a}${n}` : _, K = [
      [p.default.instancePath, (0, e.strConcat)(p.default.instancePath, u)],
      [p.default.parentData, v.parentData],
      [p.default.parentDataProperty, v.parentDataProperty],
      [p.default.rootData, p.default.rootData]
    ];
    v.opts.dynamicRef && K.push([p.default.dynamicAnchors, p.default.dynamicAnchors]);
    const x = (0, e._)`${A}, ${E.object(...K)}`;
    return C !== e.nil ? (0, e._)`${R}.call(${C}, ${x})` : (0, e._)`${R}(${x})`;
  }
  ne.callValidateCode = w;
  const S = (0, e._)`new RegExp`;
  function P({ gen: l, it: { opts: _ } }, E) {
    const a = _.unicodeRegExp ? "u" : "", { regExp: n } = _.code, u = n(E, a);
    return l.scopeValue("pattern", {
      key: u.toString(),
      ref: u,
      code: (0, e._)`${n.code === "new RegExp" ? S : (0, i.useFunc)(l, n)}(${E}, ${a})`
    });
  }
  ne.usePattern = P;
  function m(l) {
    const { gen: _, data: E, keyword: a, it: n } = l, u = _.name("valid");
    if (n.allErrors) {
      const R = _.let("valid", !0);
      return v(() => _.assign(R, !1)), R;
    }
    return _.var(u, !0), v(() => _.break()), u;
    function v(R) {
      const C = _.const("len", (0, e._)`${E}.length`);
      _.forRange("i", 0, C, (N) => {
        l.subschema({
          keyword: a,
          dataProp: N,
          dataPropType: t.Type.Num
        }, u), _.if((0, e.not)(u), R);
      });
    }
  }
  ne.validateArray = m;
  function y(l) {
    const { gen: _, schema: E, keyword: a, it: n } = l;
    if (!Array.isArray(E))
      throw new Error("ajv implementation error");
    if (E.some((C) => (0, t.alwaysValidSchema)(n, C)) && !n.opts.unevaluated)
      return;
    const v = _.let("valid", !1), R = _.name("_valid");
    _.block(() => E.forEach((C, N) => {
      const A = l.subschema({
        keyword: a,
        schemaProp: N,
        compositeRule: !0
      }, R);
      _.assign(v, (0, e._)`${v} || ${R}`), l.mergeValidEvaluated(A, R) || _.if((0, e.not)(v));
    })), l.result(v, () => l.reset(), () => l.error(!0));
  }
  return ne.validateUnion = y, ne;
}
var Tr;
function lo() {
  if (Tr) return we;
  Tr = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.validateKeywordUsage = we.validSchemaType = we.funcKeywordCode = we.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ Ie(), p = /* @__PURE__ */ Se(), i = /* @__PURE__ */ Ht();
  function g($, w) {
    const { gen: S, keyword: P, schema: m, parentSchema: y, it: l } = $, _ = w.macro.call(l.self, m, y, l), E = h(S, P, _);
    l.opts.validateSchema !== !1 && l.self.validateSchema(_, !0);
    const a = S.name("valid");
    $.subschema({
      schema: _,
      schemaPath: e.nil,
      errSchemaPath: `${l.errSchemaPath}/${P}`,
      topSchemaRef: E,
      compositeRule: !0
    }, a), $.pass(a, () => $.error(!0));
  }
  we.macroKeywordCode = g;
  function r($, w) {
    var S;
    const { gen: P, keyword: m, schema: y, parentSchema: l, $data: _, it: E } = $;
    c(E, w);
    const a = !_ && w.compile ? w.compile.call(E.self, y, l, E) : w.validate, n = h(P, m, a), u = P.let("valid");
    $.block$data(u, v), $.ok((S = w.valid) !== null && S !== void 0 ? S : u);
    function v() {
      if (w.errors === !1)
        N(), w.modifying && o($), A(() => $.error());
      else {
        const K = w.async ? R() : C();
        w.modifying && o($), A(() => s($, K));
      }
    }
    function R() {
      const K = P.let("ruleErrs", null);
      return P.try(() => N((0, e._)`await `), (x) => P.assign(u, !1).if((0, e._)`${x} instanceof ${E.ValidationError}`, () => P.assign(K, (0, e._)`${x}.errors`), () => P.throw(x))), K;
    }
    function C() {
      const K = (0, e._)`${n}.errors`;
      return P.assign(K, null), N(e.nil), K;
    }
    function N(K = w.async ? (0, e._)`await ` : e.nil) {
      const x = E.opts.passContext ? t.default.this : t.default.self, Z = !("compile" in w && !_ || w.schema === !1);
      P.assign(u, (0, e._)`${K}${(0, p.callValidateCode)($, n, x, Z)}`, w.modifying);
    }
    function A(K) {
      var x;
      P.if((0, e.not)((x = w.valid) !== null && x !== void 0 ? x : u), K);
    }
  }
  we.funcKeywordCode = r;
  function o($) {
    const { gen: w, data: S, it: P } = $;
    w.if(P.parentData, () => w.assign(S, (0, e._)`${P.parentData}[${P.parentDataProperty}]`));
  }
  function s($, w) {
    const { gen: S } = $;
    S.if((0, e._)`Array.isArray(${w})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)($);
    }, () => $.error());
  }
  function c({ schemaEnv: $ }, w) {
    if (w.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function h($, w, S) {
    if (S === void 0)
      throw new Error(`keyword "${w}" failed to compile`);
    return $.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function f($, w, S = !1) {
    return !w.length || w.some((P) => P === "array" ? Array.isArray($) : P === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == P || S && typeof $ > "u");
  }
  we.validSchemaType = f;
  function b({ schema: $, opts: w, self: S, errSchemaPath: P }, m, y) {
    if (Array.isArray(m.keyword) ? !m.keyword.includes(y) : m.keyword !== y)
      throw new Error("ajv implementation error");
    const l = m.dependencies;
    if (l != null && l.some((_) => !Object.prototype.hasOwnProperty.call($, _)))
      throw new Error(`parent schema must have dependencies of ${y}: ${l.join(",")}`);
    if (m.validateSchema && !m.validateSchema($[y])) {
      const E = `keyword "${y}" value is invalid at path "${P}": ` + S.errorsText(m.validateSchema.errors);
      if (w.validateSchema === "log")
        S.logger.error(E);
      else
        throw new Error(E);
    }
  }
  return we.validateKeywordUsage = b, we;
}
var Re = {}, jr;
function co() {
  if (jr) return Re;
  jr = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.extendSubschemaMode = Re.extendSubschemaData = Re.getSubschema = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te();
  function p(r, { keyword: o, schemaProp: s, schema: c, schemaPath: h, errSchemaPath: f, topSchemaRef: b }) {
    if (o !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (o !== void 0) {
      const $ = r.schema[o];
      return s === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(o)}`,
        errSchemaPath: `${r.errSchemaPath}/${o}`
      } : {
        schema: $[s],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(o)}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${o}/${(0, t.escapeFragment)(s)}`
      };
    }
    if (c !== void 0) {
      if (h === void 0 || f === void 0 || b === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: h,
        topSchemaRef: b,
        errSchemaPath: f
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Re.getSubschema = p;
  function i(r, o, { dataProp: s, dataPropType: c, data: h, dataTypes: f, propertyName: b }) {
    if (h !== void 0 && s !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = o;
    if (s !== void 0) {
      const { errorPath: S, dataPathArr: P, opts: m } = o, y = $.let("data", (0, e._)`${o.data}${(0, e.getProperty)(s)}`, !0);
      w(y), r.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(s, c, m.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${s}`, r.dataPathArr = [...P, r.parentDataProperty];
    }
    if (h !== void 0) {
      const S = h instanceof e.Name ? h : $.let("data", h, !0);
      w(S), b !== void 0 && (r.propertyName = b);
    }
    f && (r.dataTypes = f);
    function w(S) {
      r.data = S, r.dataLevel = o.dataLevel + 1, r.dataTypes = [], o.definedProperties = /* @__PURE__ */ new Set(), r.parentData = o.data, r.dataNames = [...o.dataNames, S];
    }
  }
  Re.extendSubschemaData = i;
  function g(r, { jtdDiscriminator: o, jtdMetadata: s, compositeRule: c, createErrors: h, allErrors: f }) {
    c !== void 0 && (r.compositeRule = c), h !== void 0 && (r.createErrors = h), f !== void 0 && (r.allErrors = f), r.jtdDiscriminator = o, r.jtdMetadata = s;
  }
  return Re.extendSubschemaMode = g, Re;
}
var pe = {}, ar, Cr;
function Aa() {
  return Cr || (Cr = 1, ar = function e(t, p) {
    if (t === p) return !0;
    if (t && p && typeof t == "object" && typeof p == "object") {
      if (t.constructor !== p.constructor) return !1;
      var i, g, r;
      if (Array.isArray(t)) {
        if (i = t.length, i != p.length) return !1;
        for (g = i; g-- !== 0; )
          if (!e(t[g], p[g])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === p.source && t.flags === p.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === p.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === p.toString();
      if (r = Object.keys(t), i = r.length, i !== Object.keys(p).length) return !1;
      for (g = i; g-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(p, r[g])) return !1;
      for (g = i; g-- !== 0; ) {
        var o = r[g];
        if (!e(t[o], p[o])) return !1;
      }
      return !0;
    }
    return t !== t && p !== p;
  }), ar;
}
var sr = { exports: {} }, Dr;
function uo() {
  if (Dr) return sr.exports;
  Dr = 1;
  var e = sr.exports = function(i, g, r) {
    typeof g == "function" && (r = g, g = {}), r = g.cb || r;
    var o = typeof r == "function" ? r : r.pre || function() {
    }, s = r.post || function() {
    };
    t(g, o, s, i, "", i);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function t(i, g, r, o, s, c, h, f, b, $) {
    if (o && typeof o == "object" && !Array.isArray(o)) {
      g(o, s, c, h, f, b, $);
      for (var w in o) {
        var S = o[w];
        if (Array.isArray(S)) {
          if (w in e.arrayKeywords)
            for (var P = 0; P < S.length; P++)
              t(i, g, r, S[P], s + "/" + w + "/" + P, c, s, w, o, P);
        } else if (w in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var m in S)
              t(i, g, r, S[m], s + "/" + w + "/" + p(m), c, s, w, o, m);
        } else (w in e.keywords || i.allKeys && !(w in e.skipKeywords)) && t(i, g, r, S, s + "/" + w, c, s, w, o);
      }
      r(o, s, c, h, f, b, $);
    }
  }
  function p(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return sr.exports;
}
var Ir;
function xt() {
  if (Ir) return pe;
  Ir = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.getSchemaRefs = pe.resolveUrl = pe.normalizeId = pe._getFullPath = pe.getFullPath = pe.inlineRef = void 0;
  const e = /* @__PURE__ */ te(), t = Aa(), p = uo(), i = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function g(P, m = !0) {
    return typeof P == "boolean" ? !0 : m === !0 ? !o(P) : m ? s(P) <= m : !1;
  }
  pe.inlineRef = g;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function o(P) {
    for (const m in P) {
      if (r.has(m))
        return !0;
      const y = P[m];
      if (Array.isArray(y) && y.some(o) || typeof y == "object" && o(y))
        return !0;
    }
    return !1;
  }
  function s(P) {
    let m = 0;
    for (const y in P) {
      if (y === "$ref")
        return 1 / 0;
      if (m++, !i.has(y) && (typeof P[y] == "object" && (0, e.eachItem)(P[y], (l) => m += s(l)), m === 1 / 0))
        return 1 / 0;
    }
    return m;
  }
  function c(P, m = "", y) {
    y !== !1 && (m = b(m));
    const l = P.parse(m);
    return h(P, l);
  }
  pe.getFullPath = c;
  function h(P, m) {
    return P.serialize(m).split("#")[0] + "#";
  }
  pe._getFullPath = h;
  const f = /#\/?$/;
  function b(P) {
    return P ? P.replace(f, "") : "";
  }
  pe.normalizeId = b;
  function $(P, m, y) {
    return y = b(y), P.resolve(m, y);
  }
  pe.resolveUrl = $;
  const w = /^[a-z_][-a-z0-9._]*$/i;
  function S(P, m) {
    if (typeof P == "boolean")
      return {};
    const { schemaId: y, uriResolver: l } = this.opts, _ = b(P[y] || m), E = { "": _ }, a = c(l, _, !1), n = {}, u = /* @__PURE__ */ new Set();
    return p(P, { allKeys: !0 }, (C, N, A, K) => {
      if (K === void 0)
        return;
      const x = a + N;
      let Z = E[K];
      typeof C[y] == "string" && (Z = ie.call(this, C[y])), ye.call(this, C.$anchor), ye.call(this, C.$dynamicAnchor), E[N] = Z;
      function ie(re) {
        const je = this.opts.uriResolver.resolve;
        if (re = b(Z ? je(Z, re) : re), u.has(re))
          throw R(re);
        u.add(re);
        let U = this.refs[re];
        return typeof U == "string" && (U = this.refs[U]), typeof U == "object" ? v(C, U.schema, re) : re !== b(x) && (re[0] === "#" ? (v(C, n[re], re), n[re] = C) : this.refs[re] = x), re;
      }
      function ye(re) {
        if (typeof re == "string") {
          if (!w.test(re))
            throw new Error(`invalid anchor "${re}"`);
          ie.call(this, `#${re}`);
        }
      }
    }), n;
    function v(C, N, A) {
      if (N !== void 0 && !t(C, N))
        throw R(A);
    }
    function R(C) {
      return new Error(`reference "${C}" resolves to more than one schema`);
    }
  }
  return pe.getSchemaRefs = S, pe;
}
var qr;
function Gt() {
  if (qr) return Ee;
  qr = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.getData = Ee.KeywordCxt = Ee.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ oo(), t = /* @__PURE__ */ zt(), p = /* @__PURE__ */ qa(), i = /* @__PURE__ */ zt(), g = /* @__PURE__ */ io(), r = /* @__PURE__ */ lo(), o = /* @__PURE__ */ co(), s = /* @__PURE__ */ X(), c = /* @__PURE__ */ Ie(), h = /* @__PURE__ */ xt(), f = /* @__PURE__ */ te(), b = /* @__PURE__ */ Ht();
  function $(O) {
    if (a(O) && (u(O), E(O))) {
      m(O);
      return;
    }
    w(O, () => (0, e.topBoolOrEmptySchema)(O));
  }
  Ee.validateFunctionCode = $;
  function w({ gen: O, validateName: j, schema: M, schemaEnv: z, opts: G }, Q) {
    G.code.es5 ? O.func(j, (0, s._)`${c.default.data}, ${c.default.valCxt}`, z.$async, () => {
      O.code((0, s._)`"use strict"; ${l(M, G)}`), P(O, G), O.code(Q);
    }) : O.func(j, (0, s._)`${c.default.data}, ${S(G)}`, z.$async, () => O.code(l(M, G)).code(Q));
  }
  function S(O) {
    return (0, s._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${O.dynamicRef ? (0, s._)`, ${c.default.dynamicAnchors}={}` : s.nil}}={}`;
  }
  function P(O, j) {
    O.if(c.default.valCxt, () => {
      O.var(c.default.instancePath, (0, s._)`${c.default.valCxt}.${c.default.instancePath}`), O.var(c.default.parentData, (0, s._)`${c.default.valCxt}.${c.default.parentData}`), O.var(c.default.parentDataProperty, (0, s._)`${c.default.valCxt}.${c.default.parentDataProperty}`), O.var(c.default.rootData, (0, s._)`${c.default.valCxt}.${c.default.rootData}`), j.dynamicRef && O.var(c.default.dynamicAnchors, (0, s._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      O.var(c.default.instancePath, (0, s._)`""`), O.var(c.default.parentData, (0, s._)`undefined`), O.var(c.default.parentDataProperty, (0, s._)`undefined`), O.var(c.default.rootData, c.default.data), j.dynamicRef && O.var(c.default.dynamicAnchors, (0, s._)`{}`);
    });
  }
  function m(O) {
    const { schema: j, opts: M, gen: z } = O;
    w(O, () => {
      M.$comment && j.$comment && K(O), C(O), z.let(c.default.vErrors, null), z.let(c.default.errors, 0), M.unevaluated && y(O), v(O), x(O);
    });
  }
  function y(O) {
    const { gen: j, validateName: M } = O;
    O.evaluated = j.const("evaluated", (0, s._)`${M}.evaluated`), j.if((0, s._)`${O.evaluated}.dynamicProps`, () => j.assign((0, s._)`${O.evaluated}.props`, (0, s._)`undefined`)), j.if((0, s._)`${O.evaluated}.dynamicItems`, () => j.assign((0, s._)`${O.evaluated}.items`, (0, s._)`undefined`));
  }
  function l(O, j) {
    const M = typeof O == "object" && O[j.schemaId];
    return M && (j.code.source || j.code.process) ? (0, s._)`/*# sourceURL=${M} */` : s.nil;
  }
  function _(O, j) {
    if (a(O) && (u(O), E(O))) {
      n(O, j);
      return;
    }
    (0, e.boolOrEmptySchema)(O, j);
  }
  function E({ schema: O, self: j }) {
    if (typeof O == "boolean")
      return !O;
    for (const M in O)
      if (j.RULES.all[M])
        return !0;
    return !1;
  }
  function a(O) {
    return typeof O.schema != "boolean";
  }
  function n(O, j) {
    const { schema: M, gen: z, opts: G } = O;
    G.$comment && M.$comment && K(O), N(O), A(O);
    const Q = z.const("_errs", c.default.errors);
    v(O, Q), z.var(j, (0, s._)`${Q} === ${c.default.errors}`);
  }
  function u(O) {
    (0, f.checkUnknownRules)(O), R(O);
  }
  function v(O, j) {
    if (O.opts.jtd)
      return ie(O, [], !1, j);
    const M = (0, t.getSchemaTypes)(O.schema), z = (0, t.coerceAndCheckDataType)(O, M);
    ie(O, M, !z, j);
  }
  function R(O) {
    const { schema: j, errSchemaPath: M, opts: z, self: G } = O;
    j.$ref && z.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(j, G.RULES) && G.logger.warn(`$ref: keywords ignored in schema at path "${M}"`);
  }
  function C(O) {
    const { schema: j, opts: M } = O;
    j.default !== void 0 && M.useDefaults && M.strictSchema && (0, f.checkStrictMode)(O, "default is ignored in the schema root");
  }
  function N(O) {
    const j = O.schema[O.opts.schemaId];
    j && (O.baseId = (0, h.resolveUrl)(O.opts.uriResolver, O.baseId, j));
  }
  function A(O) {
    if (O.schema.$async && !O.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function K({ gen: O, schemaEnv: j, schema: M, errSchemaPath: z, opts: G }) {
    const Q = M.$comment;
    if (G.$comment === !0)
      O.code((0, s._)`${c.default.self}.logger.log(${Q})`);
    else if (typeof G.$comment == "function") {
      const ue = (0, s.str)`${z}/$comment`, ke = O.scopeValue("root", { ref: j.root });
      O.code((0, s._)`${c.default.self}.opts.$comment(${Q}, ${ue}, ${ke}.schema)`);
    }
  }
  function x(O) {
    const { gen: j, schemaEnv: M, validateName: z, ValidationError: G, opts: Q } = O;
    M.$async ? j.if((0, s._)`${c.default.errors} === 0`, () => j.return(c.default.data), () => j.throw((0, s._)`new ${G}(${c.default.vErrors})`)) : (j.assign((0, s._)`${z}.errors`, c.default.vErrors), Q.unevaluated && Z(O), j.return((0, s._)`${c.default.errors} === 0`));
  }
  function Z({ gen: O, evaluated: j, props: M, items: z }) {
    M instanceof s.Name && O.assign((0, s._)`${j}.props`, M), z instanceof s.Name && O.assign((0, s._)`${j}.items`, z);
  }
  function ie(O, j, M, z) {
    const { gen: G, schema: Q, data: ue, allErrors: ke, opts: ge, self: ve } = O, { RULES: fe } = ve;
    if (Q.$ref && (ge.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(Q, fe))) {
      G.block(() => H(O, "$ref", fe.all.$ref.definition));
      return;
    }
    ge.jtd || re(O, j), G.block(() => {
      for (const be of fe.rules)
        Ue(be);
      Ue(fe.post);
    });
    function Ue(be) {
      (0, p.shouldUseGroup)(Q, be) && (be.type ? (G.if((0, i.checkDataType)(be.type, ue, ge.strictNumbers)), ye(O, be), j.length === 1 && j[0] === be.type && M && (G.else(), (0, i.reportTypeError)(O)), G.endIf()) : ye(O, be), ke || G.if((0, s._)`${c.default.errors} === ${z || 0}`));
    }
  }
  function ye(O, j) {
    const { gen: M, schema: z, opts: { useDefaults: G } } = O;
    G && (0, g.assignDefaults)(O, j.type), M.block(() => {
      for (const Q of j.rules)
        (0, p.shouldUseRule)(z, Q) && H(O, Q.keyword, Q.definition, j.type);
    });
  }
  function re(O, j) {
    O.schemaEnv.meta || !O.opts.strictTypes || (je(O, j), O.opts.allowUnionTypes || U(O, j), T(O, O.dataTypes));
  }
  function je(O, j) {
    if (j.length) {
      if (!O.dataTypes.length) {
        O.dataTypes = j;
        return;
      }
      j.forEach((M) => {
        D(O.dataTypes, M) || k(O, `type "${M}" not allowed by context "${O.dataTypes.join(",")}"`);
      }), d(O, j);
    }
  }
  function U(O, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && k(O, "use allowUnionTypes to allow union type keyword");
  }
  function T(O, j) {
    const M = O.self.RULES.all;
    for (const z in M) {
      const G = M[z];
      if (typeof G == "object" && (0, p.shouldUseRule)(O.schema, G)) {
        const { type: Q } = G.definition;
        Q.length && !Q.some((ue) => L(j, ue)) && k(O, `missing type "${Q.join(",")}" for keyword "${z}"`);
      }
    }
  }
  function L(O, j) {
    return O.includes(j) || j === "number" && O.includes("integer");
  }
  function D(O, j) {
    return O.includes(j) || j === "integer" && O.includes("number");
  }
  function d(O, j) {
    const M = [];
    for (const z of O.dataTypes)
      D(j, z) ? M.push(z) : j.includes("integer") && z === "number" && M.push("integer");
    O.dataTypes = M;
  }
  function k(O, j) {
    const M = O.schemaEnv.baseId + O.errSchemaPath;
    j += ` at "${M}" (strictTypes)`, (0, f.checkStrictMode)(O, j, O.opts.strictTypes);
  }
  class I {
    constructor(j, M, z) {
      if ((0, r.validateKeywordUsage)(j, M, z), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = z, this.data = j.data, this.schema = j.schema[z], this.$data = M.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(j, this.schema, z, this.$data), this.schemaType = M.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = M, this.$data)
        this.schemaCode = j.gen.const("vSchema", ee(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, M.schemaType, M.allowUndefined))
        throw new Error(`${z} value must be ${JSON.stringify(M.schemaType)}`);
      ("code" in M ? M.trackErrors : M.errors !== !1) && (this.errsCount = j.gen.const("_errs", c.default.errors));
    }
    result(j, M, z) {
      this.failResult((0, s.not)(j), M, z);
    }
    failResult(j, M, z) {
      this.gen.if(j), z ? z() : this.error(), M ? (this.gen.else(), M(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(j, M) {
      this.failResult((0, s.not)(j), void 0, M);
    }
    fail(j) {
      if (j === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(j), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(j) {
      if (!this.$data)
        return this.fail(j);
      const { schemaCode: M } = this;
      this.fail((0, s._)`${M} !== undefined && (${(0, s.or)(this.invalid$data(), j)})`);
    }
    error(j, M, z) {
      if (M) {
        this.setParams(M), this._error(j, z), this.setParams({});
        return;
      }
      this._error(j, z);
    }
    _error(j, M) {
      (j ? b.reportExtraError : b.reportError)(this, this.def.error, M);
    }
    $dataError() {
      (0, b.reportError)(this, this.def.$dataError || b.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, b.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(j) {
      this.allErrors || this.gen.if(j);
    }
    setParams(j, M) {
      M ? Object.assign(this.params, j) : this.params = j;
    }
    block$data(j, M, z = s.nil) {
      this.gen.block(() => {
        this.check$data(j, z), M();
      });
    }
    check$data(j = s.nil, M = s.nil) {
      if (!this.$data)
        return;
      const { gen: z, schemaCode: G, schemaType: Q, def: ue } = this;
      z.if((0, s.or)((0, s._)`${G} === undefined`, M)), j !== s.nil && z.assign(j, !0), (Q.length || ue.validateSchema) && (z.elseIf(this.invalid$data()), this.$dataError(), j !== s.nil && z.assign(j, !1)), z.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: M, schemaType: z, def: G, it: Q } = this;
      return (0, s.or)(ue(), ke());
      function ue() {
        if (z.length) {
          if (!(M instanceof s.Name))
            throw new Error("ajv implementation error");
          const ge = Array.isArray(z) ? z : [z];
          return (0, s._)`${(0, i.checkDataTypes)(ge, M, Q.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return s.nil;
      }
      function ke() {
        if (G.validateSchema) {
          const ge = j.scopeValue("validate$data", { ref: G.validateSchema });
          return (0, s._)`!${ge}(${M})`;
        }
        return s.nil;
      }
    }
    subschema(j, M) {
      const z = (0, o.getSubschema)(this.it, j);
      (0, o.extendSubschemaData)(z, this.it, j), (0, o.extendSubschemaMode)(z, j);
      const G = { ...this.it, ...z, items: void 0, props: void 0 };
      return _(G, M), G;
    }
    mergeEvaluated(j, M) {
      const { it: z, gen: G } = this;
      z.opts.unevaluated && (z.props !== !0 && j.props !== void 0 && (z.props = f.mergeEvaluated.props(G, j.props, z.props, M)), z.items !== !0 && j.items !== void 0 && (z.items = f.mergeEvaluated.items(G, j.items, z.items, M)));
    }
    mergeValidEvaluated(j, M) {
      const { it: z, gen: G } = this;
      if (z.opts.unevaluated && (z.props !== !0 || z.items !== !0))
        return G.if(M, () => this.mergeEvaluated(j, s.Name)), !0;
    }
  }
  Ee.KeywordCxt = I;
  function H(O, j, M, z) {
    const G = new I(O, M, j);
    "code" in M ? M.code(G, z) : G.$data && M.validate ? (0, r.funcKeywordCode)(G, M) : "macro" in M ? (0, r.macroKeywordCode)(G, M) : (M.compile || M.validate) && (0, r.funcKeywordCode)(G, M);
  }
  const W = /^\/(?:[^~]|~0|~1)*$/, ae = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(O, { dataLevel: j, dataNames: M, dataPathArr: z }) {
    let G, Q;
    if (O === "")
      return c.default.rootData;
    if (O[0] === "/") {
      if (!W.test(O))
        throw new Error(`Invalid JSON-pointer: ${O}`);
      G = O, Q = c.default.rootData;
    } else {
      const ve = ae.exec(O);
      if (!ve)
        throw new Error(`Invalid JSON-pointer: ${O}`);
      const fe = +ve[1];
      if (G = ve[2], G === "#") {
        if (fe >= j)
          throw new Error(ge("property/index", fe));
        return z[j - fe];
      }
      if (fe > j)
        throw new Error(ge("data", fe));
      if (Q = M[j - fe], !G)
        return Q;
    }
    let ue = Q;
    const ke = G.split("/");
    for (const ve of ke)
      ve && (Q = (0, s._)`${Q}${(0, s.getProperty)((0, f.unescapeJsonPointer)(ve))}`, ue = (0, s._)`${ue} && ${Q}`);
    return ue;
    function ge(ve, fe) {
      return `Cannot access ${ve} ${fe} levels up, current level is ${j}`;
    }
  }
  return Ee.getData = ee, Ee;
}
var et = {}, Ar;
function dr() {
  if (Ar) return et;
  Ar = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  class e extends Error {
    constructor(p) {
      super("validation failed"), this.errors = p, this.ajv = this.validation = !0;
    }
  }
  return et.default = e, et;
}
var tt = {}, Mr;
function Wt() {
  if (Mr) return tt;
  Mr = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xt();
  class t extends Error {
    constructor(i, g, r, o) {
      super(o || `can't resolve reference ${r} from id ${g}`), this.missingRef = (0, e.resolveUrl)(i, g, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return tt.default = t, tt;
}
var _e = {}, Lr;
function ur() {
  if (Lr) return _e;
  Lr = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ dr(), p = /* @__PURE__ */ Ie(), i = /* @__PURE__ */ xt(), g = /* @__PURE__ */ te(), r = /* @__PURE__ */ Gt();
  class o {
    constructor(y) {
      var l;
      this.refs = {}, this.dynamicAnchors = {};
      let _;
      typeof y.schema == "object" && (_ = y.schema), this.schema = y.schema, this.schemaId = y.schemaId, this.root = y.root || this, this.baseId = (l = y.baseId) !== null && l !== void 0 ? l : (0, i.normalizeId)(_ == null ? void 0 : _[y.schemaId || "$id"]), this.schemaPath = y.schemaPath, this.localRefs = y.localRefs, this.meta = y.meta, this.$async = _ == null ? void 0 : _.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = o;
  function s(m) {
    const y = f.call(this, m);
    if (y)
      return y;
    const l = (0, i.getFullPath)(this.opts.uriResolver, m.root.baseId), { es5: _, lines: E } = this.opts.code, { ownProperties: a } = this.opts, n = new e.CodeGen(this.scope, { es5: _, lines: E, ownProperties: a });
    let u;
    m.$async && (u = n.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const v = n.scopeName("validate");
    m.validateName = v;
    const R = {
      gen: n,
      allErrors: this.opts.allErrors,
      data: p.default.data,
      parentData: p.default.parentData,
      parentDataProperty: p.default.parentDataProperty,
      dataNames: [p.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: n.scopeValue("schema", this.opts.code.source === !0 ? { ref: m.schema, code: (0, e.stringify)(m.schema) } : { ref: m.schema }),
      validateName: v,
      ValidationError: u,
      schema: m.schema,
      schemaEnv: m,
      rootId: l,
      baseId: m.baseId || l,
      schemaPath: e.nil,
      errSchemaPath: m.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let C;
    try {
      this._compilations.add(m), (0, r.validateFunctionCode)(R), n.optimize(this.opts.code.optimize);
      const N = n.toString();
      C = `${n.scopeRefs(p.default.scope)}return ${N}`, this.opts.code.process && (C = this.opts.code.process(C, m));
      const K = new Function(`${p.default.self}`, `${p.default.scope}`, C)(this, this.scope.get());
      if (this.scope.value(v, { ref: K }), K.errors = null, K.schema = m.schema, K.schemaEnv = m, m.$async && (K.$async = !0), this.opts.code.source === !0 && (K.source = { validateName: v, validateCode: N, scopeValues: n._values }), this.opts.unevaluated) {
        const { props: x, items: Z } = R;
        K.evaluated = {
          props: x instanceof e.Name ? void 0 : x,
          items: Z instanceof e.Name ? void 0 : Z,
          dynamicProps: x instanceof e.Name,
          dynamicItems: Z instanceof e.Name
        }, K.source && (K.source.evaluated = (0, e.stringify)(K.evaluated));
      }
      return m.validate = K, m;
    } catch (N) {
      throw delete m.validate, delete m.validateName, C && this.logger.error("Error compiling schema, function code:", C), N;
    } finally {
      this._compilations.delete(m);
    }
  }
  _e.compileSchema = s;
  function c(m, y, l) {
    var _;
    l = (0, i.resolveUrl)(this.opts.uriResolver, y, l);
    const E = m.refs[l];
    if (E)
      return E;
    let a = $.call(this, m, l);
    if (a === void 0) {
      const n = (_ = m.localRefs) === null || _ === void 0 ? void 0 : _[l], { schemaId: u } = this.opts;
      n && (a = new o({ schema: n, schemaId: u, root: m, baseId: y }));
    }
    if (a !== void 0)
      return m.refs[l] = h.call(this, a);
  }
  _e.resolveRef = c;
  function h(m) {
    return (0, i.inlineRef)(m.schema, this.opts.inlineRefs) ? m.schema : m.validate ? m : s.call(this, m);
  }
  function f(m) {
    for (const y of this._compilations)
      if (b(y, m))
        return y;
  }
  _e.getCompilingSchema = f;
  function b(m, y) {
    return m.schema === y.schema && m.root === y.root && m.baseId === y.baseId;
  }
  function $(m, y) {
    let l;
    for (; typeof (l = this.refs[y]) == "string"; )
      y = l;
    return l || this.schemas[y] || w.call(this, m, y);
  }
  function w(m, y) {
    const l = this.opts.uriResolver.parse(y), _ = (0, i._getFullPath)(this.opts.uriResolver, l);
    let E = (0, i.getFullPath)(this.opts.uriResolver, m.baseId, void 0);
    if (Object.keys(m.schema).length > 0 && _ === E)
      return P.call(this, l, m);
    const a = (0, i.normalizeId)(_), n = this.refs[a] || this.schemas[a];
    if (typeof n == "string") {
      const u = w.call(this, m, n);
      return typeof (u == null ? void 0 : u.schema) != "object" ? void 0 : P.call(this, l, u);
    }
    if (typeof (n == null ? void 0 : n.schema) == "object") {
      if (n.validate || s.call(this, n), a === (0, i.normalizeId)(y)) {
        const { schema: u } = n, { schemaId: v } = this.opts, R = u[v];
        return R && (E = (0, i.resolveUrl)(this.opts.uriResolver, E, R)), new o({ schema: u, schemaId: v, root: m, baseId: E });
      }
      return P.call(this, l, n);
    }
  }
  _e.resolveSchema = w;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function P(m, { baseId: y, schema: l, root: _ }) {
    var E;
    if (((E = m.fragment) === null || E === void 0 ? void 0 : E[0]) !== "/")
      return;
    for (const u of m.fragment.slice(1).split("/")) {
      if (typeof l == "boolean")
        return;
      const v = l[(0, g.unescapeFragment)(u)];
      if (v === void 0)
        return;
      l = v;
      const R = typeof l == "object" && l[this.opts.schemaId];
      !S.has(u) && R && (y = (0, i.resolveUrl)(this.opts.uriResolver, y, R));
    }
    let a;
    if (typeof l != "boolean" && l.$ref && !(0, g.schemaHasRulesButRef)(l, this.RULES)) {
      const u = (0, i.resolveUrl)(this.opts.uriResolver, y, l.$ref);
      a = w.call(this, _, u);
    }
    const { schemaId: n } = this.opts;
    if (a = a || new o({ schema: l, schemaId: n, root: _, baseId: y }), a.schema !== a.root.schema)
      return a;
  }
  return _e;
}
const fo = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ho = "Meta-schema for $data reference (JSON AnySchema extension proposal)", po = "object", mo = ["$data"], yo = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, go = !1, vo = {
  $id: fo,
  description: ho,
  type: po,
  required: mo,
  properties: yo,
  additionalProperties: go
};
var rt = {}, Be = { exports: {} }, nr, Vr;
function Ma() {
  if (Vr) return nr;
  Vr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), p = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), g = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(a) {
    let n = "", u = 0, v = 0;
    for (v = 0; v < a.length; v++)
      if (u = a[v].charCodeAt(0), u !== 48) {
        if (!(u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102))
          return "";
        n += a[v];
        break;
      }
    for (v += 1; v < a.length; v++) {
      if (u = a[v].charCodeAt(0), !(u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102))
        return "";
      n += a[v];
    }
    return n;
  }
  const o = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function s(a) {
    return a.length = 0, !0;
  }
  function c(a, n, u) {
    if (a.length) {
      const v = r(a);
      if (v !== "")
        n.push(v);
      else
        return u.error = !0, !1;
      a.length = 0;
    }
    return !0;
  }
  function h(a) {
    let n = 0;
    const u = { error: !1, address: "", zone: "" }, v = [], R = [];
    let C = !1, N = !1, A = c;
    for (let K = 0; K < a.length; K++) {
      const x = a[K];
      if (!(x === "[" || x === "]"))
        if (x === ":") {
          if (C === !0 && (N = !0), !A(R, v, u))
            break;
          if (++n > 7) {
            u.error = !0;
            break;
          }
          K > 0 && a[K - 1] === ":" && (C = !0), v.push(":");
          continue;
        } else if (x === "%") {
          if (!A(R, v, u))
            break;
          A = s;
        } else {
          R.push(x);
          continue;
        }
    }
    return R.length && (A === s ? u.zone = R.join("") : N ? v.push(R.join("")) : v.push(r(R))), u.address = v.join(""), u;
  }
  function f(a) {
    if (b(a, ":") < 2)
      return { host: a, isIPV6: !1 };
    const n = h(a);
    if (n.error)
      return { host: a, isIPV6: !1 };
    {
      let u = n.address, v = n.address;
      return n.zone && (u += "%" + n.zone, v += "%25" + n.zone), { host: u, isIPV6: !0, escapedHost: v };
    }
  }
  function b(a, n) {
    let u = 0;
    for (let v = 0; v < a.length; v++)
      a[v] === n && u++;
    return u;
  }
  function $(a) {
    let n = a;
    const u = [];
    let v = -1, R = 0;
    for (; R = n.length; ) {
      if (R === 1) {
        if (n === ".")
          break;
        if (n === "/") {
          u.push("/");
          break;
        } else {
          u.push(n);
          break;
        }
      } else if (R === 2) {
        if (n[0] === ".") {
          if (n[1] === ".")
            break;
          if (n[1] === "/") {
            n = n.slice(2);
            continue;
          }
        } else if (n[0] === "/" && (n[1] === "." || n[1] === "/")) {
          u.push("/");
          break;
        }
      } else if (R === 3 && n === "/..") {
        u.length !== 0 && u.pop(), u.push("/");
        break;
      }
      if (n[0] === ".") {
        if (n[1] === ".") {
          if (n[2] === "/") {
            n = n.slice(3);
            continue;
          }
        } else if (n[1] === "/") {
          n = n.slice(2);
          continue;
        }
      } else if (n[0] === "/" && n[1] === ".") {
        if (n[2] === "/") {
          n = n.slice(2);
          continue;
        } else if (n[2] === "." && n[3] === "/") {
          n = n.slice(3), u.length !== 0 && u.pop();
          continue;
        }
      }
      if ((v = n.indexOf("/", 1)) === -1) {
        u.push(n);
        break;
      } else
        u.push(n.slice(0, v)), n = n.slice(v);
    }
    return u.join("");
  }
  const w = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, P = /[@/?#]/g;
  function m(a, n) {
    const u = n ? P : S;
    return u.lastIndex = 0, a.replace(u, (v) => w[v]);
  }
  function y(a, n = !1) {
    if (a.indexOf("%") === -1)
      return a;
    let u = "";
    for (let v = 0; v < a.length; v++) {
      if (a[v] === "%" && v + 2 < a.length) {
        const R = a.slice(v + 1, v + 3);
        if (p(R)) {
          const C = R.toUpperCase(), N = String.fromCharCode(parseInt(C, 16));
          n && i(N) ? u += N : u += "%" + C, v += 2;
          continue;
        }
      }
      u += a[v];
    }
    return u;
  }
  function l(a) {
    let n = "";
    for (let u = 0; u < a.length; u++) {
      if (a[u] === "%" && u + 2 < a.length) {
        const v = a.slice(u + 1, u + 3);
        if (p(v)) {
          const R = v.toUpperCase(), C = String.fromCharCode(parseInt(R, 16));
          C !== "." && i(C) ? n += C : n += "%" + R, u += 2;
          continue;
        }
      }
      g(a[u]) ? n += a[u] : n += escape(a[u]);
    }
    return n;
  }
  function _(a) {
    let n = "";
    for (let u = 0; u < a.length; u++) {
      if (a[u] === "%" && u + 2 < a.length) {
        const v = a.slice(u + 1, u + 3);
        if (p(v)) {
          n += "%" + v.toUpperCase(), u += 2;
          continue;
        }
      }
      n += escape(a[u]);
    }
    return n;
  }
  function E(a) {
    const n = [];
    if (a.userinfo !== void 0 && (n.push(a.userinfo), n.push("@")), a.host !== void 0) {
      let u = unescape(a.host);
      if (!t(u)) {
        const v = f(u);
        v.isIPV6 === !0 ? u = `[${v.escapedHost}]` : u = m(u, !1);
      }
      n.push(u);
    }
    return (typeof a.port == "number" || typeof a.port == "string") && (n.push(":"), n.push(String(a.port))), n.length ? n.join("") : void 0;
  }
  return nr = {
    nonSimpleDomain: o,
    recomposeAuthority: E,
    reescapeHostDelimiters: m,
    normalizePercentEncoding: y,
    normalizePathEncoding: l,
    escapePreservingEscapes: _,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: f,
    stringArrayToHexStripped: r
  }, nr;
}
var or, Ur;
function _o() {
  if (Ur) return or;
  Ur = 1;
  const { isUUID: e } = Ma(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, p = (
    /** @type {const} */
    [
      "http",
      "https",
      "ws",
      "wss",
      "urn",
      "urn:uuid"
    ]
  );
  function i(a) {
    return p.indexOf(
      /** @type {*} */
      a
    ) !== -1;
  }
  function g(a) {
    return a.secure === !0 ? !0 : a.secure === !1 ? !1 : a.scheme ? a.scheme.length === 3 && (a.scheme[0] === "w" || a.scheme[0] === "W") && (a.scheme[1] === "s" || a.scheme[1] === "S") && (a.scheme[2] === "s" || a.scheme[2] === "S") : !1;
  }
  function r(a) {
    return a.host || (a.error = a.error || "HTTP URIs must have a host."), a;
  }
  function o(a) {
    const n = String(a.scheme).toLowerCase() === "https";
    return (a.port === (n ? 443 : 80) || a.port === "") && (a.port = void 0), a.path || (a.path = "/"), a;
  }
  function s(a) {
    return a.secure = g(a), a.resourceName = (a.path || "/") + (a.query ? "?" + a.query : ""), a.path = void 0, a.query = void 0, a;
  }
  function c(a) {
    if ((a.port === (g(a) ? 443 : 80) || a.port === "") && (a.port = void 0), typeof a.secure == "boolean" && (a.scheme = a.secure ? "wss" : "ws", a.secure = void 0), a.resourceName) {
      const [n, u] = a.resourceName.split("?");
      a.path = n && n !== "/" ? n : void 0, a.query = u, a.resourceName = void 0;
    }
    return a.fragment = void 0, a;
  }
  function h(a, n) {
    if (!a.path)
      return a.error = "URN can not be parsed", a;
    const u = a.path.match(t);
    if (u) {
      const v = n.scheme || a.scheme || "urn";
      a.nid = u[1].toLowerCase(), a.nss = u[2];
      const R = `${v}:${n.nid || a.nid}`, C = E(R);
      a.path = void 0, C && (a = C.parse(a, n));
    } else
      a.error = a.error || "URN can not be parsed.";
    return a;
  }
  function f(a, n) {
    if (a.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const u = n.scheme || a.scheme || "urn", v = a.nid.toLowerCase(), R = `${u}:${n.nid || v}`, C = E(R);
    C && (a = C.serialize(a, n));
    const N = a, A = a.nss;
    return N.path = `${v || n.nid}:${A}`, n.skipEscape = !0, N;
  }
  function b(a, n) {
    const u = a;
    return u.uuid = u.nss, u.nss = void 0, !n.tolerant && (!u.uuid || !e(u.uuid)) && (u.error = u.error || "UUID is not valid."), u;
  }
  function $(a) {
    const n = a;
    return n.nss = (a.uuid || "").toLowerCase(), n;
  }
  const w = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: o
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: w.domainHost,
      parse: r,
      serialize: o
    }
  ), P = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: s,
      serialize: c
    }
  ), m = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: P.domainHost,
      parse: P.parse,
      serialize: P.serialize
    }
  ), _ = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: w,
      https: S,
      ws: P,
      wss: m,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: h,
          serialize: f,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: b,
          serialize: $,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(_, null);
  function E(a) {
    return a && (_[
      /** @type {SchemeName} */
      a
    ] || _[
      /** @type {SchemeName} */
      a.toLowerCase()
    ]) || void 0;
  }
  return or = {
    wsIsSecure: g,
    SCHEMES: _,
    isValidSchemeName: i,
    getSchemeHandler: E
  }, or;
}
var zr;
function bo() {
  if (zr) return Be.exports;
  zr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: p, normalizePercentEncoding: i, normalizePathEncoding: g, escapePreservingEscapes: r, reescapeHostDelimiters: o, isIPv4: s, nonSimpleDomain: c } = Ma(), { SCHEMES: h, getSchemeHandler: f } = _o();
  function b(v, R) {
    return typeof v == "string" ? v = /** @type {T} */
    E(v, R) : typeof v == "object" && (v = /** @type {T} */
    _(P(v, R), R)), v;
  }
  function $(v, R, C) {
    const N = C ? Object.assign({ scheme: "null" }, C) : { scheme: "null" }, A = w(_(v, N), _(R, N), N, !0);
    return N.skipEscape = !0, P(A, N);
  }
  function w(v, R, C, N) {
    const A = {};
    return N || (v = _(P(v, C), C), R = _(P(R, C), C)), C = C || {}, !C.tolerant && R.scheme ? (A.scheme = R.scheme, A.userinfo = R.userinfo, A.host = R.host, A.port = R.port, A.path = t(R.path || ""), A.query = R.query) : (R.userinfo !== void 0 || R.host !== void 0 || R.port !== void 0 ? (A.userinfo = R.userinfo, A.host = R.host, A.port = R.port, A.path = t(R.path || ""), A.query = R.query) : (R.path ? (R.path[0] === "/" ? A.path = t(R.path) : ((v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0) && !v.path ? A.path = "/" + R.path : v.path ? A.path = v.path.slice(0, v.path.lastIndexOf("/") + 1) + R.path : A.path = R.path, A.path = t(A.path)), A.query = R.query) : (A.path = v.path, R.query !== void 0 ? A.query = R.query : A.query = v.query), A.userinfo = v.userinfo, A.host = v.host, A.port = v.port), A.scheme = v.scheme), A.fragment = R.fragment, A;
  }
  function S(v, R, C) {
    const N = n(v, C), A = n(R, C);
    return N !== void 0 && A !== void 0 && N.toLowerCase() === A.toLowerCase();
  }
  function P(v, R) {
    const C = {
      host: v.host,
      scheme: v.scheme,
      userinfo: v.userinfo,
      port: v.port,
      path: v.path,
      query: v.query,
      nid: v.nid,
      nss: v.nss,
      uuid: v.uuid,
      fragment: v.fragment,
      reference: v.reference,
      resourceName: v.resourceName,
      secure: v.secure,
      error: ""
    }, N = Object.assign({}, R), A = [], K = f(N.scheme || C.scheme);
    K && K.serialize && K.serialize(C, N), C.path !== void 0 && (N.skipEscape ? C.path = i(C.path) : (C.path = r(C.path), C.scheme !== void 0 && (C.path = C.path.split("%3A").join(":")))), N.reference !== "suffix" && C.scheme && A.push(C.scheme, ":");
    const x = p(C);
    if (x !== void 0 && (N.reference !== "suffix" && A.push("//"), A.push(x), C.path && C.path[0] !== "/" && A.push("/")), C.path !== void 0) {
      let Z = C.path;
      !N.absolutePath && (!K || !K.absolutePath) && (Z = t(Z)), x === void 0 && Z[0] === "/" && Z[1] === "/" && (Z = "/%2F" + Z.slice(2)), A.push(Z);
    }
    return C.query !== void 0 && A.push("?", C.query), C.fragment !== void 0 && A.push("#", C.fragment), A.join("");
  }
  const m = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function y(v, R) {
    if (R[2] !== void 0 && v.path && v.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof v.port == "number" && (v.port < 0 || v.port > 65535))
      return "URI port is malformed.";
  }
  function l(v, R) {
    const C = Object.assign({}, R), N = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let A = !1, K = !1;
    C.reference === "suffix" && (C.scheme ? v = C.scheme + ":" + v : v = "//" + v);
    const x = v.match(m);
    if (x) {
      N.scheme = x[1], N.userinfo = x[3], N.host = x[4], N.port = parseInt(x[5], 10), N.path = x[6] || "", N.query = x[7], N.fragment = x[8], isNaN(N.port) && (N.port = x[5]);
      const Z = y(N, x);
      if (Z !== void 0 && (N.error = N.error || Z, A = !0), N.host)
        if (s(N.host) === !1) {
          const re = e(N.host);
          N.host = re.host.toLowerCase(), K = re.isIPV6;
        } else
          K = !0;
      N.scheme === void 0 && N.userinfo === void 0 && N.host === void 0 && N.port === void 0 && N.query === void 0 && !N.path ? N.reference = "same-document" : N.scheme === void 0 ? N.reference = "relative" : N.fragment === void 0 ? N.reference = "absolute" : N.reference = "uri", C.reference && C.reference !== "suffix" && C.reference !== N.reference && (N.error = N.error || "URI is not a " + C.reference + " reference.");
      const ie = f(C.scheme || N.scheme);
      if (!C.unicodeSupport && (!ie || !ie.unicodeSupport) && N.host && (C.domainHost || ie && ie.domainHost) && K === !1 && c(N.host))
        try {
          N.host = URL.domainToASCII(N.host.toLowerCase());
        } catch (ye) {
          N.error = N.error || "Host's domain name can not be converted to ASCII: " + ye;
        }
      if ((!ie || ie && !ie.skipNormalize) && (v.indexOf("%") !== -1 && (N.scheme !== void 0 && (N.scheme = unescape(N.scheme)), N.host !== void 0 && (N.host = o(unescape(N.host), K))), N.path && (N.path = g(N.path)), N.fragment))
        try {
          N.fragment = encodeURI(decodeURIComponent(N.fragment));
        } catch {
          N.error = N.error || "URI malformed";
        }
      ie && ie.parse && ie.parse(N, C);
    } else
      N.error = N.error || "URI can not be parsed.";
    return { parsed: N, malformedAuthorityOrPort: A };
  }
  function _(v, R) {
    return l(v, R).parsed;
  }
  function E(v, R) {
    return a(v, R).normalized;
  }
  function a(v, R) {
    const { parsed: C, malformedAuthorityOrPort: N } = l(v, R);
    return {
      normalized: N ? v : P(C, R),
      malformedAuthorityOrPort: N
    };
  }
  function n(v, R) {
    if (typeof v == "string") {
      const { normalized: C, malformedAuthorityOrPort: N } = a(v, R);
      return N ? void 0 : C;
    }
    if (typeof v == "object")
      return P(v, R);
  }
  const u = {
    SCHEMES: h,
    normalize: b,
    resolve: $,
    resolveComponent: w,
    equal: S,
    serialize: P,
    parse: _
  };
  return Be.exports = u, Be.exports.default = u, Be.exports.fastUri = u, Be.exports;
}
var Fr;
function $o() {
  if (Fr) return rt;
  Fr = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = bo();
  return e.code = 'require("ajv/dist/runtime/uri").default', rt.default = e, rt;
}
var Kr;
function ko() {
  return Kr || (Kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Gt();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var p = /* @__PURE__ */ X();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return p._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return p.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return p.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return p.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return p.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return p.CodeGen;
    } });
    const i = /* @__PURE__ */ dr(), g = /* @__PURE__ */ Wt(), r = /* @__PURE__ */ Ia(), o = /* @__PURE__ */ ur(), s = /* @__PURE__ */ X(), c = /* @__PURE__ */ xt(), h = /* @__PURE__ */ zt(), f = /* @__PURE__ */ te(), b = vo, $ = /* @__PURE__ */ $o(), w = (U, T) => new RegExp(U, T);
    w.code = "new RegExp";
    const S = ["removeAdditional", "useDefaults", "coerceTypes"], P = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), m = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, y = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, l = 200;
    function _(U) {
      var T, L, D, d, k, I, H, W, ae, ee, O, j, M, z, G, Q, ue, ke, ge, ve, fe, Ue, be, Bt, Jt;
      const xe = U.strict, Qt = (T = U.code) === null || T === void 0 ? void 0 : T.optimize, hr = Qt === !0 || Qt === void 0 ? 1 : Qt || 0, pr = (D = (L = U.code) === null || L === void 0 ? void 0 : L.regExp) !== null && D !== void 0 ? D : w, Fa = (d = U.uriResolver) !== null && d !== void 0 ? d : $.default;
      return {
        strictSchema: (I = (k = U.strictSchema) !== null && k !== void 0 ? k : xe) !== null && I !== void 0 ? I : !0,
        strictNumbers: (W = (H = U.strictNumbers) !== null && H !== void 0 ? H : xe) !== null && W !== void 0 ? W : !0,
        strictTypes: (ee = (ae = U.strictTypes) !== null && ae !== void 0 ? ae : xe) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (j = (O = U.strictTuples) !== null && O !== void 0 ? O : xe) !== null && j !== void 0 ? j : "log",
        strictRequired: (z = (M = U.strictRequired) !== null && M !== void 0 ? M : xe) !== null && z !== void 0 ? z : !1,
        code: U.code ? { ...U.code, optimize: hr, regExp: pr } : { optimize: hr, regExp: pr },
        loopRequired: (G = U.loopRequired) !== null && G !== void 0 ? G : l,
        loopEnum: (Q = U.loopEnum) !== null && Q !== void 0 ? Q : l,
        meta: (ue = U.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (ke = U.messages) !== null && ke !== void 0 ? ke : !0,
        inlineRefs: (ge = U.inlineRefs) !== null && ge !== void 0 ? ge : !0,
        schemaId: (ve = U.schemaId) !== null && ve !== void 0 ? ve : "$id",
        addUsedSchema: (fe = U.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (Ue = U.validateSchema) !== null && Ue !== void 0 ? Ue : !0,
        validateFormats: (be = U.validateFormats) !== null && be !== void 0 ? be : !0,
        unicodeRegExp: (Bt = U.unicodeRegExp) !== null && Bt !== void 0 ? Bt : !0,
        int32range: (Jt = U.int32range) !== null && Jt !== void 0 ? Jt : !0,
        uriResolver: Fa
      };
    }
    class E {
      constructor(T = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), T = this.opts = { ...T, ..._(T) };
        const { es5: L, lines: D } = this.opts.code;
        this.scope = new s.ValueScope({ scope: {}, prefixes: P, es5: L, lines: D }), this.logger = A(T.logger);
        const d = T.validateFormats;
        T.validateFormats = !1, this.RULES = (0, r.getRules)(), a.call(this, m, T, "NOT SUPPORTED"), a.call(this, y, T, "DEPRECATED", "warn"), this._metaOpts = C.call(this), T.formats && v.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), T.keywords && R.call(this, T.keywords), typeof T.meta == "object" && this.addMetaSchema(T.meta), u.call(this), T.validateFormats = d;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: T, meta: L, schemaId: D } = this.opts;
        let d = b;
        D === "id" && (d = { ...b }, d.id = d.$id, delete d.$id), L && T && this.addMetaSchema(d, d[D], !1);
      }
      defaultMeta() {
        const { meta: T, schemaId: L } = this.opts;
        return this.opts.defaultMeta = typeof T == "object" ? T[L] || T : void 0;
      }
      validate(T, L) {
        let D;
        if (typeof T == "string") {
          if (D = this.getSchema(T), !D)
            throw new Error(`no schema with key or ref "${T}"`);
        } else
          D = this.compile(T);
        const d = D(L);
        return "$async" in D || (this.errors = D.errors), d;
      }
      compile(T, L) {
        const D = this._addSchema(T, L);
        return D.validate || this._compileSchemaEnv(D);
      }
      compileAsync(T, L) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: D } = this.opts;
        return d.call(this, T, L);
        async function d(ee, O) {
          await k.call(this, ee.$schema);
          const j = this._addSchema(ee, O);
          return j.validate || I.call(this, j);
        }
        async function k(ee) {
          ee && !this.getSchema(ee) && await d.call(this, { $ref: ee }, !0);
        }
        async function I(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (O) {
            if (!(O instanceof g.default))
              throw O;
            return H.call(this, O), await W.call(this, O.missingSchema), I.call(this, ee);
          }
        }
        function H({ missingSchema: ee, missingRef: O }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${O} cannot be resolved`);
        }
        async function W(ee) {
          const O = await ae.call(this, ee);
          this.refs[ee] || await k.call(this, O.$schema), this.refs[ee] || this.addSchema(O, ee, L);
        }
        async function ae(ee) {
          const O = this._loading[ee];
          if (O)
            return O;
          try {
            return await (this._loading[ee] = D(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(T, L, D, d = this.opts.validateSchema) {
        if (Array.isArray(T)) {
          for (const I of T)
            this.addSchema(I, void 0, D, d);
          return this;
        }
        let k;
        if (typeof T == "object") {
          const { schemaId: I } = this.opts;
          if (k = T[I], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return L = (0, c.normalizeId)(L || k), this._checkUnique(L), this.schemas[L] = this._addSchema(T, D, L, d, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(T, L, D = this.opts.validateSchema) {
        return this.addSchema(T, L, !0, D), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(T, L) {
        if (typeof T == "boolean")
          return !0;
        let D;
        if (D = T.$schema, D !== void 0 && typeof D != "string")
          throw new Error("$schema must be a string");
        if (D = D || this.opts.defaultMeta || this.defaultMeta(), !D)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const d = this.validate(D, T);
        if (!d && L) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
        }
        return d;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(T) {
        let L;
        for (; typeof (L = n.call(this, T)) == "string"; )
          T = L;
        if (L === void 0) {
          const { schemaId: D } = this.opts, d = new o.SchemaEnv({ schema: {}, schemaId: D });
          if (L = o.resolveSchema.call(this, d, T), !L)
            return;
          this.refs[T] = L;
        }
        return L.validate || this._compileSchemaEnv(L);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(T) {
        if (T instanceof RegExp)
          return this._removeAllSchemas(this.schemas, T), this._removeAllSchemas(this.refs, T), this;
        switch (typeof T) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const L = n.call(this, T);
            return typeof L == "object" && this._cache.delete(L.schema), delete this.schemas[T], delete this.refs[T], this;
          }
          case "object": {
            const L = T;
            this._cache.delete(L);
            let D = T[this.opts.schemaId];
            return D && (D = (0, c.normalizeId)(D), delete this.schemas[D], delete this.refs[D]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(T) {
        for (const L of T)
          this.addKeyword(L);
        return this;
      }
      addKeyword(T, L) {
        let D;
        if (typeof T == "string")
          D = T, typeof L == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), L.keyword = D);
        else if (typeof T == "object" && L === void 0) {
          if (L = T, D = L.keyword, Array.isArray(D) && !D.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (x.call(this, D, L), !L)
          return (0, f.eachItem)(D, (k) => Z.call(this, k)), this;
        ye.call(this, L);
        const d = {
          ...L,
          type: (0, h.getJSONTypes)(L.type),
          schemaType: (0, h.getJSONTypes)(L.schemaType)
        };
        return (0, f.eachItem)(D, d.type.length === 0 ? (k) => Z.call(this, k, d) : (k) => d.type.forEach((I) => Z.call(this, k, d, I))), this;
      }
      getKeyword(T) {
        const L = this.RULES.all[T];
        return typeof L == "object" ? L.definition : !!L;
      }
      // Remove keyword
      removeKeyword(T) {
        const { RULES: L } = this;
        delete L.keywords[T], delete L.all[T];
        for (const D of L.rules) {
          const d = D.rules.findIndex((k) => k.keyword === T);
          d >= 0 && D.rules.splice(d, 1);
        }
        return this;
      }
      // Add format
      addFormat(T, L) {
        return typeof L == "string" && (L = new RegExp(L)), this.formats[T] = L, this;
      }
      errorsText(T = this.errors, { separator: L = ", ", dataVar: D = "data" } = {}) {
        return !T || T.length === 0 ? "No errors" : T.map((d) => `${D}${d.instancePath} ${d.message}`).reduce((d, k) => d + L + k);
      }
      $dataMetaSchema(T, L) {
        const D = this.RULES.all;
        T = JSON.parse(JSON.stringify(T));
        for (const d of L) {
          const k = d.split("/").slice(1);
          let I = T;
          for (const H of k)
            I = I[H];
          for (const H in D) {
            const W = D[H];
            if (typeof W != "object")
              continue;
            const { $data: ae } = W.definition, ee = I[H];
            ae && ee && (I[H] = je(ee));
          }
        }
        return T;
      }
      _removeAllSchemas(T, L) {
        for (const D in T) {
          const d = T[D];
          (!L || L.test(D)) && (typeof d == "string" ? delete T[D] : d && !d.meta && (this._cache.delete(d.schema), delete T[D]));
        }
      }
      _addSchema(T, L, D, d = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let I;
        const { schemaId: H } = this.opts;
        if (typeof T == "object")
          I = T[H];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof T != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let W = this._cache.get(T);
        if (W !== void 0)
          return W;
        D = (0, c.normalizeId)(I || D);
        const ae = c.getSchemaRefs.call(this, T, D);
        return W = new o.SchemaEnv({ schema: T, schemaId: H, meta: L, baseId: D, localRefs: ae }), this._cache.set(W.schema, W), k && !D.startsWith("#") && (D && this._checkUnique(D), this.refs[D] = W), d && this.validateSchema(T, !0), W;
      }
      _checkUnique(T) {
        if (this.schemas[T] || this.refs[T])
          throw new Error(`schema with key or id "${T}" already exists`);
      }
      _compileSchemaEnv(T) {
        if (T.meta ? this._compileMetaSchema(T) : o.compileSchema.call(this, T), !T.validate)
          throw new Error("ajv implementation error");
        return T.validate;
      }
      _compileMetaSchema(T) {
        const L = this.opts;
        this.opts = this._metaOpts;
        try {
          o.compileSchema.call(this, T);
        } finally {
          this.opts = L;
        }
      }
    }
    E.ValidationError = i.default, E.MissingRefError = g.default, e.default = E;
    function a(U, T, L, D = "error") {
      for (const d in U) {
        const k = d;
        k in T && this.logger[D](`${L}: option ${d}. ${U[k]}`);
      }
    }
    function n(U) {
      return U = (0, c.normalizeId)(U), this.schemas[U] || this.refs[U];
    }
    function u() {
      const U = this.opts.schemas;
      if (U)
        if (Array.isArray(U))
          this.addSchema(U);
        else
          for (const T in U)
            this.addSchema(U[T], T);
    }
    function v() {
      for (const U in this.opts.formats) {
        const T = this.opts.formats[U];
        T && this.addFormat(U, T);
      }
    }
    function R(U) {
      if (Array.isArray(U)) {
        this.addVocabulary(U);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const T in U) {
        const L = U[T];
        L.keyword || (L.keyword = T), this.addKeyword(L);
      }
    }
    function C() {
      const U = { ...this.opts };
      for (const T of S)
        delete U[T];
      return U;
    }
    const N = { log() {
    }, warn() {
    }, error() {
    } };
    function A(U) {
      if (U === !1)
        return N;
      if (U === void 0)
        return console;
      if (U.log && U.warn && U.error)
        return U;
      throw new Error("logger must implement log, warn and error methods");
    }
    const K = /^[a-z_$][a-z0-9_$:-]*$/i;
    function x(U, T) {
      const { RULES: L } = this;
      if ((0, f.eachItem)(U, (D) => {
        if (L.keywords[D])
          throw new Error(`Keyword ${D} is already defined`);
        if (!K.test(D))
          throw new Error(`Keyword ${D} has invalid name`);
      }), !!T && T.$data && !("code" in T || "validate" in T))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Z(U, T, L) {
      var D;
      const d = T == null ? void 0 : T.post;
      if (L && d)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let I = d ? k.post : k.rules.find(({ type: W }) => W === L);
      if (I || (I = { type: L, rules: [] }, k.rules.push(I)), k.keywords[U] = !0, !T)
        return;
      const H = {
        keyword: U,
        definition: {
          ...T,
          type: (0, h.getJSONTypes)(T.type),
          schemaType: (0, h.getJSONTypes)(T.schemaType)
        }
      };
      T.before ? ie.call(this, I, H, T.before) : I.rules.push(H), k.all[U] = H, (D = T.implements) === null || D === void 0 || D.forEach((W) => this.addKeyword(W));
    }
    function ie(U, T, L) {
      const D = U.rules.findIndex((d) => d.keyword === L);
      D >= 0 ? U.rules.splice(D, 0, T) : (U.rules.push(T), this.logger.warn(`rule ${L} is not defined`));
    }
    function ye(U) {
      let { metaSchema: T } = U;
      T !== void 0 && (U.$data && this.opts.$data && (T = je(T)), U.validateSchema = this.compile(T, !0));
    }
    const re = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function je(U) {
      return { anyOf: [U, re] };
    }
  })(Xt)), Xt;
}
var at = {}, st = {}, nt = {}, Hr;
function wo() {
  if (Hr) return nt;
  Hr = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return nt.default = e, nt;
}
var Ce = {}, xr;
function So() {
  if (xr) return Ce;
  xr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.callRef = Ce.getValidate = void 0;
  const e = /* @__PURE__ */ Wt(), t = /* @__PURE__ */ Se(), p = /* @__PURE__ */ X(), i = /* @__PURE__ */ Ie(), g = /* @__PURE__ */ ur(), r = /* @__PURE__ */ te(), o = {
    keyword: "$ref",
    schemaType: "string",
    code(h) {
      const { gen: f, schema: b, it: $ } = h, { baseId: w, schemaEnv: S, validateName: P, opts: m, self: y } = $, { root: l } = S;
      if ((b === "#" || b === "#/") && w === l.baseId)
        return E();
      const _ = g.resolveRef.call(y, l, w, b);
      if (_ === void 0)
        throw new e.default($.opts.uriResolver, w, b);
      if (_ instanceof g.SchemaEnv)
        return a(_);
      return n(_);
      function E() {
        if (S === l)
          return c(h, P, S, S.$async);
        const u = f.scopeValue("root", { ref: l });
        return c(h, (0, p._)`${u}.validate`, l, l.$async);
      }
      function a(u) {
        const v = s(h, u);
        c(h, v, u, u.$async);
      }
      function n(u) {
        const v = f.scopeValue("schema", m.code.source === !0 ? { ref: u, code: (0, p.stringify)(u) } : { ref: u }), R = f.name("valid"), C = h.subschema({
          schema: u,
          dataTypes: [],
          schemaPath: p.nil,
          topSchemaRef: v,
          errSchemaPath: b
        }, R);
        h.mergeEvaluated(C), h.ok(R);
      }
    }
  };
  function s(h, f) {
    const { gen: b } = h;
    return f.validate ? b.scopeValue("validate", { ref: f.validate }) : (0, p._)`${b.scopeValue("wrapper", { ref: f })}.validate`;
  }
  Ce.getValidate = s;
  function c(h, f, b, $) {
    const { gen: w, it: S } = h, { allErrors: P, schemaEnv: m, opts: y } = S, l = y.passContext ? i.default.this : p.nil;
    $ ? _() : E();
    function _() {
      if (!m.$async)
        throw new Error("async schema referenced by sync schema");
      const u = w.let("valid");
      w.try(() => {
        w.code((0, p._)`await ${(0, t.callValidateCode)(h, f, l)}`), n(f), P || w.assign(u, !0);
      }, (v) => {
        w.if((0, p._)`!(${v} instanceof ${S.ValidationError})`, () => w.throw(v)), a(v), P || w.assign(u, !1);
      }), h.ok(u);
    }
    function E() {
      h.result((0, t.callValidateCode)(h, f, l), () => n(f), () => a(f));
    }
    function a(u) {
      const v = (0, p._)`${u}.errors`;
      w.assign(i.default.vErrors, (0, p._)`${i.default.vErrors} === null ? ${v} : ${i.default.vErrors}.concat(${v})`), w.assign(i.default.errors, (0, p._)`${i.default.vErrors}.length`);
    }
    function n(u) {
      var v;
      if (!S.opts.unevaluated)
        return;
      const R = (v = b == null ? void 0 : b.validate) === null || v === void 0 ? void 0 : v.evaluated;
      if (S.props !== !0)
        if (R && !R.dynamicProps)
          R.props !== void 0 && (S.props = r.mergeEvaluated.props(w, R.props, S.props));
        else {
          const C = w.var("props", (0, p._)`${u}.evaluated.props`);
          S.props = r.mergeEvaluated.props(w, C, S.props, p.Name);
        }
      if (S.items !== !0)
        if (R && !R.dynamicItems)
          R.items !== void 0 && (S.items = r.mergeEvaluated.items(w, R.items, S.items));
        else {
          const C = w.var("items", (0, p._)`${u}.evaluated.items`);
          S.items = r.mergeEvaluated.items(w, C, S.items, p.Name);
        }
    }
  }
  return Ce.callRef = c, Ce.default = o, Ce;
}
var Gr;
function Eo() {
  if (Gr) return st;
  Gr = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wo(), t = /* @__PURE__ */ So(), p = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return st.default = p, st;
}
var ot = {}, it = {}, Wr;
function Po() {
  if (Wr) return it;
  Wr = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = e.operators, p = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, i = {
    message: ({ keyword: r, schemaCode: o }) => (0, e.str)`must be ${p[r].okStr} ${o}`,
    params: ({ keyword: r, schemaCode: o }) => (0, e._)`{comparison: ${p[r].okStr}, limit: ${o}}`
  }, g = {
    keyword: Object.keys(p),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: i,
    code(r) {
      const { keyword: o, data: s, schemaCode: c } = r;
      r.fail$data((0, e._)`${s} ${p[o].fail} ${c} || isNaN(${s})`);
    }
  };
  return it.default = g, it;
}
var lt = {}, Br;
function Ro() {
  if (Br) return lt;
  Br = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), p = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must be multiple of ${i}`,
      params: ({ schemaCode: i }) => (0, e._)`{multipleOf: ${i}}`
    },
    code(i) {
      const { gen: g, data: r, schemaCode: o, it: s } = i, c = s.opts.multipleOfPrecision, h = g.let("res"), f = c ? (0, e._)`Math.abs(Math.round(${h}) - ${h}) > 1e-${c}` : (0, e._)`${h} !== parseInt(${h})`;
      i.fail$data((0, e._)`(${o} === 0 || (${h} = ${r}/${o}, ${f}))`);
    }
  };
  return lt.default = p, lt;
}
var ct = {}, dt = {}, Jr;
function Oo() {
  if (Jr) return dt;
  Jr = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  function e(t) {
    const p = t.length;
    let i = 0, g = 0, r;
    for (; g < p; )
      i++, r = t.charCodeAt(g++), r >= 55296 && r <= 56319 && g < p && (r = t.charCodeAt(g), (r & 64512) === 56320 && g++);
    return i;
  }
  return dt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', dt;
}
var Qr;
function No() {
  if (Qr) return ct;
  Qr = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), p = /* @__PURE__ */ Oo(), g = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const s = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: s, schemaCode: c, it: h } = r, f = o === "maxLength" ? e.operators.GT : e.operators.LT, b = h.opts.unicode === !1 ? (0, e._)`${s}.length` : (0, e._)`${(0, t.useFunc)(r.gen, p.default)}(${s})`;
      r.fail$data((0, e._)`${b} ${f} ${c}`);
    }
  };
  return ct.default = g, ct;
}
var ut = {}, Yr;
function To() {
  if (Yr) return ut;
  Yr = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ te(), p = /* @__PURE__ */ X(), g = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, p.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, p._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: o, data: s, $data: c, schema: h, schemaCode: f, it: b } = r, $ = b.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: w } = b.opts.code, S = w.code === "new RegExp" ? (0, p._)`new RegExp` : (0, t.useFunc)(o, w), P = o.let("valid");
        o.try(() => o.assign(P, (0, p._)`${S}(${f}, ${$}).test(${s})`), () => o.assign(P, !1)), r.fail$data((0, p._)`!${P}`);
      } else {
        const w = (0, e.usePattern)(r, h);
        r.fail$data((0, p._)`!${w}.test(${s})`);
      }
    }
  };
  return ut.default = g, ut;
}
var ft = {}, Xr;
function jo() {
  if (Xr) return ft;
  Xr = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), p = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: g }) {
        const r = i === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${g} properties`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: g, data: r, schemaCode: o } = i, s = g === "maxProperties" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`Object.keys(${r}).length ${s} ${o}`);
    }
  };
  return ft.default = p, ft;
}
var ht = {}, Zr;
function Co() {
  if (Zr) return ht;
  Zr = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ X(), p = /* @__PURE__ */ te(), g = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: o, schema: s, schemaCode: c, data: h, $data: f, it: b } = r, { opts: $ } = b;
      if (!f && s.length === 0)
        return;
      const w = s.length >= $.loopRequired;
      if (b.allErrors ? S() : P(), $.strictRequired) {
        const l = r.parentSchema.properties, { definedProperties: _ } = r.it;
        for (const E of s)
          if ((l == null ? void 0 : l[E]) === void 0 && !_.has(E)) {
            const a = b.schemaEnv.baseId + b.errSchemaPath, n = `required property "${E}" is not defined at "${a}" (strictRequired)`;
            (0, p.checkStrictMode)(b, n, b.opts.strictRequired);
          }
      }
      function S() {
        if (w || f)
          r.block$data(t.nil, m);
        else
          for (const l of s)
            (0, e.checkReportMissingProp)(r, l);
      }
      function P() {
        const l = o.let("missing");
        if (w || f) {
          const _ = o.let("valid", !0);
          r.block$data(_, () => y(l, _)), r.ok(_);
        } else
          o.if((0, e.checkMissingProp)(r, s, l)), (0, e.reportMissingProp)(r, l), o.else();
      }
      function m() {
        o.forOf("prop", c, (l) => {
          r.setParams({ missingProperty: l }), o.if((0, e.noPropertyInData)(o, h, l, $.ownProperties), () => r.error());
        });
      }
      function y(l, _) {
        r.setParams({ missingProperty: l }), o.forOf(l, c, () => {
          o.assign(_, (0, e.propertyInData)(o, h, l, $.ownProperties)), o.if((0, t.not)(_), () => {
            r.error(), o.break();
          });
        }, t.nil);
      }
    }
  };
  return ht.default = g, ht;
}
var pt = {}, ea;
function Do() {
  if (ea) return pt;
  ea = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), p = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: g }) {
        const r = i === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${g} items`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: g, data: r, schemaCode: o } = i, s = g === "maxItems" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`${r}.length ${s} ${o}`);
    }
  };
  return pt.default = p, pt;
}
var mt = {}, yt = {}, ta;
function fr() {
  if (ta) return yt;
  ta = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = Aa();
  return e.code = 'require("ajv/dist/runtime/equal").default', yt.default = e, yt;
}
var ra;
function Io() {
  if (ra) return mt;
  ra = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zt(), t = /* @__PURE__ */ X(), p = /* @__PURE__ */ te(), i = /* @__PURE__ */ fr(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: o, j: s } }) => (0, t.str)`must NOT have duplicate items (items ## ${s} and ${o} are identical)`,
      params: ({ params: { i: o, j: s } }) => (0, t._)`{i: ${o}, j: ${s}}`
    },
    code(o) {
      const { gen: s, data: c, $data: h, schema: f, parentSchema: b, schemaCode: $, it: w } = o;
      if (!h && !f)
        return;
      const S = s.let("valid"), P = b.items ? (0, e.getSchemaTypes)(b.items) : [];
      o.block$data(S, m, (0, t._)`${$} === false`), o.ok(S);
      function m() {
        const E = s.let("i", (0, t._)`${c}.length`), a = s.let("j");
        o.setParams({ i: E, j: a }), s.assign(S, !0), s.if((0, t._)`${E} > 1`, () => (y() ? l : _)(E, a));
      }
      function y() {
        return P.length > 0 && !P.some((E) => E === "object" || E === "array");
      }
      function l(E, a) {
        const n = s.name("item"), u = (0, e.checkDataTypes)(P, n, w.opts.strictNumbers, e.DataType.Wrong), v = s.const("indices", (0, t._)`{}`);
        s.for((0, t._)`;${E}--;`, () => {
          s.let(n, (0, t._)`${c}[${E}]`), s.if(u, (0, t._)`continue`), P.length > 1 && s.if((0, t._)`typeof ${n} == "string"`, (0, t._)`${n} += "_"`), s.if((0, t._)`typeof ${v}[${n}] == "number"`, () => {
            s.assign(a, (0, t._)`${v}[${n}]`), o.error(), s.assign(S, !1).break();
          }).code((0, t._)`${v}[${n}] = ${E}`);
        });
      }
      function _(E, a) {
        const n = (0, p.useFunc)(s, i.default), u = s.name("outer");
        s.label(u).for((0, t._)`;${E}--;`, () => s.for((0, t._)`${a} = ${E}; ${a}--;`, () => s.if((0, t._)`${n}(${c}[${E}], ${c}[${a}])`, () => {
          o.error(), s.assign(S, !1).break(u);
        })));
      }
    }
  };
  return mt.default = r, mt;
}
var gt = {}, aa;
function qo() {
  if (aa) return gt;
  aa = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), p = /* @__PURE__ */ fr(), g = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: o, data: s, $data: c, schemaCode: h, schema: f } = r;
      c || f && typeof f == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(o, p.default)}(${s}, ${h})`) : r.fail((0, e._)`${f} !== ${s}`);
    }
  };
  return gt.default = g, gt;
}
var vt = {}, sa;
function Ao() {
  if (sa) return vt;
  sa = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), p = /* @__PURE__ */ fr(), g = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: o, data: s, $data: c, schema: h, schemaCode: f, it: b } = r;
      if (!c && h.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = h.length >= b.opts.loopEnum;
      let w;
      const S = () => w ?? (w = (0, t.useFunc)(o, p.default));
      let P;
      if ($ || c)
        P = o.let("valid"), r.block$data(P, m);
      else {
        if (!Array.isArray(h))
          throw new Error("ajv implementation error");
        const l = o.const("vSchema", f);
        P = (0, e.or)(...h.map((_, E) => y(l, E)));
      }
      r.pass(P);
      function m() {
        o.assign(P, !1), o.forOf("v", f, (l) => o.if((0, e._)`${S()}(${s}, ${l})`, () => o.assign(P, !0).break()));
      }
      function y(l, _) {
        const E = h[_];
        return typeof E == "object" && E !== null ? (0, e._)`${S()}(${s}, ${l}[${_}])` : (0, e._)`${s} === ${E}`;
      }
    }
  };
  return vt.default = g, vt;
}
var na;
function Mo() {
  if (na) return ot;
  na = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Po(), t = /* @__PURE__ */ Ro(), p = /* @__PURE__ */ No(), i = /* @__PURE__ */ To(), g = /* @__PURE__ */ jo(), r = /* @__PURE__ */ Co(), o = /* @__PURE__ */ Do(), s = /* @__PURE__ */ Io(), c = /* @__PURE__ */ qo(), h = /* @__PURE__ */ Ao(), f = [
    // number
    e.default,
    t.default,
    // string
    p.default,
    i.default,
    // object
    g.default,
    r.default,
    // array
    o.default,
    s.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    h.default
  ];
  return ot.default = f, ot;
}
var _t = {}, ze = {}, oa;
function La() {
  if (oa) return ze;
  oa = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), i = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: o, it: s } = r, { items: c } = o;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(s, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      g(r, c);
    }
  };
  function g(r, o) {
    const { gen: s, schema: c, data: h, keyword: f, it: b } = r;
    b.items = !0;
    const $ = s.const("len", (0, e._)`${h}.length`);
    if (c === !1)
      r.setParams({ len: o.length }), r.pass((0, e._)`${$} <= ${o.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(b, c)) {
      const S = s.var("valid", (0, e._)`${$} <= ${o.length}`);
      s.if((0, e.not)(S), () => w(S)), r.ok(S);
    }
    function w(S) {
      s.forRange("i", o.length, $, (P) => {
        r.subschema({ keyword: f, dataProp: P, dataPropType: t.Type.Num }, S), b.allErrors || s.if((0, e.not)(S), () => s.break());
      });
    }
  }
  return ze.validateAdditionalItems = g, ze.default = i, ze;
}
var bt = {}, Fe = {}, ia;
function Va() {
  if (ia) return Fe;
  ia = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.validateTuple = void 0;
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), p = /* @__PURE__ */ Se(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: o, it: s } = r;
      if (Array.isArray(o))
        return g(r, "additionalItems", o);
      s.items = !0, !(0, t.alwaysValidSchema)(s, o) && r.ok((0, p.validateArray)(r));
    }
  };
  function g(r, o, s = r.schema) {
    const { gen: c, parentSchema: h, data: f, keyword: b, it: $ } = r;
    P(h), $.opts.unevaluated && s.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(c, s.length, $.items));
    const w = c.name("valid"), S = c.const("len", (0, e._)`${f}.length`);
    s.forEach((m, y) => {
      (0, t.alwaysValidSchema)($, m) || (c.if((0, e._)`${S} > ${y}`, () => r.subschema({
        keyword: b,
        schemaProp: y,
        dataProp: y
      }, w)), r.ok(w));
    });
    function P(m) {
      const { opts: y, errSchemaPath: l } = $, _ = s.length, E = _ === m.minItems && (_ === m.maxItems || m[o] === !1);
      if (y.strictTuples && !E) {
        const a = `"${b}" is ${_}-tuple, but minItems or maxItems/${o} are not specified or different at path "${l}"`;
        (0, t.checkStrictMode)($, a, y.strictTuples);
      }
    }
  }
  return Fe.validateTuple = g, Fe.default = i, Fe;
}
var la;
function Lo() {
  if (la) return bt;
  la = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Va(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (p) => (0, e.validateTuple)(p, "items")
  };
  return bt.default = t, bt;
}
var $t = {}, ca;
function Vo() {
  if (ca) return $t;
  ca = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), p = /* @__PURE__ */ Se(), i = /* @__PURE__ */ La(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { schema: s, parentSchema: c, it: h } = o, { prefixItems: f } = c;
      h.items = !0, !(0, t.alwaysValidSchema)(h, s) && (f ? (0, i.validateAdditionalItems)(o, f) : o.ok((0, p.validateArray)(o)));
    }
  };
  return $t.default = r, $t;
}
var kt = {}, da;
function Uo() {
  if (da) return kt;
  da = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), i = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: g, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${g} valid item(s)` : (0, e.str)`must contain at least ${g} and no more than ${r} valid item(s)`,
      params: ({ params: { min: g, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${g}}` : (0, e._)`{minContains: ${g}, maxContains: ${r}}`
    },
    code(g) {
      const { gen: r, schema: o, parentSchema: s, data: c, it: h } = g;
      let f, b;
      const { minContains: $, maxContains: w } = s;
      h.opts.next ? (f = $ === void 0 ? 1 : $, b = w) : f = 1;
      const S = r.const("len", (0, e._)`${c}.length`);
      if (g.setParams({ min: f, max: b }), b === void 0 && f === 0) {
        (0, t.checkStrictMode)(h, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (b !== void 0 && f > b) {
        (0, t.checkStrictMode)(h, '"minContains" > "maxContains" is always invalid'), g.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(h, o)) {
        let _ = (0, e._)`${S} >= ${f}`;
        b !== void 0 && (_ = (0, e._)`${_} && ${S} <= ${b}`), g.pass(_);
        return;
      }
      h.items = !0;
      const P = r.name("valid");
      b === void 0 && f === 1 ? y(P, () => r.if(P, () => r.break())) : f === 0 ? (r.let(P, !0), b !== void 0 && r.if((0, e._)`${c}.length > 0`, m)) : (r.let(P, !1), m()), g.result(P, () => g.reset());
      function m() {
        const _ = r.name("_valid"), E = r.let("count", 0);
        y(_, () => r.if(_, () => l(E)));
      }
      function y(_, E) {
        r.forRange("i", 0, S, (a) => {
          g.subschema({
            keyword: "contains",
            dataProp: a,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, _), E();
        });
      }
      function l(_) {
        r.code((0, e._)`${_}++`), b === void 0 ? r.if((0, e._)`${_} >= ${f}`, () => r.assign(P, !0).break()) : (r.if((0, e._)`${_} > ${b}`, () => r.assign(P, !1).break()), f === 1 ? r.assign(P, !0) : r.if((0, e._)`${_} >= ${f}`, () => r.assign(P, !0)));
      }
    }
  };
  return kt.default = i, kt;
}
var ir = {}, ua;
function zo() {
  return ua || (ua = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ X(), p = /* @__PURE__ */ te(), i = /* @__PURE__ */ Se();
    e.error = {
      message: ({ params: { property: c, depsCount: h, deps: f } }) => {
        const b = h === 1 ? "property" : "properties";
        return (0, t.str)`must have ${b} ${f} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: h, deps: f, missingProperty: b } }) => (0, t._)`{property: ${c},
    missingProperty: ${b},
    depsCount: ${h},
    deps: ${f}}`
      // TODO change to reference
    };
    const g = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [h, f] = r(c);
        o(c, h), s(c, f);
      }
    };
    function r({ schema: c }) {
      const h = {}, f = {};
      for (const b in c) {
        if (b === "__proto__")
          continue;
        const $ = Array.isArray(c[b]) ? h : f;
        $[b] = c[b];
      }
      return [h, f];
    }
    function o(c, h = c.schema) {
      const { gen: f, data: b, it: $ } = c;
      if (Object.keys(h).length === 0)
        return;
      const w = f.let("missing");
      for (const S in h) {
        const P = h[S];
        if (P.length === 0)
          continue;
        const m = (0, i.propertyInData)(f, b, S, $.opts.ownProperties);
        c.setParams({
          property: S,
          depsCount: P.length,
          deps: P.join(", ")
        }), $.allErrors ? f.if(m, () => {
          for (const y of P)
            (0, i.checkReportMissingProp)(c, y);
        }) : (f.if((0, t._)`${m} && (${(0, i.checkMissingProp)(c, P, w)})`), (0, i.reportMissingProp)(c, w), f.else());
      }
    }
    e.validatePropertyDeps = o;
    function s(c, h = c.schema) {
      const { gen: f, data: b, keyword: $, it: w } = c, S = f.name("valid");
      for (const P in h)
        (0, p.alwaysValidSchema)(w, h[P]) || (f.if(
          (0, i.propertyInData)(f, b, P, w.opts.ownProperties),
          () => {
            const m = c.subschema({ keyword: $, schemaProp: P }, S);
            c.mergeValidEvaluated(m, S);
          },
          () => f.var(S, !0)
          // TODO var
        ), c.ok(S));
    }
    e.validateSchemaDeps = s, e.default = g;
  })(ir)), ir;
}
var wt = {}, fa;
function Fo() {
  if (fa) return wt;
  fa = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), i = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: g }) => (0, e._)`{propertyName: ${g.propertyName}}`
    },
    code(g) {
      const { gen: r, schema: o, data: s, it: c } = g;
      if ((0, t.alwaysValidSchema)(c, o))
        return;
      const h = r.name("valid");
      r.forIn("key", s, (f) => {
        g.setParams({ propertyName: f }), g.subschema({
          keyword: "propertyNames",
          data: f,
          dataTypes: ["string"],
          propertyName: f,
          compositeRule: !0
        }, h), r.if((0, e.not)(h), () => {
          g.error(!0), c.allErrors || r.break();
        });
      }), g.ok(h);
    }
  };
  return wt.default = i, wt;
}
var St = {}, ha;
function Ua() {
  if (ha) return St;
  ha = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ X(), p = /* @__PURE__ */ Ie(), i = /* @__PURE__ */ te(), r = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: o }) => (0, t._)`{additionalProperty: ${o.additionalProperty}}`
    },
    code(o) {
      const { gen: s, schema: c, parentSchema: h, data: f, errsCount: b, it: $ } = o;
      if (!b)
        throw new Error("ajv implementation error");
      const { allErrors: w, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, i.alwaysValidSchema)($, c))
        return;
      const P = (0, e.allSchemaProperties)(h.properties), m = (0, e.allSchemaProperties)(h.patternProperties);
      y(), o.ok((0, t._)`${b} === ${p.default.errors}`);
      function y() {
        s.forIn("key", f, (n) => {
          !P.length && !m.length ? E(n) : s.if(l(n), () => E(n));
        });
      }
      function l(n) {
        let u;
        if (P.length > 8) {
          const v = (0, i.schemaRefOrVal)($, h.properties, "properties");
          u = (0, e.isOwnProperty)(s, v, n);
        } else P.length ? u = (0, t.or)(...P.map((v) => (0, t._)`${n} === ${v}`)) : u = t.nil;
        return m.length && (u = (0, t.or)(u, ...m.map((v) => (0, t._)`${(0, e.usePattern)(o, v)}.test(${n})`))), (0, t.not)(u);
      }
      function _(n) {
        s.code((0, t._)`delete ${f}[${n}]`);
      }
      function E(n) {
        if (S.removeAdditional === "all" || S.removeAdditional && c === !1) {
          _(n);
          return;
        }
        if (c === !1) {
          o.setParams({ additionalProperty: n }), o.error(), w || s.break();
          return;
        }
        if (typeof c == "object" && !(0, i.alwaysValidSchema)($, c)) {
          const u = s.name("valid");
          S.removeAdditional === "failing" ? (a(n, u, !1), s.if((0, t.not)(u), () => {
            o.reset(), _(n);
          })) : (a(n, u), w || s.if((0, t.not)(u), () => s.break()));
        }
      }
      function a(n, u, v) {
        const R = {
          keyword: "additionalProperties",
          dataProp: n,
          dataPropType: i.Type.Str
        };
        v === !1 && Object.assign(R, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), o.subschema(R, u);
      }
    }
  };
  return St.default = r, St;
}
var Et = {}, pa;
function Ko() {
  if (pa) return Et;
  pa = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gt(), t = /* @__PURE__ */ Se(), p = /* @__PURE__ */ te(), i = /* @__PURE__ */ Ua(), g = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: o, schema: s, parentSchema: c, data: h, it: f } = r;
      f.opts.removeAdditional === "all" && c.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(f, i.default, "additionalProperties"));
      const b = (0, t.allSchemaProperties)(s);
      for (const m of b)
        f.definedProperties.add(m);
      f.opts.unevaluated && b.length && f.props !== !0 && (f.props = p.mergeEvaluated.props(o, (0, p.toHash)(b), f.props));
      const $ = b.filter((m) => !(0, p.alwaysValidSchema)(f, s[m]));
      if ($.length === 0)
        return;
      const w = o.name("valid");
      for (const m of $)
        S(m) ? P(m) : (o.if((0, t.propertyInData)(o, h, m, f.opts.ownProperties)), P(m), f.allErrors || o.else().var(w, !0), o.endIf()), r.it.definedProperties.add(m), r.ok(w);
      function S(m) {
        return f.opts.useDefaults && !f.compositeRule && s[m].default !== void 0;
      }
      function P(m) {
        r.subschema({
          keyword: "properties",
          schemaProp: m,
          dataProp: m
        }, w);
      }
    }
  };
  return Et.default = g, Et;
}
var Pt = {}, ma;
function Ho() {
  if (ma) return Pt;
  ma = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ X(), p = /* @__PURE__ */ te(), i = /* @__PURE__ */ te(), g = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: o, schema: s, data: c, parentSchema: h, it: f } = r, { opts: b } = f, $ = (0, e.allSchemaProperties)(s), w = $.filter((E) => (0, p.alwaysValidSchema)(f, s[E]));
      if ($.length === 0 || w.length === $.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const S = b.strictSchema && !b.allowMatchingProperties && h.properties, P = o.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, i.evaluatedPropsToName)(o, f.props));
      const { props: m } = f;
      y();
      function y() {
        for (const E of $)
          S && l(E), f.allErrors ? _(E) : (o.var(P, !0), _(E), o.if(P));
      }
      function l(E) {
        for (const a in S)
          new RegExp(E).test(a) && (0, p.checkStrictMode)(f, `property ${a} matches pattern ${E} (use allowMatchingProperties)`);
      }
      function _(E) {
        o.forIn("key", c, (a) => {
          o.if((0, t._)`${(0, e.usePattern)(r, E)}.test(${a})`, () => {
            const n = w.includes(E);
            n || r.subschema({
              keyword: "patternProperties",
              schemaProp: E,
              dataProp: a,
              dataPropType: i.Type.Str
            }, P), f.opts.unevaluated && m !== !0 ? o.assign((0, t._)`${m}[${a}]`, !0) : !n && !f.allErrors && o.if((0, t.not)(P), () => o.break());
          });
        });
      }
    }
  };
  return Pt.default = g, Pt;
}
var Rt = {}, ya;
function xo() {
  if (ya) return Rt;
  ya = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(p) {
      const { gen: i, schema: g, it: r } = p;
      if ((0, e.alwaysValidSchema)(r, g)) {
        p.fail();
        return;
      }
      const o = i.name("valid");
      p.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, o), p.failResult(o, () => p.reset(), () => p.error());
    },
    error: { message: "must NOT be valid" }
  };
  return Rt.default = t, Rt;
}
var Ot = {}, ga;
function Go() {
  if (ga) return Ot;
  ga = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Se()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Ot.default = t, Ot;
}
var Nt = {}, va;
function Wo() {
  if (va) return Nt;
  va = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), i = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: g }) => (0, e._)`{passingSchemas: ${g.passing}}`
    },
    code(g) {
      const { gen: r, schema: o, parentSchema: s, it: c } = g;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && s.discriminator)
        return;
      const h = o, f = r.let("valid", !1), b = r.let("passing", null), $ = r.name("_valid");
      g.setParams({ passing: b }), r.block(w), g.result(f, () => g.reset(), () => g.error(!0));
      function w() {
        h.forEach((S, P) => {
          let m;
          (0, t.alwaysValidSchema)(c, S) ? r.var($, !0) : m = g.subschema({
            keyword: "oneOf",
            schemaProp: P,
            compositeRule: !0
          }, $), P > 0 && r.if((0, e._)`${$} && ${f}`).assign(f, !1).assign(b, (0, e._)`[${b}, ${P}]`).else(), r.if($, () => {
            r.assign(f, !0), r.assign(b, P), m && g.mergeEvaluated(m, e.Name);
          });
        });
      }
    }
  };
  return Nt.default = i, Nt;
}
var Tt = {}, _a;
function Bo() {
  if (_a) return Tt;
  _a = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(p) {
      const { gen: i, schema: g, it: r } = p;
      if (!Array.isArray(g))
        throw new Error("ajv implementation error");
      const o = i.name("valid");
      g.forEach((s, c) => {
        if ((0, e.alwaysValidSchema)(r, s))
          return;
        const h = p.subschema({ keyword: "allOf", schemaProp: c }, o);
        p.ok(o), p.mergeEvaluated(h);
      });
    }
  };
  return Tt.default = t, Tt;
}
var jt = {}, ba;
function Jo() {
  if (ba) return jt;
  ba = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ te(), i = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: o, parentSchema: s, it: c } = r;
      s.then === void 0 && s.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const h = g(c, "then"), f = g(c, "else");
      if (!h && !f)
        return;
      const b = o.let("valid", !0), $ = o.name("_valid");
      if (w(), r.reset(), h && f) {
        const P = o.let("ifClause");
        r.setParams({ ifClause: P }), o.if($, S("then", P), S("else", P));
      } else h ? o.if($, S("then")) : o.if((0, e.not)($), S("else"));
      r.pass(b, () => r.error(!0));
      function w() {
        const P = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        r.mergeEvaluated(P);
      }
      function S(P, m) {
        return () => {
          const y = r.subschema({ keyword: P }, $);
          o.assign(b, $), r.mergeValidEvaluated(y, b), m ? o.assign(m, (0, e._)`${P}`) : r.setParams({ ifClause: P });
        };
      }
    }
  };
  function g(r, o) {
    const s = r.schema[o];
    return s !== void 0 && !(0, t.alwaysValidSchema)(r, s);
  }
  return jt.default = i, jt;
}
var Ct = {}, $a;
function Qo() {
  if ($a) return Ct;
  $a = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: p, parentSchema: i, it: g }) {
      i.if === void 0 && (0, e.checkStrictMode)(g, `"${p}" without "if" is ignored`);
    }
  };
  return Ct.default = t, Ct;
}
var ka;
function Yo() {
  if (ka) return _t;
  ka = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ La(), t = /* @__PURE__ */ Lo(), p = /* @__PURE__ */ Va(), i = /* @__PURE__ */ Vo(), g = /* @__PURE__ */ Uo(), r = /* @__PURE__ */ zo(), o = /* @__PURE__ */ Fo(), s = /* @__PURE__ */ Ua(), c = /* @__PURE__ */ Ko(), h = /* @__PURE__ */ Ho(), f = /* @__PURE__ */ xo(), b = /* @__PURE__ */ Go(), $ = /* @__PURE__ */ Wo(), w = /* @__PURE__ */ Bo(), S = /* @__PURE__ */ Jo(), P = /* @__PURE__ */ Qo();
  function m(y = !1) {
    const l = [
      // any
      f.default,
      b.default,
      $.default,
      w.default,
      S.default,
      P.default,
      // object
      o.default,
      s.default,
      r.default,
      c.default,
      h.default
    ];
    return y ? l.push(t.default, i.default) : l.push(e.default, p.default), l.push(g.default), l;
  }
  return _t.default = m, _t;
}
var Dt = {}, It = {}, wa;
function Xo() {
  if (wa) return It;
  wa = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), p = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must match format "${i}"`,
      params: ({ schemaCode: i }) => (0, e._)`{format: ${i}}`
    },
    code(i, g) {
      const { gen: r, data: o, $data: s, schema: c, schemaCode: h, it: f } = i, { opts: b, errSchemaPath: $, schemaEnv: w, self: S } = f;
      if (!b.validateFormats)
        return;
      s ? P() : m();
      function P() {
        const y = r.scopeValue("formats", {
          ref: S.formats,
          code: b.code.formats
        }), l = r.const("fDef", (0, e._)`${y}[${h}]`), _ = r.let("fType"), E = r.let("format");
        r.if((0, e._)`typeof ${l} == "object" && !(${l} instanceof RegExp)`, () => r.assign(_, (0, e._)`${l}.type || "string"`).assign(E, (0, e._)`${l}.validate`), () => r.assign(_, (0, e._)`"string"`).assign(E, l)), i.fail$data((0, e.or)(a(), n()));
        function a() {
          return b.strictSchema === !1 ? e.nil : (0, e._)`${h} && !${E}`;
        }
        function n() {
          const u = w.$async ? (0, e._)`(${l}.async ? await ${E}(${o}) : ${E}(${o}))` : (0, e._)`${E}(${o})`, v = (0, e._)`(typeof ${E} == "function" ? ${u} : ${E}.test(${o}))`;
          return (0, e._)`${E} && ${E} !== true && ${_} === ${g} && !${v}`;
        }
      }
      function m() {
        const y = S.formats[c];
        if (!y) {
          a();
          return;
        }
        if (y === !0)
          return;
        const [l, _, E] = n(y);
        l === g && i.pass(u());
        function a() {
          if (b.strictSchema === !1) {
            S.logger.warn(v());
            return;
          }
          throw new Error(v());
          function v() {
            return `unknown format "${c}" ignored in schema at path "${$}"`;
          }
        }
        function n(v) {
          const R = v instanceof RegExp ? (0, e.regexpCode)(v) : b.code.formats ? (0, e._)`${b.code.formats}${(0, e.getProperty)(c)}` : void 0, C = r.scopeValue("formats", { key: c, ref: v, code: R });
          return typeof v == "object" && !(v instanceof RegExp) ? [v.type || "string", v.validate, (0, e._)`${C}.validate`] : ["string", v, C];
        }
        function u() {
          if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
            if (!w.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${E}(${o})`;
          }
          return typeof _ == "function" ? (0, e._)`${E}(${o})` : (0, e._)`${E}.test(${o})`;
        }
      }
    }
  };
  return It.default = p, It;
}
var Sa;
function Zo() {
  if (Sa) return Dt;
  Sa = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Xo()).default];
  return Dt.default = t, Dt;
}
var Me = {}, Ea;
function ei() {
  return Ea || (Ea = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.contentVocabulary = Me.metadataVocabulary = void 0, Me.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Me.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Me;
}
var Pa;
function ti() {
  if (Pa) return at;
  Pa = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Eo(), t = /* @__PURE__ */ Mo(), p = /* @__PURE__ */ Yo(), i = /* @__PURE__ */ Zo(), g = /* @__PURE__ */ ei(), r = [
    e.default,
    t.default,
    (0, p.default)(),
    i.default,
    g.metadataVocabulary,
    g.contentVocabulary
  ];
  return at.default = r, at;
}
var qt = {}, Je = {}, Ra;
function ri() {
  if (Ra) return Je;
  Ra = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Je.DiscrError = e = {})), Je;
}
var Oa;
function ai() {
  if (Oa) return qt;
  Oa = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = /* @__PURE__ */ ri(), p = /* @__PURE__ */ ur(), i = /* @__PURE__ */ Wt(), g = /* @__PURE__ */ te(), o = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: s, tagName: c } }) => s === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: s, tag: c, tagName: h } }) => (0, e._)`{error: ${s}, tag: ${h}, tagValue: ${c}}`
    },
    code(s) {
      const { gen: c, data: h, schema: f, parentSchema: b, it: $ } = s, { oneOf: w } = b;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = f.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!w)
        throw new Error("discriminator: requires oneOf keyword");
      const P = c.let("valid", !1), m = c.const("tag", (0, e._)`${h}${(0, e.getProperty)(S)}`);
      c.if((0, e._)`typeof ${m} == "string"`, () => y(), () => s.error(!1, { discrError: t.DiscrError.Tag, tag: m, tagName: S })), s.ok(P);
      function y() {
        const E = _();
        c.if(!1);
        for (const a in E)
          c.elseIf((0, e._)`${m} === ${a}`), c.assign(P, l(E[a]));
        c.else(), s.error(!1, { discrError: t.DiscrError.Mapping, tag: m, tagName: S }), c.endIf();
      }
      function l(E) {
        const a = c.name("valid"), n = s.subschema({ keyword: "oneOf", schemaProp: E }, a);
        return s.mergeEvaluated(n, e.Name), a;
      }
      function _() {
        var E;
        const a = {}, n = v(b);
        let u = !0;
        for (let N = 0; N < w.length; N++) {
          let A = w[N];
          if (A != null && A.$ref && !(0, g.schemaHasRulesButRef)(A, $.self.RULES)) {
            const x = A.$ref;
            if (A = p.resolveRef.call($.self, $.schemaEnv.root, $.baseId, x), A instanceof p.SchemaEnv && (A = A.schema), A === void 0)
              throw new i.default($.opts.uriResolver, $.baseId, x);
          }
          const K = (E = A == null ? void 0 : A.properties) === null || E === void 0 ? void 0 : E[S];
          if (typeof K != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          u = u && (n || v(A)), R(K, N);
        }
        if (!u)
          throw new Error(`discriminator: "${S}" must be required`);
        return a;
        function v({ required: N }) {
          return Array.isArray(N) && N.includes(S);
        }
        function R(N, A) {
          if (N.const)
            C(N.const, A);
          else if (N.enum)
            for (const K of N.enum)
              C(K, A);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function C(N, A) {
          if (typeof N != "string" || N in a)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          a[N] = A;
        }
      }
    }
  };
  return qt.default = o, qt;
}
const si = "http://json-schema.org/draft-07/schema#", ni = "http://json-schema.org/draft-07/schema#", oi = "Core schema meta-schema", ii = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, li = ["object", "boolean"], ci = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, di = {
  $schema: si,
  $id: ni,
  title: oi,
  definitions: ii,
  type: li,
  properties: ci,
  default: !0
};
var Na;
function ui() {
  return Na || (Na = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const p = /* @__PURE__ */ ko(), i = /* @__PURE__ */ ti(), g = /* @__PURE__ */ ai(), r = di, o = ["/properties"], s = "http://json-schema.org/draft-07/schema";
    class c extends p.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((S) => this.addVocabulary(S)), this.opts.discriminator && this.addKeyword(g.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const S = this.opts.$data ? this.$dataMetaSchema(r, o) : r;
        this.addMetaSchema(S, s, !1), this.refs["http://json-schema.org/schema"] = s;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var h = /* @__PURE__ */ Gt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return h.KeywordCxt;
    } });
    var f = /* @__PURE__ */ X();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return f._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return f.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return f.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return f.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return f.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return f.CodeGen;
    } });
    var b = /* @__PURE__ */ dr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return b.default;
    } });
    var $ = /* @__PURE__ */ Wt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  })(Xe, Xe.exports)), Xe.exports;
}
var fi = /* @__PURE__ */ ui();
const hi = /* @__PURE__ */ no(fi), pi = {
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
        yLabel: { type: "string" }
      },
      required: ["chartType"]
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
              data: { type: "array", items: { type: "number" } }
            },
            required: ["data"]
          }
        }
      },
      required: ["labels", "datasets"]
    }
  },
  required: ["id", "type", "options", "data"]
}, mi = {
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
        color: { type: "string" }
      },
      required: ["value"]
    }
  },
  required: ["id", "type", "data"]
}, yi = {
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
              width: { type: "string" }
            },
            required: ["key", "label"]
          }
        },
        pagination: { type: "boolean" },
        pageSize: { type: "number" },
        striped: { type: "boolean" },
        searchable: { type: "boolean" }
      },
      required: ["columns"]
    },
    data: {
      type: "array",
      items: { type: "object" }
    }
  },
  required: ["id", "type", "options", "data"]
}, gi = {
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
              label: { type: "string" }
            },
            required: ["value", "color"]
          }
        }
      },
      required: ["value", "min", "max"]
    }
  },
  required: ["id", "type", "data"]
}, vi = {
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
          color: { type: "string" }
        },
        required: ["id", "date", "title"]
      }
    }
  },
  required: ["id", "type", "data"]
}, _i = {
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
              options: { type: "array", items: { type: "string" } }
            },
            required: ["key", "label", "type"]
          }
        }
      },
      required: ["filters"]
    }
  },
  required: ["id", "type", "options"]
}, bi = {
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
          color: { type: "string" }
        },
        required: ["id", "label", "value"]
      }
    }
  },
  required: ["id", "type"]
}, lr = {
  chart: pi,
  kpi: mi,
  table: yi,
  gauge: gi,
  timeline: vi,
  filter: _i,
  map: bi
}, cr = new hi({ allErrors: !0, strict: !1 });
for (const [e, t] of Object.entries(lr))
  cr.addSchema(t, e);
function za(e, t) {
  return lr[e] ? cr.validate(e, t) ? { valid: !0, errors: [] } : { valid: !1, errors: (cr.errors ?? []).map((r) => {
    var o;
    return {
      field: r.instancePath || ((o = r.params) == null ? void 0 : o.missingProperty) || "unknown",
      message: r.message ?? "Validation error",
      value: r.data
    };
  }) } : {
    valid: !1,
    errors: [{ field: "type", message: `Unknown widget type: '${e}'. Available: ${Object.keys(lr).join(", ")}` }]
  };
}
function ll(e) {
  if (typeof e != "object" || e === null)
    return { valid: !1, errors: [{ field: "root", message: "Config must be an object" }] };
  const t = e.type;
  return za(t, e);
}
function cl(e, t) {
  const p = za(e, t);
  if (!p.valid) {
    const i = p.errors.map((g) => `  - ${g.field}: ${g.message}`).join(`
`);
    throw new Error(`[VueSDK] Invalid '${e}' config:
${i}`);
  }
}
const $i = { class: "sdk-template sdk-template-sales" }, ki = { class: "sdk-template-header" }, wi = { class: "sdk-template-kpi-row" }, Si = { class: "sdk-template-grid sdk-template-grid--2" }, Ei = { class: "sdk-template-grid sdk-template-grid--2" }, Pi = { class: "sdk-template-grid sdk-template-grid--2" }, dl = /* @__PURE__ */ me({
  __name: "SalesDashboard",
  setup(e) {
    const t = [
      { id: "rev", title: "Total Revenue", data: { value: 284e4, unit: "USD", trend: 12.4, trendLabel: "vs last month", icon: "fa-solid:money-bill-wave", color: "#10b981" } },
      { id: "deals", title: "Deals Closed", data: { value: 148, trend: 8.2, trendLabel: "vs last month", icon: "fa-solid:handshake", color: "#6366f1" } },
      { id: "pipeline", title: "Pipeline Value", data: { value: 62e5, unit: "USD", trend: -3.1, trendLabel: "vs last month", icon: "fa-solid:chart-line", color: "#f59e0b" } },
      { id: "aov", title: "Avg Order Value", data: { value: 19189, unit: "USD", trend: 4.7, trendLabel: "vs last month", icon: "fa-solid:bullseye", color: "#22d3ee" } }
    ], p = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        { label: "2024", data: [18e4, 22e4, 195e3, 26e4, 31e4, 28e4, 34e4, 36e4, 29e4, 41e4, 38e4, 45e4] },
        { label: "2023", data: [15e4, 18e4, 16e4, 21e4, 25e4, 23e4, 28e4, 3e5, 24e4, 34e4, 31e4, 38e4] }
      ]
    }, i = {
      labels: ["Direct", "Online", "Partners", "Referral", "Events"],
      datasets: [{ data: [35, 28, 18, 12, 7] }]
    }, g = {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      datasets: [{ label: "Conversion Rate", data: [3.2, 4.1, 3.8, 5.2, 4.7, 6.1, 5.8, 6.4], fill: !0 }]
    }, r = {
      columns: [
        { key: "company", label: "Company", sortable: !0 },
        { key: "value", label: "Value", sortable: !0 },
        { key: "stage", label: "Stage" },
        { key: "rep", label: "Sales Rep" }
      ],
      pagination: !0,
      pageSize: 5,
      striped: !0,
      searchable: !0
    }, o = [
      { company: "Acme Corp", value: "$420K", stage: "Closed Won", rep: "Sarah J." },
      { company: "Globex Inc", value: "$380K", stage: "Negotiation", rep: "Mike R." },
      { company: "Initech", value: "$290K", stage: "Proposal", rep: "Lisa M." },
      { company: "Umbrella Co", value: "$250K", stage: "Closed Won", rep: "Tom S." },
      { company: "Oscorp", value: "$210K", stage: "Discovery", rep: "Anna K." },
      { company: "Stark Industries", value: "$195K", stage: "Proposal", rep: "James W." },
      { company: "Wayne Enterprises", value: "$185K", stage: "Negotiation", rep: "Sarah J." }
    ], s = {
      value: 78,
      min: 0,
      max: 100,
      unit: "% attained",
      thresholds: [
        { value: 50, color: "#ef4444", label: "Below target" },
        { value: 75, color: "#f59e0b", label: "On track" },
        { value: 100, color: "#10b981", label: "Exceeded" }
      ]
    }, c = [
      { id: "1", date: "2024-12-18", title: "Q4 target exceeded", description: "Team surpassed $2.8M target by 12%", status: "done", icon: "fa-solid:gift" },
      { id: "2", date: "2024-12-15", title: "Enterprise deal closed", description: "Acme Corp — $420K ARR signed", status: "done", icon: "fa-solid:check-circle" },
      { id: "3", date: "2024-12-12", title: "Pipeline review meeting", description: "Q1 pipeline alignment with leadership", status: "done", icon: "fa-solid:clipboard-list" },
      { id: "4", date: "2024-12-20", title: "Sales kick-off planning", description: "2025 strategy and territory planning", status: "active", icon: "fa-solid:rocket" },
      { id: "5", date: "2025-01-08", title: "Q1 kickoff", description: "All-hands sales kickoff event", status: "pending", icon: "fa-solid:calendar-days" }
    ], h = {
      filters: [
        { key: "period", label: "Period", type: "select", options: ["This Month", "Last Month", "Q4 2024", "YTD", "Custom"] },
        { key: "region", label: "Region", type: "select", options: ["All", "North America", "EMEA", "APAC", "LATAM"] },
        { key: "rep", label: "Sales Rep", type: "text" }
      ]
    };
    function f(b) {
      console.log("Sales filter applied:", b);
    }
    return (b, $) => (V(), F("div", $i, [
      q("header", ki, [
        $[0] || ($[0] = q("div", null, [
          q("h1", { class: "sdk-template-title" }, "Sales Dashboard"),
          q("p", { class: "sdk-template-subtitle" }, "Revenue, pipeline & performance overview")
        ], -1)),
        B(Mt, {
          title: "Filters",
          options: h,
          onApply: f
        })
      ]),
      q("div", wi, [
        (V(), F(ce, null, de(t, (w) => B(Ne, {
          key: w.id,
          title: w.title,
          data: w.data
        }, null, 8, ["title", "data"])), 64))
      ]),
      q("div", Si, [
        B(le, {
          title: "Monthly Revenue",
          options: { chartType: "bar", xLabel: "Month", yLabel: "Revenue ($)" },
          data: p
        }),
        B(le, {
          title: "Revenue by Channel",
          options: { chartType: "doughnut", legend: !0 },
          data: i
        })
      ]),
      q("div", Ei, [
        B(le, {
          title: "Conversion Rate",
          options: { chartType: "line", xLabel: "Week", yLabel: "%" },
          data: g
        }),
        B(Te, {
          title: "Top Deals",
          options: r,
          data: o
        })
      ]),
      q("div", Pi, [
        B($e, {
          title: "Quota Attainment",
          data: s
        }),
        B(Ve, {
          title: "Recent Activity",
          data: c
        })
      ])
    ]));
  }
}), Ri = { class: "sdk-template sdk-template-project" }, Oi = { class: "sdk-template-kpi-row" }, Ni = { class: "sdk-template-grid sdk-template-grid--2" }, Ti = { class: "sdk-template-grid sdk-template-grid--2" }, ji = { class: "sdk-template-grid sdk-template-grid--2" }, ul = /* @__PURE__ */ me({
  __name: "ProjectDashboard",
  setup(e) {
    const t = [
      { id: "tasks", title: "Open Tasks", data: { value: 47, trend: -8.5, trendLabel: "vs last sprint", icon: "fa-solid:clipboard-list", color: "#6366f1" } },
      { id: "velocity", title: "Sprint Velocity", data: { value: 82, unit: "pts", trend: 14.2, trendLabel: "vs avg", icon: "fa-solid:bolt", color: "#10b981" } },
      { id: "bugs", title: "Open Bugs", data: { value: 12, trend: -25, trendLabel: "vs last sprint", icon: "fa-solid:bug", color: "#ef4444" } },
      { id: "dod", title: "Days to Deadline", data: { value: 8, unit: "days", icon: "fa-solid:stopwatch", color: "#f59e0b" } }
    ], p = {
      labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
      datasets: [
        { label: "Completed", data: [65, 72, 68, 80, 75, 88, 76, 82] },
        { label: "Planned", data: [80, 80, 80, 85, 80, 90, 85, 85] }
      ]
    }, i = {
      labels: ["Done", "In Progress", "In Review", "Blocked", "To Do"],
      datasets: [{ data: [42, 18, 11, 5, 24] }]
    }, g = {
      labels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
      datasets: [
        { label: "Actual", data: [85, 78, 72, 65, 58, 51, 44, 38, 25, 12], fill: !1 },
        { label: "Ideal", data: [85, 76.5, 68, 59.5, 51, 42.5, 34, 25.5, 17, 8.5], fill: !1 }
      ]
    }, r = [
      { id: "1", date: "2024-12-01", title: "Sprint 7 started", description: "84 story points scoped", status: "done", icon: "fa-solid:flag-checkered" },
      { id: "2", date: "2024-12-08", title: "Alpha release", description: "Internal testing complete", status: "done", icon: "fa-solid:microscope" },
      { id: "3", date: "2024-12-15", title: "Beta release", description: "External beta users onboarded", status: "done", icon: "fa-solid:bullseye" },
      { id: "4", date: "2024-12-20", title: "Sprint 7 ends", description: "Demo & retrospective", status: "active", icon: "fa-solid:running" },
      { id: "5", date: "2025-01-06", title: "v1.0 Launch", description: "Public release", status: "pending", icon: "fa-solid:rocket" }
    ], o = {
      columns: [
        { key: "task", label: "Task", sortable: !0 },
        { key: "assignee", label: "Assignee" },
        { key: "priority", label: "Priority", sortable: !0 },
        { key: "status", label: "Status" },
        { key: "points", label: "Pts", sortable: !0 }
      ],
      pagination: !0,
      pageSize: 5,
      striped: !0,
      searchable: !0
    }, s = [
      { task: "API authentication module", assignee: "Alice", priority: "High", status: "In Progress", points: 8 },
      { task: "Dashboard layout redesign", assignee: "Bob", priority: "Medium", status: "In Review", points: 5 },
      { task: "Export to CSV feature", assignee: "Carol", priority: "Low", status: "To Do", points: 3 },
      { task: "Fix login edge case bug", assignee: "Dave", priority: "High", status: "Blocked", points: 2 },
      { task: "Write unit tests for core", assignee: "Alice", priority: "Medium", status: "In Progress", points: 5 },
      { task: "Performance profiling", assignee: "Eve", priority: "Medium", status: "To Do", points: 8 },
      { task: "Update API docs", assignee: "Bob", priority: "Low", status: "To Do", points: 2 }
    ], c = {
      value: 62,
      min: 0,
      max: 100,
      unit: "% complete",
      thresholds: [
        { value: 40, color: "#ef4444", label: "Behind" },
        { value: 70, color: "#f59e0b", label: "On track" },
        { value: 100, color: "#10b981", label: "Ahead" }
      ]
    };
    return (h, f) => (V(), F("div", Ri, [
      f[0] || (f[0] = q("header", { class: "sdk-template-header" }, [
        q("div", null, [
          q("h1", { class: "sdk-template-title" }, "Project Dashboard"),
          q("p", { class: "sdk-template-subtitle" }, "Sprint tracking, team velocity & delivery health")
        ])
      ], -1)),
      q("div", Oi, [
        (V(), F(ce, null, de(t, (b) => B(Ne, {
          key: b.id,
          title: b.title,
          data: b.data
        }, null, 8, ["title", "data"])), 64))
      ]),
      q("div", Ni, [
        B(le, {
          title: "Sprint Velocity",
          options: { chartType: "bar", xLabel: "Sprint", yLabel: "Story Points" },
          data: p
        }),
        B(le, {
          title: "Task Status Breakdown",
          options: { chartType: "doughnut", legend: !0 },
          data: i
        })
      ]),
      q("div", Ti, [
        B(Ve, {
          title: "Project Milestones",
          data: r
        }),
        B(Te, {
          title: "Active Tasks",
          options: o,
          data: s
        })
      ]),
      q("div", ji, [
        B($e, {
          title: "Sprint Progress",
          data: c
        }),
        B(le, {
          title: "Burndown Chart",
          options: { chartType: "line", xLabel: "Day", yLabel: "Remaining Points" },
          data: g
        })
      ])
    ]));
  }
}), Ci = { class: "sdk-template sdk-template-hr" }, Di = { class: "sdk-template-kpi-row" }, Ii = { class: "sdk-template-grid sdk-template-grid--2" }, qi = { class: "sdk-template-grid sdk-template-grid--2" }, Ai = { class: "sdk-template-grid sdk-template-grid--2" }, fl = /* @__PURE__ */ me({
  __name: "HRDashboard",
  setup(e) {
    const t = [
      { id: "headcount", title: "Total Headcount", data: { value: 1248, trend: 6.2, trendLabel: "YoY growth", icon: "fa-solid:users", color: "#6366f1" } },
      { id: "openreqs", title: "Open Requisitions", data: { value: 34, trend: -11.7, trendLabel: "vs last quarter", icon: "fa-solid:file-lines", color: "#f59e0b" } },
      { id: "ttf", title: "Avg Time to Fill", data: { value: 28, unit: "days", trend: -14.3, trendLabel: "vs last quarter", icon: "fa-solid:stopwatch", color: "#22d3ee" } },
      { id: "retention", title: "Retention Rate", data: { value: 94.2, unit: "%", trend: 1.8, trendLabel: "vs last year", icon: "fa-solid:lock", color: "#10b981" } }
    ], p = {
      labels: ["Engineering", "Sales", "Marketing", "Product", "Operations", "Finance", "HR", "Legal"],
      datasets: [{ label: "Headcount", data: [420, 310, 185, 142, 98, 54, 28, 11] }]
    }, i = {
      labels: ["Applied", "Screened", "Phone Interview", "Technical", "Final Round", "Offer", "Hired"],
      datasets: [{ label: "Candidates", data: [1840, 620, 280, 155, 72, 48, 34] }]
    }, g = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        { label: "New Hires", data: [22, 18, 31, 28, 35, 42, 38, 45, 29, 36, 41, 27], fill: !1 },
        { label: "Attrition", data: [8, 11, 9, 14, 10, 8, 12, 7, 9, 13, 8, 11], fill: !1 }
      ]
    }, r = {
      labels: ["Prefer not to say", "Male", "Female", "Non-binary", "Other"],
      datasets: [{ data: [12, 48, 34, 4, 2] }]
    }, o = {
      value: 7.8,
      min: 0,
      max: 10,
      unit: "/ 10 eNPS",
      thresholds: [
        { value: 5, color: "#ef4444", label: "Low" },
        { value: 7, color: "#f59e0b", label: "Moderate" },
        { value: 10, color: "#10b981", label: "High" }
      ]
    }, s = {
      columns: [
        { key: "role", label: "Role", sortable: !0 },
        { key: "department", label: "Department", sortable: !0 },
        { key: "location", label: "Location" },
        { key: "level", label: "Level" },
        { key: "openDays", label: "Open (days)", sortable: !0 }
      ],
      pagination: !0,
      pageSize: 5,
      striped: !0,
      searchable: !0
    }, c = [
      { role: "Senior Backend Engineer", department: "Engineering", location: "Remote", level: "IC5", openDays: 45 },
      { role: "Product Manager", department: "Product", location: "NYC", level: "L5", openDays: 31 },
      { role: "Account Executive", department: "Sales", location: "SF", level: "IC4", openDays: 18 },
      { role: "Data Analyst", department: "Finance", location: "Remote", level: "IC3", openDays: 22 },
      { role: "UX Designer", department: "Product", location: "NYC", level: "IC4", openDays: 38 },
      { role: "DevOps Engineer", department: "Engineering", location: "Remote", level: "IC4", openDays: 55 }
    ];
    return (h, f) => (V(), F("div", Ci, [
      f[0] || (f[0] = q("header", { class: "sdk-template-header" }, [
        q("div", null, [
          q("h1", { class: "sdk-template-title" }, "HR Dashboard"),
          q("p", { class: "sdk-template-subtitle" }, "Headcount, hiring pipeline & workforce analytics")
        ])
      ], -1)),
      q("div", Di, [
        (V(), F(ce, null, de(t, (b) => B(Ne, {
          key: b.id,
          title: b.title,
          data: b.data
        }, null, 8, ["title", "data"])), 64))
      ]),
      q("div", Ii, [
        B(le, {
          title: "Headcount by Department",
          options: { chartType: "bar", xLabel: "Department", yLabel: "Employees" },
          data: p
        }),
        B(le, {
          title: "Hiring Funnel",
          options: { chartType: "bar", xLabel: "Stage", yLabel: "Candidates" },
          data: i
        })
      ]),
      q("div", qi, [
        B(le, {
          title: "Monthly New Hires vs Attrition",
          options: { chartType: "line", xLabel: "Month", yLabel: "People" },
          data: g
        }),
        B(le, {
          title: "Diversity Breakdown",
          options: { chartType: "pie", legend: !0 },
          data: r
        })
      ]),
      q("div", Ai, [
        B($e, {
          title: "Employee Satisfaction",
          data: o
        }),
        B(Te, {
          title: "Open Positions",
          options: s,
          data: c
        })
      ])
    ]));
  }
}), Mi = { class: "sdk-template sdk-template-analytics" }, Li = { class: "sdk-template-kpi-row" }, Vi = { class: "sdk-template-grid sdk-template-grid--2" }, Ui = { class: "sdk-template-grid sdk-template-grid--3" }, zi = { class: "sdk-template-grid sdk-template-grid--2" }, hl = /* @__PURE__ */ me({
  __name: "AnalyticsDashboard",
  setup(e) {
    const t = [
      { id: "dau", title: "Daily Active Users", data: { value: 84200, trend: 18.6, trendLabel: "vs last week", icon: "fa-solid:user", color: "#6366f1" } },
      { id: "sessions", title: "Sessions", data: { value: 124600, trend: 22.4, trendLabel: "vs last week", icon: "fa-solid:link", color: "#22d3ee" } },
      { id: "bounce", title: "Bounce Rate", data: { value: 34.2, unit: "%", trend: -8.1, trendLabel: "vs last week", icon: "fa-solid:arrow-rotate-left", color: "#f59e0b" } },
      { id: "duration", title: "Avg Session", data: { value: "4m 18s", trend: 12.5, trendLabel: "vs last week", icon: "fa-solid:stopwatch", color: "#10b981" } }
    ], p = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        { label: "This week", data: [72e3, 84e3, 79e3, 91e3, 88e3, 65e3, 54e3], fill: !0 },
        { label: "Last week", data: [65e3, 71e3, 68e3, 78e3, 74e3, 58e3, 47e3], fill: !1 }
      ]
    }, i = {
      labels: ["Organic Search", "Direct", "Social", "Referral", "Email", "Paid"],
      datasets: [{ data: [38, 25, 16, 10, 7, 4] }]
    }, g = {
      labels: ["0-30s", "30s-1m", "1-2m", "2-5m", "5-10m", "10m+"],
      datasets: [{ label: "Sessions", data: [18400, 28200, 31500, 25800, 12400, 8300] }]
    }, r = {
      labels: ["Mobile", "Desktop", "Tablet"],
      datasets: [{ data: [58, 36, 6] }]
    }, o = {
      value: 72,
      min: 0,
      max: 100,
      unit: "% goal",
      thresholds: [
        { value: 50, color: "#ef4444", label: "Low" },
        { value: 75, color: "#f59e0b", label: "Good" },
        { value: 100, color: "#10b981", label: "Excellent" }
      ]
    }, s = [
      { id: "us", label: "United States", value: 41200, lat: 38, lng: -97, color: "#6366f1" },
      { id: "uk", label: "United Kingdom", value: 18400, lat: 51, lng: -1, color: "#22d3ee" },
      { id: "de", label: "Germany", value: 12800, lat: 51, lng: 10, color: "#10b981" },
      { id: "fr", label: "France", value: 9600, lat: 46, lng: 2, color: "#f59e0b" },
      { id: "au", label: "Australia", value: 7200, lat: -25, lng: 133, color: "#8b5cf6" },
      { id: "ca", label: "Canada", value: 6800, lat: 60, lng: -96, color: "#ec4899" }
    ], c = {
      columns: [
        { key: "page", label: "Page", sortable: !0 },
        { key: "views", label: "Views", sortable: !0 },
        { key: "unique", label: "Unique", sortable: !0 },
        { key: "bounce", label: "Bounce %", sortable: !0 },
        { key: "duration", label: "Avg Duration" }
      ],
      pagination: !0,
      pageSize: 6,
      striped: !0,
      searchable: !0
    }, h = [
      { page: "/home", views: 48200, unique: 31400, bounce: "28%", duration: "3m 24s" },
      { page: "/product", views: 32100, unique: 24800, bounce: "35%", duration: "4m 12s" },
      { page: "/pricing", views: 18700, unique: 15200, bounce: "42%", duration: "2m 48s" },
      { page: "/blog", views: 14300, unique: 11600, bounce: "52%", duration: "5m 36s" },
      { page: "/signup", views: 8900, unique: 8200, bounce: "22%", duration: "2m 10s" },
      { page: "/docs", views: 6400, unique: 4100, bounce: "18%", duration: "8m 45s" }
    ];
    return (f, b) => (V(), F("div", Mi, [
      b[0] || (b[0] = q("header", { class: "sdk-template-header" }, [
        q("div", null, [
          q("h1", { class: "sdk-template-title" }, "Analytics Dashboard"),
          q("p", { class: "sdk-template-subtitle" }, "Traffic, engagement & user behavior insights")
        ])
      ], -1)),
      q("div", Li, [
        (V(), F(ce, null, de(t, ($) => B(Ne, {
          key: $.id,
          title: $.title,
          data: $.data
        }, null, 8, ["title", "data"])), 64))
      ]),
      q("div", Vi, [
        B(le, {
          title: "Daily Active Users",
          options: { chartType: "line", xLabel: "Day", yLabel: "Users", legend: !0 },
          data: p
        }),
        B(le, {
          title: "Traffic by Channel",
          options: { chartType: "doughnut", legend: !0 },
          data: i
        })
      ]),
      q("div", Ui, [
        B(le, {
          title: "Session Duration Distribution",
          options: { chartType: "bar", xLabel: "Duration", yLabel: "Sessions" },
          data: g
        }),
        B(le, {
          title: "Device Split",
          options: { chartType: "pie", legend: !0 },
          data: r
        }),
        B($e, {
          title: "Goal Completion",
          data: o
        })
      ]),
      q("div", zi, [
        B(Lt, {
          title: "Users by Region",
          data: s
        }),
        B(Te, {
          title: "Top Pages",
          options: c,
          data: h
        })
      ])
    ]));
  }
}), Fi = { class: "sdk-template sdk-template-ecommerce" }, Ki = { class: "sdk-template-kpi-row" }, Hi = { class: "sdk-template-grid sdk-template-grid--2" }, xi = { class: "sdk-template-grid sdk-template-grid--3" }, Gi = { class: "sdk-template-grid sdk-template-grid--2" }, pl = /* @__PURE__ */ me({
  __name: "EcommerceDashboard",
  setup(e) {
    const t = [
      { id: "gmv", title: "GMV (30d)", data: { value: 184e4, unit: "USD", trend: 23.7, trendLabel: "vs last month", icon: "fa-solid:shopping-cart", color: "#10b981" } },
      { id: "orders", title: "Total Orders", data: { value: 8420, trend: 18.2, trendLabel: "vs last month", icon: "fa-solid:box", color: "#6366f1" } },
      { id: "aov", title: "Average Order Value", data: { value: 218, unit: "USD", trend: 4.6, trendLabel: "vs last month", icon: "fa-solid:credit-card", color: "#22d3ee" } },
      { id: "refunds", title: "Refund Rate", data: { value: 2.1, unit: "%", trend: -0.8, trendLabel: "vs last month", icon: "fa-solid:arrow-rotate-left", color: "#f59e0b" } }
    ], p = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
      datasets: [
        { label: "This Period", data: [195e3, 228e3, 214e3, 267e3, 289e3, 312e3, 298e3, 337e3], fill: !0 },
        { label: "Last Period", data: [168e3, 192e3, 178e3, 224e3, 241e3, 258e3, 247e3, 281e3], fill: !1 }
      ]
    }, i = {
      labels: ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty", "Toys"],
      datasets: [{ data: [32, 24, 16, 11, 8, 6, 3] }]
    }, g = {
      value: 4.2,
      min: 0,
      max: 10,
      unit: "% CVR",
      thresholds: [
        { value: 2, color: "#ef4444", label: "Below avg" },
        { value: 4, color: "#f59e0b", label: "Industry avg" },
        { value: 10, color: "#10b981", label: "Above avg" }
      ]
    }, r = {
      value: 68,
      min: 0,
      max: 100,
      unit: "% abandoned",
      thresholds: [
        { value: 60, color: "#10b981", label: "Good" },
        { value: 75, color: "#f59e0b", label: "Average" },
        { value: 100, color: "#ef4444", label: "High" }
      ]
    }, o = {
      labels: ["Delivered", "Shipped", "Processing", "Pending", "Cancelled", "Refunded"],
      datasets: [{ data: [58, 18, 11, 8, 4, 1] }]
    }, s = {
      columns: [
        { key: "product", label: "Product", sortable: !0 },
        { key: "sku", label: "SKU" },
        { key: "revenue", label: "Revenue", sortable: !0 },
        { key: "units", label: "Units Sold", sortable: !0 },
        { key: "rating", label: "Rating" }
      ],
      pagination: !0,
      pageSize: 5,
      striped: !0,
      searchable: !0
    }, c = [
      { product: "Wireless Headphones Pro", sku: "WHP-001", revenue: "$84,200", units: 421, rating: "4.8 / 5" },
      { product: "Smart Watch Series X", sku: "SWX-003", revenue: "$72,600", units: 218, rating: "4.6 / 5" },
      { product: "Ergonomic Chair", sku: "EGC-012", revenue: "$61,400", units: 143, rating: "4.7 / 5" },
      { product: "Mechanical Keyboard", sku: "MKB-008", revenue: "$48,900", units: 326, rating: "4.9 / 5" },
      { product: "4K Webcam", sku: "WBC-004", revenue: "$38,700", units: 258, rating: "4.5 / 5" },
      { product: "USB-C Hub 7-port", sku: "UCH-016", revenue: "$29,100", units: 485, rating: "4.4 / 5" }
    ], h = [
      { id: "o1", date: "2024-12-18T14:30:00", title: "Order #84210 — $342", description: "Wireless Headphones Pro × 2", status: "done", icon: "fa-solid:box" },
      { id: "o2", date: "2024-12-18T12:15:00", title: "Order #84208 — $218", description: "Smart Watch Series X × 1", status: "done", icon: "fa-solid:box" },
      { id: "o3", date: "2024-12-18T10:00:00", title: "Order #84204 — $695", description: "Ergonomic Chair × 1", status: "active", icon: "fa-solid:truck" },
      { id: "o4", date: "2024-12-17T18:45:00", title: "Order #84196 — $149", description: "Mechanical Keyboard × 1", status: "active", icon: "fa-solid:truck" },
      { id: "o5", date: "2024-12-17T14:20:00", title: "Order #84188 — $89", description: "USB-C Hub × 3", status: "pending", icon: "fa-solid:hourglass-half" }
    ];
    return (f, b) => (V(), F("div", Fi, [
      b[0] || (b[0] = q("header", { class: "sdk-template-header" }, [
        q("div", null, [
          q("h1", { class: "sdk-template-title" }, "E-Commerce Dashboard"),
          q("p", { class: "sdk-template-subtitle" }, "Orders, revenue & product performance")
        ])
      ], -1)),
      q("div", Ki, [
        (V(), F(ce, null, de(t, ($) => B(Ne, {
          key: $.id,
          title: $.title,
          data: $.data
        }, null, 8, ["title", "data"])), 64))
      ]),
      q("div", Hi, [
        B(le, {
          title: "Revenue Over Time",
          options: { chartType: "line", xLabel: "Date", yLabel: "Revenue ($)", legend: !0 },
          data: p
        }),
        B(le, {
          title: "Sales by Category",
          options: { chartType: "doughnut", legend: !0 },
          data: i
        })
      ]),
      q("div", xi, [
        B($e, {
          title: "Conversion Rate",
          data: g
        }),
        B($e, {
          title: "Cart Abandonment",
          data: r
        }),
        B(le, {
          title: "Order Status",
          options: { chartType: "pie", legend: !0 },
          data: o
        })
      ]),
      q("div", Gi, [
        B(Te, {
          title: "Top Products",
          options: s,
          data: c
        }),
        B(Ve, {
          title: "Recent Orders",
          data: h
        })
      ])
    ]));
  }
}), Wi = { class: "sdk-template sdk-template-iot" }, Bi = { class: "sdk-template-kpi-row" }, Ji = { class: "sdk-template-grid sdk-template-grid--3" }, Qi = { class: "sdk-template-grid sdk-template-grid--2" }, Yi = { class: "sdk-template-grid sdk-template-grid--2" }, ml = /* @__PURE__ */ me({
  __name: "IOTDashboard",
  setup(e) {
    const t = [
      { id: "devices", title: "Active Devices", data: { value: 2847, trend: 3.2, trendLabel: "vs yesterday", icon: "fa-solid:signal", color: "#22d3ee" } },
      { id: "alerts", title: "Active Alerts", data: { value: 7, trend: -41.7, trendLabel: "vs yesterday", icon: "fa-solid:triangle-exclamation", color: "#ef4444" } },
      { id: "uptime", title: "System Uptime", data: { value: 99.94, unit: "%", icon: "fa-solid:check-circle", color: "#10b981" } },
      { id: "datarate", title: "Data Rate", data: { value: 4.2, unit: "GB/h", trend: 8.3, trendLabel: "vs avg", icon: "fa-solid:chart-bar", color: "#6366f1" } }
    ], p = Array.from({ length: 24 }, (b, $) => `${$}:00`), i = {
      value: 24.8,
      min: 0,
      max: 50,
      unit: "°C",
      thresholds: [
        { value: 20, color: "#22d3ee", label: "Cold" },
        { value: 30, color: "#10b981", label: "Normal" },
        { value: 40, color: "#f59e0b", label: "Warm" },
        { value: 50, color: "#ef4444", label: "Hot" }
      ]
    }, g = {
      value: 62,
      min: 0,
      max: 100,
      unit: "%",
      thresholds: [
        { value: 30, color: "#f59e0b", label: "Dry" },
        { value: 70, color: "#10b981", label: "Optimal" },
        { value: 100, color: "#6366f1", label: "Humid" }
      ]
    }, r = {
      value: 42.6,
      min: 0,
      max: 100,
      unit: "kW",
      thresholds: [
        { value: 50, color: "#10b981", label: "Normal" },
        { value: 75, color: "#f59e0b", label: "High" },
        { value: 100, color: "#ef4444", label: "Critical" }
      ]
    }, o = {
      labels: p,
      datasets: [
        { label: "Zone A", data: [22.1, 22.4, 22.2, 22, 21.8, 21.9, 22.3, 23.1, 24.2, 24.8, 25.1, 25.4, 25.2, 24.8, 24.6, 24.9, 25.2, 25, 24.7, 24.3, 23.9, 23.5, 23.2, 22.8], fill: !1 },
        { label: "Zone B", data: [20.8, 21, 20.9, 20.7, 20.5, 20.6, 21, 21.8, 22.9, 23.5, 23.8, 24.1, 23.9, 23.5, 23.3, 23.6, 23.9, 23.7, 23.4, 23, 22.6, 22.2, 21.9, 21.5], fill: !1 }
      ]
    }, s = {
      labels: p,
      datasets: [{ label: "Mbps", data: [12, 8, 6, 5, 4, 6, 18, 42, 68, 82, 78, 71, 85, 89, 76, 72, 68, 74, 81, 88, 72, 54, 38, 22], fill: !0 }]
    }, c = {
      columns: [
        { key: "device", label: "Device", sortable: !0 },
        { key: "type", label: "Type" },
        { key: "location", label: "Location" },
        { key: "status", label: "Status", sortable: !0 },
        { key: "lastSeen", label: "Last Seen" },
        { key: "battery", label: "Battery" }
      ],
      pagination: !0,
      pageSize: 6,
      striped: !0,
      searchable: !0
    }, h = [
      { device: "Sensor-A01", type: "Temperature", location: "Server Room", status: "Online", lastSeen: "Now", battery: "100%" },
      { device: "Sensor-A02", type: "Humidity", location: "Server Room", status: "Online", lastSeen: "Now", battery: "87%" },
      { device: "Sensor-B01", type: "Motion", location: "Lobby", status: "Online", lastSeen: "2s ago", battery: "64%" },
      { device: "Sensor-C04", type: "Power", location: "Generator Room", status: "Warning", lastSeen: "8s ago", battery: "100%" },
      { device: "Sensor-D02", type: "Air Quality", location: "Office Floor 2", status: "Online", lastSeen: "1s ago", battery: "42%" },
      { device: "Sensor-E01", type: "Gas Leak", location: "Kitchen", status: "Offline", lastSeen: "4h ago", battery: "12%" },
      { device: "Gateway-01", type: "Gateway", location: "Data Center", status: "Online", lastSeen: "Now", battery: "N/A" }
    ], f = [
      { id: "a1", date: "2024-12-18T14:28:00", title: "High power consumption", description: "Generator Room power draw at 85% capacity", status: "error", icon: "fa-solid:bolt" },
      { id: "a2", date: "2024-12-18T12:45:00", title: "Sensor-E01 offline", description: "Kitchen gas leak sensor lost connectivity", status: "error", icon: "fa-solid:signal" },
      { id: "a3", date: "2024-12-18T10:12:00", title: "Temperature spike resolved", description: "Zone B returned to normal range (< 26°C)", status: "done", icon: "fa-solid:thermometer-half" },
      { id: "a4", date: "2024-12-18T08:30:00", title: "System backup completed", description: "All device configs backed up successfully", status: "done", icon: "fa-solid:floppy-disk" },
      { id: "a5", date: "2024-12-19T00:00:00", title: "Scheduled maintenance", description: "Gateway-01 firmware update pending", status: "pending", icon: "fa-solid:wrench" }
    ];
    return (b, $) => (V(), F("div", Wi, [
      $[0] || ($[0] = Ga('<header class="sdk-template-header"><div><h1 class="sdk-template-title">IoT Dashboard</h1><p class="sdk-template-subtitle">Real-time sensor monitoring &amp; device health</p></div><div class="sdk-template-live-badge"><span class="sdk-live-dot"></span> Live </div></header>', 1)),
      q("div", Bi, [
        (V(), F(ce, null, de(t, (w) => B(Ne, {
          key: w.id,
          title: w.title,
          data: w.data
        }, null, 8, ["title", "data"])), 64))
      ]),
      q("div", Ji, [
        B($e, {
          title: "Temperature (°C)",
          data: i
        }),
        B($e, {
          title: "Humidity (%)",
          data: g
        }),
        B($e, {
          title: "Power Usage (kW)",
          data: r
        })
      ]),
      q("div", Qi, [
        B(le, {
          title: "Temperature Over 24h",
          options: { chartType: "line", xLabel: "Hour", yLabel: "°C", legend: !0 },
          data: o
        }),
        B(le, {
          title: "Network Traffic (Mbps)",
          options: { chartType: "line", xLabel: "Hour", yLabel: "Mbps" },
          data: s
        })
      ]),
      q("div", Yi, [
        B(Te, {
          title: "Device Status",
          options: c,
          data: h
        }),
        B(Ve, {
          title: "System Alerts",
          data: f
        })
      ])
    ]));
  }
}), yl = {
  install(e) {
    De("chart", le), De("kpi", Ne), De("table", Te), De("gauge", $e), De("timeline", Ve), De("filter", Mt), De("map", Lt), e.component("ChartWidget", le), e.component("KPIWidget", Ne), e.component("TableWidget", Te), e.component("GaugeWidget", $e), e.component("TimelineWidget", Ve), e.component("FilterWidget", Mt), e.component("MapWidget", Lt), e.component("Dashboard", ro), ps().install(e);
  }
};
export {
  hl as AnalyticsDashboard,
  le as ChartWidget,
  ro as Dashboard,
  pl as EcommerceDashboard,
  Mt as FilterWidget,
  $e as GaugeWidget,
  fl as HRDashboard,
  ml as IOTDashboard,
  Ne as KPIWidget,
  Lt as MapWidget,
  ul as ProjectDashboard,
  dl as SalesDashboard,
  Te as TableWidget,
  Ve as TimelineWidget,
  yl as VueSdk,
  cl as assertValid,
  il as clearCache,
  ps as createVueSdk,
  yl as default,
  ol as getData,
  sl as getDataSource,
  rl as getLifecycle,
  us as getWidget,
  nl as listDataSources,
  hs as parseDashboardConfig,
  fs as parseWidgetConfig,
  al as registerDataSource,
  De as registerWidget,
  lr as schemas,
  za as validate,
  ll as validateWidgetConfig
};
