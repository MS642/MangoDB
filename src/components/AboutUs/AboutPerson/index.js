import React from "react";
import Button from "react-bootstrap/Button";
import "./aboutPerson.css";

const AboutPerson = (props) => {
  const { avatar, name, desc, linkedInUrl } = props;

  return (
    <div className="col-lg-3 col-sm-12 justify-content-center align-content-center">
      <div className="row">
        <div className="col-3 col-sm-3 col-lg-12">
          <img
            src={avatar}
            width="60px"
            height="60px"
            className="user-avatar"
            alt=""
          />
          {/* <div className="row justify-content-center about-person-entry"> */}
          {/*  */}
          {/* </div> */}
        </div>
        <div className="col-3 col-sm-3 col-lg-12">
          {name}
          {/* <div className="row justify-content-center about-person-entry"> */}
          {/*  */}
          {/* </div> */}
        </div>
        <div className="col-3 col-sm-3 col-lg-12">
          {desc}
          {/* <div className="row justify-content-center about-person-entry"> */}
          {/*  {desc} */}
          {/* </div> */}
        </div>
        <div className="col-3 col-sm-3 col-lg-12">
          <Button onClick={() => window.open(linkedInUrl, "_blank")}>
            More Info
          </Button>
          {/* <div className="row justify-content-center about-person-entry"> */}
          {/*  <Button onClick={() => window.open(linkedInUrl, "_blank")}> */}
          {/*    More Info */}
          {/*  </Button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPerson;
