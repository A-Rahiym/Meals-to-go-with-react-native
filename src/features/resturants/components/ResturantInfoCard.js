import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";
import { Spacer } from "./Spacer.js";
import { Text } from "./typography/text.js";
import { Image } from "react-native";
import {
  Info,
  Address,
  Section,
  SectionEnd,
  ResturantCardCover,
  Rating,
  ResturantCard,
} from "./ResturantInfoCardStyles.js";

// Resturant card component
const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Somes Resturant",
    icon,
    photos,
    vicinity = "Long avenue top side",
    isOPenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(4)));
  return (
    <>
      <ResturantCard>
        <Card elevation={7}>
          <ResturantCardCover>
            <Card.Cover key={name} source={{ uri: photos[0] }} />
          </ResturantCardCover>
          <Info>
            <Spacer postion="top" size="medium">
              <Text variant="hint">{name}</Text>
            </Spacer>
            <Section>
              <Spacer position="left" size="medium">
                <Rating>
                  {ratingArray.map((a) => (
                    <SvgXml xml={star} width={20} height={20} key={a} />
                  ))}
                </Rating>
              </Spacer>
              <SectionEnd>
                <Spacer postion="top" size="large">
                  {isClosedTemporarily ? (
                    <Text
                      variant="caption"
                      style={{
                        color: "red",
                        fontFamily: `${(prop) => prop.theme.fonts.body}`,
                        paddingRight: 10,
                      }}
                    >
                      IS CLOSED TEMPRARILY
                    </Text>
                  ) : (
                    <Text
                      variant="caption"
                      style={{
                        color: "green",
                        fontFamily: `${(prop) => prop.theme.fonts.body}`,
                        paddingRight: 10,
                      }}
                    >
                      OPEN FOR BUSINESS
                    </Text>
                  )}
                </Spacer>
                <Spacer postion="left" size="large">
                  {!isClosedTemporarily && (
                    <SvgXml xml={open} width={20} height={20} />
                  )}
                </Spacer>

                <Spacer position="left" size="large">
                  <Image
                    source={{ uri: icon }}
                    style={{ width: 15, height: 15 }}
                  />
                </Spacer>
              </SectionEnd>
            </Section>
            <Address>{vicinity}</Address>
          </Info>
        </Card>
      </ResturantCard>
    </>
  );
};
export default ResturantInfoCard;
