import React from "react";
import * as S from './styles';
import CustomText from "../CustomText/CustomText";
import { PeopleInterface } from "../../interfaces/PeopleInterface";

function PeopleCell(props: PeopleInterface) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const fullUrl = baseUrl + props.profile_path;

  return(
    <S.PeopleCellContainer activeOpacity={1}>
      <S.TopSection>
        <S.PersonPoster
          source={{ uri: fullUrl }}
        />
        <S.InfoView>
          <CustomText
            color="#000"
            fontWeight="bold"
            fontSize={20}
          >{props.name}
          </CustomText> 
          <S.LineView/>

          <S.StaticsView>
            <S.Icons 
              name="person" 
              size={15}
              color={'#7400b8'}
            > {props.known_for_department}
            </S.Icons>
            <S.Icons 
              name="star" 
              size={15}
              color={'#0ead69'}
            > {props.popularity}
            </S.Icons>
          </S.StaticsView>
        </S.InfoView>
      </S.TopSection>
    </S.PeopleCellContainer>
  );
}

export default PeopleCell;