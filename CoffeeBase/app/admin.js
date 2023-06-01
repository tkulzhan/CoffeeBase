import Drawer from "../components/Drawer/Drawer";
import { Provider, useSelector } from "react-redux";
import { store } from "../store/store";
import styles from "../components/Form/styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

function AdminPage() {
  return (
    <Provider store={store}>
      <Drawer>
        <Admin />
      </Drawer>
    </Provider>
  );
}

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const user = useSelector((state) => state.user.value);
  const [roles, setRoles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    load()
  }, [roles]);

  const load = () => {
    setRoles(user.roles);
  }

  const addDrink = () => {
    fetch("http://localhost:3001/order/api/createOrder", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
      }),
    });
  };

  if (!roles.includes("admin")) {
    return (
      <View style={styles.containerMain}>
        <View style={styles.container}>
          <Text style={styles.registerTitle}>How did you get here?!</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              router.push("/");
            }}
          >
            <Text style={styles.btnText}>Go back!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.registerTitle}>Hello, admin!</Text>
      <Text style={styles.registerTitle}>Add new drink</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
        ></TextInput>
        <TouchableOpacity style={styles.btn} onPress={addDrink}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AdminPage;
