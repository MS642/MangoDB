import React from "react";
import Button from "react-bootstrap/Button";
import "./aboutPerson.css";

const AboutPerson = (props) => {
  const { avatar, name, desc, linkedInUrl } = props;

  return (
    <div className="col-lg-3 col-sm-12 justify-content-center align-content-center m-2 m-sm-2 m-lg-0 p-0 p-sm-0 p-lg-1">
      <div className="row">
        <div className="col-3 col-sm-3 col-lg-12 justify-content-center text-center mb-2">
          <img
            src={avatar}
            width="60px"
            height="60px"
            className="user-avatar"
            alt=""
          />
        </div>
        <div className="col-3 col-sm-3 col-lg-12 justify-content-center text-center mb-2">
          {name}
        </div>
        <div className="col-3 col-sm-3 col-lg-12 justify-content-center text-center mb-2">
          {desc}
        </div>
        <div className="col-3 col-sm-3 col-lg-12 justify-content-center text-center mb-2">
          <Button
            className="text-center aboutBtn"
            onClick={() => window.open(linkedInUrl, "_blank")}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPerson;
