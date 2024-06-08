import React from 'react';
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from 'react-native';
import { View } from "@/components/Themed";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View
            className="block rounded-sm border-3 border-foreground ring-1 m-5 w-20 h-20 p-4 bg-blue-700"
        >
            <TouchableOpacity
                onPress={toggleColorScheme}
            >
                {colorScheme === "light" ? <MaterialCommunityIcons name="moon-waxing-crescent" size={35} /> : <Feather name="sun" color={"white"} size={35} />}
            </TouchableOpacity>
        </View>
    );
}