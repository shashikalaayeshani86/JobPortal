import React, { useState } from "react";

const applicationsData = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "TechCorp",
    status: "Pending",
    appliedDate: "March 20, 2025",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    company: "SoftSolutions",
    status: "Interview Scheduled",
    appliedDate: "March 18, 2025",
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    company: "Creative Minds",
    status: "Rejected",
    appliedDate: "March 15, 2025",
  },
  {
    id: 4,
    jobTitle: "Full Stack Developer",
    company: "InnovateX",
    status: "Hired",
    appliedDate: "March 10, 2025",
  },
];

const MyApplications = () => {
  const [applications, setApplications] = useState(applicationsData);
  
  return (
    <div className="max-w-4xl p-6 mx-auto my-20 shadow-lg bg-gradient-to-br from-pink-100 via-rose-200 to-orange-100 rounded-xl">
      <h2 className="mb-4 text-3xl font-bold">My Applications</h2>
      <p className="mb-6 text-gray-600">Track your job applications and stay updated on your hiring process.</p>
      
      <div className="p-4 bg-gray-100 rounded-lg">
        {applications.length > 0 ? (
          <table className="w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left border border-gray-300">Job Title</th>
                <th className="p-3 text-left border border-gray-300">Company</th>
                <th className="p-3 text-left border border-gray-300">Status</th>
                <th className="p-3 text-left border border-gray-300">Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border border-gray-300">
                  <td className="p-3 border border-gray-300">{app.jobTitle}</td>
                  <td className="p-3 border border-gray-300">{app.company}</td>
                  <td 
                    className={`p-3 border border-gray-300 font-semibold ${
                      app.status === "Pending" ? "text-yellow-500" :
                      app.status === "Interview Scheduled" ? "text-blue-500" :
                      app.status === "Hired" ? "text-green-500" :
                      "text-red-500"
                    }`}
                  >
                    {app.status}
                  </td>
                  <td className="p-3 border border-gray-300">{app.appliedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">You have not applied for any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
