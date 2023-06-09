import Drawer from "../components/Drawer/Drawer";
import Profile from "../components/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "../store/store";
import ChooseTheme from "../components/ChooseTheme/ChooseTheme";
import ChooseLang from "../components/ChooseLang/ChooseLang";

const Settings = () => {
  return (
    <Provider store={store}>
      <Drawer>
        <Profile />
        <ChooseLang />
        <ChooseTheme />
      </Drawer>
    </Provider>
  );
};

export default Settings;
