import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaSearch, FaClipboardList, FaBriefcase, FaUserCog } from "react-icons/fa";

const JobSeekerLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-orange-100">
      {/* Sidebar */}
      <aside className="w-64 shadow-lg bg-gradient-to-br from-pink-100 via-rose-200 to-orange-100">
        <div className="p-6 text-lg font-bold text-center border-b">Job Seeker Panel</div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/job-seeker/jobs" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaSearch className="text-blue-600" /> Job Listings
              </Link>
            </li>
            <li>
              <Link to="/job-seeker/my-applications" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaClipboardList className="text-green-600" /> My Applications
              </Link>
            </li>
            <li>
              <Link to="/job-seeker/saved-jobs" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaBriefcase className="text-purple-600" /> Saved Jobs
              </Link>
            </li>
            <li>
              <Link to="/job-seeker/profile-settings" className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-200">
                <FaUserCog className="text-gray-600" /> Profile Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet /> {/* This will render the nested routes */}
      </main>
    </div>
  );
};

export default JobSeekerLayout;
