import { Stat, Table, Title } from './ui'

export function Dashboard() {
  return (
    <>
      <Title sub="Your term so far">Dashboard</Title>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Term average" value="74%" />
        <Stat label="Attendance" value="94%" />
        <Stat label="Fee balance" value="KES 4,500" />
      </div>
    </>
  )
}

export function MyCourses() {
  return (
    <>
      <Title sub="Your subjects this term">My Courses</Title>
      <Table
        columns={['Subject', 'Teacher', 'Room']}
        rows={[
          ['Mathematics', 'Faith Achieng', 'Room 7'],
          ['English', 'Lucy Nyaboke', 'Room 7'],
          ['Kiswahili', 'John Mutua', 'Room 7'],
          ['Chemistry', 'Peter Kiprono', 'Lab 2'],
        ]}
      />
    </>
  )
}

export function Results() {
  return (
    <>
      <Title sub="Term 3">Results</Title>
      <Table
        columns={['Subject', 'Test 1 /30', 'Test 2 /30', 'Exam /40', 'Total', 'Grade']}
        rows={[
          ['Mathematics', 24, 22, 31, 77, 'B'],
          ['English', 22, 25, 30, 77, 'B'],
          ['Kiswahili', 26, 24, 33, 83, 'A'],
          ['Chemistry', 18, 21, 26, 65, 'C'],
        ]}
      />
    </>
  )
}

export function Timetable() {
  return (
    <>
      <Title sub="Your week, lesson by lesson">Timetable</Title>
      <Table
        columns={['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        rows={[
          ['08:00', 'Mathematics', 'Physics', 'Kiswahili', 'History', 'Chemistry'],
          ['08:40', 'English', 'Mathematics', 'Chemistry', 'Biology', 'Physics'],
          ['09:20', 'Biology', 'History', 'Mathematics', 'English', 'Geography'],
          ['10:20', 'Kiswahili', 'English', 'Physics', 'Mathematics', 'History'],
        ]}
      />
    </>
  )
}

export function Fees() {
  return (
    <>
      <Title sub="Term 3 (KES)">Fees</Title>
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Stat label="Billed" value="46,000" />
        <Stat label="Paid" value="41,500" />
        <Stat label="Balance" value="4,500" />
      </div>
      <Table
        columns={['Date', 'Description', 'Amount']}
        rows={[
          ['5 Sep', 'Term 3 fees', '30,000'],
          ['2 Oct', 'Term 3 fees', '11,500'],
        ]}
      />
    </>
  )
}