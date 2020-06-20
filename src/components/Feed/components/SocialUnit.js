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
import { addClap, addMango } from "../../../actions";
import MangoPopup from "./MangoPopup";

class SocialUnit extends React.Component {

  handleClap = (msgID) => {
    this.props.addClap(msgID);
  };


  render() {
    const { taskID, name, clapNum, mangoNum } = this.props;
    return (
      <div className="container align-items-center SocialUnit">
        <div className="row">
          <div className="col-1 socialClap">
            <button
              className="clapButton"
              onClick={() => this.handleClap(taskID)}
            >
              <img
                className="clapButtonImg"
                src="https://i.imgur.com/tToSF7j.png"
                width="25px"
                height="25px"
                alt=""
              />
              {clapNum}
            </button>
          </div>
          <div className="col-11 justify-content-start socialMango">
            <span>
              <img
                className="mangoSocialImg"
                src="potato_mango.png"
                width="30px"
                height="30px"
                alt=""
              />
              <strong>{mangoNum}</strong>
              <OverlayTrigger
                trigger="click"
                key="right"
                placement="right"
                rootClose={true}
                overlay={
                  <Popover id="popover-positioned-right">
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

export default connect(mapStateToProps, { addClap, addMango })(SocialUnit);
