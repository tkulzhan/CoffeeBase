import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  hello: {
    color: "#fff",
    fontFamily: "ChkLightSemiBold",
    fontSize: 32,
    marginBottom: 10,
    marginTop: 20,
  },
  welcomeMessage: {
    color: "#fff",
    fontFamily: "ChkLightRegular",
    fontSize: 24,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    padding: 10,
  },
  searchInput: {
    fontFamily: "ChkLightRegular",
    width: "100%",
    height: "100%",
    color: "#fff",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tabsContainer: {
    width: "100%",
    marginTop: 30,
  },
  tab: (activeTabType, item) => ({
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: activeTabType === item ? "#fff" : "#C1C0C8",
  }),

  tabText: (activeTabType, item) => ({
    fontSize: 16,
    fontFamily: "ChkLightMedium",
    color: activeTabType === item ? "#fff" : "#C1C0C8",
  }),
});

export default styles;
