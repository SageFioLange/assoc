import { StyleSheet, Dimensions } from "react-native";

export const win = Dimensions.get("window");
export const width = win.width * 0.8;

export const accentBlue = "#1122f4";
export const accentBlueLite = "#395aff";

export const styles = StyleSheet.create({
  // Container and spacing utils ---------------

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollPadding: {
    paddingVertical: width * 0.1,
    borderBottomColor: "red",
  },
  padTop: {
    paddingTop: width * 0.05,
  },
  padTopDouble: {
    paddingTop: width * 0.1,
  },
  marginTop: {
    marginTop: width * 0.05,
  },
  marginTopDouble: {
    marginTop: width * 0.1,
  },

  // General styles ---------------

  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  whiteBg: {
    backgroundColor: "white",
  },
  avenir: {
    fontFamily: "Avenir Next",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: width * 0.02 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  border: {
    borderColor: accentBlue,
    borderWidth: StyleSheet.hairlineWidth,
  },

  // Home ---------------

  input: {
    backgroundColor: "white",
    width,
    height: width * 0.15,
    borderRadius: width * 0.015,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Avenir Next",
    fontWeight: "400",
  },
  card: {
    backgroundColor: "white",
    borderRadius: width * 0.03,
    height: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.02,
    marginBottom: width * 0.1,
  },
  pressableContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "space-between",
    height: width,
    width,
  },
  pageNav: {
    width: width * 0.475,
    height: width * 0.475,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.02,
  },

  // Answer ---------------

  answer: {
    fontSize: 20,
    textAlign: "center",
  },

  // Item info ---------------

  itemName: {
    width,
    textAlign: "left",
    fontSize: 25,
    fontWeight: "600",
  },
  itemDescription: {
    fontSize: 15,
    fontWeight: "300",
    width,
    textAlign: "left",
  },
  itemActionContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  itemAction: {
    width: width * 0.2,
    height: width * 0.15,
    borderRadius: width * 0.015,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width * 0.035,
  },

  // Collection ---------------

  shelf: {
    width,
    height: width,
    paddingBottom: width * 0.01,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
  },
  shelfName: {
    fontSize: 15,
    fontWeight: "400",
  },
  shelfItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width,
  },

  // Settings & Tokens ---------------

  s_tTitle: {
    fontSize: 50,
    fontWeight: "100",
    width,
    textAlign: "center",
  },
  s_tContainer: {
    display: "flex",
    flexDirection: "row",
    width,
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Abstracting this to this stylesheet broke it,
  // so I'm just hard defining it into the component.
  // Only appears in settings and tokens, so should be fine.
  // s_tContentContainer: {
  //   flex: 1,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  s_tName: {
    fontSize: 18,
    fontWeight: "400",
    maxWidth: width * 0.7,
  },
  logOut: {
    width,
    height: width * 0.15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.015,
  },
  logOutText: {
    fontSize: width * 0.06,
    fontWeight: "600",
    color: "white",
  },
  tokenPurchase: {
    // width: width * 0.2,
    paddingHorizontal: width * 0.05,
    height: width * 0.15,
    borderRadius: width * 0.015,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
