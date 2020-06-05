import * as React from "react";
import NavBarItem from "./components/NavBarItem";
import './navbar.css';

const HOME_ICON_URL = "home_icon.svg";
const TASK_ICON_URL = "task_icon.png";
const PROFILE_ICON_URL = "profile_icon.png";

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <NavBarItem name="Home" img={HOME_ICON_URL}/>
                <NavBarItem name="Tasks" img={TASK_ICON_URL}/>
                <div id="right-align">
                    <NavBarItem name="Profile" img={PROFILE_ICON_URL}/>
                </div>
            </div>
        );
    }
}

export default NavBar;