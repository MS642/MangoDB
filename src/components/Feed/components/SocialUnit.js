import * as React from "react";

class SocialUnit extends React.Component {
    render() {
        return (
            <div className={"container SocialUnit"}>
                <div className={"row"}>
                    <div className={"col-2 socialClap"}>
                        <button className={"clapButton"}><img className={"clapButtonImg"} src={"https://i.imgur.com/tToSF7j.png"}
                                     width={"30px"} height={"30px"} alt={""}/> 24</button>
                    </div>
                    <div className={"col-2 socialMango"}>

                    </div>
                    <div className={"col-1 socialGiveMango"}>

                    </div>
                </div>

            </div>
        );
    }
}

export default SocialUnit;