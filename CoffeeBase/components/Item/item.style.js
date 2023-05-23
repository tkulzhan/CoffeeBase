import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2C2F48",
    width: 45 + "%",
    height: 200,
    marginHorizontal: 2.5 + "%",
    marginVertical: 2.5 + "%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    resizeMode: "cover",
  },
  rectangle: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 130,
  },
  coffeeName: {
    color: "#fff",
    fontSize: 16,
  },
  coffeeImage: {
    width: 100,
  },
  imageBG: {},
});

export default styles;
