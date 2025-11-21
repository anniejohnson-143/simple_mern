import React from "react";

export default function Dashboard({ user, logout }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="dash-box">
        <h3>Welcome, {user.name}! 👋</h3>
        <p>You are successfully logged in.</p>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
