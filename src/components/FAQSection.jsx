import { useState } from "react";
import { Icon } from "./Icon";

const FAQSection = ({ data, styles, mode }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={data.id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className={`text-2xl font-bold sm:text-3xl ${styles.heading}`}>{data.title}</h2>
      <div className="mt-6 space-y-3">
        {data.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={`${mode}-${item.q}`} className={`rounded-2xl ${styles.card}`}>
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="font-semibold">{item.q}</span>
                <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${styles.soft}`}>
                  <Icon name={isOpen ? "minus" : "plus"} className="h-4 w-4" />
                </span>
              </button>
              {isOpen && <p className={`px-5 pb-5 text-sm ${styles.muted}`}>{item.a}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
