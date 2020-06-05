import * as React from "react";

class CompletedTask extends React.Component {
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