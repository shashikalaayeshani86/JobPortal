import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home  from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import JobList from './pages/JobList'
import JobDetail from './pages/JobDetail'
import PostJob from './components/Recruiter/PostJob'
import { RecruiterSettings } from './components/Recruiter/RecruiterSettings.jsx'
import { ViewApplications } from './components/Recruiter/ViewApplications.jsx'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import ManageJobs from './pages/ManageJobs'
import AdminDashboard from './components/AdminDashboard';
import UserManagement from "./components/Admin/UserManagement.jsx"
import Analytics from "./components/Admin/Analytics.jsx"
import JobPostings from "./components/Admin/JobPostings.jsx"
import Reports from "./components/Admin/Reports.jsx"
import JobSeekerDashboard from './components/JobSeekerDashBoard'
import RecruiterDashboard from './components/RecruiterDashboard.jsx';
import AuthProvider, { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import { JobContext } from "./context/JobContext"; 
import MyApplications from './components/JobSeeker/MyApplication.jsx'
import SavedJobs from './components/JobSeeker/SavedJobs.jsx'
import ProfileSettings from './components/JobSeeker/ProfileSettings.jsx'
import Footer from './components/Footer.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import RecruiterLayout from './layouts/RecruiterLayout.jsx'
import JobSeekerLayout from './layouts/JobSeekerLayout.jsx'


const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/login" />;
  return children;
};

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
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <JobContext.Provider value={jobs}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />

            <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* Nested routes inside AdminLayout */}
        <Route index element={<AdminDashboard />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="job-postings" element={<JobPostings />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      
            <Route
        path="/job-seeker"
        element={
          <ProtectedRoute role="job_seeker">
            <JobSeekerLayout />
          </ProtectedRoute>
        }
        >
          <Route index element={<JobSeekerDashboard />} />
          <Route path="jobs" element={<JobList />} />
          <Route path="my-applications" element={<MyApplications />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="profile-settings" element={<ProfileSettings />} />
        </Route>
          
        <Route
          path="/recruiter"
          element={
            <ProtectedRoute role="recruiter">
              <RecruiterLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<RecruiterDashboard />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="view-applications" element={<ViewApplications />} />
          <Route path="settings" element={<RecruiterSettings />} />
        </Route>

        
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          </JobContext.Provider>
          <Footer/>
        </div>
        </AuthProvider>
  )
}

export default App
