import React from "react";
import { FaBriefcase, FaUsers, FaPlusCircle, FaCog } from "react-icons/fa";

const RecruiterDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-lg font-bold text-center border-b">Recruiter Panel</div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <FaBriefcase className="text-blue-600" /> Dashboard
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <FaPlusCircle className="text-green-600" /> Post a Job
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <FaUsers className="text-purple-600" /> View Applications
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <FaCog className="text-gray-600" /> Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="mb-6 text-3xl font-semibold">Recruiter Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Active Jobs</h2>
            <p className="text-3xl text-blue-600">12</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Applications</h2>
            <p className="text-3xl text-green-600">34</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Interviews Scheduled</h2>
            <p className="text-3xl text-purple-600">5</p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="p-6 mt-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-2xl font-semibold">Recent Job Listings</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3">Job Title</th>
                <th className="p-3">Applications</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Software Engineer</td>
                <td className="p-3">18</td>
                <td className="p-3 text-green-600">Open</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">UI/UX Designer</td>
                <td className="p-3">7</td>
                <td className="p-3 text-red-600">Closed</td>
              </tr>
              <tr>
                <td className="p-3">Data Analyst</td>
                <td className="p-3">10</td>
                <td className="p-3 text-green-600">Open</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default RecruiterDashboard;
