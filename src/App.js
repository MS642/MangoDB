import React from 'react';
import './App.css';
import './App.scss';
import MainPage from "./scenes/MainPage";

class App extends React.Component {
    render() {
        return(
            <div className={"container"}>
                <MainPage/>
            </div>
        )
    }
}

export default App;
