export interface TvShowsInterface {
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: Date;
  vote_average: number;
  vote_count: number;
}

export interface TvShowsResults {
  results: TvShowsInterface[] | undefined;
}