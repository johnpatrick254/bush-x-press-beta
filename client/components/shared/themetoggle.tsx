import React from 'react';
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text } from "@/components/Themed";



export default function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View
           
            className="flex  w-12 h-12 justify-center"
        >
            <TouchableOpacity
                className="dark:text-white"
                onPress={toggleColorScheme}
            >
                {colorScheme === "light" ? <FontAwesome5 name="moon" size={35}  /> : <FontAwesome5 name="sun" size={35} />}
                </TouchableOpacity>
        </View>
    );
}