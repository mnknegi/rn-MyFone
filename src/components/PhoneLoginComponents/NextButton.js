import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const NextButton = () => {
  return (
    <TouchableOpacity
      style={styles.touchebleView}
      onPress={() => {
        console.log("button  added");
      }}
    >
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchebleView: {
    width: "50%",
    height: 50,
  },
  buttonView: {
    flex: 1,
    backgroundColor: "rgba(22,169,255,1.0)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 24,
    color: "white",
  },
});

export default NextButton;
