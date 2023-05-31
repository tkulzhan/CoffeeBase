import Drawer from "../../components/Drawer/Drawer";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import LoginForm from "../../components/Form/LoginForm";

const Login = () => {
  return (
    <Provider store={store}>
      <Drawer>
        <LoginForm />
      </Drawer>
    </Provider>
  );
};

export default Login;
