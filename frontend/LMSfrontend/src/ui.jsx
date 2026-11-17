// Three small helpers used by every page.

export function Title({ children, sub }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-navy">{children}</h1>
      {sub && <p className="text-sm text-slate-500">{sub}</p>}
    </div>
  )
}

export function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-navy/10 border-t-4 border-t-gold bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-navy">{value}</p>
    </div>
  )
}

// columns: ['Name', 'Class']   rows: [['Brian', 'Form 2'], ['Grace', 'Form 4']]
export function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-navy/10 bg-white shadow-sm">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="bg-navy text-white">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-4 py-3 font-medium">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-navy/10 even:bg-mist/60">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}