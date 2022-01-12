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
import NumberInputHolder from "../components/PhoneLoginComponents/NumberInputHolder";

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

          <NumberInputHolder />

          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={styles.infoText}>
              **You can enter any mobile number and proceed.
            </Text>
            <Text style={styles.infoText}>*OTP will be added in future.</Text>
          </View>
        </View>
        <View style={styles.buttonHolder}>
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
  infoText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    color: "gray",
  },
  buttonHolder: {
    flex: 1,
    alignItems: "center",
  },
});

export default PhoneLoginScreen;
