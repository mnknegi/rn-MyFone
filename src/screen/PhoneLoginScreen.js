import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const PhoneLoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.headerView}>
            <Text style={styles.HeaderTextFormatting}>My</Text>
            <Text style={[styles.HeaderTextFormatting, { color: "black" }]}>
              Fony
            </Text>
          </View>
          <View style={styles.headerLine}></View>
        </View>
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
              style={{
                fontFamily: "HelveticaNeue-Bold",
                fontSize: 18,
                height: 40,
              }}
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
        <TouchableOpacity
          style={{
            width: "50%",
            height: 50,
          }}
          onPress={() => {
            console.log("button  added");
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(22,169,255,1.0)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "HelveticaNeue-Medium",
                fontSize: 24,
                color: "white",
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    height: 80,
  },
  headerView: {
    flexDirection: "row",
  },
  HeaderTextFormatting: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 36,
    color: "rgba(22,169,255,1.0)",
  },
  headerLine: {
    width: "15%",
    height: 5,
    backgroundColor: "rgba(22,169,255,1.0)",
  },
  centralView: {
    backgroundColor: "red",
    width: "90%",
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
});

export default PhoneLoginScreen;
