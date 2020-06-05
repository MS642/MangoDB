import * as React from "react";
import '../../App.css';
import '../../App.scss';
import NavBar from "../../components/NavBar";
import Feed from "../../components/Feed";

class MainPage extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <NavBar />
                <h3>Main Page</h3>
                <Feed />
            </div>
        );
    }
}

export default MainPage;