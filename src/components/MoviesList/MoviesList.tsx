import React from "react";
import * as S from './styles';
import { MoviesResults } from "../../interfaces/MovieInterface";
import MovieCell from "../MovieCell/MovieCell";

function MoviesList({ results }: MoviesResults) {
  return(
    <S.FlatListCustom
      data={results}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <MovieCell {...item}/>}
    />
  );
}

export default MoviesList; 