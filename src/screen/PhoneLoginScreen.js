import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import HeaderView from "../components/PhoneLoginComponents/HeaderView";
import InfoView from "../components/PhoneLoginComponents/InfoComponent";
import NextButton from "../components/PhoneLoginComponents/NextButton";
import NumberInputHolder from "../components/PhoneLoginComponents/NumberInputHolder";
import TitleTextView from "../components/PhoneLoginComponents/TitleText";

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

        <View style={styles.centerView}>
          <TitleTextView />

          <NumberInputHolder />

          <InfoView />
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
  centerView: {
    flex: 2,
  },
  buttonHolder: {
    flex: 1,
    alignItems: "center",
  },
});

export default PhoneLoginScreen;
