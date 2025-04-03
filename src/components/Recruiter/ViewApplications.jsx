import React, { useState, useEffect } from "react";

export const ViewApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [interviewDateTime, setInterviewDateTime] = useState("");

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchApplications = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
        setApplications([
          {
            id: 1,
            name: "John Doe",
            position: "Frontend Developer",
            email: "john.doe@example.com",
            status: "Pending",
            cv: "/cv/john_doe.pdf",
          },
          {
            id: 2,
            name: "Jane Smith",
            position: "Backend Developer",
            email: "jane.smith@example.com",
            status: "Reviewed",
            cv: "/cv/jane_smith.pdf",
          },
        ]);
      } catch (error) {
        setError("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  // Open Modal for Scheduling Interview
  const openScheduleModal = (application) => {
    setSelectedApplication(application);
    setInterviewDateTime("");
  };

  // Close Modal
  const closeScheduleModal = () => {
    setSelectedApplication(null);
  };

  // Handle Scheduling Interview
  const handleScheduleInterview = () => {
    if (!interviewDateTime) {
      alert("Please select a date and time.");
      return;
    }

    // Simulate Sending Email
    alert(`Interview scheduled for ${selectedApplication.name} at ${interviewDateTime}.
An email has been sent to ${selectedApplication.email}.`);

    // Close Modal
    closeScheduleModal();
  };

  const handleReject = (id) => {
    alert(`Application ID: ${id} has been rejected`);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19] rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">View Applications</h1>
      {loading && <p className="mt-4 text-gray-600">Loading applications...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && !error && (
        <ul className="mt-4 space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="p-4 bg-white border rounded-lg shadow-md">
              <div className="mb-2">
                <strong className="text-lg">{app.name}</strong> applied for <em>{app.position}</em>  
                <p className="text-gray-600">Status: <span className="font-semibold">{app.status}</span></p>
                <p className="text-gray-600">Email: {app.email}</p>
              </div>

              {/* Download CV Section */}
              <div className="flex items-center gap-3 mt-3">
                <a
                  href={app.cv}
                  download
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Download CV
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => openScheduleModal(app)}
                  className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                >
                  Schedule Interview
                </button>
                <button
                  onClick={() => handleReject(app.id)}
                  className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for Scheduling Interview */}
      {selectedApplication && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-800">Schedule Interview</h2>
            <p className="mt-2 text-gray-600">
              Candidate: <strong>{selectedApplication.name}</strong>
            </p>
            <p className="text-gray-600">Position: {selectedApplication.position}</p>
            <p className="text-gray-600">Email: {selectedApplication.email}</p>

            {/* Date-Time Picker */}
            <label className="block mt-4 text-gray-700">Select Date & Time:</label>
            <input
              type="datetime-local"
              value={interviewDateTime}
              onChange={(e) => setInterviewDateTime(e.target.value)}
              className="w-full p-2 mt-2 border rounded-lg"
            />

            {/* Modal Action Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={closeScheduleModal}
                className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleScheduleInterview}
                className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
