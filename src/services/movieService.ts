import { MoviesInterface, MoviesResults } from "../interfaces/MovieInterface";
import { Api } from "./api/Api"

const getMovieData = async (): Promise<MoviesInterface[] | undefined> => {
  const movieEndPoint: string = 'movie/week?api_key=d8ab08a45dfeb6ee6317a10b502a476a'

  const response = await Api.get<MoviesResults>(movieEndPoint)
  if (response.status === 200) {
    return response.data.results
  } else {
    throw new Error('Request Failed')
  }
}

export const movieService = { getMovieData };