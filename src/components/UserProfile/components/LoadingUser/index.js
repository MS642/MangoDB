import Spinner from "react-bootstrap/Spinner";
import React from "react";

const LoadingUser = () => {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="secondary" />
      </div>
    </div>
  );
};

export default LoadingUser;
