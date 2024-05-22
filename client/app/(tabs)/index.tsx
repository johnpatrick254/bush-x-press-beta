import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Tab() {
    return (
        <View className="bg-white flex-1 justify-center items-center">
            <Text >Index</Text>
            <StatusBar style="auto" />
        </View>
    );
}


