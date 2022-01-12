/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PhoneLoginScreen from "./src/screen/PhoneLoginScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PhoneLoginScreen"
          component={PhoneLoginScreen}
          options={{ title: "Login With Phone" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
