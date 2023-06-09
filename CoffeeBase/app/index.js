import News from "../components/News/News";
import Welcome from "../components/Welcome/Welcome";
import { View, Text } from "react-native";
import Drawer from "../components/Drawer/Drawer";
import MarketOverview from "../components/MarketOverview/MarketOverview";
import Tokens from "../components/Tokens/Tokens";
import CreateUser from "../components/CreateUser/CreateUser";
import { store } from "../store/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <Drawer>
        <View>
          <Welcome />
          <News />
          <CreateUser />
          <Tokens />
          <MarketOverview />
        </View>
      </Drawer>
    </Provider>
  );
};

export default Home;
