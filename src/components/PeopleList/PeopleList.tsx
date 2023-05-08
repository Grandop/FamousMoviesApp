import React from "react";
import * as S from './styles';
import { PeopleResults } from "../../interfaces/PeopleInterface"; 
import PeopleCell from "../PeopleCell/PeopleCell";

function PeopleList({ results }: PeopleResults) {
  return(
    <S.FlatListCustom
      data={results}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <PeopleCell {...item} />}
    />
  );
}

export default PeopleList; 