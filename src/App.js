import React from "react";
import "./App.scss";
import "./services/main.css";

import { Switch, Route, withRouter } from "react-router-dom";
import { AuthProvider, useAuth } from "react-use-auth";
import AUTHCallback from "./components/Auth/AUTHCallback";

import HomePage from "./scenes/Pages/HomePage";
import Main from "./scenes/PageContainer";

class App extends React.Component {
  render() {
    const { push } = this.props.history;
    return (
     <AuthProvider
        navigate={push}
        auth0_domain="rhiknow55.us.auth0.com"
        auth0_client_id="5YrnMtALHYWm7kQwg0dKU1AH6P0djLDe"
      >
        <Conditional />
     </AuthProvider>
    );
  }
}

const Conditional = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated()) {
    return <Main />;
  }
  return <Switchable />;
};

const Switchable = () => {
  return (
    <Switch>
      <Route exact path="/auth0_callback" component={AUTHCallback} />
      <Route exact path="/" component={HomePage} />
      <Route component={Main} />
    </Switch>
  );
};

export default withRouter(App);
