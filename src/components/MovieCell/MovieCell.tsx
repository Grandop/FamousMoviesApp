import React from "react";
import * as S from './styles';
import { MoviesInterface } from "../../interfaces/MovieInterface";
import CustomText from "../CustomText/CustomText";
import { formatDate } from "../../utils/formatDate";

function MovieCell(props: MoviesInterface) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const fullUrl = baseUrl + props.poster_path;

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
          >{props.title}</CustomText> 
          <S.LineView/>

          <S.StaticsView>
            <S.Icons 
              name="calendar" 
              size={15}
              color={'#ef233c'}
            > {formatDate(props.release_date)}
            </S.Icons>
            <S.Icons 
              name="star" 
              size={15}
              color={'#7400b8'}
            > {props.vote_average}
            </S.Icons>
            <S.Icons 
              name="person" 
              size={15}
              color={'#0ead69'}
            > {props.vote_count}
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
          >{props.overview}</CustomText>
        </S.SummaryView>
      </S.BottomSection>

    </S.MovieCellContainer>
  );
}

export default MovieCell;