import Drawer from "../components/Drawer/Drawer";
import Profile from "../components/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "../store/store";
import ChooseLang from "../components/ChooseLang/ChooseLang";

const Settings = () => {
  return (
    <Provider store={store}>
      <Drawer>
        <Profile />
        <ChooseLang />
      </Drawer>
    </Provider>
  );
};

export default Settings;
