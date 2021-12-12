import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/context/authContexts';
import Routes from './src/routes';
export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}


