import * as React from "react";
import "../../App.css";
import "../../App.scss";
import "./UserProfile.scss";
import "./UserProfile.css";

import Footer from "../Footer/Footer";

class UserProfile extends React.Component {

    render() {
        return (
            <div>
                <div className="container TaskFeed bg-dark text-white">
                    <br/>
                    <h1>User Profile Page</h1>
                    <br/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UserProfile;
