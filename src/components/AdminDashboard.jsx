import React from "react";
import { FaUsers, FaBriefcase, FaChartBar, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-bl from-teal-200 via-cyan-300 to-blue-400 ">
      

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="mb-6 text-3xl font-semibold">Admin Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-3xl text-blue-600">350</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Active Job Postings</h2>
            <p className="text-3xl text-green-600">45</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Pending Reports</h2>
            <p className="text-3xl text-red-600">12</p>
          </div>
        </div>

        {/* User Management */}
        <div className="p-6 mt-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-2xl font-semibold">User Management</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3">Name</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">John Doe</td>
                <td className="p-3">Job Seeker</td>
                <td className="p-3 text-green-600">Active</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Jane Smith</td>
                <td className="p-3">Recruiter</td>
                <td className="p-3 text-red-600">Suspended</td>
              </tr>
              <tr>
                <td className="p-3">Michael Lee</td>
                <td className="p-3">Admin</td>
                <td className="p-3 text-blue-600">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
