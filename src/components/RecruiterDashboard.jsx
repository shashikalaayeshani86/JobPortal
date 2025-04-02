import React from "react";
import { FaUsers, FaPlusCircle, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecruiterDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19]">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19] shadow-lg">
        <div className="p-6 text-lg font-bold text-center border-b">Recruiter Panel</div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/post-job" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaPlusCircle className="text-green-600" /> Post a Job
              </Link>
            </li>
            <li>
              <Link to="/view-applications" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaUsers className="text-purple-600" /> View Applications
              </Link>
            </li>
            <li>
              <Link to="/recruiter-settings" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaCog className="text-gray-600" /> Settings
              </Link>
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
      </main>
    </div>
  );
};

export default RecruiterDashboard;
