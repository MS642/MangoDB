import * as React from "react";
import '../Feed.scss';
import '../Feed.css';

class CompletedTask extends React.Component {

    state = {
        compTasks: [
            {user: "Mangosteen Coconutbottom", avatarURL: "https://i.ytimg.com/vi/dJmF1UCAkwc/maxresdefault.jpg",
                task: "Making a tinfoil hat to protect myself from 5G.", timestamp: "December 31, 1999 23:59:59", id:0},
            {user: "Tiger Dude", avatarURL: "https://i.cbc.ca/1.4818848.1536687959!/cpImage/httpImage/oklahoma-governor-candidate-charged.jpg",
            task: "Buying pet food for my pet tiger.", timestamp: "March 5, 2020 12:00:00", id:1}
        ]
    };

    render() {
        return (
            <div className={"container CompletedTask"}>
                <div className={"row"}>
                    <div className={"col-1 AvatarCol"}>
                        <img src="https://i.imgur.com/wAy6yQt.jpg" width={"60px"} height={"60px"} className={"userAvatar"} alt={""} />
                    </div>
                    <div className={"col-9 d-flex justify-content-start text-start"}>
                        <span><strong>Mangosteen Coconutbottom </strong> started the task "Making a tinfoil hat to protect myself from 5G cellular towers"!</span>
                    </div>
                    <div className={"col-2 TimestampCol d-flex justify-content-end text-end"}>
                        20 Years Ago
                    </div>
                </div>
            </div>
        );
    }
}

export default CompletedTask;