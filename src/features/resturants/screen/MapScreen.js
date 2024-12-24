import React from "react";
import { Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

const searchStyle = { backgroundColor: "white", borderColor: "black" };
const MapScreen = () => {
  return (
    <>
      <Searchbar placeholder="search" style={searchStyle} />
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center",  backgroundColor:"red"}}>
        <Text>Map Screen</Text>
      </View>
    </>
  );
};

export default MapScreen;
