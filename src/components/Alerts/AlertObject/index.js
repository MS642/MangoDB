import Alert from "react-bootstrap/Alert";
import * as React from "react";
import { Fade } from "react-bootstrap";

class AlertObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    const { alert, onCloseCallback } = this.props;
    setTimeout(() => {
      this.setState({
        show: false,
      });

      onCloseCallback(alert.id);
    }, 5000);
  }

  onClose = () => {
    const { alert, onCloseCallback } = this.props;

    this.setState({
      show: false,
    });
    onCloseCallback(alert.id);
  };

  render() {
    const { alert } = this.props;
    const { show } = this.state;

    return (
      <div className="alert-object">
        <Alert
          variant={alert.variant}
          show={show}
          onClose={() => this.onClose()}
          dismissible
          transition={Fade}
        >
          {alert.content}
        </Alert>
      </div>
    );
  }
}

export default AlertObject;
