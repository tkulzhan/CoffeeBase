import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginTop: 20,
  },
  inputStyles: {
    color: "#fff",
    fontFamily: "ChkLightRegular",
    width: "100%",
    height: 50,
  },

  textAreaStyles: {
    color: "#fff",
    fontFamily: "ChkLightRegular",
    width: "100%",
    height: 125,
  },

  textAreaWrapperStyles: {
    flex: 1,
    backgroundColor: "#B7B7B7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    width: "75%",
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginVertical: 10,
  },

  inputWrapperStyles: {
    flex: 1,
    backgroundColor: "#B7B7B7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    width: "75%",
    marginVertical: 10,
    paddingHorizontal: 25,
  },

  btnStyles: {
    padding: 25,
    width: "75%",
    borderRadius: 10,
    backgroundColor: "#621882",
  },
  btnText: {
    fontFamily: "ChkLightRegular",
    color: "#fff",
  },
});

export default styles;
