import { Icon } from "./Icon";

const Mark = ({ value }) => {
  return value ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
      <Icon name="check" className="h-4 w-4" />
    </span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700">
      <Icon name="x" className="h-4 w-4" />
    </span>
  );
};

const ComparisonTable = ({ data, styles, mode }) => {
  return (
    <section id={data.id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className={`text-2xl font-bold sm:text-3xl ${styles.heading}`}>{data.title}</h2>
      <div className={`mt-6 overflow-hidden rounded-2xl border ${styles.sectionDivider} ${styles.card}`}>
        <table className="w-full text-left text-sm">
          <thead className={styles.tableHead}>
            <tr>
              <th className="px-4 py-3">{data.headers.feature}</th>
              <th className="px-4 py-3">{data.headers.salarify}</th>
              <th className="px-4 py-3">{data.headers.others}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={`${mode}-${row.feature}`} className={`border-t ${styles.sectionDivider}`}>
                <td className="px-4 py-3">{row.feature}</td>
                <td className="px-4 py-3">
                  <Mark value={row.salarify} />
                </td>
                <td className="px-4 py-3">
                  <Mark value={row.others} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
