import * as React from "react";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import { closeAlert } from "actions/alerts";

// Handler that listens to errors. Actions can throw this an error with the info and it shapes
class AlertContainer extends React.Component {
  onCloseAlert = (id) => {
    const { closeAlert: closeAlertProps } = this.props;
    closeAlertProps(id);
  };

  render() {
    const { alerts } = this.props;

    return (
      <div className="alert-container">
        {alerts.map((alert) => (
          <Alert
            variant={alert.variant}
            show={alert.show} // this.props.alerts.some(a => a.id === alert.id)
            onClose={() => this.onCloseAlert(alert.id)}
            dismissible
          >
            {alert.content}
          </Alert>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
  };
};

const mapDispatchToProps = {
  closeAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
