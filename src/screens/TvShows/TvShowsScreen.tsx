import React, { useContext, useEffect } from "react";
import * as S from './styles';
import { MovieContext } from "../../contexts/TrendingInfos";
import TvShowsList from "../../components/TvShowsList/TvShowsList";
import Loader from "../../components/Loader/Loader";


function TvShowsScreen() {
  const { tvShowsResults, getTvShowsInfo, loading } = useContext(MovieContext)

  
  useEffect(() => {
    getTvShowsInfo();
  }, [])
  
  if(loading) {
    return(
      <Loader/>
    );
  }
  
  return(
    <S.TvShowsContainer>
      <TvShowsList results={tvShowsResults}/>
    </S.TvShowsContainer>
  );
}

export default TvShowsScreen;