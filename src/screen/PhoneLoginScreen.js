import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import HeaderView from "../components/PhoneLoginComponents/HeaderView";
import NextButton from "../components/PhoneLoginComponents/NextButton";

const PhoneLoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <HeaderView />
        </View>

        <View style={{ flex: 2 }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                marginLeft: 20,
                fontFamily: "HelveticaNeue-Bold",
                fontSize: 30,
              }}
            >
              Your Phone!
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 20,
                fontFamily: "HelveticaNeue-Bold",
                fontSize: 22,
              }}
            >
              Phone Number
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
                alignItems: "center",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                width: "80%",
              }}
            >
              <Image
                source={require("../assets/flag.png")}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                }}
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

          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: 16,
                color: "gray",
              }}
            >
              **You can enter any mobile number and proceed.
            </Text>
            <Text
              style={{
                fontFamily: "Helvetica",
                fontSize: 16,
                color: "gray",
              }}
            >
              *OTP will be added in future.
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <NextButton />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centralView: {
    backgroundColor: "red",
    width: "90%",
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
  textInputFormatting: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 18,
    height: 40,
    width: "100%",
  },
});

export default PhoneLoginScreen;
