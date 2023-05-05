import React, { useContext, useEffect} from "react";
import * as S from './styles';
import MoviesList from "../../components/MoviesList/MoviesList";
import { MovieContext } from "../../contexts/TrendingInfos";


function MovieScreen() {
  const { moviesResults, getMovieInfo } = useContext(MovieContext)

  useEffect(() => {
    getMovieInfo();
  }, [])

  return(
    <S.MovieContainer>
      <MoviesList results={moviesResults}/>
    </S.MovieContainer>
  );
}

export default MovieScreen;