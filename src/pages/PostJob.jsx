import React from 'react'

const PostJob = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-3xl font-bold">Post a New Job</h2>
          <input type="text" placeholder="Job Title" className="w-full p-3 mb-3 border rounded" />
          <textarea placeholder="Job Description" className="w-full p-3 mb-3 border rounded" />
          <input type="text" placeholder="Company Name" className="w-full p-3 mb-3 border rounded" />
          <input type="text" placeholder="Location" className="w-full p-3 mb-3 border rounded" />
          <button className="w-full py-3 text-lg text-white bg-blue-500 rounded-lg">Submit</button>
        </div>
      </div>
  )
}

export default PostJob
