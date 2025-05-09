import React from "react";
import { FaUsers, FaPlusCircle, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecruiterDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19]">
      
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
