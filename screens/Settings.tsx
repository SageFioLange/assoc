import React from "react";
import { ScrollView, Text, Switch, View, Pressable } from "react-native";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { setInvertBg, setAutoAd } from "../utils/settingsSlice";
import { styles } from "../utils/styles";

export default function Settings({ navigation }: SettingsProps): JSX.Element {
  const userName = useAppSelector((state) => state.user.displayName);
  const invertBg = useAppSelector((state) => state.settings.invertBg);
  const autoAd = useAppSelector((state) => state.settings.autoAd);
  const dispatch = useAppDispatch();

  function toggleInvertBg() {
    dispatch(setInvertBg(!invertBg));
  }

  function toggleAutoAd() {
    dispatch(setAutoAd(!autoAd));
  }

  return (
    <ScrollView style={[styles.scrollPadding, styles.whiteBg]}>
      <View style={styles.container}>
        <Text style={[styles.avenir, styles.s_tTitle, styles.marginTopDouble]}>
          Hi, {userName}
        </Text>
      </View>
      <View style={[styles.container, styles.marginTopDouble]}>
        <View style={[styles.marginTopDouble, styles.s_tContainer]}>
          <Text style={[styles.avenir, styles.s_tName]}>Invert Colors</Text>
          <Switch
            value={invertBg}
            trackColor={{ false: "white", true: "#1122f4" }}
            thumbColor={invertBg ? "white" : "black"}
            ios_backgroundColor={"white"}
            onValueChange={toggleInvertBg}
          />
        </View>
        <View style={[styles.marginTopDouble, styles.s_tContainer]}>
          <Text style={[styles.avenir, styles.s_tName]}>
            Automatically play ad when out of tokens
          </Text>
          <Switch
            value={autoAd}
            trackColor={{ false: "white", true: "#1122f4" }}
            thumbColor={autoAd ? "white" : "black"}
            ios_backgroundColor={"white"}
            onValueChange={toggleAutoAd}
          />
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#395aff" : "#1122f4",
            },
            styles.logOut,
            styles.marginTopDouble,
          ]}
          // onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.avenir, styles.logOutText]}>Sign out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
