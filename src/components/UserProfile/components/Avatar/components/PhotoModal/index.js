import * as React from "react";
import "../../../../UserProfile.css";
import Modal from 'react-bootstrap/Modal';
import Cropper from 'react-easy-crop';
import { Fragment } from 'react';
import './styles.css';
import Slider from '@material-ui/core/Slider';
import getCroppedImg from './CropImage';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import {updateAvatarDB} from "../../../../../../actions/profileActions";


class PhotoModal extends React.Component {

  constructor(props) {
  super(props);
    this.state = {
      imageSrc: null,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 4 / 3,
      croppedAreaPixels: null,
      croppedImage: null,
      isCropping: false,
    };
}


  onCropChange = crop => {
    this.setState({ crop })
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    this.setState({
      croppedAreaPixels,
    })
  };

  onZoomChange = zoom => {
    this.setState({ zoom })
  };

  onClose = async () => {
    try {
      this.setState({
        isCropping: true,
      });
      const croppedImage = await getCroppedImg(
        this.state.imageSrc,
        this.state.croppedAreaPixels
      );
      this.setState({
        croppedImage,
        isCropping: false,
      });

      this.props.updateAvatarDB({userID: this.props.currUser, image: this.state.croppedImage});
      this.setState({
        croppedImage: null,
      });

      this.props.onHide();

    } catch (e) {
      console.error(e);
      this.setState({
        isCropping: false,
      })
    }
  };

  onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await this.readFile(file);


      this.setState({
        imageSrc: imageDataUrl,
        crop: { x: 0, y: 0 },
        zoom: 1,
        aspect: 1,
      })
    }
  };


  readFile = (file) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file)
    })
  };


  render() {
    return(
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <div className={"row"}>
                <div className={"col d-flex justify-content-center align-items-center"}>
                  Photo Editor
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={"row"}>
              <div className={"col"} style={{height:"360px"}}>
                <input type="file" name={"image"} onChange={this.onFileChange} />
                {this.state.imageSrc && (
                  <Fragment >
                    <div className={"row"}>
                      <div className={"col d-flex justify-content-center"}>
                        <div className="crop-container" style={{height:"270px", width:"400px"}}>
                          <Cropper
                            image={this.state.imageSrc}
                            crop={this.state.crop}
                            cropShape="round"
                            zoom={this.state.zoom}
                            aspect={this.state.aspect}
                            onCropChange={this.onCropChange}
                            onCropComplete={this.onCropComplete}
                            onZoomChange={this.onZoomChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="controls">
                      <Slider
                        id={"photoSlider"}
                        value={this.state.zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e, zoom) => this.onZoomChange(zoom)}
                        classes={{ container: 'slider' }}
                      />
                    </div>
                    <div className="button">
                      <Button
                        id={"photoSubmit"}
                        variant="contained"
                        onClick={this.onClose}
                        disabled={this.state.isCropping}
                      >
                        Submit
                      </Button>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    currUser: state.user.currentUserID};
};

export default connect(mapStateToProps, {updateAvatarDB})(PhotoModal);