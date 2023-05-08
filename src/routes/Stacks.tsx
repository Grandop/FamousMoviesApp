import React from "react";
import MovieScreen from "../screens/MovieScreen/MovieScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import TvShowsScreen from "../screens/TvShows/TvShowsScreen";
import PeopleScreen from "../screens/PeopleScreen/PeopleScreen";

const Tab = createBottomTabNavigator();

function Stacks() {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="MovieScreen"
        component={MovieScreen} 
        options={{
          title: 'Filmes',
          tabBarActiveTintColor: '#00b4d8',
          tabBarIcon: () => {
            return (
              <Icon 
              name="film"
              size={30}
              color='#00b4d8'
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
          tabBarActiveTintColor: '#ffc2d1',
          tabBarIcon: () => {
            return (
              <Icon 
              name="tv"
              size={30}
              color='#ffc2d1'
              />
            );
          },
        }}
      />

<     Tab.Screen
        name="PeopleScreen"
        component={PeopleScreen} 
        options={{
          title: 'Pessoas',
          tabBarActiveTintColor: '#93ff96',
          tabBarIcon: () => {
            return (
              <Icon 
              name="person"
              size={30}
              color='#93ff96'
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Stacks;