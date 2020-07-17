import React from "react";
import Button from "react-bootstrap/Button";
import "./aboutPerson.css";

const AboutPerson = (props) => {
  const { avatar, name, desc, linkedInUrl } = props;

  return (
    <div className="col-3 justify-content-center align-content-center">
      <div className="row justify-content-center">
        <img
          src={avatar}
          width="60px"
          height="60px"
          className="userAvatar"
          alt=""
        />
      </div>
      <div className="row justify-content-center">{name}</div>
      <div className="row justify-content-center">{desc}</div>
      <div className="row justify-content-center">
        <Button onClick={() => window.open(linkedInUrl, "_blank")}>
          LinkedIn
        </Button>
      </div>
    </div>
  );
};

export default AboutPerson;
