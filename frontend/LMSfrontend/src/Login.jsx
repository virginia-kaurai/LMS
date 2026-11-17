
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const input = 'mt-1 w-full rounded-md border border-navy/20 px-3 py-2 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'

export default function Login() {
  const navigate = useNavigate()
  const [login_id, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  
  const submit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('http://127.0.0.1:8000/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login_id, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'An error occurred while logging in.')
        return;
      }

      if (data.role !== 'ADMIN' && data.role !== 'LECTURER' && data.role !== 'STUDENT') {
        setError('You do not have permission to access this admin site')
        return;
      }

      const routesByRole = {
      'ADMIN': '/admin',
      'LECTURER': '/lecturer',
      'STUDENT': '/student',
    }

    const role = data.role?.toUpperCase(); 
    const destination = routesByRole[role]

    if(!destination) {
      setError('You do not have permission to access this page.')
      return;
    }

      navigate(destination)
    } catch (error) {
      setError('An error occurred while logging in.')
    } finally {
      setIsLoading(false)
    }
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
            Login ID
            <input type="text" required value={login_id} onChange={(e) => setLoginId(e.target.value)} className={input} />
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
          <p>P101/4342G/23/ admin123</p>
         
        </div>
      </div>
    </div>
  )
}

