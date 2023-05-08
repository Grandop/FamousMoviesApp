import React, { useContext, useEffect} from "react";
import * as S from './styles';
import MoviesList from "../../components/MoviesList/MoviesList";
import { TrendingInfosContext } from "../../contexts/TrendingInfos";
import Loader from "../../components/Loader/Loader";


function MovieScreen() {
  const { moviesResults, getMovieInfo, loading } = useContext(TrendingInfosContext)

  
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