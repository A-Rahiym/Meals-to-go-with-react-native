import { StatusBar } from "react-native";
import React from "react";
import styled from "styled-components";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";
import { Spacer } from "../components/Spacer";

const ScreenContainer = styled(View)`
  flex: 2;
  margin-top: ${StatusBar.currentHeight}px;
`;

const ScreenSearchBar = styled(View)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.quaternary};
  margintop: StatusBar.currentHeight;
`;
const ResturantList = styled(FlatList).attrs({
  // contentContainerStyle: { padding: 16 },
})``;

const ResturantScreen = () => {
  return (
    <>
      <ScreenContainer>
        <ScreenSearchBar>
          <Searchbar placeholder="search" />
        </ScreenSearchBar>
        {/* <ResturantList> */}
        <FlatList
          data={[{ name: 1 }, { name: 2 }]}
          renderItem={() => (
            <Spacer position={"bottom"} size={"medium"}>
              <ResturantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
        {/* </ResturantList> */}
      </ScreenContainer>
    </>
  );
};

export default ResturantScreen;
