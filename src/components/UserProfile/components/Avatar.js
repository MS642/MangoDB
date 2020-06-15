import * as React from "react";
import "../../../App.css";
import "../../../App.scss";
import "../UserProfile.scss";
import "../UserProfile.css";


class Avatar extends React.Component {

    state = {
        userAvatar: "https://i.imgur.com/18KrOIv.jpg"
    };

    render() {
        return (
            <div>
                <img id={"userAvatar"} src={this.state.userAvatar} width={"200px"} height={"200px"} alt=""/>
            </div>
        );
    }
}

export default Avatar;