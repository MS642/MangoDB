import * as React from "react";
import '../Feed.scss';
import '../Feed.css';

class CompletedTask extends React.Component {

    state = {
        compTasks: [
            {user: "Mangostine Coconutbottom", avatarURL: "https://i.ytimg.com/vi/dJmF1UCAkwc/maxresdefault.jpg",
                task: "Making a tinfoil hat to protect myself from 5G.", timestamp: "December 31, 1999 23:59:59"},
            {user: "Tiger Dude", avatarURL: "https://i.cbc.ca/1.4818848.1536687959!/cpImage/httpImage/oklahoma-governor-candidate-charged.jpg",
            task: "Buying pet food for my pet tiger.", timestamp: "March 5, 2020 12:00:00"}
        ]
    };

    render() {
        return (
            <div className={"container CompletedTask"}>
                <div className={"row"}>
                    <div className={"col-2"}>
                        Avatar
                    </div>
                    <div className={"col-8"}>
                        Task
                    </div>
                    <div className={"col-2"}>
                        TimeStamp
                    </div>
                </div>
            </div>
        );
    }
}

export default CompletedTask;