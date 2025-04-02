import React, { useState, useEffect } from "react";

export const ViewApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchApplications = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
        setApplications([
          { id: 1, name: "John Doe", position: "Frontend Developer", status: "Pending" },
          { id: 2, name: "Jane Smith", position: "Backend Developer", status: "Reviewed" },
        ]);
      } catch (error) {
        setError("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19] rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">View Applications</h1>
      {loading && <p className="mt-4 text-gray-600">Loading applications...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && !error && (
        <ul className="mt-4">
          {applications.map((app) => (
            <li key={app.id} className="p-3 mb-2 border rounded">
              <strong>{app.name}</strong> applied for <em>{app.position}</em> - Status: {app.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
