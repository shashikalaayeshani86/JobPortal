import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { JobContext } from "../context/JobContext";

const JobDetail = () => {
  const { id } = useParams();
  const jobs = useContext(JobContext);
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div className="p-4 text-red-500">Job not found</div>;
  }

  return (
    <div className="max-w-lg p-6 mx-auto my-20 bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
      <p className="font-semibold text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <p className="mt-4 text-gray-700">{job.description}</p>

      {/* Apply Button */}
      <Link
        to={`/apply/${job.id}`} 
        className="block w-full px-4 py-2 mt-6 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Apply Now
      </Link>

      {/* Back to Jobs Link */}
      <Link to="/" className="inline-block mt-4 text-blue-500 hover:underline">
        Back to Jobs
      </Link>
    </div>
  );
};

export default JobDetail;
