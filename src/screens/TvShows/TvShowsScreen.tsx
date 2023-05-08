import React, { useEffect } from "react";
import * as S from './styles';
import TvShowsList from "../../components/TvShowsList/TvShowsList";
import Loader from "../../components/Loader/Loader";
import { useTrendingInfo } from "../../hooks/useTrendingInfo";


function TvShowsScreen() {
  const { tvShowsResults, getTvShowsInfo, loading } = useTrendingInfo();

  
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