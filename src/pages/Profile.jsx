import React from 'react'

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Profile</h2>
      <p className="mt-2 text-gray-600">Manage your personal details and update your resume.</p>
      <div className="p-4 mt-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Skills: JavaScript, React, Node.js</p>
        <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile
