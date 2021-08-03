import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

function Black() {
  return <View style={{ backgroundColor: "#000000", flex: 1 }}></View>
}

const RootStack = createStackNavigator();

export default function Flash() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Black" screenOptions={{ headerShown: false, headerMode: "screen" }}>
        <RootStack.Screen name="Black" component={Black} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
