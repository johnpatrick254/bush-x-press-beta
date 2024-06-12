import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from "@/components/Themed";


export default function Profile() {
    return (
        <View className="bg-red-200 flex-1 justify-center items-center">
            <Text >Profile</Text>
            <StatusBar style="auto" />
        </View>
    );
}


