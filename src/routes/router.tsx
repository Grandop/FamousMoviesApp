import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./Stacks";


function Router() {
  return(
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  );
}

export default Router;