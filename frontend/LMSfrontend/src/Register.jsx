import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from './api';


function Register() {


const inputClass = 'mt-1 w-full rounded-md border border-navy/20 px-3 py-2 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'


const[formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    login_id: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange =(e) => {
    const{name,value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }


  const submit = async (e) => {
    e.preventDefault()
    setError("")

    if(formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)


    try{

       const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        login_id: formData.login_id,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        role: 'student' // Or whatever default role you want
      }


      const respose = await api.post('/accounts/register/', payload)
    }
        catch(error){
      // Log it to the console so you can see the exact response
      console.error("Backend Error:", error.response?.data);
      
      // Show the exact error on the screen
      const errorData = error.response?.data;
      if (errorData) {
        // If Django sends an object like { email: ["already exists"] }, grab the first error
        const firstError = Object.values(errorData)[0];
        setError(Array.isArray(firstError) ? firstError[0] : firstError);
      } else {
        setError('Network error. Is the backend running?');
      }
    }
    finally {
      setIsLoading(false)
    }
  }
 
  return (
    <div className="grid min-h-screen place-items-center bg-mist p-4">
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow">
        
        <div className="bg-navy px-6 py-5">
          <h1 className="text-xl font-bold text-gold">Create an Account</h1>
          <p className="text-sm text-white/70">Join the School Portal</p>
        </div>

        <form onSubmit={submit} className="space-y-4 p-6">
          
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-slate-600">
              First Name
              <input type="text" name="first_name" required value={formData.first_name} onChange={handleChange} className={inputClass} />
            </label>
            <label className="block text-sm text-slate-600">
              Last Name
              <input type="text" name="last_name" required value={formData.last_name} onChange={handleChange} className={inputClass} />
            </label>
          </div>

          {/* Login ID */}
          <label className="block text-sm text-slate-600">
            Admission / Login ID
            <input type="text" name="login_id" required value={formData.login_id} onChange={handleChange} className={inputClass} placeholder="e.g., P101/4342G/23" />
          </label>

          {/* Email */}
          <label className="block text-sm text-slate-600">
            Email Address
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
          </label>

           <label className="block text-sm text-slate-600">
          Role
            <input type="text" name="role" required value={formData.role} onChange={handleChange} className={inputClass} />
          </label>
          

          {/* Passwords Row */}
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm text-slate-600">
              Password
              <input type="password" name="password" required value={formData.password} onChange={handleChange} className={inputClass} />
            </label>
            <label className="block text-sm text-slate-600">
              Confirm Password
              <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} className={inputClass} />
            </label>
          </div>

          {/* Error Message */}
          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full rounded-md bg-gold py-2 font-semibold text-navy hover:brightness-95 disabled:opacity-50"
          >
            {isLoading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        {/* Footer Link */}
        <div className="border-t border-navy/10 bg-mist px-6 py-4 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-navy hover:underline">
            Log in here
          </Link>
        </div>

      </div>
    </div>
  )
}
export default Register