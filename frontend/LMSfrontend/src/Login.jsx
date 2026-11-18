
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import api from './api';

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
      const response = await api.post('/accounts/login/', {
        login_id,
        password
      })

      // DEBUG: Let's see exactly what Django sent
      console.log("Full Axios response:", response);
      console.log("Response data:", response.data);

      // Protect against undefined data
      const data = response.data || {};
      
      const role = data.role ? data.role.toLowerCase() : null; 

      const routesByRole = {
        'admin': '/admin',
        'lecturer': '/lecturer',
        'student': '/student',
      }

      const destination = routesByRole[role]

      if(!destination) {
        setError(`Login failed: Unknown role (${data.role}).`)
        return;
      }

      sessionStorage.setItem('user', JSON.stringify({
        id: data.user_id,
        role: role,
        name: login_id
      }));

      console.log("About to navigate to:", destination);
      navigate(destination)

    } catch (error) {
      console.error("FULL AXIOS ERROR:", error); // <--- This will show if it's a network error
      setError(error.response?.data?.error || 'Network error. Is the backend running?')
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

