import * as React from "react";
import "../../../App.css";
import "../../../App.scss";
import "../UserProfile.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

class Accomplishments extends React.Component {
  state = {
    acc: {
      mangos: 35,
    },
  };

  render() {
    return (
      <div style={{ border: "3px solid black", borderRadius: "6px" }}>
        <Carousel interval={1500}>

          <Carousel.Item>
            <div className={"bg-secondary"} style={{ width: "100%", height: "200px"}}>
              <p>this is a div</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
           <div className={"bg-light"} style={{ width: "100%", height: "200px"}}>
             <p>this is a div</p>
           </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"bg-light"} style={{ width: "100%", height: "200px"}}>
              <p>this is a div</p>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}

export default Accomplishments;
