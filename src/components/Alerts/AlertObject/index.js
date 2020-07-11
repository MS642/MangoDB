import Alert from "react-bootstrap/Alert";
import * as React from "react";

class AlertObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onClose = (id) => {
    const { callback } = this.props;

    this.setState({
      show: false,
    });
    callback(id);
  };

  render() {
    const { alert } = this.props;
    const { show } = this.state;

    return (
      <div className="alert-object">
        <Alert
          variant={alert.variant}
          show={show} // this.props.alerts.some(a => a.id === alert.id)
          onClose={() => this.onClose(alert.id)}
          dismissible
        >
          {alert.content}
        </Alert>
      </div>
    );
  }
}

export default AlertObject;
