import React, { useContext, useEffect} from "react";
import * as S from './styles';
import MoviesList from "../../components/MoviesList/MoviesList";
import { MovieContext } from "../../contexts/TrendingInfos";
import Loader from "../../components/Loader/Loader";


function MovieScreen() {
  const { moviesResults, getMovieInfo, loading } = useContext(MovieContext)

  if(loading) {
    <Loader/>
  }

  useEffect(() => {
    getMovieInfo;
  }, [moviesResults])

  return(
    <S.MovieContainer>
      <MoviesList results={moviesResults}/>
    </S.MovieContainer>
  );
}

export default MovieScreen;