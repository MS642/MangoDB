import * as React from "react";
import '../Feed.scss';
import '../Feed.css';

class CompletedTask extends React.Component {

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