import * as React from "react";

class SocialUnit extends React.Component {
    render() {
        return (
            <div className={"container SocialUnit"}>
                <div className={"row"}>
                    <div className={"col-1 socialClap"}>
                        <button className={"clapButton"}><img className={"clapButtonImg"} src={"https://i.imgur.com/tToSF7j.png"}
                                     width={"30px"} height={"30px"} alt={""}/>24</button>
                    </div>
                    <div className={"col-2 socialMango"}>
                        <span><img className={"mangoSocialImg"} src={"https://i.imgur.com/U79Rb8V.png"}
                             width={"40px"} height={"20px"} alt={""}/>
                             <strong>999</strong><button className={"addMangoButton"}><strong>+</strong></button></span>
                    </div>

                </div>

            </div>
        );
    }
}

export default SocialUnit;