import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '@/components/Themed';
import ThemeToggle from '@/components/shared/themetoggle';
import { Link } from 'expo-router';

export default function Favorites() {
    return (
        <View className="bg-card flex-1 justify-center items-center">
            <Text className='text-primary' >Favorites</Text>
            <ThemeToggle/>
            <Link href='/login'  className='my-5'><Text>Login</Text></Link>
            <StatusBar style="auto" />
        </View>
    );
}


