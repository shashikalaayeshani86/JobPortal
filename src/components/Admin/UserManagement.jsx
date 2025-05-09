import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { fetchUsers, deleteUser } from "../api/userAPI"; // Uncomment and use your real API functions

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        // Replace this with your actual API call
        const fetchedUsers = await fetchUsers(); // Example: await axios.get("/api/users");
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      try {
        await deleteUser(userId); // Replace with real delete function
        setUsers(users.filter((user) => user.id !== userId));
      } catch (error) {
        console.error("Failed to delete user", error);
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-semibold">User Management</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr className="border-b" key={user.id}>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.role}</td>
                <td className={`p-3 ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                  {user.status}
                </td>
                <td className="flex gap-4 p-3">
                  <Link to={`/edit-user/${user.id}`} className="text-blue-600">
                    <FaEdit />
                  </Link>
                  <button onClick={() => handleDelete(user.id)} className="text-red-600">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-3" colSpan="4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
