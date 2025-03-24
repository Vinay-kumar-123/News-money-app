import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && <li><p className="user">👤{user.name}</p></li>}
      {isAuthenticated ? (
        <button
          className="btn btn-primary mx-2 function_button"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      ) : (
        <button
          className="btn btn-primary mx-2 function_button"
          onClick={() => loginWithRedirect()}
        >
          Sign up
        </button>
      )}
      
    </>
  );
};

export default LoginButton;
