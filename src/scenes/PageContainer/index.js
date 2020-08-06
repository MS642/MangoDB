import * as React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { useAuth } from "react-use-auth";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { isUserLoggedIn } from "services/CheckUserLoggedIn";

import AlertContainer from "components/Alerts/AlertContainer";
import AboutUsModal from "components/AboutUs/AboutUsModal";
import { useState } from "react";
import NavBarProfile from "components/NavBar/components/NavBarProfile";
import NavMangoCount from "components/NavBar/components/NavMangoCount";
import SignupModal from "components/SignupModal";

import { connect } from "react-redux";
import { LOGO_URL } from "assets/assets";

import HomePage from "../Pages/HomePage";
import FeedPage from "../Pages/FeedPage";
import TaskPage from "../Pages/TaskPage";
import ProfilePage from "../Pages/ProfilePage";
import ErrorPage from "../Pages/ErrorPage";
import NavBarItem from "../../components/NavBar/components/NavBarItem";
import StorePage from "../Pages/StorePage";
import MangoIdleGamePage from "../Pages/MangoIdleGamePage";

import "./pagecontainer.css";
import Footer from "../../components/Footer/Footer";

const PageContainer = (props) => {
  const { logout } = useAuth();
  const [aboutUsShow, setAboutUsShow] = useState(false);
  const { userProfile } = props;
  const [signUpModal, setSignUpModal] = useState(false);
  const profilePageUrl = `/user/${userProfile.profileUrl}`;

  return (
    <Router>
      <div className="page-container bg-dark">
        <Navbar collapseOnSelect>
          <Navbar.Brand as={Link} to="/">
            <img className="brandImg" src={LOGO_URL} alt="" />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <NavLink className="test" as={Link} to="/feed">
                <NavBarItem icon="home" />
              </NavLink>
              <NavLink as={Link} to="/task">
                <NavBarItem icon="assignment" />
              </NavLink>
              <NavLink as={Link} to="/mangoIdleGame">
                <NavBarItem icon="spa" />
              </NavLink>
              <NavLink as={Link} to="/store">
                <NavBarItem icon="shopping_cart" />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavLink className="" as={Link} to={profilePageUrl}>
            <div className="">
              <NavMangoCount />
            </div>
          </NavLink>
          <NavLink className="nav-profile" as={Link} to={profilePageUrl}>
            <div className="ml-auto">
              <NavBarProfile />
            </div>
          </NavLink>
          <NavDropdown alignRight title="" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setAboutUsShow(true)}>
              About Us
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                localStorage.setItem("loggedIn", "false");
                logout();
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>

        <AlertContainer />
        <br />

        <AboutUsModal show={aboutUsShow} onHide={() => setAboutUsShow(false)} />

        <div className="bg-dark">
          {isUserLoggedIn() ? (
            <Switch>
              <Route exact path="/feed" component={FeedPage} />
              <Route exact path="/task" component={TaskPage} />
              <Route
                exact
                path="/mangoIdleGame"
                component={MangoIdleGamePage}
              />
              <Route exact path="/store" component={StorePage} />
              <Route exact path={profilePageUrl} component={ProfilePage} />
              <Route path="/user/" component={ProfilePage} />
              <Route exact path="/" component={HomePage} />
              <Route component={ErrorPage} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/feed" component={FeedPage} />
              <Route
                path="/"
                render={() => <LoginHandler setSignModal={setSignUpModal} />}
              />
              <Route component={ErrorPage} />
            </Switch>
          )}
        </div>
        <div className="fixed-footer bg-dark">
          <Footer />
        </div>
        <SignupModal open={signUpModal} toggle={() => setSignUpModal(false)} />
      </div>
    </Router>
  );
};

const LoginHandler = (props) => {
  const { setSignModal } = props;
  const history = useHistory();

  history.push("/feed");
  setSignModal(true);

  return null;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfileDB,
  };
};

export default connect(mapStateToProps)(PageContainer);
