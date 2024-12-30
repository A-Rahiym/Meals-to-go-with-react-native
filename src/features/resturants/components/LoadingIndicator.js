import * as React from "react";
import { View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const LoadingIndicator = () => (
  <View style={{ flex: 1 }}>
    <ActivityIndicator
      size={50}
      animating={true}
      style={{ marginLeft: -25, marginTop: 100 }}
      color={MD2Colors.blue400}
    />
  </View>
);

export default LoadingIndicator;
