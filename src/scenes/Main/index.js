import * as React from "react";
import {Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import { useAuth } from "react-use-auth";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import FeedPage from "../FeedPage";
import TaskPage from "../TaskPage";
import ProfilePage from "../ProfilePage";
import ErrorPage from "../ErrorPage";
import NavBarItem from "../../components/NavBar/components/NavBarItem";
import AboutPage from "../AboutPage";

import './main.css';

const LOGO_URL = "potato_mango.png";
const HOME_ICON_URL = "home_icon.svg";
const TASK_ICON_URL = "task_icon.png";
const PROFILE_ICON_URL = "profile_icon.png";

const Main = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated()) {
    return <ErrorPage />;
  }

  return (
    <Router>
      <Navbar collapseOnSelect>
        <Navbar.Brand as={Link} to="/">
          <img className="navbar-image brandImg" src={LOGO_URL} alt="" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavLink as={Link} to="/feed">
              <NavBarItem img={HOME_ICON_URL} />
            </NavLink>
            <NavLink as={Link} to="/tasks">
              <NavBarItem img={TASK_ICON_URL} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLink className="nav-profile" as={Link} to="/profile">
          <div className="ml-auto">
            <NavBarItem img={PROFILE_ICON_URL} />
          </div>
        </NavLink>
        <NavDropdown alignRight title="" id="basic-nav-dropdown">
          <NavDropdown.Item href="/about">
            <NavLink id="nav-about" as={Link} to="/about">
              About Us
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Navbar>

      <div className="bg-dark">
        <Switch>
          <Route exact path="/feed" component={FeedPage} />
          <Route exact path="/tasks" component={TaskPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/" component={HomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
