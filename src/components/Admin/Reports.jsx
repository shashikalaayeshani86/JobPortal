// Reports.jsx
import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
//import { fetchReports } from "../api/reportsAPI"; // assume you have an API utility for this

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      const fetchedReports = await fetchReports();
      setReports(fetchedReports);
    };
    getReports();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-semibold">Reports</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3">Report Name</th>
            <th className="p-3">Date Generated</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr className="border-b" key={report.id}>
              <td className="p-3">{report.name}</td>
              <td className="p-3">{new Date(report.date).toLocaleDateString()}</td>
              <td className="p-3">
                <a href={report.fileUrl} className="text-blue-600" download>
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
