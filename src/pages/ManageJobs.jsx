import React from 'react'

const ManageJobs = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Manage Jobs</h2>
      <p className="mt-2 text-gray-600">View, edit, or delete job postings.</p>
      <div className="p-4 mt-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold">Job Listings</h3>
        <ul>
          <li>Software Engineer - <span className="text-green-600">Active</span> <button className="px-2 py-1 ml-2 text-white bg-yellow-500 rounded">Edit</button> <button className="px-2 py-1 ml-2 text-white bg-red-500 rounded">Delete</button></li>
          <li>Frontend Developer - <span className="text-green-600">Active</span> <button className="px-2 py-1 ml-2 text-white bg-yellow-500 rounded">Edit</button> <button className="px-2 py-1 ml-2 text-white bg-red-500 rounded">Delete</button></li>
        </ul>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">Post New Job</button>
      </div>
    </div>
  )
}

export default ManageJobs
