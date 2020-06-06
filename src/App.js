import React from 'react';
import './App.css';
import './App.scss';
import './services/main.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBarItem from "./components/NavBar/components/NavBarItem";
import TaskPage from "./scenes/TaskPage";
import ProfilePage from "./scenes/ProfilePage";
import HomePage from "./scenes/HomePage";
import {Nav, Navbar, NavItem, NavLink} from "react-bootstrap";
import ErrorPage from "./scenes/ErrorPage";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const HOME_ICON_URL = "home_icon.svg";
const TASK_ICON_URL = "task_icon.png";
const PROFILE_ICON_URL = "profile_icon.png";

class App extends React.Component {
    render() {
        return(
            <Router>
                <Navbar fluid collapseOnSelect>
                    <Navbar.Brand as={Link} to={'/'}>
                        <img className="navbar-image" src={HOME_ICON_URL} />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
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
                <div>
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

{/*<Router>*/}
{/*    <Navbar>*/}
{/*        <Navbar.Brand as={Link} to={'/'}>*/}
{/*            <NavBarItem name="Home" img={HOME_ICON_URL}/>*/}
{/*        </Navbar.Brand>*/}

{/*        <Nav.Link href='/tasks'>*/}
{/*            test*/}
{/*        </Nav.Link>*/}
{/*        <div id="right-align">*/}
{/*            <Navbar.Brand as={Link} to={'/profile'}>*/}
{/*                <NavBarItem name="Profile" img={PROFILE_ICON_URL}/>*/}
{/*            </Navbar.Brand>*/}
{/*        </div>*/}
{/*    </Navbar>*/}
{/*    <div className="centered-div">*/}
{/*        <Switch>*/}
{/*            <Route path="/tasks">*/}
{/*                <TaskPage />*/}
{/*            </Route>*/}
{/*            <Route path="/profile">*/}
{/*                <ProfilePage />*/}
{/*            </Route>*/}
{/*            <Route exact path="/">*/}
{/*                <HomePage />*/}
{/*            </Route>*/}
{/*            <Route>*/}
{/*                <ErrorPage />*/}
{/*            </Route>*/}
{/*        </Switch>*/}
{/*    </div>*/}
{/*</Router>*/}

export default App;
