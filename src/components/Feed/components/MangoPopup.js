import * as React from "react";
import { connect } from "react-redux";
import { addMango } from "../../../actions";
import {
  Button,
  Popover,
  Form,
  Alert,
} from "react-bootstrap";

class MangoPopup extends React.Component {

  state = {
    mangoNum: 1,
    mangoGiven: false
  };

  handleMangoChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmitMango = (e) => {
    //e.preventDefault();
    if (!this.state.mangoGiven) {
      this.setState({
        mangoGiven: true,
      });
      console.log("current user:", this.props.currUser);
      const { messageID, currUser } = this.props;
      const info = { id: messageID, numMango: this.state.mangoNum, donor: currUser };
      this.props.addMango(info);
    } else {
      alert("You already gave this user mangos!");
      /*return (
        <Alert variant={"danger"}>
          This is a danger alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
          like.
        </Alert>
      )*/
    }
  };

  render() {
    // const { msgID, name, clapNum, mangoNum } = this.props;
    const { userName, messageID } = this.props;
    return(
      <div>
        <Popover.Title as="h3">
          <div className="row">
            <div className="col-9">
              Encourage <strong>{userName}</strong> with Mangos!
            </div>
            <div className="col-3">
              <img
                className="popMango"
                src="./potato_mango.png"
                width="40px"
                height="40px"
                alt=""
              />
            </div>
          </div>
        </Popover.Title>
        <Popover.Content>
          <form>
            <Form.Group controlId="mangoNum">
              <Form.Label>Number of Mangos</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleMangoChange}
              >
                <option disabled>#</option>
                <option value={1}>1</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </Form.Control>
            </Form.Group>
            <Button onClick={this.handleSubmitMango}>Give!</Button>
          </form>
        </Popover.Content>
      </div>
    )
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return { feedTasks: state.feed.feedTasks,
           currUser: state.user.currentUserID};
};

export default connect(mapStateToProps, { addMango })(MangoPopup);