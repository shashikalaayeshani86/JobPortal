import React from 'react'

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Settings</h2>
      <p className="mt-2 text-gray-600">Update account settings, notifications, and security preferences.</p>
      <div className="p-4 mt-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold">Account Settings</h3>
        <p>Email Notifications: Enabled</p>
        <p>Password: *********</p>
        <button className="px-4 py-2 mt-2 text-white bg-green-500 rounded">Change Password</button>
      </div>
    </div>
  )
}

export default Settings
