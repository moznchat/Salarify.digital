import { useState } from "react";
import landingData from "./data/landingData.json";
import PromoStrip from "./components/PromoStrip";
import Navbar from "./components/Navbar";
import StoreSection from "./components/StoreSection";
import MoroccanReviewsSection from "./components/MoroccanReviewsSection";
import ShowcaseSection from "./components/ShowcaseSection";
import StressStatsSection from "./components/StressStatsSection";
import ComparisonModernSection from "./components/ComparisonModernSection";
import Footer from "./components/Footer";
import { getModeStyles, pickByMode } from "./components/theme";

function App() {
  const mode = landingData.theme.mode;
  const styles = getModeStyles(mode);
  const [locale, setLocale] = useState(landingData.i18n.defaultLocale);

  const storeSection = pickByMode(landingData.sections.store, mode);
  const moroccanReviews = landingData.sections.moroccanReviews;
  const showcase = landingData.sections.showcase;
  const stressStats = landingData.sections.stressStats;
  const comparisonModern = landingData.sections.comparisonModern;
  const footerBlock = landingData.sections.footerBlock;

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className={`min-h-screen bg-[#f4f4f4] text-slate-900 ${styles.page}`}>
      <PromoStrip brand={landingData.brand} locale={locale} />
      <Navbar
        brand={landingData.brand}
        styles={styles}
        locale={locale}
        locales={landingData.i18n.locales}
        onLocaleChange={setLocale}
      />

      <main>
        <StoreSection
          data={storeSection}
          store={landingData.store}
          brand={landingData.brand}
          product={landingData.product}
          styles={styles}
          locale={locale}
        />

        <ShowcaseSection section={showcase} locale={locale} styles={styles} />
        <MoroccanReviewsSection section={moroccanReviews} locale={locale} styles={styles} />
        <StressStatsSection section={stressStats} locale={locale} styles={styles} />
        <ComparisonModernSection section={comparisonModern} locale={locale} styles={styles} />
      </main>

      <Footer block={footerBlock} locale={locale} locales={landingData.i18n.locales} />
    </div>
  );
}

export default App;
