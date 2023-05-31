import {
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Animated,
  Text,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import styles from "./drawer.style";
import Menu from "../Menu/Menu";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import { useState, useRef } from "react";
import bg from "../../assets/img/bg.jpg";

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
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
        }}
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
              <Link style={styles.link} href="" onPress={toggleSidebar}>
                <Text>Home</Text>
              </Link>
              <Link
                style={styles.link}
                href="marketplace"
                onPress={toggleSidebar}
              >
                <Text>Marketplace</Text>
              </Link>
              <Link style={styles.link} href="settings" onPress={toggleSidebar}>
                <Text>Settings</Text>
              </Link>
              <Link style={styles.link} href="login" onPress={toggleSidebar}>
                <Text>Login</Text>
              </Link>
            </>
          )}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Drawer;
