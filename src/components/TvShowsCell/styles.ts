import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons'

export const MovieCellContainer = styled.TouchableOpacity`
  background-color: #cdb4db;
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
`;

export const TopSection = styled.View`
  flex: 1;
  flex-direction: row;
  border-top-right-radius: ${RFValue(20)}px;
  border-top-left-radius: ${RFValue(20)}px;
`;

export const MoviePoster = styled.Image`
  height: ${RFValue(200)}px;
  width: ${RFValue(35)}%;
  background-color: gray;
  margin-top: ${RFValue(20)}px;
  margin-left: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
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

export const BottomSection = styled.View`
  flex: 1;
  border-bottom-right-radius: ${RFValue(20)}px;
  border-bottom-left-radius: ${RFValue(20)}px; 
`;

export const SummaryView = styled.View`
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(30)}px;
  margin-bottom: ${RFValue(10)}px;
`;

