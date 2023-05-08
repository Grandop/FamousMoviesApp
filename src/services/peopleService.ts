import { Api } from "./api/Api";
import { PeopleInterface, PeopleResults } from "../interfaces/PeopleInterface"; 

const getPeopleInfo = async (): Promise<PeopleInterface[] | undefined> => {
  const peopleEndPoint: string = 'person/week?api_key=d8ab08a45dfeb6ee6317a10b502a476a'

  const response = await Api.get<PeopleResults>(peopleEndPoint)
  if (response.status === 200) {
    return response.data.results;
  } else {
    throw new Error('Request Failed')
  }
}

export const peopleService = { getPeopleInfo };