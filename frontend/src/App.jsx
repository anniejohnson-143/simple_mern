import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import UserList from "./components/UserList";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  const [view, setView] = useState("register"); // register | login | users | dashboard
  const [loggedUser, setLoggedUser] = useState(null);

  const logout = () => {
    setLoggedUser(null);
    setView("login");
  };

  return (
    <div className="app">
      {!loggedUser && (
        <nav>
          <button onClick={() => setView("register")}>Register</button>
          <button onClick={() => setView("login")}>Login</button>
          <button onClick={() => setView("users")}>User List</button>
        </nav>
      )}

      <div className="content">
        {view === "register" && <Register />}
        {view === "login" && (
          <Login
            onLogin={(user) => {
              setLoggedUser(user);
              setView("dashboard");
            }}
          />
        )}
        {view === "users" && <UserList />}
        {view === "dashboard" && (
          <Dashboard user={loggedUser} logout={logout} />
        )}
      </div>
    </div>
  );
}
