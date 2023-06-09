import { View, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import styles from "../drawer.style";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../store/userSlice";
import { useEffect, useState } from "react";
import "../../../locales/index";
import { useTranslation } from "react-i18next";

function Links({ toggleSidebar, style }) {
  const user = useSelector((state) => state.user.value);
  const [roles, setRoles] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    setRoles(user.roles);
  }, []);

  return (
    <View>
      <Link style={style} href="" onPress={toggleSidebar}>
        <Text>{t("home")}</Text>
      </Link>
      <Link style={style} href="marketplace" onPress={toggleSidebar}>
        <Text>{t("mplace")}</Text>
      </Link>
      <Link style={style} href="settings" onPress={toggleSidebar}>
        <Text>{t("settings")}</Text>
      </Link>
      {user.id !== "" ? (
        <Text
          style={style}
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
          {t("logout")}
        </Text>
      ) : (
        <Link style={style} href="login" onPress={toggleSidebar}>
          <Text>{t("login")}</Text>
        </Link>
      )}
      {roles.includes("admin") && (
        <Link style={style} href="admin" onPress={toggleSidebar}>
          <Text>{t("admin")}</Text>
        </Link>
      )}
    </View>
  );
}

export default Links;
