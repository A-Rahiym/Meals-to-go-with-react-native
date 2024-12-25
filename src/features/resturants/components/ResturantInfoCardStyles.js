import styled from "styled-components";
import { Card } from "react-native-paper";

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.ui.secondary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ResturantCardCover = styled(Card)`
  backgroundcolor: ${({ theme }) => theme.colors.bg.primary};
  backgroundcolor: "red";
`;

export const Rating = styled.View`
  flex-direction: row;
  // deconstruction is possible
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const ResturantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.secondary};
`;

export const Status = styled.View`


`