import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/silces/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";
const NavigatorCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.droidSafeArea, tailwind`bg-white flex-1`]}>
      <Text style={tailwind`text-center py-5 text-xl`}>
        Good Morning, Hitesh
      </Text>
      <View style={tailwind`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: { flex: 0, paddingTop: 20, backgroundColor: "white" },
              textInput: {
                fontSize: 18,
                borderRadius: 0,
                backgroundColor: "#dddddf",
              },
              textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Where to?"
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            minLength={2}
            enablePoweredByContainer={false}
            returnKeyType="search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              // console.log({ data }, { details });
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
              //   dispatch(setDestination(null));
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View style={tailwind`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          onPress={()=>{navigation.navigate("RideOptionsCard")}}
          style={tailwind`flex flex-row  justify-between bg-black w-24 py-3 px-4 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tailwind`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind`flex flex-row justify-between w-24 py-3 px-4 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tailwind`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigatorCard;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    padding: Platform.OS === "android" ? 10 : 0,
  },
});
