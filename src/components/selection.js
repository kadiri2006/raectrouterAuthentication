import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../context/auth";

export default function Selection(props) {
  let [isLoggedIn, setIsLoggedIn] = useState({ isAuthTrue: false, name: "" });

  return (
    <div>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/protect">ProtectedPage</Link>
        <span>
          {isLoggedIn.isAuthTrue ? isLoggedIn.name : "user NoLogged In"}
        </span>
      </nav>
      <Auth.Provider value={{ setIsLoggedIn, isLoggedIn }}>
        {props.children}
      </Auth.Provider>
    </div>
  );
}
