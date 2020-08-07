import * as React from "react";
import { connect } from "react-redux";
import { deleteAlert } from "actions/alerts";
import AlertObject from "components/Alerts/AlertObject";

import "../alerts.css";

// Handler that listens to errors. Actions can throw this an error with the info and it shapes
class AlertContainer extends React.Component {
  onCloseAlert = (id) => {
    const { deleteAlert: deleteAlertProps } = this.props;

    setTimeout(() => {
      deleteAlertProps(id);
    }, 2000);
  };

  render() {
    const { alerts } = this.props;

    const alertComponents = alerts.map((alert) => (
      <AlertObject
        key={alert.id}
        alert={alert}
        onCloseCallback={this.onCloseAlert}
      />
    ));

    return (
      <div className="sticky-container bg-dark">
        <div className="alert-container container">{alertComponents}</div>
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
  deleteAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
