import React from "react";
import styled from "styled-components";
import { Image, View, Text } from "react-native";
import WebView from "react-native-webview";


const CompactImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactResturantInfo = ({ resturant }) => {
  return (
    <Item>
      <WebView source={{ uri: resturant.photos[0] }} />
      <CompactImage source={{ uri: resturant.photos[0] }} />
      <Text>{resturant.name}</Text>
    </Item>
  );
};
