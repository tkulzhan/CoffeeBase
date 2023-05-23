import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 10,
  },
  textContainer: {
    display: "flex",
    width: 230,
    justifyContent: "center",
    gap: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "ChkLightMedium",
    color: "#fff",
  },
  headerBtn: {
    fontSize: 18,
    fontFamily: "ChkLightMedium",
    color: "#fff",
    width: "fit-content",
    backgroundColor: "#2C2F48",
    padding: 10,
    borderRadius: 10,
  },
  img: {
    width: 250,
  },
});

export default styles;
