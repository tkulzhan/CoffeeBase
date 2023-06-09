import { storeLang, getLang } from "../../localStorage/LocalStorage";
import { useEffect } from "react";
import "../../locales/index";
import i18n from "i18next";
import { View, Text, TouchableOpacity } from "react-native";

function ChooseLang() {
  useEffect(() => {
    async function fetchLanguage() {
      const language = await getLang();
      if (language) {
        i18n.changeLanguage(language);
      }
    }
    fetchLanguage();
  }, []);

  const changeLanguage = async (lang) => {
    await storeLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={{ marginLeft: "12%" }}>
      <Text style={{ color: "white", fontSize: 22, textAlign: "left" }}>
        Choose language:
      </Text>
      <Text
        onPress={() => {
          changeLanguage("en");
        }}
        style={{ color: "white", textAlign: "left", fontSize: 16 }}
      >
        English
      </Text>
      <Text
        onPress={() => {
          changeLanguage("ru");
        }}
        style={{ color: "white", textAlign: "left", fontSize: 16 }}
      >
        Русский
      </Text>
      <Text
        onPress={() => {
          changeLanguage("kz");
        }}
        style={{ color: "white", textAlign: "left", fontSize: 16 }}
      >
        Қазақ
      </Text>
    </View>
  );
}

export default ChooseLang;
