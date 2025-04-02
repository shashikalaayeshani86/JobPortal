import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { login } = useContext(AuthContext);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) return alert("Please select a role");
    login(role);
    navigate(`/${role.replace('_', '-')}`); // Navigate to the correct dashboard
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Login</h1>
      <select className="p-2 border rounded" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="job_seeker">Job Seeker</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <button className="px-6 py-2 ml-4 text-white bg-blue-600 rounded-full" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login
