import styled, { css } from "styled-components/native";
import { CustomTextProps } from "./CustomText";
import { RFValue } from "react-native-responsive-fontsize";


export const Text = styled.Text<CustomTextProps>`
  ${({ fontSize, fontWeight, color }) => css`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    color: ${color};
  `}  
`;
