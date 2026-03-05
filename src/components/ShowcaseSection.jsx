import { getLocalizedText } from "../utils/format";

const ShowcaseSection = ({ section, locale, styles }) => {
  return (
    <section id={section.modes.minimal.id} className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="flex items-center">
        <div>
          <h2 className={`text-4xl font-extrabold uppercase leading-tight ${styles.heading}`}>{getLocalizedText(section.title, locale)}</h2>
          <p className={`mt-4 max-w-xl text-base ${styles.muted}`}>{getLocalizedText(section.subtitle, locale)}</p>
        </div>
      </div>
      <div>
        {section.video ? (
          <video
            className="mb-4 h-auto w-full rounded-2xl"
            controls
            autoPlay
            playsInline
            muted
            loop
            preload="metadata"
            poster={section.image}
          >
            <source src={section.video} type="video/mp4" />
          </video>
        ) : (
          <img src={section.image} alt={getLocalizedText(section.title, locale)} className="h-full w-full rounded-2xl object-cover" />
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;
