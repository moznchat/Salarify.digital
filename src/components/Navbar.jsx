import { Icon } from "./Icon";
import { getLocalizedText } from "../utils/format";

const Navbar = ({ brand, styles, locale, locales, onLocaleChange }) => {
  return (
    <header className={`border-b ${styles.nav}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <ul className="hidden items-center gap-5 text-sm md:flex">
          <li>
            <a href="#store" className={styles.muted}>
              {getLocalizedText(brand.navLocalized.home, locale)}
            </a>
          </li>
          <li>
            <a href="#store" className="rounded bg-teal-500 px-3 py-1 font-semibold text-white">
              {getLocalizedText(brand.navLocalized.download, locale)}
            </a>
          </li>
          <li>
            <a href="#footer" className={styles.muted}>
              {getLocalizedText(brand.navLocalized.contact, locale)}
            </a>
          </li>
        </ul>

        <a href="#store" className="absolute left-1/2 -translate-x-1/2">
          <img src={brand.logo} alt={brand.name} className="h-14 w-auto object-contain sm:h-16" />
        </a>

        <div className="ml-auto flex items-center gap-3">
          <button type="button" className="text-slate-700">
            <Icon name="search" className="h-4 w-4" />
          </button>
          <button type="button" className="text-slate-700">
            <Icon name="user" className="h-4 w-4" />
          </button>
          <button type="button" className="text-slate-700">
            <Icon name="cart" className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1">
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => onLocaleChange(item.code)}
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-semibold ${
                  locale === item.code ? "border-teal-500 bg-teal-50" : "border-slate-200"
                }`}
              >
                <img src={item.icon} alt={item.label} className="h-4 w-4 rounded-full object-cover" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
