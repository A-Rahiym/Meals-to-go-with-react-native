import React from "react";
import styled from "styled-components/native";
import { Image, View, Text } from "react-native";

// Styled Image
const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

// Styled Wrapper for the Item
const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const RestaurantName = styled(Text)`
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

export const CompactResturantInfo = ({ resturant }) => {
  const photo = resturant?.photos?.[0]; // Safely access the photo

  if (!photo) {
    return null; // Return nothing if no photo is available
  }

  return (
    <Item>
      <CompactImage source={{ uri: photo }} />
      <RestaurantName>{resturant.name}</RestaurantName>
    </Item>
  );
};
