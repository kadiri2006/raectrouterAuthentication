import React, { Children } from "react";
import { Link } from "react-router-dom";

export default function Selection(props) {
  return (
    <div className="selection">
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/protect">ProtectedPage</Link>
      </nav>
      {props.children}
    </div>
  );
}
