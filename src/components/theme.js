export const pickByMode = (node, mode) => {
  if (!node) return {};
  if (!node.modes) return node;
  return node.modes[mode] || node.modes.minimal || {};
};

export const themeStyles = {
  minimal: {
    page: "bg-white text-slate-900",
    nav: "bg-white/95 border-slate-200",
    card: "bg-white border border-slate-200 shadow-sm",
    soft: "bg-slate-50 border border-slate-200",
    primaryButton:
      "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-200",
    secondaryButton: "border border-slate-300 text-slate-700 hover:bg-slate-100",
    badge: "bg-emerald-100 text-emerald-700",
    muted: "text-slate-600",
    heading: "text-slate-900",
    accentRing: "ring-emerald-200",
    tableHead: "bg-slate-100",
    sectionDivider: "border-slate-200"
  },
  dark: {
    page: "bg-slate-950 text-slate-100",
    nav: "bg-slate-900/90 border-slate-800 backdrop-blur",
    card: "bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-emerald-950/30",
    soft: "bg-slate-900/70 border border-slate-800",
    primaryButton:
      "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25",
    secondaryButton: "border border-slate-600 text-slate-100 hover:bg-slate-800",
    badge: "bg-emerald-500/20 text-emerald-300",
    muted: "text-slate-300",
    heading: "text-white",
    accentRing: "ring-emerald-500/30",
    tableHead: "bg-slate-900",
    sectionDivider: "border-slate-800"
  },
  "morocco-psychology": {
    page: "bg-amber-50 text-slate-900",
    nav: "bg-white/95 border-amber-200",
    card: "bg-white border border-amber-200 shadow-md shadow-amber-100",
    soft: "bg-rose-50 border border-rose-200",
    primaryButton:
      "bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-200",
    secondaryButton: "border border-slate-300 text-slate-700 hover:bg-amber-100",
    badge: "bg-rose-100 text-rose-700",
    muted: "text-slate-700",
    heading: "text-slate-900",
    accentRing: "ring-rose-200",
    tableHead: "bg-amber-100",
    sectionDivider: "border-amber-200"
  },
  "facebook-ads": {
    page: "bg-slate-50 text-slate-900",
    nav: "bg-white/95 border-blue-200",
    card: "bg-white border border-blue-100 shadow-md shadow-blue-100",
    soft: "bg-blue-50 border border-blue-200",
    primaryButton:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
    secondaryButton: "border border-slate-300 text-slate-700 hover:bg-blue-100",
    badge: "bg-amber-100 text-amber-700",
    muted: "text-slate-600",
    heading: "text-slate-900",
    accentRing: "ring-blue-200",
    tableHead: "bg-blue-100",
    sectionDivider: "border-slate-200"
  }
};

export const getModeStyles = (mode) => themeStyles[mode] || themeStyles.minimal;
