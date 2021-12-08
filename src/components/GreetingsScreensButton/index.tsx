import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  colorOfIcon: string
  background: object
}

const GreetingsScreensButton = ({colorOfIcon, background}: ButtonProps) => {
  return(
    <TouchableOpacity style={[styles.buttonWrapper, background]} onPress={() => {}}>
      <Icon style={styles.icon} name="arrow-right" color={colorOfIcon} size={20}/>
    </TouchableOpacity>
  )
}

export { GreetingsScreensButton }