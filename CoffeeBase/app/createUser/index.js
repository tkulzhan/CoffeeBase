import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

import Back from "../../components/Back/Back";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";

import styles from "./styles";

import user from "../../assets/img/user.png"

const createUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "User Registration",
          headerStyle: {
            backgroundColor: "#1E1E24",
          },
          headerTitleStyle: {
            fontWeight: "medium",
            color: "#fff",
            fontSize: 24,
            fontFamily: "ChkBold",
          },
          headerLeft: () => <Back />,
          headerRight: () => <HeaderSearch />,
        }}
      />
      <ImageBackground
        source={"../assets/img/bg.jpg"}
        style={{
          flex: 1,
          backgroundSize: "cover",
          backgroudPosition: "center",
        }}
      >
        <ScrollView
          style={styles.containerMain}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Image source={user} />
            <Text style={styles.registerTitle}>Lets register your account</Text>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default createUser;
