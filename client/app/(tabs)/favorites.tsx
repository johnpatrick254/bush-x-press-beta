import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from '../(auths)/login';
import ThemeToggle from '@/components/shared/themetoggle';

export default function Favorites() {
    return (
        <View className="bg-background flex-1 justify-center items-center">
            <Text >Favorites</Text>
            <ThemeToggle/>
            <Login/>
            <StatusBar style="auto" />
        </View>
    );
}


