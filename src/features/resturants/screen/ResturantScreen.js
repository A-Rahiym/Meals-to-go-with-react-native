import { StatusBar } from "react-native";
import React from "react";
import styled from "styled-components";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";
import { Spacer } from "../components/Spacer";
import LoadingIndicator from "../components/LoadingIndicator";
import ActivityIndicator from "react-native-paper";

import { useContext } from "react";
import { ResturantsContext } from "../../../services/resturants/resturantsContext";

const ScreenContainer = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight / 4}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ScreenSearchBar = styled(View)`
  padding: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.bg.quaternary};
  margin-top: ${({ theme }) => theme.space[1]};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;
const ResturantList = styled(View)`
  paddingtop: StatusBar.currentHeight;
`;
const searchStyle = { backgroundColor: "lightgray", borderColor: "black" };

const ResturantScreen = () => {
  const { resturants, isLoading } = useContext(ResturantsContext);
  return (
    <>
      {/* <View style={{ position: "absolute", top: "50%", left: "50%" }}>
        <LoadingIndicator />
      </View> */}

      <ScreenContainer>
        <ScreenSearchBar>
          <Searchbar placeholder="search" style={searchStyle} />
        </ScreenSearchBar>
        <ResturantList>
          {isLoading ? (
            <View style={{ position: "absolute", top: "50%", left: "50%" }}>
              <LoadingIndicator />
            </View>
          ) : (
            <FlatList
              data={resturants}
              renderItem={({ item }) => (
                <Spacer position={"bottom"} size={"medium"}>
                  <ResturantInfoCard resturant={item} />
                </Spacer>
              )}
              keyExtractor={(item) => item.name}
            />
          )}
        </ResturantList>
      </ScreenContainer>
    </>
  );
};

export default ResturantScreen;
