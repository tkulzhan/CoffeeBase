import News from "../components/News/News";
import Welcome from "../components/Welcome/Welcome";
import { View } from "react-native";
import Drawer from "../components/Drawer/Drawer";
import MarketOverview from "../components/MarketOverview/MarketOverview";
import Tokens from "../components/Tokens/Tokens";
import CreateUser from "../components/CreateUser/CreateUser";

const Home = () => {
  return (
    <Drawer>
      <View>
        <Welcome />
        <News />
        <CreateUser />
        <Tokens />
        <MarketOverview />
      </View>
    </Drawer>
  );
};

export default Home;
