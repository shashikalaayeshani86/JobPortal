import React from 'react'
import { Link } from 'react-router-dom';

const JobList = () => {

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

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job, index) => (
      <Link 
      key={job.id} 
      to={`/jobs/${job.id}`} 
      className="block p-4 transition bg-purple-200 border-gray-200 shadow-lg rounded-2xl hover:bg-purple-300"
    >
        <div key={index} className="p-4 bg-purple-200 border-gray-200 shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default JobList
