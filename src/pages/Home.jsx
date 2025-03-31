import React from 'react'

const Home = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 text-center bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Job Board</h1>
        <p className="mt-2 text-lg text-gray-600">Find your dream job or post a new opportunity!</p>
        <div className="flex justify-center mt-6 space-x-4">
          <a href="/jobs" className="px-5 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg">Browse Jobs</a>
          <a href="/post-job" className="px-5 py-3 text-lg font-medium text-white bg-green-500 rounded-lg">Post a Job</a>
        </div>
      </div>
  )
}

export default Home
