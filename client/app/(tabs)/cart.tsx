import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Cart() {
    return (
        <View className="bg-red-200 flex-1 justify-center items-center">
            <Text >Cart</Text>
            <StatusBar style="auto" />
        </View>
    );
}


