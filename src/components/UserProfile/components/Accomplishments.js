import * as React from "react";
import "../../../App.css";
import "../../../App.scss";
import "../UserProfile.css";
import Carousel from "react-bootstrap/Carousel";

class Accomplishments extends React.Component {
  state = {
    acc: {
      mangos: 35,
    },
  };

  render() {
    const {mangosRec, clapsRec, tasksComp} = this.props;
    return (
      <div style={{ border: "3px solid black", borderRadius: "6px" }}>
        <Carousel interval={3000} controls={false} fade={true}>

          <Carousel.Item>
            <div className={"bg-secondary"} style={{ width: "100%", height: "200px"}}>
              <div className={"row"}>
                <div className={"col-4 d-flex justify-content-center align-items-center"}>
                  <img className={"mangoImg"} width={"200px"} height={"200px"} src="potato_mango.png" alt=""/>
                </div>
                <div className={"col-8 d-flex justify-content-start align-items-center"}>
                    <h2 className={"mangoAward"}>You were awarded {mangosRec} mangos for taking initiative!</h2>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"bg-secondary"} style={{ width: "100%", height: "200px"}}>
              <div className={"row"}>
                <div className={"col-4 d-flex justify-content-center align-items-center"}>
                  <img width={"200px"} height={"200px"} src="clap.png" alt=""/>
                </div>
                <div className={"col-8 d-flex justify-content-start align-items-center"}>
                  <h2 className={"mangoAward"}>You were applauded with {clapsRec} claps for a job well done!</h2>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"bg-secondary"} style={{ width: "100%", height: "200px"}}>
              <div className={"row"}>
                <div className={"col-4 d-flex justify-content-center align-items-center"}>
                  <img className={"taskImg"} width={"200px"} height={"200px"} src="task_icon.png" alt=""/>
                </div>
                <div className={"col-8 d-flex justify-content-start align-items-center"}>
                  <h2 className={"mangoAward"}>You've completed {tasksComp} tasks so far! Wow! Keep up the good work!</h2>
                </div>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}

export default Accomplishments;
