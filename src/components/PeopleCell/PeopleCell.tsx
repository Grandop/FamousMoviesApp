import React from "react";
import * as S from './styles'
import CustomText from "../CustomText/CustomText";
import { PeopleInterface } from "../../interfaces/PeopleInterface";

function PeopleCell({
  name,
  popularity,
  known_for_department,
  profile_path
}: PeopleInterface) {

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const fullUrl = baseUrl + profile_path;

  return(
    <S.PeopleCellContainer activeOpacity={1}>
        <S.PersonPoster
          source={{ uri: fullUrl }}
        />
        <S.InfoView>
          <CustomText
            color="#000"
            fontWeight="bold"
            fontSize={20}
          >{name}
          </CustomText> 
          <S.LineView/>

          <S.StaticsView>
            <S.Icons 
              name="person" 
              size={15}
              color={'#7400b8'}
            > {known_for_department}
            </S.Icons>
            <S.Icons 
              name="star" 
              size={15}
              color={'#0ead69'}
            > {popularity}
            </S.Icons>
          </S.StaticsView>
        </S.InfoView>
    </S.PeopleCellContainer>
  );
}

export default PeopleCell;