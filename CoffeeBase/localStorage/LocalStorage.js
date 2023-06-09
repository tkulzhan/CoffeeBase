import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeLang = async (value) => {
  try {
    await AsyncStorage.setItem("lang", value);
  } catch (e) {
    console.log(e);
  }
};

export const getLang = async () => {
  try {
    const value = await AsyncStorage.getItem("lang");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export const storeTheme = async (value) => {
  try {
    await AsyncStorage.setItem("theme", value);
  } catch (e) {
    console.log(e);
  }
};

export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem("theme");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};
