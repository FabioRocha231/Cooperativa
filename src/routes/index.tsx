import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GreetingsScreen } from "./auth.routes";

export default function Routes() {
  return(
    <NavigationContainer>
      <GreetingsScreen />
    </NavigationContainer>
  )
}