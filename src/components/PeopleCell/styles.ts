import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons'

export const PeopleCellContainer = styled.TouchableOpacity`
  background-color: #93ff96;
  margin-bottom: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  width: 100%;
`;

export const TopSection = styled.View`
  flex: 1;
  flex-direction: row;
  border-top-right-radius: ${RFValue(20)}px;
  border-top-left-radius: ${RFValue(20)}px;
`;

export const PersonPoster = styled.Image`
  height: ${RFValue(120)}px;
  width: ${RFValue(25)}%;
  background-color: gray;
  margin-top: ${RFValue(20)}px;
  margin-left: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const InfoView = styled.View`
  margin-left: ${RFValue(10)}px;
  margin-top: ${RFValue(20)}px;
  width: ${RFValue(39)}%;
  height: ${RFValue(70)}%;
`;

export const LineView = styled.View`
  background-color: black;
  margin-top: ${RFValue(5)}px;
  height: ${RFValue(1)}px;
`;

export const StaticsView = styled.View`
  margin-top: ${RFValue(5)}px;
  padding: ${RFValue(5)}px;
`;

export const Icons = styled(Icon)`
  margin-bottom: ${RFValue(5)}px;
`;


