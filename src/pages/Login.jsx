import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
        <p>This is an Error!</p>
        <span>Don't have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
