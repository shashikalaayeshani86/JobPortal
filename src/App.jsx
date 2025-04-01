import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
import { JobContext } from "./context/JobContext"; 


const jobs = [
  { id: 1, title: "Software Engineer", company: "Tech Corp", location: "Remote", description: "Develop and maintain software solutions." },
  { id: 2, title: "Frontend Developer", company: "Web Solutions", location: "New York, USA", description: "Build user-friendly web interfaces." },
  { id: 3, title: "Backend Developer", company: "Data Systems", location: "London, UK", description: "Develop and optimize server-side applications." },
  { id: 4, title: "Full Stack Developer", company: "Innovate Ltd", location: "Berlin, Germany", description: "Work on both frontend and backend development." },
  { id: 5, title: "UI/UX Designer", company: "Creative Studio", location: "Sydney, Australia", description: "Design intuitive user interfaces and experiences." },
  { id: 6, title: "DevOps Engineer", company: "CloudWorks", location: "San Francisco, USA", description: "Manage cloud infrastructure and CI/CD pipelines." },
  { id: 7, title: "Product Manager", company: "NextGen Tech", location: "Toronto, Canada", description: "Lead product development and strategy." },
  { id: 8, title: "QA Engineer", company: "Testify Inc.", location: "Amsterdam, Netherlands", description: "Ensure software quality and test applications." },
  { id: 9, title: "Data Scientist", company: "AI Labs", location: "Tokyo, Japan", description: "Analyze data and build machine learning models." },
  { id: 10, title: "Cybersecurity Analyst", company: "SecureNet", location: "Singapore", description: "Protect systems from cyber threats." },

];

const App = () => {
  return (
      
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <JobContext.Provider value={jobs}>
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
          </JobContext.Provider>
        </div>
      
  )
}

export default App
