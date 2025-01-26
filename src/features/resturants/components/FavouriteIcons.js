import React, { useContext } from "react";
import { FavouriteContext } from "../../../services/favourites/favouriteContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Text } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
  color: red;
`;

export const FavouriteIcons = ({ resturant }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouriteContext);

  const handleAdd = (x) => {
    addFavourite(x);
  };

  const handleRemove = (x) => {
    removeFavourite(x);
  };
  const IsFavourites = favourites.find((r) => r.placeId === resturant.placeId);
  return (
    <>
      <FavouriteButton
        onPress={() => {
          !IsFavourites ? handleAdd(resturant) : handleRemove(resturant),
            console.log(favourites.length);
        }}
      >
        <AntDesign
          name={IsFavourites ? "heart" : "hearto"}
          size={24}
          color={IsFavourites ? "red" : "white"}
        />
      </FavouriteButton>
    </>
  );
};
