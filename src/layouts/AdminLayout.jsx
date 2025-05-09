// src/layouts/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { FaUsers, FaBriefcase, FaChartBar, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-bl from-teal-200 via-cyan-300 to-blue-400">
      {/* Sidebar */}
      <aside className="w-64 shadow-lg bg-gradient-to-bl from-teal-200 via-cyan-300 to-blue-400">
        <div className="p-6 text-lg font-bold text-center border-b">Admin Panel</div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <Link to="/admin/user-management">
                <FaUsers className="text-blue-600" /> User Management
              </Link>
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <Link to="/admin/job-postings">
                <FaBriefcase className="text-green-600" /> Job Postings
              </Link>
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <Link to="/admin/analytics">
                <FaChartBar className="text-purple-600" /> Analytics
              </Link>
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <Link to="/admin/reports">
                <FaFileAlt className="text-gray-600" /> Reports
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

export default AdminLayout;
