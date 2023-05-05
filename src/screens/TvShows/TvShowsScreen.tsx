import React, { useContext, useEffect } from "react";
import * as S from './styles';
import { MovieContext } from "../../contexts/TrendingInfos";
import TvShowsList from "../../components/TvShowsList/TvShowsList";


function TvShowsScreen() {
  const { tvShowsResults, getTvShowsInfo } = useContext(MovieContext)

  useEffect(() => {
    getTvShowsInfo();
  }, [])
  
  return(
    <S.TvShowsContainer>
      <TvShowsList results={tvShowsResults}/>
    </S.TvShowsContainer>
  );
}

export default TvShowsScreen;