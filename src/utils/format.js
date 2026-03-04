export const formatPrice = (value, currency) => {
  const formatted = new Intl.NumberFormat("fr-MA").format(value);
  return `${formatted} ${currency}`;
};

export const buildWhatsAppUrl = (baseUrl, message) => {
  const url = new URL(baseUrl);
  url.searchParams.set("text", message);
  return url.toString();
};

export const getLocalizedText = (value, locale, fallback = "fr") => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale] || value[fallback] || Object.values(value)[0] || "";
};
