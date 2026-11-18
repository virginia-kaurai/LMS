import { useState } from 'react'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'

// Sidebar menu for each role: [link, label]
const menus = {
  admin: [
    ['/admin', 'Dashboard'],
    ['/admin/students', 'Students'],
    ['/admin/teachers', 'Teachers'],
    ['/admin/classes', 'Classes'],
    ['/admin/subjects', 'Subjects'],
    ['/admin/exams', 'Exams'],
    ['/admin/results', 'Results'],
    ['/admin/fees', 'Fees'],
    ['/admin/settings', 'Settings'],
  ],
  teacher: [
    ['/teacher', 'Dashboard'],
    ['/teacher/classes', 'My Classes'],
    ['/teacher/grades', 'Grades'],
    ['/teacher/attendance', 'Attendance'],
  ],
  student: [
    ['/student', 'Dashboard'],
    ['/student/courses', 'My Courses'],
    ['/student/results', 'Results'],
    ['/student/timetable', 'Timetable'],
    ['/student/fees', 'Fees'],
  ],
}

// Used by all three portals: sidebar on the left, the current page on the right.
export default function Layout({ role }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user') || 'null')

  if (!user) return <Navigate to="/login" replace /> // not logged in
  if (user.role.toLowerCase() !== role) return <Navigate to={`/${user.role.toLowerCase()}`} replace /> // wrong portal

  const logout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-mist lg:flex">
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-10 bg-black/40 lg:hidden" />}

      <aside
        className={`fixed inset-y-0 left-0 z-20 flex w-60 flex-col bg-navy text-white transition-transform lg:sticky lg:top-0 lg:h-screen lg:shrink-0 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-white/10 px-5 py-5">
          <p className="text-lg font-bold text-gold">School Portal</p>
          <p className="text-sm capitalize text-white/70">{role}</p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {menus[role].map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === `/${role}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm ${isActive ? 'bg-gold font-semibold text-navy' : 'text-white/80 hover:bg-white/10'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4 text-sm">
          <p className="font-medium">{user.name}</p>
          <button onClick={logout} className="mt-2 text-gold hover:underline">Log out</button>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        {/* Menu button, phones and tablets only */}
        <header className="flex items-center gap-3 border-b border-navy/10 bg-white px-4 py-3 lg:hidden">
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="rounded-md border border-navy/20 px-3 py-1 text-navy">
            ☰
          </button>
          <span className="font-semibold capitalize text-navy">{role}</span>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}