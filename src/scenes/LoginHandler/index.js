import { useAuth } from "react-use-auth";

const LoginHandler = (props) => {
  const { login } = useAuth();
  const { setIsGuest } = props;

  setIsGuest(false);
  login();

  return null;
};

export default LoginHandler;
