import { StatusBar } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { View, FlatList } from "react-native";
import ResturantInfoCard from "../components/ResturantInfoCard";
import { Spacer } from "../components/Spacer";
import LoadingIndicator from "../components/LoadingIndicator";
import { TouchableOpacity } from "react-native";

import Search from "../components/Search";
import { FavouritesBar } from "../components/FavouritesBar";

import { useContext } from "react";
import { ResturantsContext } from "../../../services/resturants/resturantsContext";
import { FavouriteContext } from "../../../services/favourites/favouriteContext";
const ScreenContainer = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight / 4}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ResturantList = styled(View)`
  paddingtop: StatusBar.currentHeight;
`;

const ResturantScreen = ({ navigation }) => {
  const { resturants, isloading } = useContext(ResturantsContext);
  const { favourites } = useContext(FavouriteContext);
  const { navigate } = navigation;
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <ScreenContainer>
        <Search
          isFavouriteToggled={isToggled}
          onFavouriteToggled={() => setIsToggled(!isToggled)}
        />
        {isToggled && <FavouritesBar />}
        {isloading ? (
          <View style={{ flex: 1 }}>
            <LoadingIndicator />
          </View>
        ) : (
          <ResturantList style={{ flex: 1 }}>
            <FlatList
              data={resturants}
              renderItem={({ item }) => (
                <Spacer position={"bottom"} size={"medium"}>
                  <TouchableOpacity
                    onPress={() =>
                      navigate("Resturant details", { resturant: item })
                    }
                  >
                    <ResturantInfoCard resturant={item} />
                  </TouchableOpacity>
                </Spacer>
              )}
              keyExtractor={(item) => item.name}
            />
          </ResturantList>
        )}
      </ScreenContainer>
    </>
  );
};

export default ResturantScreen;
