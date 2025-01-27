import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { CompactResturantInfo } from "./CompactResturantInfo";
import { TouchableOpacity } from "react-native";
import { Text } from "./typography/text";

const FavouriteWrapper = styled.View`
  padding: 1px;
`;

const FavWrapper = styled.View`
  margin-left: 3px;
`;
export const FavouritesBar = ({ favourites = [], onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteWrapper>
      <Text var>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((resturant) => {
          const key = resturant.name;
          return (
            <FavWrapper>
              <TouchableOpacity
                key={key}
                onPress={() =>
                  onNavigate("Resturant details", {
                    resturant: resturant,
                  })
                }
              >
                <CompactResturantInfo resturant={resturant} key={key} />
              </TouchableOpacity>
            </FavWrapper>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
