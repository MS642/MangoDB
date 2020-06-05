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
                    <div className={"col-1"}>
                        <img src="https://i.ytimg.com/vi/dJmF1UCAkwc/maxresdefault.jpg" width={"50px"} height={"50px"} className={"userAvatar"} alt={""} />
                    </div>
                    <div className={"col-9"}>
                        <strong>Mangostine Coconutbottom</strong> started the task "Making a tinfoil hat to protect myself from 5G."!
                    </div>
                    <div className={"col-2"}>
                        20 Years Ago
                    </div>
                </div>
            </div>
        );
    }
}

export default CompletedTask;