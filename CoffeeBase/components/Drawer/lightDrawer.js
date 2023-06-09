import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#A7A8B5",
    height: "100%",
  },
  link: {
    color: "#000",
    fontSize: 16,
    fontFamily: "ChkBold",
    paddingLeft: 25,
    paddingVertical: 5,
  },
  
});

export default styles;
