import * as React from "react";
import { connect } from "react-redux";

import { Button, Popover } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { addMangoToTask } from "actions/feedActions";
import { LOGO_URL } from "assets/assets";

class MangoPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mangoNum: 1,
      mangoGiven: false,
    };
  }

  handleMangoChange = (e, val) => {
    this.setState({
      mangoNum: val,
    });
  };

  handleSubmitMango = (e) => {
    e.preventDefault();
    const { mangoGiven, mangoNum } = this.state;
    const { taskID, currUser, addMangoToTask: addMango } = this.props;
    if (!mangoGiven) {
      this.setState({ mangoGiven: true });
      const info = {
        task_id: taskID,
        numMango: Number(mangoNum),
        donor: currUser,
      };
      addMango(info);
      document.body.click();
    } else {
      console.error("You've already given this task mangos!");
    }
  };

  render() {
    const { userName } = this.props;
    return (
      <div>
        <Popover.Title as="h3">
          <div className="row">
            <div className="col-9">
              Encourage <strong>{userName}</strong> with Mangos!
            </div>
            <div className="col-3">
              <img
                className="popMango"
                src={LOGO_URL}
                width="40px"
                height="40px"
                alt=""
              />
            </div>
          </div>
        </Popover.Title>
        <Popover.Content>
          <form>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col d-flex justify-content-center align-content-center">
                    <Typography id="discrete-slider" gutterBottom>
                      # of Mangos
                    </Typography>
                  </div>
                </div>
                <Slider
                  style={{ color: "#FCA311" }}
                  defaultValue={1}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                  onChangeCommitted={this.handleMangoChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-content-center">
                <Button
                  className="giveMangoButton"
                  onClick={this.handleSubmitMango}
                >
                  Give!
                </Button>
              </div>
            </div>
          </form>
        </Popover.Content>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return { currUser: state.currentUserID };
};

export default connect(mapStateToProps, { addMangoToTask })(MangoPopup);
