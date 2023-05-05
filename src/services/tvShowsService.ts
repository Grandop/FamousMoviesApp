import { TvShowsInterface, TvShowsResults } from "../interfaces/TvShowsInterface";
import { Api } from "./api/Api";

const getTvShowsData = async (): Promise<TvShowsInterface[] | undefined> => {
  const tvShowsEndPoint: string = 'tv/week?api_key=d8ab08a45dfeb6ee6317a10b502a476a'

  const response = await Api.get<TvShowsResults>(tvShowsEndPoint)
  if (response.status === 200) {
    return response.data.results
  } else {
    throw new Error('Request Failed')
  }
}

export const tvShowsService = { getTvShowsData };