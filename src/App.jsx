import React from 'react'
import { Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home  from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './components/Dashboard'
import JobList from './pages/JobList'
import JobDetail from './pages/JobDetail'
import PostJob from './pages/PostJob'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import ManageJobs from './pages/ManageJobs'

const App = () => {
  return (
    
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/jobs" element={<ManageJobs />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/post-job" element={<PostJob />} />
          </Routes>
        </div>
      
  )
}

export default App
