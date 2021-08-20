import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import tailwind from "tailwind-react-native-classnames";
const data = [
  {
    id: "123",
    icon: "home",
    location: "HOME",
    destination: "Sec-5 Kurukshetra",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "WORK",
    destination: "WisdomWorldTech Raipur",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tailwind`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tailwind`flex-row items-center p-5`}>
          <Icon
            style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type={"ionicon"}
            color="white"
            size={18}
          />
          <View>
            <Text style={tailwind`text-lg font-semibold `}>{location}</Text>
            <Text style={tailwind`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
