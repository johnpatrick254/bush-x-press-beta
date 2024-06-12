import React from 'react';
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from 'react-native';
import { View } from "@/components/Themed";
import Feather from '@expo/vector-icons/Feather';

export default function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View
            className="flex justify-center items-center border-3 border-foreground ring-1 p-2  bg-background rounded-md"
        >
            <TouchableOpacity
                onPress={toggleColorScheme}
            >
                {colorScheme === "light" ? <Feather name="moon"  size={40} /> : <Feather name="sun" color={"white"} size={40} />}
            </TouchableOpacity>
        </View>
    );
}