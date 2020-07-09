import * as React from "react";
import PhotoCameraTwoToneIcon from '@material-ui/icons/PhotoCameraTwoTone';
import { IconButton } from '@material-ui/core';
import PhotoModal from "./components/PhotoModal";
import "../../UserProfile.css";

class Avatar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    }
  };


  setModalShow = (bool) => {
    this.setState({
      modalShow: bool
    })
  };

  render() {
    const { profileImage } = this.props;
    return (
      <div className="bg-light" id="avatarBox">
        <div className={"row"}>
          <div className={"col-1"}></div>
          <div className={"col-10"}>
            <img
              id="userAvatar"
              src={profileImage}
              width="180px"
              height="180px"
              alt=""
            />
          </div>
          <div className={"col-1"}></div>
        </div>
        <div className={"row"}>
          <div className={"col-8"}></div>
          <div className={"col-4 d-flex align-content-end align-content-end"}>
            <IconButton id={"changePhotoButton"}><PhotoCameraTwoToneIcon  id={"changePhotoIcon"} onClick={() => this.setModalShow(true)}/> </IconButton>
          </div>
        </div>
        <PhotoModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
        <div className={"row"}>
          <div className={"col"}>

          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
