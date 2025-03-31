import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-sm p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-3xl font-bold">Login</h2>
          <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded" />
          <button className="w-full py-3 text-lg text-white bg-blue-500 rounded-lg">Login</button>
        </div>
      </div>
  )
}

export default Login
