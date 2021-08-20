import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOption from "../components/NavOption";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/silces/navSlice";
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={tw`p-5`}>
      <Image
        source={{ uri: "https://links.papareact.com/gzs" }}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <GooglePlacesAutocomplete
        styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder="Where from?"
        query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
        minLength={2}
        enablePoweredByContainer={false}
        returnKeyType="search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // console.log({ data }, { details });
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
      />
      <NavOption />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
