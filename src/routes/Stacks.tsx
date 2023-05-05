import React from "react";
import MovieScreen from "../screens/MovieScreen/MovieScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import TvShowsScreen from "../screens/TvShows/TvShowsScreen";

const Tab = createBottomTabNavigator();

function Stacks() {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="MovieScreen"
        component={MovieScreen} 
        options={{
          title: 'Filmes',
          tabBarActiveTintColor: 'blue',
          tabBarIcon: () => {
            return (
              <Icon 
              name="film"
              size={30}
              color='blue'
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="TvShows"
        component={TvShowsScreen} 
        options={{
          title: 'Séries',
          tabBarActiveTintColor: 'purple',
          tabBarIcon: () => {
            return (
              <Icon 
              name="tv"
              size={30}
              color='purple'
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Stacks;