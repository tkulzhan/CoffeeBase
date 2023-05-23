import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "ChkLightMedium",
    color: "#fff",
  },
  headerBtn: {
    fontSize: 16,
    fontFamily: "ChkLightMedium",
    color: "#C1C0C8",
  },
  cardsContainer: {
    marginTop: 25,
  },
  card: {
    width: 220,
    height: 220,
    position: "relative",
  },
  textContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(30, 30, 36, 0.3)",
    position: "absolute",
    top: 0,
    left: 0,
    padding: 10,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "ChkLightMedium",
    fontSize: 24,
    color: "#fff",
    textTransform: "capitalize",
  },
  description: {
    fontFamily: "ChkLightRegular",
    fontSize: 17,
    color: "#fff",
  },
});

export default styles;
