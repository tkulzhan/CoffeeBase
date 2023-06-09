import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import defaultStyles from "./styles";
import lightStyles from "./lightTheme";
import user from "../../assets/img/user.png";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getTheme } from "../../localStorage/LocalStorage";

const CreateUser = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await getTheme();
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };

    fetchTheme();
  }, []);

  const styles = theme === "default" ? defaultStyles : lightStyles;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>{t("cuh")}</Text>
        <TouchableOpacity
          onPress={() => {
            router.push(`/createUser`);
          }}
        >
          <Text style={styles.headerBtn}>{t("cub")}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={user} style={styles.img} />
      </View>
    </View>
  );
};

export default CreateUser;
