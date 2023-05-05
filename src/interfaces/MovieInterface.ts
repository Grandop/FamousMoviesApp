export interface MoviesInterface {
  title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResults {
  results: MoviesInterface[] | undefined;
}


