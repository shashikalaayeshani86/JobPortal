import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    cv: null,
    jobPreferences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 mb-3 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-3 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 mb-3 border rounded"
          />
          <div className="mb-4">
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">Upload CV</label>
            <input
              type="file"
              name="cv"
              onChange={handleFileChange}
              className="w-full p-3 mt-1 border rounded"
            />
          </div>
          <textarea
            name="jobPreferences"
            value={formData.jobPreferences}
            onChange={handleChange}
            placeholder="Job Preferences (e.g., preferred role, location)"
            className="w-full p-3 mb-3 border rounded"
          ></textarea>
          <button type="submit" className="w-full py-3 text-lg text-white bg-green-500 rounded-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
