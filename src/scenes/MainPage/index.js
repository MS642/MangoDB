import * as React from "react";
import NavBar from "../../components/NavBar";
import Feed from "../../components/Feed";

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                Main Page
                <Feed />
            </div>
        );
    }
}

export default MainPage;