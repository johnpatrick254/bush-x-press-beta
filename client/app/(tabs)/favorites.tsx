import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from '../(auths)/login';

export default function Favorites() {
    return (
        <View className="bg-red-200 flex-1 justify-center items-center">
            <Text >Favorites</Text>
            <Login/>
            <StatusBar style="auto" />
        </View>
    );
}


