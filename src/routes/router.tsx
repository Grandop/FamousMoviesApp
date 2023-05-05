import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./Stacks";
import { MovieContext } from "../contexts/TrendingInfos";
import Loader from "../components/Loader/Loader";

function Router() {
  const { loading } = useContext(MovieContext)

  if(loading) {
    <Loader/>
  }

  return(
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  );
}

export default Router;