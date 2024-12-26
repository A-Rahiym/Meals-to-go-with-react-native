import { StatusBar } from "react-native";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { ResturantsContextProvider } from "./src/services/resturants/resturantsContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
import ResturantScreen from "./src/features/resturants/screen/ResturantScreen";
import MapScreen from "./src/features/resturants/screen/MapScreen";
import SettingScreen from "./src/features/resturants/screen/SettingScreen";

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

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular, Oswald_700Bold });
  const [LatoLoaded] = useLato({ Lato_400Regular, Lato_700Bold });

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <ResturantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={screenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen name="resturants" component={ResturantScreen} />
                <Tab.Screen name="map" component={MapScreen} />
                <Tab.Screen name="settings" component={SettingScreen} />
              </Tab.Navigator>
            </NavigationContainer>
            <StatusBar barStyle="auto" />
          </ResturantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
