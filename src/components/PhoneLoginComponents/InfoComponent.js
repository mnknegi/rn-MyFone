import React from "react";
import { StyleSheet, View, Text } from "react-native";

const InfoView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        **You can enter any mobile number and proceed.
      </Text>
      <Text style={styles.infoText}>*OTP will be added in future.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginLeft: 20 },
  infoText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    color: "gray",
  },
});

export default InfoView;
