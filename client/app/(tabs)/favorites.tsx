import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '@/components/Themed';
import Login from '../(auths)/login';
import ThemeToggle from '@/components/shared/themetoggle';

export default function Favorites() {
    return (
        <View className="bg-card flex-1 justify-center items-center">
            <Text className='text-primary' >Favorites</Text>
            <ThemeToggle/>
            <Login/>
            <StatusBar style="auto" />
        </View>
    );
}


