import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";

const NumberInputHolder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Phone Number</Text>
      <View style={styles.phoneInputContainer}>
        <Image
          source={require("../../assets/flag.png")}
          style={styles.flagImage}
        />
        <TextInput
          placeholder="Enter any Number"
          keyboardType="numeric"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          style={styles.textInputFormatting}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    marginLeft: 20,
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 22,
  },
  phoneInputContainer: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "80%",
  },
  textInputFormatting: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 18,
    height: 40,
    width: "100%",
  },
  flagImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default NumberInputHolder;
