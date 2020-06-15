import React from "react";
import "./App.css";
import "./App.scss";
import "./services/main.css";

import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import {AuthProvider, useAuth} from "react-use-auth";
import HomePage from "./scenes/HomePage";
import AUTHCallback from "./components/Auth/AUTHCallback";
import Main from "./scenes/Main";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  render() {
    return (
      <AuthProvider
        navigate={this.props.history.push}
        auth0_domain="rhiknow55.us.auth0.com"
        auth0_client_id="5YrnMtALHYWm7kQwg0dKU1AH6P0djLDe"
      >

        <Test/>

      </AuthProvider>
    );
  }
}

const Test = () => {
  const { isAuthenticated, login, logout } = useAuth();
  console.log(isAuthenticated);

  if (isAuthenticated()) {
    return <Main/>;
  } else {
    return <Switchable/>;
  }
}

const Switchable = () => {
  return (
      <Switch>
        <Route exact path="/auth0_callback" component={AUTHCallback} />
        <Route exact path="/" component={HomePage} />
        <Route component={Main} />
      </Switch>
  )
}

export default withRouter(App);
