import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./profile.style";

import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import profile from "../../assets/img/user.png";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import "../../locales/index";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, SetError] = useState("");
  const user = useSelector((state) => state.user.value);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/client/api/${user.id}`
      );
      const userData = await response.json();
      setName(userData[0].name);
      setEmail(userData[0].email);
      setBio(userData[0].bio);
      setLoading(false);
      SetError("");
    } catch (error) {
      SetError("fetch");
    }
  };

  const updateUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3001/client/api/updateClient/${user.id}`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            bio,
          }),
        }
      );
      if (response.ok) {
        fetchUserData();
        SetError("");
        setLoading(false);
      } else {
        setLoading(false);
        SetError("update");
      }
    } catch (error) {
      setLoading(false);
      SetError("update");
    }
  };

  const onRetryFetch = () => {
    SetError("");
    fetchUserData();
  };

  const onRetryUpdate = () => {
    SetError("");
    updateUserData();
  };
  if (user.id === "") {
    router.push("/login");
  }
  if (loading) {
    return (
      <View
        style={{
          top: 200,
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if (error === "fetch") {
    return (
      <ErrorMessage
        m={`${t("oops")}\n${t("fd")}`}
        onRetry={onRetryFetch}
      />
    );
  }
  if (error === "update") {
    return (
      <ErrorMessage
        m={`${t("oops")}\n${t("ud")}`}
        onRetry={onRetryUpdate}
      />
    );
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={profile} style={styles.profile} />
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.inputWrapperStyles}>
          <TextInput
            style={styles.inputStyles}
            value={name}
            onChangeText={setName}
            placeholder={t("unm")}
          />
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.inputWrapperStyles}>
          <TextInput
            style={styles.inputStyles}
            value={email}
            onChangeText={setEmail}
            placeholder={t("email")}
          />
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.textAreaWrapperStyles}>
          <TextInput
            style={styles.textAreaStyles}
            value={bio}
            onChangeText={setBio}
            placeholder={t("bio")}
            multiline={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btnStyles} onPress={updateUserData}>
        <Text style={styles.btnText}>{t("updp")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
