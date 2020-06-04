import React from 'react';
import './App.css';
import './App.scss';
import MainPage from "./scenes/MainPage";
import TaskPage from "./scenes/TaskPage";

class App extends React.Component {
    render() {
        return (
            <div>
                <MainPage/>
                <TaskPage/>
            </div>
        )
    }
}

export default App;
