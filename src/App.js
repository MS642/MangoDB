import React, { useState } from "react";
import "./App.scss";

import { Switch, Route, withRouter } from "react-router-dom";
import { AuthProvider, useAuth } from "react-use-auth";
import AUTHCallback from "./components/Auth/AUTHCallback";

import HomePage from "./scenes/Pages/HomePage";
import UserCheck from "./components/Auth/UserCheck";
import PageContainer from "./scenes/PageContainer";

class App extends React.Component {
  render() {
    const { history } = this.props;
    const { push } = history;
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
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  if (isGuest) {
    return <PageContainer />;
  }

  if (isAuthenticated()) {
    if (!loading) {
      return <PageContainer />;
    }
    return (
      <UserCheck
        authUser={user}
        callback={() => setLoading(false)}
        setIsGuest={setIsGuest}
      />
    );
  }
  return <Switchable setIsGuest={setIsGuest} />;
};

const Switchable = (props) => {
  const { setIsGuest } = props;

  return (
    <Switch>
      <Route exact path="/auth0_callback" component={AUTHCallback} />
      <Route path="/" render={() => <HomePage setIsGuest={setIsGuest} />} />
    </Switch>
  );
};

export default withRouter(App);
