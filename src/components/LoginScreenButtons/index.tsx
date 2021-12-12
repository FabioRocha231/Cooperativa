import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from './styles';

interface LoginButtonProps extends TouchableOpacityProps  {
  title: string
}

const LoginScreenButtons: React.FC<LoginButtonProps> = ({title, onPress, style}) => {
  return(
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.text, {fontFamily: "Montserrat_600SemiBold"}]}>{title}</Text>
      </TouchableOpacity>
  )
}

export { LoginScreenButtons }