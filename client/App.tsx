import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className ="bg-red-200 flex-1 justify-center items-center">
      <Text >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


