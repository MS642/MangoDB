import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";

const AUTHCallback = () => {
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/feed" });
  }, []);

  return (
    <div>
      <h1>You're being redirected...</h1>
    </div>
  );
};

export default AUTHCallback;
