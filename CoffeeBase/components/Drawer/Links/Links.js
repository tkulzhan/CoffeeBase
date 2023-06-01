import { View, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import styles from "../drawer.style";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../store/userSlice";
import { useEffect, useState } from "react";

function Links({ toggleSidebar }) {
  const user = useSelector((state) => state.user.value);
  const [roles, setRoles] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setRoles(user.roles);
  }, []);

  return (
    <View>
      <Link style={styles.link} href="" onPress={toggleSidebar}>
        <Text>Home</Text>
      </Link>
      <Link style={styles.link} href="marketplace" onPress={toggleSidebar}>
        <Text>Marketplace</Text>
      </Link>
      <Link style={styles.link} href="settings" onPress={toggleSidebar}>
        <Text>Settings</Text>
      </Link>
      {user.id !== "" ? (
        <Text
          style={styles.link}
          onPress={() => {
            dispatch(
              setUser({
                _id: "",
                name: "",
                email: "",
                bio: "",
                roles: ["nobody"],
              })
            );
            toggleSidebar();
            router.push("/login");
          }}
        >
          Logout
        </Text>
      ) : (
        <Link style={styles.link} href="login" onPress={toggleSidebar}>
          <Text>Login</Text>
        </Link>
      )}
      {roles.includes("admin") && (
        <Link style={styles.link} href="admin" onPress={toggleSidebar}>
          <Text>Admin</Text>
        </Link>
      )}
    </View>
  );
}

export default Links;
