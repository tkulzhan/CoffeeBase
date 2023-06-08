import News from "../components/News/News";
import Welcome from "../components/Welcome/Welcome";
import { View, Text } from "react-native";
import Drawer from "../components/Drawer/Drawer";
import MarketOverview from "../components/MarketOverview/MarketOverview";
import Tokens from "../components/Tokens/Tokens";
import CreateUser from "../components/CreateUser/CreateUser";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { storeData, getData } from "../localStorage/LocalStorage";
import { useEffect, useState } from "react";

const Home = () => {
  const [d, setD] = useState("");

  useEffect(() => {
    getData().then((res) => {
      setD(res);
    });
  }, []);

  return (
    <Provider store={store}>
      <Drawer>
        <View>
          <Welcome />
          <Text style={{ color: "white" }}>{d}</Text>
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
