import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // New job listings
  const featuredJobs = [
    { id: 11, title: "AI Engineer", company: "NeuralTech", location: "Remote", description: "Build and optimize AI models." },
    { id: 12, title: "Blockchain Developer", company: "CryptoWorld", location: "Dubai, UAE", description: "Develop secure blockchain solutions." },
    { id: 13, title: "Game Developer", company: "Epic Games", location: "Los Angeles, USA", description: "Create immersive gaming experiences." },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-5xl font-extrabold text-center">Welcome to JobBoard</h1>
        <p className="mt-4 text-xl text-center">Explore exciting job opportunities with top companies</p>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center">Featured Jobs</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.id}`}
                className="p-6 transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                <p className="mt-2 text-gray-600">{job.company}</p>
                <p className="mt-1 text-sm text-gray-500">{job.location}</p>
                <p className="mt-4 text-sm text-gray-500">{job.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/jobs"
            className="pb-1 text-lg font-semibold text-white border-b-2 border-white hover:text-gray-200"
          >
            See More Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
