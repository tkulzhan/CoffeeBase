import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import { useState, useEffect } from "react";
import defaultStyles from "./styles";
import lightStyles from "./lightLoginForm";
import user from "../../assets/img/user.png";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { useRouter } from "expo-router";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import { getTheme } from "../../localStorage/LocalStorage";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
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

  const login = () => {
    fetch("http://localhost:3001/client/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          dispatch(setUser(res));
          router.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={user} />
      <Text style={styles.registerTitle}>{t("lh")}</Text>
      <Text style={{ color: "red", fontSize: 20 }}>{error}</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder={t("email")}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder={t("pwd")}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.btn} onPress={login}>
          <Text style={styles.btnText}>{t("login")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
