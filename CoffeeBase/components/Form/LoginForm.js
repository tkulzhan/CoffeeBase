import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import { useState } from "react";
import styles from "./styles";
import user from "../../assets/img/user.png";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
      .then((user) => {
        dispatch(setUser(user));
        console.log(user);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={user} />
      <Text style={styles.registerTitle}>Sign into your account</Text>
      <View style={styles.formContainer}>
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
        <TouchableOpacity style={styles.btn} onPress={login}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;