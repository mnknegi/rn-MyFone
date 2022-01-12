import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HeaderView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.HeaderTextFormatting}>My</Text>
        <Text style={[styles.HeaderTextFormatting, { color: "black" }]}>
          Fony
        </Text>
      </View>
      <View style={styles.headerBottomLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    height: 80,
  },
  textContainer: {
    flexDirection: "row",
  },
  HeaderTextFormatting: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 36,
    color: "rgba(22,169,255,1.0)",
  },
  headerBottomLine: {
    width: "15%",
    height: 5,
    backgroundColor: "rgba(22,169,255,1.0)",
  },
});

export default HeaderView;
