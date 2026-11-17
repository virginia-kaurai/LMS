import { Stat, Table, Title } from './ui'

const box = 'w-16 rounded-md border border-navy/20 px-2 py-1 text-right'
const button = 'mt-4 rounded-md bg-gold px-5 py-2 font-semibold text-navy hover:brightness-95'
const students = ['Brian Otieno', 'Grace Wanjiku', 'Naomi Chebet', 'Mercy Auma']

export function Dashboard() {
  return (
    <>
      <Title sub="Your day at a glance">Dashboard</Title>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="My classes" value="3" />
        <Stat label="Students" value="98" />
        <Stat label="Marks to enter" value="2" />
      </div>
    </>
  )
}

export function MyClasses() {
  return (
    <>
      <Title sub="Classes you teach this term">My Classes</Title>
      <Table
        columns={['Class', 'Subject', 'Students', 'Room']}
        rows={[
          ['Form 2 East', 'Mathematics', 53, 'Room 4'],
          ['Form 3 West', 'Mathematics', 50, 'Room 7'],
          ['Form 4 North', 'Mathematics', 51, 'Room 2'],
        ]}
      />
    </>
  )
}

export function Grades() {
  return (
    <>
      <Title sub="Form 3 West · Mathematics">Grades</Title>
      <form onSubmit={(e) => e.preventDefault()} className="rounded-lg border border-navy/10 bg-white p-5 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="pb-2 font-medium">Student</th>
                <th className="pb-2 font-medium">Test 1 /30</th>
                <th className="pb-2 font-medium">Test 2 /30</th>
                <th className="pb-2 font-medium">Exam /40</th>
              </tr>
            </thead>
            <tbody>
              {students.map((name) => (
                <tr key={name} className="border-t border-navy/10">
                  <td className="py-2">{name}</td>
                  <td><input type="number" min="0" max="30" defaultValue="20" className={box} /></td>
                  <td><input type="number" min="0" max="30" defaultValue="20" className={box} /></td>
                  <td><input type="number" min="0" max="40" defaultValue="28" className={box} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className={button}>Save grades</button>
      </form>
    </>
  )
}

export function Attendance() {
  return (
    <>
      <Title sub="Form 2 East · today's register">Attendance</Title>
      <form onSubmit={(e) => e.preventDefault()} className="max-w-xl rounded-lg border border-navy/10 bg-white p-5 shadow-sm">
        <ul className="divide-y divide-navy/10">
          {students.map((name) => (
            <li key={name}>
              <label className="flex items-center justify-between py-3 text-sm">
                {name}
                <span className="flex items-center gap-2 text-slate-500">
                  Present
                  <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#10285a]" />
                </span>
              </label>
            </li>
          ))}
        </ul>
        <button className={button}>Submit register</button>
      </form>
    </>
  )
}