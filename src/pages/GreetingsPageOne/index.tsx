import React from "react";
import AppLoading from 'expo-app-loading';
import {View, Image } from 'react-native';
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat";

import { styles } from "./styles";
import { GreetingsTexts } from "../../components/GreetingsTextsComponent";
import { GreetingsScreensButton } from "../../components/GreetingsScreensButton";

const GreetingsPageOne = () => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return(
    <View style={styles.container}>
        <Image style={styles.image} resizeMode={'cover'} source={require('../../assets/screen1.png')}/>
        <GreetingsTexts text="Reconecta" subText="Cuide do meio ambiente"/>
        <GreetingsScreensButton colorOfIcon={"#FFFFFF"} background={{backgroundColor: "#FEAB23"}}/>
    </View>  
  )
}

export { GreetingsPageOne }