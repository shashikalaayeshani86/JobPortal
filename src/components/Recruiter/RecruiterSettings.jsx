import React, { useState, useEffect } from "react";

export const RecruiterSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    accountVisibility: "public",
    password: "",
    confirmPassword: "",
    profileImage: null,
    preferredCommunication: "email",
    jobAlertPreferences: {
      receiveJobAlerts: true,
      preferredAlertType: "email",
    },
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    // Simulate fetching current settings from an API
    const fetchSettings = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
        setSettings({
          emailNotifications: true,
          accountVisibility: "public",
          preferredCommunication: "email",
          jobAlertPreferences: {
            receiveJobAlerts: true,
            preferredAlertType: "email",
          },
        });
      } catch (error) {
        setErrorMessage("Failed to load settings.");
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleToggle = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  const handleSelectChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleJobAlertChange = (e) => {
    setSettings({
      ...settings,
      jobAlertPreferences: {
        ...settings.jobAlertPreferences,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSettings({ ...settings, profileImage: file });

    // Preview image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Simulate an API call to save settings
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage("Settings updated successfully!");
    } catch (error) {
      setErrorMessage("Failed to update settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#5cfd69] via-[#CBE8CF] to-[#a2be19] rounded-lg shadow-lg w-[450px] ml-[500px] mt-10">
      <h1 className="text-2xl font-bold">Settings</h1>
      {loading && <p className="mt-4 text-gray-600">Saving settings...</p>}
      {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="mt-4">
        {/* Email Notifications */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleToggle}
            className="mr-2"
          />
          <span>Email Notifications</span>
        </div>

        {/* Account Visibility */}
        <div className="mb-4">
          <label className="block mb-2 text-sm" htmlFor="accountVisibility">
            Account Visibility
          </label>
          <select
            name="accountVisibility"
            value={settings.accountVisibility}
            onChange={handleSelectChange}
            className="w-full p-3 border rounded"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="restricted">Restricted</option>
          </select>
        </div>

        {/* Password Change */}
        <div className="mb-4">
          <label className="block mb-2 text-sm" htmlFor="password">
            New Password
          </label>
          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={(e) => setSettings({ ...settings, password: e.target.value })}
            className="w-full p-3 border rounded"
            placeholder="Enter new password"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={settings.confirmPassword}
            onChange={(e) => setSettings({ ...settings, confirmPassword: e.target.value })}
            className="w-full p-3 border rounded"
            placeholder="Confirm new password"
          />
        </div>

        {/* Profile Image */}
        <div className="mb-4">
          <label className="block mb-2 text-sm" htmlFor="profileImage">
            Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 border rounded"
          />
          {imagePreview && <img src={imagePreview} alt="Profile Preview" className="object-cover w-32 h-32 mt-4 rounded-full" />}
        </div>

        {/* Preferred Communication */}
        <div className="mb-4">
          <label className="block mb-2 text-sm" htmlFor="preferredCommunication">
            Preferred Communication Method
          </label>
          <select
            name="preferredCommunication"
            value={settings.preferredCommunication}
            onChange={handleSelectChange}
            className="w-full p-3 border rounded"
          >
            <option value="email">Email</option>
            <option value="phone">Contact</option>
        </select>
        </div>

                {/* Job Alert Preferences */}
                <div className="mb-4">
          <label className="block mb-2 text-sm" htmlFor="receiveJobAlerts">
            Receive Job Alerts
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="receiveJobAlerts"
              checked={settings.jobAlertPreferences.receiveJobAlerts}
              onChange={(e) =>
                handleJobAlertChange({
                  ...e,
                  target: { name: "receiveJobAlerts", value: e.target.checked },
                })
              }
              className="mr-2"
            />
            <span>Yes, I want to receive job alerts</span>
          </div>
        </div>

        {/* Preferred Job Alert Type */}
        {settings.jobAlertPreferences.receiveJobAlerts && (
          <div className="mb-4">
            <label className="block mb-2 text-sm" htmlFor="preferredAlertType">
              Preferred Job Alert Type
            </label>
            <select
              name="preferredAlertType"
              value={settings.jobAlertPreferences.preferredAlertType}
              onChange={handleJobAlertChange}
              className="w-full p-3 border rounded"
            >
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="app">App Notification</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

