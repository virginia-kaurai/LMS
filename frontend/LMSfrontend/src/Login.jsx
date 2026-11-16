import React from 'react'

function Login() {
  return (
    <div>

      <form>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login