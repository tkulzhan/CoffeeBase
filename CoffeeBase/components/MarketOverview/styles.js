import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
  },
  subContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  title: {
    fontSize: 25,
    fontFamily: "ChkLightMedium",
    color: "#fff",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "ChkLightMedium",
    color: "#fff",
    marginTop: 10,
  },
  showAll: {
    fontSize: 16,
    fontFamily: "ChkLightMedium",
    color: "#C1C0C8",
  },
  coffeeWrapper: {
    width: 200,
    height: 250,
    backgroundColor: "rgba(0, 0, 0, .5)",
    borderRadius: 20,
  },
  bgc: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  coffeeImg: {},
  coffeeTitle: {
    fontSize: 20,
    fontFamily: "ChkLightMedium",
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
});

export default styles;
