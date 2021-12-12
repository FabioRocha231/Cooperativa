import React from "react";
import AppLoading from 'expo-app-loading';
import {View, Image } from 'react-native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat";

import { styles } from "./styles";
import { GreetingsTexts } from "../../components/GreetingsTextsComponent";
import { GreetingsScreensButton } from "../../components/GreetingsScreensButton";

type RootMaterialTopParamList = {
  GreetingsTwo: undefined,
  GreetingsThree: undefined
}
export type NavigationProps = MaterialTopTabScreenProps<RootMaterialTopParamList>

const GreetingsPageOne: React.FC<NavigationProps> = ({navigation}) => {
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
        <GreetingsScreensButton 
          colorOfIcon={"#FFFFFF"} 
          background={{backgroundColor: "#FEAB23"}}
          onPress={() => navigation.navigate('GreetingsTwo')}
        />
    </View>  
  )
}

export { GreetingsPageOne }