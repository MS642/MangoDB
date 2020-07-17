import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import AboutPerson from "components/AboutUs/AboutPerson";

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
            DoGether is a task management web app made by four UBC students. Its
            aim is to add a social aspect to task management in order to help
            users motivate users.
            <br />
            <br />
            Using DoGether, you can create Tasks, browse others&apos; Tasks, and
            support each other by giving a currency of &quot;Mangos&quot;. Extra
            motivation comes in the form of achievements, and even a store to
            spend hard-earned Mangos.
            <br />
            <br />
            Ultimately, we want DoGether to be a task management app where
            people can do things, together.
          </p>
          <br />
          <h4>The Team</h4>

          <div className="row">
            <AboutPerson
              avatar="https://i.imgur.com/18KrOIv.jpg"
              name="Ryan Oh"
              desc="4th Year BCS Student"
              linkedInUrl="https://www.linkedin.com/in/rhiknow/"
            />
            <AboutPerson
              avatar="https://i.imgur.com/18KrOIv.jpg"
              name="Ryan Oh"
              desc="4th Year BCS Student"
              linkedInUrl="https://www.linkedin.com/in/rhiknow/"
            />
            <AboutPerson
              avatar="https://i.imgur.com/18KrOIv.jpg"
              name="Ryan Oh"
              desc="4th Year BCS Student"
              linkedInUrl="https://www.linkedin.com/in/rhiknow/"
            />
            <AboutPerson
              avatar="https://i.imgur.com/18KrOIv.jpg"
              name="Ryan Oh"
              desc="4th Year BCS Student"
              linkedInUrl="https://www.linkedin.com/in/rhiknow/"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AboutUsModal;
