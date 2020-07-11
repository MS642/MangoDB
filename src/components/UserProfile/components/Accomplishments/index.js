import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../UserProfile.css";

class Accomplishments extends React.Component {
  render() {
    const { mangosRec, clapsRec, tasksComp } = this.props;
    return (
      <div id="accompBox">
        <Carousel interval={3000} controls={false} fade>
          <Carousel.Item>
            <div
              className="bg-secondary"
              style={{ width: "100%", height: "200px" }}
            >
              <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img
                    className="mangoImg"
                    width="200px"
                    height="200px"
                    src="potato_mango.png"
                    alt=""
                  />
                </div>
                <div className="col-8 d-flex justify-content-start align-items-center">
                  <h2 className="mangoAward">
                    You were awarded {mangosRec} mangos for taking initiative!
                  </h2>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-secondary"
              style={{ width: "100%", height: "200px" }}
            >
              <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img width="200px" height="200px" src="clap.png" alt="" />
                </div>
                <div className="col-8 d-flex justify-content-start align-items-center">
                  <h2 className="mangoAward">
                    You were applauded with {clapsRec} claps for a job well
                    done!
                  </h2>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-secondary"
              style={{ width: "100%", height: "200px" }}
            >
              <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img
                    className="taskImg"
                    width="200px"
                    height="200px"
                    src="task_icon.png"
                    alt=""
                  />
                </div>
                <div className="col-8 d-flex justify-content-start align-items-center">
                  <h2 className="mangoAward">
                    You&apos;ve completed {tasksComp} tasks so far! Wow! Keep up
                    the good work!
                  </h2>
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
