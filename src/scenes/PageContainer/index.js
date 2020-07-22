import * as React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { useAuth } from "react-use-auth";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AlertContainer from "components/Alerts/AlertContainer";
import AboutUsModal from "components/AboutUs/AboutUsModal";
import { useState } from "react";
import NavBarProfile from "components/NavBar/components/NavBarProfile";

import HomePage from "../Pages/HomePage";
import FeedPage from "../Pages/FeedPage";
import TaskPage from "../Pages/TaskPage";
import ProfilePage from "../Pages/ProfilePage";
import ErrorPage from "../Pages/ErrorPage";
import NavBarItem from "../../components/NavBar/components/NavBarItem";
import StorePage from "../Pages/StorePage";

import "./pagecontainer.css";
import Footer from "../../components/Footer/Footer";

const LOGO_URL = "potato_mango.png";

const PageContainer = () => {
  const { isAuthenticated, logout } = useAuth();
  const [aboutUsShow, setAboutUsShow] = useState(true);

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
              <NavLink as={Link} to="/tasks">
                <NavBarItem icon="assignment" />
              </NavLink>
              <NavLink as={Link} to="/store">
                <NavBarItem icon="shopping_cart" />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavLink className="nav-profile" as={Link} to="/profile">
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
            <Route exact path="/tasks" component={TaskPage} />
            <Route exact path="/store" component={StorePage} />
            <Route exact path="/profile" component={ProfilePage} />
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

export default PageContainer;
