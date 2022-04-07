import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { usingAuth } from "../context/auth";

export default function Check() {
  let { isLoggedIn } = usingAuth();

  if (isLoggedIn.isAuthTrue) {
    return <Outlet />;
  } else {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
}
