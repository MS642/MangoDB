import * as React from "react";
import { connect } from "react-redux";
import {
  Button,
  ButtonGroup,
  OverlayTrigger,
  Popover,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addClap, addMango, addClapToTask } from "../../../../../../actions/feedActions";
import MangoPopup from "./components/MangoPopover/index";


class SocialUnit extends React.Component {

  state = {
    clapsGiven: false,
    mangoPopShow: false,
    mangoBtnDisabled: false,
  };

  handleClap = (taskID, taskUserID) => {
    const { currUser } = this.props;
    let clapsToGive = -1;
    if (!this.state.clapsGiven) {
      clapsToGive = 1;
    }
    this.setState({
      clapsGiven: !this.state.clapsGiven,
    });
    const info = { task_id: taskID, user_id: taskUserID, value: clapsToGive, donor: currUser};
    this.props.addClapToTask(info);
  };

  handleNumFormat = (num) => {
    let ret = "";
    if (num >= 1000000) {
      ret = Number.parseFloat(num/1000000).toPrecision(2) + "m";
    }  else if (num >= 1000) {
      ret = Number.parseFloat(num/1000).toPrecision(2) + "k";
    } else {
      ret = num;
    }
    return ret;
  };


  render() {
    const { taskID, taskUserID, name, clapNum, mangoNum } = this.props;
    return (
      <div className="container align-items-center SocialUnit">
        <div className="row">
          <div className={"col-xl-7 col-lg-8 col-md-7 col-sm-4 d-flex"}></div>
          <div className={"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-5 d-flex socialClap justify-content-end align-items-center"}>
            <button
              className="clapButton"
              onClick={() => this.handleClap(taskID, taskUserID)}
              style={{backgroundColor: (this.state.clapsGiven)? "#d68b0d": "#FCA311"}}
            >
              <img
                className="clapButtonImg"
                src="https://i.imgur.com/tToSF7j.png"
                width="25px"
                height="25px"
                style={{backgroundColor: (this.state.clapsGiven)? "#d68b0d": "#FCA311"}}
                alt=""
              />
              {this.handleNumFormat(clapNum)}
            </button>
          </div>

          <div className={"col-xl-3 col-lg-2 col-md-3 col-sm-4 col-6 socialMango d-flex justify-content-center align-items-center"}>
            <span>
              <img
                className="mangoSocialImg"
                src="potato_mango.png"
                width="30px"
                height="30px"
                alt=""
              />
              <strong>{this.handleNumFormat(mangoNum)}</strong>
              <OverlayTrigger
                trigger="click"
                key="left"
                placement="left"
                rootClose={true}
                overlay={
                  <Popover id="popover-positioned-left">
                  <MangoPopup userName={name} taskID={taskID} />
                  </Popover>
                }
              >
                <Button variant="secondary" className="addMangoButton">
                  <FontAwesomeIcon icon={faPlus} size="sm" />
                </Button>
              </OverlayTrigger>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return { feedTasks: state.feed.feedTasks,
           currUser: state.user.currentUserID};
};

export default connect(mapStateToProps, { addClap, addMango, addClapToTask })(SocialUnit);
