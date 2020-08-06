import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";
import Spinner from "react-bootstrap/Spinner";

const AUTHCallback = () => {
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/feed" });
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div>
      <div className="row bg-dark">
        <br />
        <br />
        <br />
        <br />
        <div className="col d-flex justify-content-center align-items-center text-light">
          <h1>You&apos;re being redirected...</h1>
        </div>
      </div>
      <div className="row bg-dark">
        <div className="col d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default AUTHCallback;
