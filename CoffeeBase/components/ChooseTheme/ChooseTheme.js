import { storeTheme, getTheme } from "../../localStorage/LocalStorage";
import { useEffect, useState } from "react";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import { View, Text, TouchableOpacity } from "react-native";

function ChooseTheme() {
  const { t } = useTranslation();

  const [theme, setTheme] = useState("default");

  const changeTheme = async (value) => {
    setTheme(value);
    await storeTheme(value);
  };

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await getTheme();
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };

    fetchTheme();
  }, []);

  return (
    <View
      style={{
        marginHorizontal: "12%",
        marginTop: 2 + "%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Text style={{ color: "white", fontSize: 22, textAlign: "left" }}>
        {t("ct")}
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
    </View>
  );
}

export default ChooseTheme;
