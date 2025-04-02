import React, { useState } from "react";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    location: "New York, USA",
    bio: "Passionate software developer with experience in full-stack development."
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-2xl p-6 mx-auto my-20 shadow-lg bg-gradient-to-br from-pink-100 via-rose-200 to-orange-100 rounded-xl">
      <h2 className="mb-4 text-3xl font-bold">Profile Settings</h2>
      <p className="mb-6 text-gray-600">Manage your profile information.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            className="w-full p-2 mt-1 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block font-semibold text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 mt-1 border rounded-lg" 
          />
        </div>
        
        <div>
          <label className="block font-semibold text-gray-700">Phone</label>
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="w-full p-2 mt-1 border rounded-lg" 
          />
        </div>
        
        <div>
          <label className="block font-semibold text-gray-700">Location</label>
          <input 
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            className="w-full p-2 mt-1 border rounded-lg" 
          />
        </div>
        
        <div>
          <label className="block font-semibold text-gray-700">Bio</label>
          <textarea 
            name="bio" 
            value={formData.bio} 
            onChange={handleChange} 
            className="w-full h-24 p-2 mt-1 border rounded-lg" 
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;