import { Icon } from "./Icon";
import { getLocalizedText } from "../utils/format";

const ComparisonModernSection = ({ section, locale, styles }) => {
  return (
    <section id={section.modes.minimal.id} className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="flex items-center">
        <h2 className={`text-5xl font-extrabold leading-tight ${styles.heading}`}>{getLocalizedText(section.title, locale)}</h2>
      </div>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
        <div className="grid grid-cols-[1fr_90px_90px] bg-slate-100 px-4 py-3 text-xs font-bold uppercase tracking-wide">
          <span></span>
          <span className="text-center">{section.headers.left}</span>
          <span className="text-center">{section.headers.right}</span>
        </div>

        {section.features.map((feature, idx) => (
          <div key={idx} className="grid grid-cols-[1fr_90px_90px] items-center border-t border-slate-200 px-4 py-3">
            <p className="pr-3 text-sm font-semibold text-slate-700">{getLocalizedText(feature.label, locale)}</p>
            <div className="grid place-items-center text-emerald-600">
              <Icon name={feature.ours ? "check" : "x"} className="h-5 w-5" />
            </div>
            <div className="grid place-items-center text-rose-500">
              <Icon name={feature.theirs ? "check" : "x"} className="h-5 w-5" />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ComparisonModernSection;
