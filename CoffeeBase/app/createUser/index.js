import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Drawer from "../../components/Drawer/Drawer";
import styles from "./styles";
import user from "../../assets/img/user.png";

const createUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    fetch("http://localhost:3001/client/api/registerClient", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        
      });
  };

  return (
    <Drawer>
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
          <TouchableOpacity style={styles.btn} onPress={register}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Drawer>
  );
};

export default createUser;
