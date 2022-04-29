import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "./auth";

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log({ location });

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.login(() => {
      navigate(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default LoginPage;
