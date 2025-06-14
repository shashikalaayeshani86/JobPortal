import React from "react";
import { FaSearch, FaClipboardList, FaBriefcase, FaUserCog } from "react-icons/fa";
import { Link, Route, Routes, Router as BrowserRouter } from "react-router-dom";

const JobSeekerDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-orange-100 ">
     

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="mb-6 text-3xl font-semibold">Job Seeker Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Jobs Applied</h2>
            <p className="text-3xl text-blue-600">8</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Interviews Scheduled</h2>
            <p className="text-3xl text-green-600">2</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Saved Jobs</h2>
            <p className="text-3xl text-purple-600">5</p>
          </div>
        </div>

        {/* Job Applications */}
        <div className="p-6 mt-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-2xl font-semibold">Recent Applications</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3">Job Title</th>
                <th className="p-3">Company</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Frontend Developer</td>
                <td className="p-3">TechCorp</td>
                <td className="p-3 text-blue-600">Under Review</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Software Engineer</td>
                <td className="p-3">InnoTech</td>
                <td className="p-3 text-green-600">Interview Scheduled</td>
              </tr>
              <tr>
                <td className="p-3">Data Analyst</td>
                <td className="p-3">DataSolutions</td>
                <td className="p-3 text-red-600">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default JobSeekerDashboard;
