import { React, useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MapView, Marker } from "react-native-maps";

import styled from "styled-components";
import Search from "../components/Search";
import { LocationContext } from "../../../services/location/locationContext";
import { ResturantsContext } from "../../../services/resturants/resturantsContext";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[0]};
  z-index: 999;
  width: 100%;
`;

const MapScreen = () => {
  const { resturants } = useContext(ResturantsContext);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  console.log(viewport);

  const [latDelta, setlatDelta] = useState(0);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setlatDelta(northeastLat - southwestLat);
    console.log("lat delta: ", latDelta);
  }, [location, viewport]);

  return (
    <View style={styles.container}>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.2,
        }}
      >
        {resturants.map((resturant) => {
          return (
            <Marker
              key={resturant.name}
              title={resturant.name}
              coordinate={{
                latitude: resturant.geometry.location.lat,
                longitude: resturant.geometry.location.lng,
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
