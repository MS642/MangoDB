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
            <div className={"bg-light"} id={"avatarBox"}>
                <img id={"userAvatar"} src={this.state.userAvatar} width={"180px"} height={"180px"} alt=""/>
            </div>
        );
    }
}

export default Avatar;