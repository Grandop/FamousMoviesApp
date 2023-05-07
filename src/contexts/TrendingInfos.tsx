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
  const [loading, setLoading] = useState(true);

  const getMovieInfo = async (): Promise<MoviesInterface[] | undefined> => {
    try {
      const results = await movieService.getMovieData();
      setMovieResults(results);
      setLoading(false)
      return results

    } catch (err) {
      setMovieResults([])
      setLoading(false)
      Alert.alert('Você não está conectado a uma rede wifi')
    }
  }

  const getTvShowsInfo = async (): Promise<TvShowsInterface[] | undefined> => {
    setLoading(true)
    try {
      const results = await tvShowsService.getTvShowsData();
      setTvShowsResults(results);
      setLoading(false)
      return results

    } catch (err) {
      setTvShowsResults([])
      setLoading(false)
      Alert.alert('Você não está conectado a uma rede wifi')
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