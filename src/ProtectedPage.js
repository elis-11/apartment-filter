import React from "react";
import { auth } from "./auth";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ x }) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>You are logged in. Welcome to protected page! Value of x is {x}</p>
      <button
        onClick={() => {
          auth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          );
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default ProtectedPage;
