import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserScreens } from "./auth.routes";

export default function Routes() {
  return(
    <NavigationContainer>
      <UserScreens />
    </NavigationContainer>
  )
}