import { storeTheme, getTheme } from "../../localStorage/LocalStorage";
import { useEffect } from "react";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { getLang } from "../../localStorage/LocalStorage";
import { View, Text, TouchableOpacity } from "react-native";

function ChooseTheme({changeTheme}) {
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchTheme() {
      const theme = await getTheme();
      if (theme) {
        console.log(theme);
      }
    }
    async function fetchLanguage() {
      const language = await getLang();
      if (language) {
        i18n.changeLanguage(language);
      }
    }
    fetchLanguage();
    fetchTheme();
  }, []);

  return (
    <View style={{ marginHorizontal: "12%", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Text style={{ color: "white", fontSize: 22, textAlign: "left" }}>
        Choose theme:
      </Text>
      <Text
        onPress={() => {
          changeTheme("default");
        }}
        style={{ color: "white", textAlign: "left", fontSize: 16 }}
      >
        Default
      </Text>
      <Text
        onPress={() => {
          changeTheme("light");
        }}
        style={{ color: "white", textAlign: "left", fontSize: 16 }}
      >
        Light
      </Text>
      <Text
        onPress={() => {
          changeTheme("dark");
        }}
        style={{ color: "white", textAlign: "left", fontSize: 16 }}
      >
        Dark
      </Text>
    </View>
  );
}

export default ChooseTheme;
