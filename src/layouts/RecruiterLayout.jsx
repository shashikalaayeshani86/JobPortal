// RecruiterLayout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaUsers, FaPlusCircle, FaCog } from "react-icons/fa";

const RecruiterLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19]">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19] shadow-lg">
        <div className="p-6 text-lg font-bold text-center border-b">Recruiter Panel</div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/recruiter/post-job" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaPlusCircle className="text-green-600" /> Post a Job
              </Link>
            </li>
            <li>
              <Link to="/recruiter/view-applications" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaUsers className="text-purple-600" /> View Applications
              </Link>
            </li>
            <li>
              <Link to="/recruiter/settings" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaCog className="text-gray-600" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default RecruiterLayout;
