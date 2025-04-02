import React, { useState } from "react";

const savedJobsData = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    postedDate: "March 25, 2025",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    company: "SoftSolutions",
    location: "New York, USA",
    postedDate: "March 22, 2025",
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    company: "Creative Minds",
    location: "San Francisco, USA",
    postedDate: "March 20, 2025",
  },
];

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(savedJobsData);

  return (
    <div className="max-w-4xl p-6 mx-auto my-20 shadow-lg bg-gradient-to-br from-pink-100 via-rose-200 to-orange-100 rounded-xl">
      <h2 className="mb-4 text-3xl font-bold">Saved Jobs</h2>
      <p className="mb-6 text-gray-600">Jobs you have saved for later review and application.</p>
      
      <div className="p-4 bg-gray-100 rounded-lg">
        {savedJobs.length > 0 ? (
          <table className="w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left border border-gray-300">Job Title</th>
                <th className="p-3 text-left border border-gray-300">Company</th>
                <th className="p-3 text-left border border-gray-300">Location</th>
                <th className="p-3 text-left border border-gray-300">Posted Date</th>
              </tr>
            </thead>
            <tbody>
              {savedJobs.map((job) => (
                <tr key={job.id} className="border border-gray-300">
                  <td className="p-3 border border-gray-300">{job.jobTitle}</td>
                  <td className="p-3 border border-gray-300">{job.company}</td>
                  <td className="p-3 border border-gray-300">{job.location}</td>
                  <td className="p-3 border border-gray-300">{job.postedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">You have not saved any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;