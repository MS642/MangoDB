import * as React from "react";
import "../../../App.css";
import "../../../App.scss";
import "../UserProfile.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

class Accomplishments extends React.Component {
  state = {
    acc: {
      mangos: 35,
    },
  };

  render() {
    return (
      <div style={{ border: "2px solid black" }}>
        <Carousel>
          <Carousel.Item>
            <Card style={{ width: "100%", height: "50%" }}>
              <Card.Body className="bg-dark">
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>placeholder</Card.Text>
              </Card.Body>
            </Card>
            <Carousel.Caption>
              <h3>Your Accomplishments</h3>
              <p>Your Special Points</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: "100%" }}>
              <Card.Body className="bg-dark">
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>placeholder</Card.Text>
              </Card.Body>
            </Card>

            <Carousel.Caption>
              <h3>Your Accomplishments</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: "100%" }}>
              <Card.Body className="bg-dark">
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>placeholder</Card.Text>
              </Card.Body>
            </Card>

            <Carousel.Caption>
              <h3>Your Accomplishments</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Accomplishments;
