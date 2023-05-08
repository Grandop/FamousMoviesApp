import React, { useEffect} from "react";
import * as S from './styles';
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import { useTrendingInfo } from "../../hooks/useTrendingInfo";


function MovieScreen() {
  const { moviesResults, getMovieInfo, loading } = useTrendingInfo();
  
  useEffect(() => {
    getMovieInfo();
  }, [])
  
  if(loading) {
    return(
      <Loader/>
    );
  }

  return(
    <S.MovieContainer>
      <MoviesList results={moviesResults}/>
    </S.MovieContainer>
  );
}

export default MovieScreen;