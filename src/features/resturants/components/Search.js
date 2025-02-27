import { React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/locationContext";
import { View } from "react-native";
const ScreenSearchBar = styled(View)`
  padding: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.bg.quaternary};
  margin-top: ${({ theme }) => theme.space[1]};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const Search = ({ isFavouriteToggled, onFavouriteToggled }) => {
  const { keyword, search, location } = useContext(LocationContext);
  const [searchedKeyword, setSearchedKeyword] = useState(keyword);

  useEffect(() => {
    search(searchedKeyword);
  }, []);

  useEffect(() => {
    setSearchedKeyword(keyword);
  }, [keyword]);

  return (
    <ScreenSearchBar>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggled}
        value={searchedKeyword}
        placeholder="search Location"
        onChangeText={(Text) => {
          setSearchedKeyword(Text);
        }}
        onSubmitEditing={() => search(searchedKeyword)}
      />
    </ScreenSearchBar>
  );
};

export default Search;
