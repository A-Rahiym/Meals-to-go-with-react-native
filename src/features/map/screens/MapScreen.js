import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { MapMarker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { MapCallout } from "../components/MapCallout";
import styled from "styled-components";
import Search from "../components/Search";
import { LocationContext } from "../../../services/location/locationContext";
import { ResturantsContext } from "../../../services/resturants/resturantsContext";

const SearchContainer = styled(View)`
  padding: ${({ theme }) => theme.space[0]};
  z-index: 999;
  width: 100%;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const Container = styled(View)`
  flex: 1;
`;

const MapScreen = () => {
  const { resturants } = useContext(ResturantsContext);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location || {};
  const [latDelta, setLatDelta] = useState(0);
  const navigate = useNavigation();

  useEffect(() => {
    if (viewport) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      setLatDelta(northeastLat - southwestLat);
      console.log(latDelta);
    }
  }, [location, viewport]);

  return (
    <Container>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {resturants.map((resturant) => (
          <MapMarker
            key={resturant.name}
            title={resturant.name}
            coordinate={{
              latitude: resturant.geometry.location.lat,
              longitude: resturant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigate("Resturant details", {
                  resturant: resturant,
                })
              }
            >
              <MapCallout resturant={resturant} />
            </Callout>
          </MapMarker>
        ))}
      </Map>
    </Container>
  );
};

export default MapScreen;
