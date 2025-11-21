import React, { useEffect, useState } from "react";

export default function UserList() {
  const [user, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/ann/user");
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/ann/user/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {user.map((r) => (
        <div key={r._id} className="user-box">
          <p>
            <strong>{r.name}</strong> — {r.email}
          </p>
          <button onClick={() => deleteUser(r._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
