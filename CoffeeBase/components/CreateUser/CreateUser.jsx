import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import user from "../../assets/img/user.png";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const CreateUser = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>
          Before making any orders, please register your account
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.push(`/createUser`);
          }}
        >
          <Text style={styles.headerBtn}>Create user</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={user} style={styles.img} />
      </View>
    </View>
  );
};

export default CreateUser;
