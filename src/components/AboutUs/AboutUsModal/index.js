import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import AboutPerson from "components/AboutUs/AboutPerson";
import "../../../App.scss";

class AboutUsModal extends React.Component {
  render() {
    const { show, onHide } = this.props;

    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>DoGether</h4>
          <p>
            <br />
            DoGether is a social task management app developed by four UBC
            students that aims to help users motivate users.
            <br />
            <br />
            Using DoGether, you can create Tasks, browse others&apos; Tasks, and
            support each other with Claps and <b>Mangos</b>!
            <br />
            <br />
            Make sure to check out the Store or Game page to discover some
            special ways to have fun while completing your tasks!
          </p>
          <hr />
          <h4>The Team</h4>
          <br />

          <div className="row">
            <AboutPerson
              avatar="https://media-exp1.licdn.com/dms/image/C5603AQHWoUvxmODSyg/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=ffx86rYBCo6WusfQW5_IJEzg6aAgY-s1gXdB4N2JSkk"
              name="Ryan Oh"
              desc="4th Year BSc"
              linkedInUrl="http://www.rhiknow.me/"
            />
            <AboutPerson
              avatar="https://aamirs.me/bitmoji.png"
              name="Aamir Sheergar"
              desc="4th Year BSc"
              linkedInUrl="https://aamirs.me/"
            />
            <AboutPerson
              avatar="https://media-exp1.licdn.com/dms/image/C5603AQGQGIKUsRpgYA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=jZIDBEejYDKFI06FU8m5m7tazxaeBOH7jiL2qzQ9NMY"
              name="Mohamed Abouzaid"
              desc="4th Year BCS"
              linkedInUrl="https://www.linkedin.com/in/mohamed-salama-abouzaid/"
            />
            <AboutPerson
              avatar="https://media-exp1.licdn.com/dms/image/C5603AQFALaiiAa67SA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=TyD8qYIDtz5wQMlZhHL5VlLgiRSDLavbAqEIKwGOW9A"
              name="Max Ahn"
              desc="4th Year BSc"
              linkedInUrl="https://www.linkedin.com/in/maxahn/"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="general-button-color" onClick={onHide}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AboutUsModal;
