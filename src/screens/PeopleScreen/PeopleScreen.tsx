import React, { useEffect } from "react";
import * as S from './styles';
import { useTrendingInfo } from "../../hooks/useTrendingInfo";
import PeopleList from "../../components/PeopleList/PeopleList";
import Loader from "../../components/Loader/Loader";


function PeopleScreen() {
  const { getPeopleInfo, loading, peopleResults } = useTrendingInfo();

  useEffect(() => {
    getPeopleInfo();
  }, [])

  if (loading) {
    return(
      <Loader/>
    );
  }

  return(
    <S.PeopleContainer>
      <PeopleList results={peopleResults}/>
    </S.PeopleContainer>
  );
}

export default PeopleScreen;