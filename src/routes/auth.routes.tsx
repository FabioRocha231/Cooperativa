import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { GreetingsPageOne } from "../pages/GreetingsPageOne";
import { GreetingsPageTwo } from "../pages/GreetingsPageTwo";
import { GreetingsPageThree } from "../pages/GreetingsPageThree";
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginScreen } from "../pages/LoginScreen";


const Stack = createStackNavigator();
function UserScreens() {
  return(
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="GreetingsScreen" component={GreetingsScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    </Stack.Navigator>
  )
}


const Tab = createMaterialTopTabNavigator();
function GreetingsScreen() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 42,
          left: 46,
          width: 34, 
          height: 10,
        },
        tabBarIcon: () => <Icon style={{position: "absolute", left: -10.5, top: 4}} name="circle" color={'rgba(255, 255, 255, 0.2)'} size={7} />,
      }}
    >
      <Tab.Screen 
        name="GreetingsOne" 
        component={GreetingsPageOne} 
        options={{ 
          tabBarIndicatorStyle: {
            width: 6, 
            height: 6, 
            borderRadius: 3,
            backgroundColor:"#FFFFFF",
            },
      }}/>
      <Tab.Screen 
        name="GreetingsTwo" 
        component={GreetingsPageTwo} 
        options={{ 
          tabBarIndicatorStyle: {
            width: 7, 
            height: 7, 
            borderRadius: 3.5,
            backgroundColor:"#FFFFFF",
            },
            }}
      />
      <Tab.Screen 
        name="GreetingsThree" 
        component={GreetingsPageThree} 
        options={{ 
          tabBarIndicatorStyle: {
            width: 7, 
            height: 7, 
            borderRadius: 3.5,
            backgroundColor:"#FFFFFF",
            }
            }}
      />
      {/*<Tab.Screen name="UserScreens" component={UserScreens}/>*/}
    </Tab.Navigator>
  )
}

export { UserScreens }