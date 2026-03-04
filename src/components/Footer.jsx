import { Icon } from "./Icon";
import { getLocalizedText } from "../utils/format";

const Footer = ({ block, locale, locales }) => {
  return (
    <footer id="footer" className="bg-teal-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h3 className="text-4xl font-extrabold">{getLocalizedText(block.title, locale)}</h3>
          <form className="mt-6 space-y-3">
            <input
              type="email"
              placeholder={getLocalizedText(block.placeholder, locale)}
              className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/70"
            />
            <button type="submit" className="w-full rounded-md bg-white px-4 py-3 text-sm font-semibold text-teal-600">
              {getLocalizedText(block.button, locale)}
            </button>
          </form>

          <div className="mt-6 flex justify-center gap-4">
            <a href="https://facebook.com" className="rounded-full border border-white/40 p-2"><Icon name="facebook" className="h-4 w-4" /></a>
            <a href="https://instagram.com" className="rounded-full border border-white/40 p-2"><Icon name="instagram" className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between text-xs text-white/90">
          <div>
            <p className="mb-2">{getLocalizedText(block.languageLabel, locale)}</p>
            <select className="rounded border border-white/40 bg-transparent px-3 py-1 text-white">
              {locales.map((l) => (
                <option key={l.code} value={l.code} className="text-slate-900">{l.label}</option>
              ))}
            </select>
          </div>
          <p>© 2026 SALARIFY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
