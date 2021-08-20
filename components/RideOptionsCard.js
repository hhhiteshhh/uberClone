import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tailwind from "tailwind-react-native-classnames";
import { selectTeavelTimeInformation } from "../redux/silces/navSlice";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const timetravelInformation = useSelector(selectTeavelTimeInformation);
  const SURGE_CHARGE_RATE = 1.5;
  return (
    <SafeAreaView
      style={[styles.droidSafeArea, tailwind`bg-white flex-1 flex-grow`]}
    >
      <View style={tailwind`flex flex-row items-center justify-evenly`}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            // console.log("hitehs");
          }}
          style={tailwind`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tailwind`text-center py-5 text-xl`}>
          Select a Ride -{timetravelInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item);
            }}
            style={tailwind`flex flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View style={tailwind`-ml-6 flex-1 items-center`}>
              <Text style={tailwind`text-xl font-semibold`}>{title}</Text>
              <Text>{timetravelInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={[tailwind`text-xl text-center`, { width: 70 }]}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(
                (timetravelInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tailwind`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          onPress={() => {}}
          style={tailwind`bg-black py-3 m-3 rounded-3xl ${
            !selected && "bg-gray-300"
          }`}
          disabled={!selected}
        >
          <Text style={tailwind`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    padding: Platform.OS === "android" ? 10 : 0,
  },
});
