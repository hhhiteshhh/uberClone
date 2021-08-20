import React from "react";
import { StyleSheet, Text, View, Dimension } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigatorCard from "../components/NavigatorCard";
import RideOptionsCard from "../components/RideOptionsCard";
const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigatorCard"
            component={NavigatorCard}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
