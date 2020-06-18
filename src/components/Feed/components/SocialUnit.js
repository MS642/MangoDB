import * as React from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup, OverlayTrigger, Popover, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addClap } from "../../../actions";
import { addMango } from "../../../actions";


class SocialUnit extends React.Component {

    state = {
        mangoNum: 0
    };

    handleClap = (msgID) => {
        this.props.addClap(msgID);
    };

    handleMangoChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

  handleSubmitMango = (e) => {
      e.preventDefault();
      const { msgID } = this.props;
      const info = {id: msgID, numMango: this.state.mangoNum };
      this.props.addMango(info);
  };

  render() {
    const { msgID, name, clapNum, mangoNum } = this.props;
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
                                   <img  className={"popMango"} src="./potato_mango.png" width={"40px"} height={"40px"} alt=""/>
                               </div>
                           </div>
                       </Popover.Title>
                       <Popover.Content>
                           <form>
                               <Form.Group controlId="mangoNum">
                                   <Form.Label>Number of Mangos</Form.Label>
                                   <Form.Control as="select" onChange={this.handleMangoChange}>
                                       <option value={1}>1</option>
                                       <option value={5}>5</option>
                                       <option value={10}>10</option>
                                   </Form.Control>
                               </Form.Group>
                               <Button onClick={this.handleSubmitMango}>Give!</Button>
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

export default connect(mapStateToProps, { addClap, addMango })(SocialUnit);
