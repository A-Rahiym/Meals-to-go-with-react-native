import * as React from "react";
import { View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const LoadingIndicator = () => (
  <ActivityIndicator
    size={100}
    animating={true}
    style={{ marginLeft: -25 }}
    color={MD2Colors.blue400}
  />
);

export default LoadingIndicator;
