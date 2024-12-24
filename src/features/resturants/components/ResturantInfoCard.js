import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";
import { Spacer } from "./Spacer.js";
import { Text } from "./typography/text.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    photos = [require("../../../../assets/food1.jpg")],
    address = "Long avenue top side",
    isOPenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(4)));
  console.log(ratingArray);
  return (
    <>
      <ResturantCard>
        <Card elevation={7}>
          <ResturantCardCover>
            <Card.Cover
              key={name}
              source={{ uri: "https://picsum.photos/700" }}
            />
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
                  {!isClosedTemporarily && (
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
                  )}
                </Spacer>
                <Spacer postion="left" size="large">
                  {isOPenNow && <SvgXml xml={open} width={20} height={20} />}
                </Spacer>
              </SectionEnd>
            </Section>
            <Address>{address}</Address>
          </Info>
        </Card>
      </ResturantCard>
    </>
  );
};
export default ResturantInfoCard;
