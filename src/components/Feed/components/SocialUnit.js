import * as React from "react";
import { connect } from "react-redux";
import { Button, OverlayTrigger, Popover} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addClap } from "../../../actions";

class SocialUnit extends React.Component {
  handleClap = (msgID) => {
    this.props.addClap(msgID);
  };


  render() {
    const { msgID, name, clapNum, mangoNum, userID } = this.props;
    return (
      <div className="container align-items-center SocialUnit">
        <div className="row">
          <div className="col-1 socialClap">
            <button
              className="clapButton"
              onClick={() => this.handleClap(msgID)}
            >
              <img
                className="clapButtonImg"
                src="https://i.imgur.com/tToSF7j.png"
                width="25px"
                height="25px"
                alt=""
              />
              {clapNum}
            </button>
          </div>
          <div className="col-11 justify-content-start socialMango">
            <span>
              <img
                className="mangoSocialImg"
                src="potato_mango.png"
                width="30px"
                height="30px"
                alt=""
              />
              <strong>{mangoNum}</strong>
               <OverlayTrigger
                   trigger="click"
                   key={"right"}
                   placement={"right"}
                   overlay={
                     <Popover id={`popover-positioned-right`}>
                       <Popover.Title as="h3">
                           <div className={"row"}>
                               <div className={"col-9"}>
                                   Encourage <strong>{name}</strong> with Mangos!
                               </div>
                               <div className={"col-3"}>
                                   <img src="./potato_mango.png" width={"40px"} height={"40px"} alt=""/>
                               </div>
                           </div>
                       </Popover.Title>
                       <Popover.Content>
                           <form action="">
                               <div className={"row"}>
                                   <div className={"col-3"}>

                                   </div>
                                   <div className={"col-7 d-flex justify-content-center"}>
                                       1 Mango
                                   </div>
                               </div>
                               <br/>
                               <div className={"row"}>
                                   <div className={"col-3"}>

                                   </div>
                                   <div className={"col-7 d-flex justify-content-center"}>
                                       5 Mangos
                                   </div>
                               </div>
                               <br/>
                               <div className={"row"}>
                                   <div className={"col-3"}>

                                   </div>
                                   <div className={"col-7 d-flex justify-content-center"}>
                                       10 Mangos
                                   </div>
                               </div>
                               <br/>
                               <hr/>
                               <div className={"row"}>
                                   <div className={"col d-flex justify-content-center"}>
                                       <Button>Give!</Button>
                                   </div>
                               </div>
                           </form>
                       </Popover.Content>
                     </Popover>
                   }
               >
                <Button variant="secondary" className="addMangoButton">
                <FontAwesomeIcon icon={faPlus} size={"sm"} />
              </Button>
               </OverlayTrigger>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return { feedTasks: state.feed.feedTasks };
};

export default connect(mapStateToProps, { addClap })(SocialUnit);
