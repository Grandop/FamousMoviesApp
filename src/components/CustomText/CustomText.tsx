import React from "react";
import * as S from './styles'
import { StyleProp, TextStyle } from "react-native";

export interface CustomTextProps {
  children: React.ReactNode;
  fontSize?: number;
  color?: string;
  fontWeight?: string;
  textStyles?: StyleProp<TextStyle>;
}

function CustomText({ children, ...rest }: CustomTextProps) {
  return(
    <S.Text {...rest}>
      {children}
    </S.Text>
  );
}

export default CustomText;