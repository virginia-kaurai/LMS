import { Stat, Table, Title } from './ui'

const input = 'mt-1 w-full rounded-md border border-navy/20 px-3 py-2 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'
const button = 'rounded-md bg-gold px-5 py-2 font-semibold text-navy hover:brightness-95'

export function Dashboard() {
  return (
    <>
      <Title sub="Overview of the school">Dashboard</Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Students" value="412" />
        <Stat label="Teachers" value="28" />
        <Stat label="Classes" value="14" />
        <Stat label="Fees collected" value="78%" />
      </div>
    </>
  )
}

export function Students() {
  return (
    <>
      <Title sub="All enrolled students">Students</Title>
      <Table
        columns={['Adm. no.', 'Name', 'Class', 'Status']}
        rows={[
          ['ST001', 'Brian Otieno', 'Form 2 East', 'Active'],
          ['ST002', 'Grace Wanjiku', 'Form 4 North', 'Active'],
          ['ST003', 'Naomi Chebet', 'Form 3 West', 'Active'],
          ['ST004', 'Kevin Barasa', 'Form 1 East', 'Suspended'],
        ]}
      />
    </>
  )
}

export function Teachers() {
  return (
    <>
      <Title sub="Staff and the subjects they teach">Teachers</Title>
      <Table
        columns={['ID', 'Name', 'Subject', 'Status']}
        rows={[
          ['T01', 'Faith Achieng', 'Mathematics', 'Active'],
          ['T02', 'Peter Kiprono', 'Chemistry', 'Active'],
          ['T03', 'Lucy Nyaboke', 'English', 'On leave'],
          ['T04', 'John Mutua', 'Kiswahili', 'Active'],
        ]}
      />
    </>
  )
}

export function Classes() {
  return (
    <>
      <Title sub="Streams, class teachers and rooms">Classes</Title>
      <Table
        columns={['Class', 'Class teacher', 'Students', 'Room']}
        rows={[
          ['Form 1 East', 'Samuel Omondi', 54, 'Room 1'],
          ['Form 2 East', 'Faith Achieng', 53, 'Room 4'],
          ['Form 3 West', 'Peter Kiprono', 50, 'Room 7'],
          ['Form 4 North', 'Lucy Nyaboke', 51, 'Room 8'],
        ]}
      />
    </>
  )
}

export function Subjects() {
  return (
    <>
      <Title sub="What is taught and who teaches it">Subjects</Title>
      <Table
        columns={['Code', 'Subject', 'Teacher']}
        rows={[
          ['MAT', 'Mathematics', 'Faith Achieng'],
          ['ENG', 'English', 'Lucy Nyaboke'],
          ['KIS', 'Kiswahili', 'John Mutua'],
          ['CHE', 'Chemistry', 'Peter Kiprono'],
        ]}
      />
    </>
  )
}

export function Exams() {
  return (
    <>
      <Title sub="Exam schedule for the term">Exams</Title>
      <Table
        columns={['Exam', 'Starts', 'Ends', 'Status']}
        rows={[
          ['Opening Test', '14 Sep', '18 Sep', 'Done'],
          ['Mid-term Exam', '19 Oct', '23 Oct', 'Done'],
          ['End of Term Exam', '16 Nov', '25 Nov', 'Ongoing'],
          ['Form 4 Mock', '7 Dec', '11 Dec', 'Upcoming'],
        ]}
      />
    </>
  )
}

export function Results() {
  return (
    <>
      <Title sub="Mid-term Exam, Form 4 North">Results</Title>
      <Table
        columns={['Position', 'Student', 'Mean', 'Grade']}
        rows={[
          [1, 'Grace Wanjiku', '86%', 'A'],
          [2, 'Naomi Chebet', '78%', 'B'],
          [3, 'Brian Otieno', '66%', 'C'],
          [4, 'Mercy Auma', '54%', 'D'],
        ]}
      />
    </>
  )
}

export function Fees() {
  return (
    <>
      <Title sub="Term 3 billing and balances (KES)">Fees</Title>
      <Table
        columns={['Student', 'Class', 'Billed', 'Paid', 'Balance']}
        rows={[
          ['Brian Otieno', 'Form 2 East', '42,000', '42,000', '0'],
          ['Grace Wanjiku', 'Form 4 North', '48,000', '30,000', '18,000'],
          ['Naomi Chebet', 'Form 3 West', '46,000', '46,000', '0'],
          ['Kevin Barasa', 'Form 1 East', '42,000', '0', '42,000'],
        ]}
      />
    </>
  )
}

export function Settings() {
  return (
    <>
      <Title sub="School details and term dates">Settings</Title>
      <form onSubmit={(e) => e.preventDefault()} className="max-w-xl space-y-4 rounded-lg border border-navy/10 bg-white p-5 shadow-sm">
        <label className="block text-sm text-slate-600">
          School name
          <input defaultValue="Your School" className={input} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-slate-600">
            Term opens
            <input type="date" defaultValue="2026-09-01" className={input} />
          </label>
          <label className="block text-sm text-slate-600">
            Term closes
            <input type="date" defaultValue="2026-11-27" className={input} />
          </label>
        </div>
        <button className={button}>Save settings</button>
      </form>
    </>
  )
}