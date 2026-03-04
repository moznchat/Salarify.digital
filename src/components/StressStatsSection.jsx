import { getLocalizedText } from "../utils/format";

const StressStatsSection = ({ section, locale, styles }) => {
  return (
    <section id={section.modes.minimal.id} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className={`max-w-5xl text-4xl font-extrabold leading-tight ${styles.heading}`}>{getLocalizedText(section.heading, locale)}</h2>

      <div className="mt-8 space-y-4">
        {section.rows.map((row, idx) => (
          <article key={idx} className={`flex items-center gap-4 border-t pt-4 ${styles.sectionDivider}`}>
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-teal-400 text-sm font-bold text-teal-500">
              {row.percent}%
            </div>
            <p className={`text-base font-semibold ${styles.heading}`}>{getLocalizedText(row.text, locale)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StressStatsSection;
