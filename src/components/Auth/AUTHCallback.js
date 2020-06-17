import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";

const AUTHCallback = () => {
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/feed" });
  }, []);

  return(
      <div>
        <h1>Hold on!</h1>
        <h2>You're being redirected to another page</h2>
      </div>
  )
};

export default AUTHCallback;