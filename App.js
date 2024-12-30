import { StatusBar } from "react-native";
import "./gesture-handler";
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
import { Navigation } from "./src/infrastructure/navigation";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { ResturantsContextProvider } from "./src/services/resturants/resturantsContext";
import { LocationContextProvider } from "./src/services/location/locationContext";

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular, Oswald_700Bold });
  const [LatoLoaded] = useLato({ Lato_400Regular, Lato_700Bold });

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <ResturantsContextProvider>
            <StatusBar barStyle="auto" />
            <Navigation />
          </ResturantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
