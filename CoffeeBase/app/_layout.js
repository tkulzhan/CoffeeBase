import { Stack, Tabs } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    ChkBold: require("../assets/fonts/ChakraPetch-Bold.ttf"),
    ChkBoldItalic: require("../assets/fonts/ChakraPetch-BoldItalic.ttf"),
    ChkItalic: require("../assets/fonts/ChakraPetch-Light.ttf"),
    ChkLight: require("../assets/fonts/ChakraPetch-Light.ttf"),
    ChkLightItalic: require("../assets/fonts/ChakraPetch-Italic.ttf"),
    ChkLightMedium: require("../assets/fonts/ChakraPetch-Medium.ttf"),
    ChkLightMediumItalic: require("../assets/fonts/ChakraPetch-MediumItalic.ttf"),
    ChkLightRegular: require("../assets/fonts/ChakraPetch-Regular.ttf"),
    ChkLightSemiBold: require("../assets/fonts/ChakraPetch-SemiBold.ttf"),
    ChkLightSemiBoldItalic: require("../assets/fonts/ChakraPetch-SemiBoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
