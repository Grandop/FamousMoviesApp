import React from "react";
import * as S from './styles';
import { TvShowsResults } from "../../interfaces/TvShowsInterface";
import TvShowsCell from "../TvShowsCell/TvShowsCell";

function TvShowsList({ results }: TvShowsResults) {
  return(
    <S.FlatListCustom
      data={results}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <TvShowsCell {...item}/>}
    />
  );
}

export default TvShowsList;