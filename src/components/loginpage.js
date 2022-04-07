import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { usingAuth } from "../context/auth";

export default function LoginPage() {
  let { setIsLoggedIn, isLoggedIn } = usingAuth();

  let loginFun = (e) => {
    let formdata = new FormData(e.currentTarget);

    setIsLoggedIn({ isAuthTrue: true, name: formdata.get("name") });

    e.preventDefault();
  };

  if (!isLoggedIn.isAuthTrue)
    return (
      <>
        <h3>Login Page</h3>
        <form onSubmit={loginFun}>
          <label htmlFor="name">
            Name :
            <input type="text" name="name" required />
          </label>
          <button type="submit">logged IN</button>
        </form>
      </>
    );
  return <Navigate to="/protect" />;
}
