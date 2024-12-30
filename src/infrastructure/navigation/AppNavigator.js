import React from "react";

import ResturantScreen from "../../features/resturants/screen/ResturantScreen";
import { MapNavigationStack } from "../../features/resturants/screen/MapScreen";
import SettingScreen from "../../features/resturants/screen/SettingScreen";
import { ResturantNavigator } from "./ResturantNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  resturants: "fast-food",
  map: "map",
  settings: "settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: (color, size) => (
      <Ionicons name={iconName} color={color} size={size}></Ionicons>
    ),
  };
};

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="resturants" component={ResturantNavigator} />
          <Tab.Screen name="map" component={MapNavigationStack} />
          <Tab.Screen name="settings" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
