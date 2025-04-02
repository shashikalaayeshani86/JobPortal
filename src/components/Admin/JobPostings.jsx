// JobPostings.jsx
import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { fetchJobPostings, deleteJobPosting } from "../api/jobAPI"; // assume you have an API utility for this

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);
  
  useEffect(() => {
    const getJobPostings = async () => {
      const fetchedPostings = await fetchJobPostings();
      setJobPostings(fetchedPostings);
    };
    getJobPostings();
  }, []);
  
  const handleDelete = async (jobId) => {
    const confirmed = window.confirm("Are you sure you want to delete this job posting?");
    if (confirmed) {
      await deleteJobPosting(jobId);
      setJobPostings(jobPostings.filter(posting => posting.id !== jobId)); // Remove posting from list after delete
    }
  };

  return (
    <div className="p-6 rounded-lg shadow bg-gradient-to-bl from-teal-200 via-cyan-300 to-blue-400">
      <h2 className="mb-4 text-2xl font-semibold">Job Postings</h2>
      <div className="mb-4">
        <Link to="/create-job-posting" className="flex items-center text-green-600">
          <FaPlusCircle className="mr-2" />
          Add New Job Posting
        </Link>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3">Job Title</th>
            <th className="p-3">Company</th>
            <th className="p-3">Location</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobPostings.map(posting => (
            <tr className="border-b" key={posting.id}>
              <td className="p-3">{posting.title}</td>
              <td className="p-3">{posting.company}</td>
              <td className="p-3">{posting.location}</td>
              <td className="p-3 text-green-600">{posting.status}</td>
              <td className="p-3">
                <Link to={`/edit-job-posting/${posting.id}`} className="mr-4 text-blue-600">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(posting.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobPostings;
