import React from 'react';
import './App.css';
import './App.scss';
import './services/main.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBarItem from "./components/NavBar/components/NavBarItem";
import TaskPage from "./scenes/TaskPage";
import ProfilePage from "./scenes/ProfilePage";
import HomePage from "./scenes/HomePage";
import {Nav, Navbar, NavLink} from "react-bootstrap";
import ErrorPage from "./scenes/ErrorPage";

const LOGO_URL = "temp_mango.svg";
const HOME_ICON_URL = "home_icon.svg";
const TASK_ICON_URL = "task_icon.png";
const PROFILE_ICON_URL = "profile_icon.png";

class App extends React.Component {
    render() {
        return(
            <Router>
                <Navbar fluid collapseOnSelect>
                    <Navbar.Brand as={Link} to={'/'}>
                        <img className="navbar-image" src={LOGO_URL} />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavLink as={Link} to="/" >
                                <NavBarItem img={HOME_ICON_URL} />
                            </NavLink>
                            <NavLink as={Link} to="/tasks" >
                                <NavBarItem img={TASK_ICON_URL} />
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink as={Link} to="/profile" >
                        <div className="ml-auto">
                            <NavBarItem img={PROFILE_ICON_URL} />
                        </div>
                    </NavLink>
                </Navbar>
                <div className="container">
                    <Switch>
                        <Route path="/tasks">
                            <TaskPage />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                        </Route>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route>
                            <ErrorPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
