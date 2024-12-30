import react from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ResturantScreen from "../../features/resturants/screen/ResturantScreen";
import ResturantDetailScreen from "../../features/resturants/screen/ResturantDetailScreen";
const ResturantStack = createStackNavigator();

import React from "react";

export const ResturantNavigator = () => {
  return (
    <ResturantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <ResturantStack.Screen
        name="resturant screen"
        component={ResturantScreen}
      />
      <ResturantStack.Screen
        name="Resturant details"
        component={ResturantDetailScreen}
      />
    </ResturantStack.Navigator>
  );
};
