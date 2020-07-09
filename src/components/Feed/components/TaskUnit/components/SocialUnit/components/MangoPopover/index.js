import * as React from "react";
import { connect } from "react-redux";
import { addMangoToTask } from "../../../../../../../../actions/feedActions";

import {
  Button,
  Popover
} from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


class MangoPopup extends React.Component {

  state = {
    mangoNum: 1,
    mangoGiven: false
  };

  handleMangoChange = (e) => {
    this.setState({
      mangoNum: e.target.ariaValueNow,
    });
  };

  handleSubmitMango = (e) => {
    //e.preventDefault();
    if (!this.state.mangoGiven) {
      this.setState({ mangoGiven: true });
      const { taskID, taskUserID, currUser } = this.props;
      const info = { task_id: taskID, user_id: taskUserID, numMango: Number(this.state.mangoNum), donor: currUser };
      this.props.addMangoToTask(info);
      document.body.click();
    } else {
      alert("You've already given this task mangos!");
    }
  };

  render() {
    const { userName } = this.props;
    return(
      <div>
        <Popover.Title as="h3">
          <div className="row">
            <div className="col-9">
              Encourage <strong>{userName}</strong> with Mangos!
            </div>
            <div className="col-3">
              <img
                className="popMango"
                src="./potato_mango.png"
                width="40px"
                height="40px"
                alt=""
              />
            </div>
          </div>
        </Popover.Title>
        <Popover.Content>
          <form>
            <div className={"row"}>
              <div className={"col"}>
                <div className={"row"}>
                  <div className={"col d-flex justify-content-center align-content-center"}>
                    <Typography id="discrete-slider" gutterBottom>
                      # of Mangos
                    </Typography>
                  </div>
                </div>
                <Slider
                  style={{color: "#FCA311"}}
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
            {/*<Form.Group controlId="mangoNum">
              <Form.Label>Number of Mangos</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleMangoChange}
              >
                <option disabled>#</option>
                <option value={1}>1</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </Form.Control>
            </Form.Group>*/}
            <div className={"row"}>
              <div className={"col d-flex justify-content-center align-content-center"}>
                <Button onClick={this.handleSubmitMango}>Give!</Button>
              </div>
            </div>
          </form>
        </Popover.Content>
      </div>
    )
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return { currUser: state.user.currentUserID };
};

export default connect(mapStateToProps, { addMangoToTask })(MangoPopup);