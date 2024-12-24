import { StatusBar } from "react-native";
import React from "react";
import styled from "styled-components";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";
import { Spacer } from "../components/Spacer";

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

const searchStyle = { backgroundColor: "white", borderColor: "black" };

const ResturantScreen = () => {
  return (
    <>
      <ScreenContainer>
        <ScreenSearchBar>
          <Searchbar placeholder="search" style={searchStyle} />
        </ScreenSearchBar>
        <ResturantList>
          <FlatList
            data={[{ name: 1 }, { name: 2 }, {}, {}, {}, {}, {}]}
            renderItem={() => (
              <Spacer position={"bottom"} size={"medium"}>
                <ResturantInfoCard />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        </ResturantList>
      </ScreenContainer>
    </>
  );
};

export default ResturantScreen;
