import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { Pressable } from "react-native";
const Stack = createStackNavigator();

export const MapNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Mapscreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="about" component={About} />
    </Stack.Navigator>
  );
};

const ScreenContainer = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight / 4}px;
  margin-bottom: ${StatusBar.currentHeight / 4}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Mapscreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red",
      }}
    >
      <Text>Home Screen</Text>
      <Pressable style={{ margin: 20 }}>
        <Text
          onPress={() => {
            navigate("profile");
          }}
        >
          go to profile
        </Text>
      </Pressable>
      <Pressable>
        <Text
          onPress={() => {
            navigate("about");
          }}
        >
          about
        </Text>
      </Pressable>

      <Button
        onPress={() => navigate("about")}
        style={{ margin: 20 }}
      >
        Go to about
      </Button>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const About = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>about</Text>
    </View>
  );
};

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <ScreenContainer>
        {/* <Text>Map Screen</Text> */}
        {/* <LoadingIndicator /> */}
        {/* <MyStack /> */}
      </ScreenContainer>
    </>
  );
};

export default MapScreen;
