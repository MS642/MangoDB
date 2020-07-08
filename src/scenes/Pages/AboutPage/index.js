import * as React from "react";
import "./aboutus.css";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-us-container">
        <div className="about-us-body">
          <h1 className="text-center">About Us</h1>
          <p>DoGether is a task management web app that aims to connect you</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
