import Drawer from "../components/Drawer/Drawer";
import Profile from "../components/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "../store/store";

const Settings = () => {
  return (
    <Provider store={store}>
      <Drawer>
        <Profile />
      </Drawer>
    </Provider>
  );
};

export default Settings;
