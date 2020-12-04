import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const OneUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="currentUser">
        <h2>Loggin in as: {user.name}</h2>
      </div>
    )
  );
};

export default OneUser;