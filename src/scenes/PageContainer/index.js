import * as React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { useAuth } from "react-use-auth";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AlertContainer from "components/Alerts/AlertContainer";
import AboutUsModal from "components/AboutUs/AboutUsModal";
import { useState } from "react";
import NavBarProfile from "components/NavBar/components/NavBarProfile";
import NavMangoCount from "components/NavBar/components/NavMangoCount";

import { connect } from "react-redux";
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

const LOGO_URL = `${process.env.PUBLIC_URL}/potato_mango.png`;

const PageContainer = (props) => {
  const { isAuthenticated, logout } = useAuth();
  const [aboutUsShow, setAboutUsShow] = useState(false);
  const { userProfile } = props;
  const profilePageUrl = `/user/${userProfile.profileUrl}`;

  if (!isAuthenticated()) {
    return <ErrorPage />;
  }

  return (
    <Router>
      <div className="page-container">
        <Navbar collapseOnSelect>
          <Navbar.Brand as={Link} to="/">
            <img className="navbar-image brandImg" src={LOGO_URL} alt="" />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <NavLink as={Link} to="/feed">
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
          <NavLink className="nav-mango-count" as={Link} to={profilePageUrl}>
            <div className="ml-auto">
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
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar>

        <AlertContainer />

        <AboutUsModal show={aboutUsShow} onHide={() => setAboutUsShow(false)} />

        <div className="bg-dark">
          <Switch>
            <Route exact path="/feed" component={FeedPage} />
            <Route exact path="/task" component={TaskPage} />
            <Route exact path="/mangoIdleGame" component={MangoIdleGamePage} />
            <Route exact path="/store" component={StorePage} />
            <Route exact path={profilePageUrl} component={ProfilePage} />
            <Route path="/user/" component={ProfilePage} />
            <Route exact path="/" component={HomePage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>

        <div className="fixed-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfileDB,
  };
};

export default connect(mapStateToProps)(PageContainer);
