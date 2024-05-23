import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ProductBrowser from '@/components/dashboard/browse.dashboard';

export default function Tab() {
    return (
        <View className="bg-white flex-1 justify-start items-center p-xm">
            <ProductBrowser />
            <StatusBar style="auto" />
        </View>
    );
}


