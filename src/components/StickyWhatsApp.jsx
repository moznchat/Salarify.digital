import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "../utils/format";

const StickyWhatsApp = ({ enabled, label, brand, message, styles }) => {
  if (!enabled) return null;

  const url = buildWhatsAppUrl(brand.whatsappBaseUrl, message);

  return (
    <a
      href={url}
      className={`fixed bottom-4 right-4 z-40 rounded-full px-5 py-3 text-sm font-semibold shadow-xl transition hover:-translate-y-0.5 ${styles.primaryButton}`}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
};

export const ScrollTriggerCTA = ({ enabled, text, button, brand, message, styles }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    const onScroll = () => setVisible(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  if (!enabled || !visible) return null;

  const url = buildWhatsAppUrl(brand.whatsappBaseUrl, message);

  return (
    <aside className={`fixed inset-x-3 bottom-20 z-30 rounded-2xl p-4 md:left-auto md:right-6 md:w-80 ${styles.card}`}>
      <p className="text-sm font-semibold">{text}</p>
      <a
        href={url}
        className={`mt-3 inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${styles.primaryButton}`}
        target="_blank"
        rel="noreferrer"
      >
        {button}
      </a>
    </aside>
  );
};

export default StickyWhatsApp;
