import React, { createContext, useState } from "react";
import { MoviesInterface } from "../interfaces/MovieInterface";
import { movieService } from "../services/movieService";
import { Alert } from "react-native";
import { TvShowsInterface } from "../interfaces/TvShowsInterface";
import { tvShowsService } from "../services/tvShowsService";
import { PeopleInterface } from "../interfaces/PeopleInterface";
import { peopleService } from "../services/peopleService";

interface ChildrenProps {
  children: React.ReactNode;
}

export interface TrendingInfosData {
  moviesResults?: MoviesInterface[];
  tvShowsResults?: TvShowsInterface[];
  peopleResults?: PeopleInterface[];
  loading: boolean;
  getMovieInfo: () => Promise<MoviesInterface[] | undefined>;
  getTvShowsInfo: () => Promise<TvShowsInterface[] | undefined>;
  getPeopleInfo: () => Promise<PeopleInterface[] | undefined>;
}

export const TrendingInfosContext = createContext<TrendingInfosData>(
  {} as TrendingInfosData);


export const TrendingContextProvider = ({children}: ChildrenProps) => {
  const [moviesResults, setMovieResults] = useState<MoviesInterface[]>();
  const [tvShowsResults, setTvShowsResults] = useState<TvShowsInterface[]>();
  const [peopleResults, setPeopleResults] = useState<PeopleInterface[]>();
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
      Alert.alert('Algum erro inesperado aconteceu, tente novamente mais tarde')
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
      Alert.alert('Algum erro inesperado aconteceu, tente novamente mais tarde')
    }
  }

  const getPeopleInfo = async (): Promise<PeopleInterface[] | undefined> => {
    setLoading(true)
    try {
      const results = await peopleService.getPeopleInfo();
      setPeopleResults(results)
      setLoading(false)
      return results

    } catch (err) {
      setPeopleResults([])
      setLoading(false)
      Alert.alert('Algum erro inesperado aconteceu, tente novamente mais tarde')
    }
  }

  return (
    <TrendingInfosContext.Provider 
      value={{
        moviesResults, 
        tvShowsResults,
        peopleResults,
        loading, 
        getMovieInfo, 
        getTvShowsInfo,
        getPeopleInfo,
      }}>
      {children}
    </TrendingInfosContext.Provider>

  );
}