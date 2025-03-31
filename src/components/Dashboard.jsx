import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 min-h-screen p-6 text-white bg-gray-800">
        <h2 className="mb-6 text-2xl font-bold">Dashboard</h2>
        <ul className="space-y-4">
          <li><a href="/dashboard" className="block p-3 bg-gray-700 rounded">Overview</a></li>
          <li><a href="/dashboard/profile" className="block p-3 bg-gray-700 rounded">Profile</a></li>
          <li><a href="/dashboard/settings" className="block p-3 bg-gray-700 rounded">Settings</a></li>
          <li><a href="/dashboard/jobs" className="block p-3 bg-gray-700 rounded">Manage Jobs</a></li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>
        <p className="mt-2 text-gray-600">Manage your jobs, settings, and profile from here.</p>
      </div>
    </div>
  )
}

export default Dashboard
