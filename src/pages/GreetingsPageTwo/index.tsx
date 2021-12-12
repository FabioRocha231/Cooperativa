import React from "react";
import AppLoading from 'expo-app-loading';
import {View, Image } from 'react-native';
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat";

import { styles } from "./styles";
import { NavigationProps } from "../GreetingsPageOne";
import { GreetingsTexts } from "../../components/GreetingsTextsComponent";
import { GreetingsScreensButton } from "../../components/GreetingsScreensButton";

const GreetingsPageTwo: React.FC<NavigationProps> = ({navigation}) => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return(
    <View style={styles.container}>
        <Image style={styles.image} resizeMode={'cover'} source={require('../../assets/screen2.png')}/>
        <GreetingsTexts text="Conecte-se" subText="Encontre a Cooperativa mais perto rapidamente"/>
        <GreetingsScreensButton 
          colorOfIcon={"#FFFFFF"} 
          background={{backgroundColor: "#4365FF"}}
          onPress={() => navigation.navigate('GreetingsThree')}
        />
    </View>  
  )
}

export { GreetingsPageTwo }