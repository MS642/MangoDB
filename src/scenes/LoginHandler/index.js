import { useHistory } from "react-router-dom";
import * as React from "react";
import { checkUserLoggedIn } from "services/CheckUserLoggedIn";
import SignupModal from "components/SignupModal";

const LoginHandler = (props) => {
  const { setIsGuest, signModal } = props;
  const history = useHistory();
  console.log("=======");

  // history.push("/");
  // setIsGuest(false);
  // TODO: login modal
  signModal();

  return null;
};

export default LoginHandler;
