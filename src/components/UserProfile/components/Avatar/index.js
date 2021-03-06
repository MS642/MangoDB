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
    const { profileImage, visiting } = this.props;
    const { modalShow } = this.state;
    return (
      <div className="bg-light" id="avatarBox">
        <div className="row">
          <div className="col-12 col-sm-5 col-md-11 col-lg-11 col-xl-12 flexAvatarDiv">
            <img id="userAvatarPic" src={profileImage} alt="" />
          </div>
        </div>
        <EditOption
          modalShow={modalShow}
          visiting={visiting}
          setModalShow={(show) => this.setModalShow(show)}
        />
      </div>
    );
  }
}

const EditOption = (props) => {
  const { modalShow, visiting, setModalShow } = props;

  if (visiting) {
    return (
      <div>
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
              <IconButton
                id="changePhotoButton"
                onClick={() => setModalShow(true)}
              >
                <PhotoCameraTwoToneIcon id="changePhotoIcon" />{" "}
              </IconButton>
            </OverlayTrigger>
          </div>
        </div>
        <PhotoModal show={modalShow} onHide={() => setModalShow(false)} />
        <div className="row">
          <div className="col" />
        </div>
      </div>
    );
  }
  return null;
};

export default Avatar;
