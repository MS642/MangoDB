import * as React from "react";
import "../../../../UserProfile.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cropper from 'react-easy-crop';



class PhotoModal extends React.Component {

  state = {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 4 / 3,
  };

  onCropChange = crop => {
    this.setState({ crop })
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  };

  onZoomChange = zoom => {
    this.setState({ zoom })
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
              Photo Editor
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={"row"}>
              <div className={"col"} style={{height:"400px"}}>
                <Cropper
                  image={this.state.image}
                  crop={this.state.crop}
                  zoom={this.state.zoom}
                  aspect={this.state.aspect}
                  onCropChange={this.onCropChange}
                  onCropComplete={this.onCropComplete}
                  onZoomChange={this.onZoomChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }


}

export default PhotoModal;
