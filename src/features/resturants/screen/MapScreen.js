import React from "react";
import { Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import LoadingIndicator from "../components/LoadingIndicator";
const searchStyle = { backgroundColor: "white", borderColor: "black" };
const MapScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray",
        }}
      >
        <Text>Map Screen</Text>
        <LoadingIndicator />
      </View>
    </>
  );
};

export default MapScreen;
