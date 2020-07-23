import React from "react";
import Button from "react-bootstrap/Button";
import "./aboutPerson.css";

const AboutPerson = (props) => {
  const { avatar, name, desc, linkedInUrl } = props;

  return (
    <div className="col-3 justify-content-center align-content-center">
      <div className="row justify-content-center about-person-entry">
        <img
          src={avatar}
          width="60px"
          height="60px"
          className="user-avatar"
          alt=""
        />
      </div>
      <div className="row justify-content-center about-person-entry">
        {name}
      </div>
      <div className="row justify-content-center about-person-entry">
        {desc}
      </div>
      <div className="row justify-content-center about-person-entry">
        <Button onClick={() => window.open(linkedInUrl, "_blank")}>
          More Info
        </Button>
      </div>
    </div>
  );
};

export default AboutPerson;
