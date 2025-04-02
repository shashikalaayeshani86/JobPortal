// Analytics.jsx
import React, { useEffect, useState } from "react";
import { FaChartBar } from "react-icons/fa";
//import { fetchAnalyticsData } from "../api/analyticsAPI"; // assume you have an API utility for this

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({});
  
  useEffect(() => {
    const getAnalyticsData = async () => {
      const data = await fetchAnalyticsData();
      setAnalyticsData(data);
    };
    getAnalyticsData();
  }, []);

  return (
    <div className="p-6 rounded-lg shadow bg-gradient-to-bl from-teal-200 via-cyan-300 to-blue-400">
      <h2 className="mb-4 text-2xl font-semibold">Analytics</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold">Total Users</h3>
          <p className="text-3xl text-blue-600">{analyticsData.totalUsers}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold">Active Job Postings</h3>
          <p className="text-3xl text-green-600">{analyticsData.activeJobPostings}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold">Total Applications</h3>
          <p className="text-3xl text-purple-600">{analyticsData.totalApplications}</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
