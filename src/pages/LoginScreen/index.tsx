import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import React, { useContext } from "react";
import { ScrollView, Text, Image } from 'react-native';
import { AuthContext } from "../../context/authContexts";
import { HeaderComponent } from "../../components/HeaderComponent";

import { styles } from './styles'
import { LoginScreenTextFields } from "../../components/LoginScreenTextFields";

function LoginScreen() {
  let [fontsLoaded, error] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return(
    <ScrollView style={styles.container}>
      <Image style={styles.image} resizeMode={'cover'} source={require('../../assets/loginScreenVector.png')}/>
      <HeaderComponent firstText={"Faça o seu"} subText={"Login"}/>
        <LoginScreenTextFields />
      <Image style={styles.imageFooter} resizeMode={'cover'} source={require('../../assets/loginScreenMan.png')}/>
    </ScrollView> 
    
  )
} 

export { LoginScreen }