// UserManagement.jsx
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { fetchUsers, deleteUser } from "../api/userAPI"; // assume you have an API utility for this

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };
    getUsers();
  }, []);
  
  const handleDelete = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId)); // Remove user from list after delete
    }
  };

  return (
    <div className="p-6 rounded-lg shadow bg-gradient-to-bl from-teal-200 via-cyan-300 to-blue-400">
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
          {users.map(user => (
            <tr className="border-b" key={user.id}>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3 text-green-600">{user.status}</td>
              <td className="p-3">
                <Link to={`/edit-user/${user.id}`} className="mr-4 text-blue-600">
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
