import React from "react";
import * as S from './styles';
import CustomText from "../CustomText/CustomText";
import { formatDate } from "../../utils/formatDate";
import { TvShowsInterface } from "../../interfaces/TvShowsInterface";

function TvShowsCell({
  name,
  first_air_date,
  overview, 
  poster_path,
  vote_average,
  vote_count
}: TvShowsInterface) {

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const fullUrl = baseUrl + poster_path;

  return(
    <S.MovieCellContainer activeOpacity={1}>
      <S.TopSection>
        <S.MoviePoster
          source={{ uri: fullUrl }}
        />
        <S.InfoView>
          <CustomText
            color="#000"
            fontWeight="bold"
            fontSize={20}
          >{name}</CustomText> 
          <S.LineView/>

          <S.StaticsView>
            <S.Icons 
              name="calendar" 
              size={15}
              color={'#ef233c'}
            > {formatDate(first_air_date)}
            </S.Icons>
            <S.Icons 
              name="star" 
              size={15}
              color={'#7400b8'}
            > {vote_average}
            </S.Icons>
            <S.Icons 
              name="person" 
              size={15}
              color={'#0ead69'}
            > {vote_count}
            </S.Icons>

          </S.StaticsView>
          <S.LineView/>
        </S.InfoView>
      </S.TopSection>

      <S.BottomSection>
        <S.SummaryView>
          <CustomText
            color="#000"
            fontWeight="normal"
            fontSize={18}
          >{overview}</CustomText>
        </S.SummaryView>
      </S.BottomSection>

    </S.MovieCellContainer>
  );
}

export default TvShowsCell;