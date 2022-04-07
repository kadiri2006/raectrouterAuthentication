import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { usingAuth } from "../context/auth";

export default function Check() {
  let { isLoggedIn } = usingAuth();
  let [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setState(true); //here why setState(x=>!x) not worked
    }, 4000);
  }, [isLoggedIn.isAuthTrue]);

  if (isLoggedIn.isAuthTrue) {
    return <Outlet />;
  } else {
    return (
      <>
        <span>
          your can't accessible to this page... shortly you will be redircted
          into login page
        </span>
        {state && <Navigate to="/login" replace />}
      </>
    );
  }
}
