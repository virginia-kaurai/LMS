
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

/* DEMO ONLY: these accounts live in the browser, so they protect nothing.
   In a real app, check the email and password on your server and return the user's role. */
const users = [
  { email: 'admin@school.com', password: 'admin123', role: 'admin', name: 'Daniel Mwangi' },
  { email: 'teacher@school.com', password: 'teacher123', role: 'teacher', name: 'Faith Achieng' },
  { email: 'student@school.com', password: 'student123', role: 'student', name: 'Amina Wekesa' },
]

const input = 'mt-1 w-full rounded-md border border-navy/20 px-3 py-2 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Already logged in? Go to your own dashboard.
  const saved = JSON.parse(sessionStorage.getItem('user') || 'null')
  if (saved) return <Navigate to={`/${saved.role}`} replace />

  const submit = (e) => {
    e.preventDefault()
    const user = users.find((u) => u.email === email.trim().toLowerCase() && u.password === password)
    if (!user) return setError('Email or password is incorrect.')

    sessionStorage.setItem('user', JSON.stringify({ role: user.role, name: user.name }))
    navigate(`/${user.role}`) // admin -> /admin, teacher -> /teacher, student -> /student
  }

  return (
    <div className="grid min-h-screen place-items-center bg-mist p-4">
      <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow">
        <div className="bg-navy px-6 py-5">
          <h1 className="text-xl font-bold text-gold">School Portal</h1>
          <p className="text-sm text-white/70">Log in to continue</p>
        </div>

        <form onSubmit={submit} className="space-y-4 p-6">
          <label className="block text-sm text-slate-600">
            Email
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
          </label>
          <label className="block text-sm text-slate-600">
            Password
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={input} />
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="w-full rounded-md bg-gold py-2 font-semibold text-navy hover:brightness-95">Log in</button>
        </form>

        <div className="border-t border-navy/10 bg-mist px-6 py-4 text-xs text-slate-600">
          <p>Demo logins:</p>
          <p>admin@school.com / admin123</p>
          <p>teacher@school.com / teacher123</p>
          <p>student@school.com / student123</p>
        </div>
      </div>
    </div>
  )
}

