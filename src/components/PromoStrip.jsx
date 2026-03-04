import { getLocalizedText } from "../utils/format";

const PromoStrip = ({ brand, locale }) => {
  const messages = getLocalizedText(brand.topStrip.messages, locale);

  return (
    <div className="bg-teal-500 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-4 py-2 text-center text-xs font-medium sm:grid-cols-3">
        {messages.map((msg) => (
          <span key={msg}>{msg}</span>
        ))}
      </div>
    </div>
  );
};

export default PromoStrip;
