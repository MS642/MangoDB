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

/* This file was adapted from the react-easy-crop component
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
      const { imageSrc, croppedAreaPixels } = this.state;
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      this.setState({
        isCropping: false,
      });
      const { currUser, onHide, updateAvatarDB: updateAvatar } = this.props;
      updateAvatar({
        userID: currUser,
        image: croppedImage,
      });

      onHide();
    } catch (e) {
      console.error(e);
      this.setState({
        isCropping: false,
      });
    }
  };

  onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await this.readFile(file);

      this.setState({
        imageSrc: imageDataUrl,
        crop: { x: 0, y: 0 },
        zoom: 1,
        aspect: 1,
      });
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
    const { isCropping, zoom, aspect, crop, imageSrc } = this.state;
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
              <div className="col" style={{ height: "360px" }}>
                <input
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
    currUser: state.user.currentUserID,
  };
};

export default connect(mapStateToProps, { updateAvatarDB })(PhotoModal);
