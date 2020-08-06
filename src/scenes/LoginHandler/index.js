import { useHistory } from "react-router-dom";

const LoginHandler = (props) => {
  const { setIsGuest } = props;
  const history = useHistory();

  history.push("/");
  setIsGuest(false);
  // TODO: login modal

  return null;
};

export default LoginHandler;
