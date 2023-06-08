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
import { useEffect } from "react";
import "../locales/index";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchLanguage() {
      const language = await getData();
      if (language) {
        i18n.changeLanguage(language);
      }
    }
    fetchLanguage();
  }, []);

  const changeLanguage = async (lang) => {
    await storeData(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Provider store={store}>
      <Drawer>
        <View>
          <Welcome />
          <Text style={{ color: "white" }}>{t("dummyNamespace.medium")}</Text>
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
