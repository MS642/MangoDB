import * as React from "react";
import PhotoCameraTwoToneIcon from "@material-ui/icons/PhotoCameraTwoTone";
import { IconButton } from "@material-ui/core";
import "../../UserProfile.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import PhotoModal from "./components/PhotoModal";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  setModalShow = (bool) => {
    this.setState({
      modalShow: bool,
    });
  };

  render() {
    const { profileImage } = this.props;
    const { modalShow } = this.state;
    return (
      <div className="bg-light" id="avatarBox">
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <img
              id="userAvatar"
              src={profileImage}
              width="180px"
              height="180px"
              alt=""
            />
          </div>
          <div className="col-1" />
        </div>
        <div className="row">
          <div className="col-8" />
          <div className="col-4 d-flex align-content-end align-content-end">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">Click to change your Avatar</Tooltip>
              }
            >
              <IconButton id="changePhotoButton">
                <PhotoCameraTwoToneIcon
                  id="changePhotoIcon"
                  onClick={() => this.setModalShow(true)}
                />{" "}
              </IconButton>
            </OverlayTrigger>
          </div>
        </div>
        <PhotoModal show={modalShow} onHide={() => this.setModalShow(false)} />
        <div className="row">
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default Avatar;
