import { storeLang, getLang } from "../../localStorage/LocalStorage";
import { useEffect } from "react";
import "../../locales/index";
import i18n from "i18next";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <View
      style={{
        marginHorizontal: "12%",
        marginVertical: 2 + "%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Text style={{ color: "white", fontSize: 22, textAlign: "left" }}>
        {t("cl")}
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
