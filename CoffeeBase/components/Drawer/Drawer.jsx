import {
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Animated,
} from "react-native";
import { Stack } from "expo-router";
import defaultStyles from "./drawer.style";
import lightStyles from "./lightDrawer";
import Menu from "../Menu/Menu";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import { useState, useRef, useEffect } from "react";
import bg from "../../assets/img/bg.jpg";
import Links from "./Links/Links";
import { getTheme } from "../../localStorage/LocalStorage";

const Drawer = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(0)).current;

  const toggleSidebar = () => {
    setTimeout(() => {
      setSidebarVisible(!sidebarVisible);
    }, 100);
    Animated.timing(sidebarAnimation, {
      toValue: sidebarVisible ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const sidebarWidth = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "75%"],
  });

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
  const options =
    theme === "default"
      ? {
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#1E1E24",
          },
          headerTitleStyle: {
            fontWeight: "medium",
            color: "#fff",
            fontSize: 24,
            fontFamily: "ChkBold",
          },
          headerTitle: "Coffee Base",
          headerTintColor: "#fff",
          headerRight: () => <HeaderSearch />,
          headerLeft: () => <Menu onPress={toggleSidebar} />,
        }
      : {
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#A7A8B5",
          },
          headerTitleStyle: {
            fontWeight: "medium",
            color: "#000",
            fontSize: 24,
            fontFamily: "ChkBold",
          },
          headerTitle: "Coffee Base",
          headerTintColor: "#000",
          headerRight: () => <HeaderSearch />,
          headerLeft: () => <Menu onPress={toggleSidebar} />,
        };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={options}
      />
      <View style={styles.container}>
        <ImageBackground
          source={bg}
          style={{
            flex: 1,
            backgroudPosition: "center",
            backgroundColor: "#18151c",
            width: "100%",
            height: "100%",
          }}
        >
          <ScrollView
            style={styles.containerMain}
            showsVerticalScrollIndicator={false}
          >
            <View>{children}</View>
          </ScrollView>
        </ImageBackground>
        <Animated.View style={[styles.sidebar, { width: sidebarWidth }]}>
          {sidebarVisible && (
            <>
              <Links toggleSidebar={toggleSidebar} style={styles.link} />
            </>
          )}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Drawer;
