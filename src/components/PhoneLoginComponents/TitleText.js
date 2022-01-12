import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TitleTextView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Your Phone!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  titleText: {
    marginLeft: 20,
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 30,
  },
});

export default TitleTextView;
