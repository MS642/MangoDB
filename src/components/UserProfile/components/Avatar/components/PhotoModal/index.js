import * as React from "react";
import "../../../../UserProfile.css";
import Modal from "react-bootstrap/Modal";
import Cropper from "react-easy-crop";
import "./styles.css";
import Slider from "@material-ui/core/Slider";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { updateAvatarDB } from "actions/profileActions";
import getCroppedImg from "./CropImage";

/** This file was adapted from the react-easy-crop component
  README: https://github.com/ricardo-ch/react-easy-crop   */

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: null,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 4 / 3,
      croppedAreaPixels: null,
      isCropping: false,
      fileName: "",
      fileTooLarge: false,
    };
  }

  onCropChange = (crop) => {
    this.setState({ crop });
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    this.setState({
      croppedAreaPixels,
    });
  };

  onZoomChange = (zoom) => {
    this.setState({ zoom });
  };

  onClose = async () => {
    try {
      this.setState({
        isCropping: true,
      });
      const { imageSrc, fileName, croppedAreaPixels } = this.state;
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      croppedImage.lastModifiedDate = new Date();
      croppedImage.name = fileName;
      this.setState({
        isCropping: false,
      });
      const {
        currUser,
        onHide,
        userAvatarKey,
        updateAvatarDB: updateAvatar,
      } = this.props;
      updateAvatar({
        userID: currUser,
        image: croppedImage,
        avatarKey: userAvatarKey,
        fileName,
      });

      onHide();
    } catch (e) {
      console.error(e);
      this.setState({
        isCropping: false,
        imageSrc: null,
      });
    }
  };

  onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileSize = file.size / 1024 / 1024;
      if (fileSize < 1) {
        const imageDataUrl = await this.readFile(file);
        this.setState({
          imageSrc: imageDataUrl,
          crop: { x: 0, y: 0 },
          zoom: 1,
          aspect: 1,
          fileName: file.name,
          fileTooLarge: false,
        });
      } else {
        // reset variables and abort
        this.setState({
          imageSrc: null,
          crop: { x: 0, y: 0 },
          zoom: 1,
          aspect: 4 / 3,
          croppedAreaPixels: null,
          isCropping: false,
          fileName: "",
          fileTooLarge: true,
        });
      }
    }
  };

  readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  render() {
    const {
      isCropping,
      zoom,
      aspect,
      crop,
      imageSrc,
      fileTooLarge,
    } = this.state;
    const { show, onHide } = this.props;
    return (
      <div>
        <Modal
          onHide={onHide}
          size="lg"
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                  Photo Editor
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col" style={{ height: "380px" }}>
                <h6>
                  <strong>Maximum</strong> file size: 1 MB
                </h6>
                {fileTooLarge ? (
                  <h6 className="fileSizeWarning">
                    Selected image is over 1 MB! Please choose another image.
                  </h6>
                ) : null}
                <input
                  style={{ width: "80%" }}
                  type="file"
                  name="image"
                  accept=".png, .jpg, .jpeg, .svg"
                  onChange={this.onFileChange}
                />
                {imageSrc && (
                  <>
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <div
                          className="crop-container"
                          style={{ height: "270px", width: "400px" }}
                        >
                          <Cropper
                            image={imageSrc}
                            crop={crop}
                            cropShape="round"
                            zoom={zoom}
                            aspect={aspect}
                            onCropChange={this.onCropChange}
                            onCropComplete={this.onCropComplete}
                            onZoomChange={this.onZoomChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="controls">
                      <Slider
                        id="photoSlider"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e, zooming) => this.onZoomChange(zooming)}
                        classes={{ container: "slider" }}
                      />
                    </div>
                    <div className="button">
                      <Button
                        id="photoSubmit"
                        variant="contained"
                        onClick={this.onClose}
                        disabled={isCropping}
                      >
                        Submit
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    currUser: state.currentUserID,
    userAvatarKey: state.userProfileDB.avatar_AWS_Key,
  };
};

export default connect(mapStateToProps, { updateAvatarDB })(PhotoModal);
