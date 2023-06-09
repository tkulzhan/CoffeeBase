import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
    flex: 1,
    padding: 10,
    overflowY: "scroll",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    marginTop: 10,
    height: "fit-content",
    width: "70%",
  },
  registerTitle: {
    fontSize: 26,
    fontFamily: "ChkLightMedium",
    color: "#fff",
  },
  input: {
    fontFamily: "ChkLightRegular",
    width: "100%",
    height: "100%",
    color: "#000",
    fontSize: 20,
    backgroundColor: "#201E35",
    borderRadius: 10,
    height: "100%",
    padding: 10,
  },
  btn: {
    width: 100+"%",
    backgroundColor: "#A7A8B5",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontFamily: "ChkLightMedium",
    color: "#fff",
  },
});

export default styles;
