import * as React from "react";
import "../../navbar.css";
import {NavDropdown} from "react-bootstrap";
import {useAuth} from "react-use-auth";

const NavBarDropdown = () => {
    const { logout } = useAuth();

        return (
            <div className="mr-2">
                <NavDropdown alignRight title="" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/about">About</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
            </div>
        );
}

export default NavBarDropdown;
