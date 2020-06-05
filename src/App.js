import React from 'react';
import './App.css';
import './App.scss';
import './services/main.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBarItem from "./components/NavBar/components/NavBarItem";
import TaskPage from "./scenes/TaskPage";
import ProfilePage from "./scenes/ProfilePage";
import HomePage from "./scenes/HomePage";

const HOME_ICON_URL = "home_icon.svg";
const TASK_ICON_URL = "task_icon.png";
const PROFILE_ICON_URL = "profile_icon.png";

class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="navbar">
                    <Link to={'/'}>
                        <NavBarItem name="Home" img={HOME_ICON_URL}/>
                    </Link>

                    <Link to={'/tasks'}>
                        <NavBarItem name="Tasks" img={TASK_ICON_URL}/>
                    </Link>

                    <div id="right-align">
                        <Link to={'/profile'}>
                            <NavBarItem name="Profile" img={PROFILE_ICON_URL}/>
                        </Link>
                    </div>
                </div>
                <div className="centered-div">
                    <Switch>
                        <Route path="/tasks">
                            <TaskPage />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
