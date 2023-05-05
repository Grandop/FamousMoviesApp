import React, { createContext, useEffect, useState } from "react";
import { MoviesInterface } from "../interfaces/MovieInterface";
import { movieService } from "../services/movieService";
import { Alert } from "react-native";
import { TvShowsInterface } from "../interfaces/TvShowsInterface";
import { tvShowsService } from "../services/tvShowsService";

interface ChildrenProps {
  children: React.ReactNode;
}

export interface MovieContextData {
  moviesResults?: MoviesInterface[];
  tvShowsResults?: TvShowsInterface[];
  loading: boolean;
  getMovieInfo: () => Promise<MoviesInterface[] | undefined>;
  getTvShowsInfo: () => Promise<TvShowsInterface[] | undefined>;
}

export const MovieContext = createContext<MovieContextData>(
  {} as MovieContextData);


export const MovieContexteProvider = ({children}: ChildrenProps) => {
  const [moviesResults, setMovieResults] = useState<MoviesInterface[]>();
  const [tvShowsResults, setTvShowsResults] = useState<TvShowsInterface[]>();
  const [loading, setLoading] = useState(false);

  const getMovieInfo = async (): Promise<MoviesInterface[] | undefined> => {
    setLoading(true)
    try {
      const results = await movieService.getMovieData();
      setMovieResults(results);
      return results

    } catch (err) {
      setMovieResults([])
      Alert.alert('Os dados náo foram carreagados, tente novamente mais tarde')
    }
    setLoading(false)
  }

  const getTvShowsInfo = async (): Promise<TvShowsInterface[] | undefined> => {
    setLoading(true)
    try {
      const results = await tvShowsService.getTvShowsData();
      setMovieResults(results);
      return results

    } catch (err) {
      console.log(err)
      setTvShowsResults([])
      Alert.alert('Os dados náo foram carreagados, tente novamente mais tarde')
    }
    setLoading(false)
  }

  return (
    <MovieContext.Provider 
      value={{
        moviesResults, 
        tvShowsResults,
        loading, 
        getMovieInfo, 
        getTvShowsInfo,
      }}>
      {children}
    </MovieContext.Provider>

  );
}