import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type GreetingTexts = {
  text: string;
  subText: string;
}

const GreetingsTexts = ({text, subText}: GreetingTexts) => {
  return (
    <View style={styles.textWrapper}>
            <Text style={[styles.text, {fontFamily: "Montserrat_600SemiBold"}]}>
              {text}
            </Text>
            <Text style={[styles.subText, {fontFamily: "Montserrat_300Light"}]}>
              {subText}
            </Text>
      </View>
  )
}

export { GreetingsTexts }