import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";
import Spinner from "react-bootstrap/Spinner";

const AUTHCallback = () => {
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/feed" });
  }, [handleAuthentication]);

  return (
    <div>
      <div className="row">
        <br />
        <br />
        <br />
        <br />
        <div className="col d-flex justify-content-center align-items-center text-light">
          <h1>You're being redirected...</h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default AUTHCallback;
