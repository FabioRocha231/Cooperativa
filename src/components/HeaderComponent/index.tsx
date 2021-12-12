import React from "react";
import { View, Text, Image} from 'react-native';

import { styles } from "./styles";

type HeaderProps = {
  firstText: string;
  subText: string
}

const HeaderComponent: React.FC<HeaderProps> = ({firstText, subText, children}) => {
  return(
    <>
      <View style={styles.headerComponent}>
        <Text style={[styles.headerText, {fontFamily: "Montserrat_600SemiBold"}]}>{firstText}</Text>
        <Text style={[styles.headerText, {fontFamily: "Montserrat_600SemiBold", color: "#FFBD50"}]}>{subText}</Text>
      </View>
    </>
  )
}

export { HeaderComponent }