import { View, Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { TextInput, TouchableOpacity } from 'react-native'


type FormInputType = {
    control: any 
    name: string
    secureTextEntry?: boolean
    placeholder?: string 
    label: string
    placeholderColor: string
}

const FormInput = ({control, name, label, placeholderColor, ...otherProps}: FormInputType) => {

    const [showPassword, setIsShowPassword] = useState(false)

    const isPasswordField = name === 'password' || name === 'confirmPassword'

    return (
        <View className="pb-6">
        <Text className="pb-2 font-bold text-lg">{label}</Text>
        <Controller
            control={control}
            name={name}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                <View className=" h-[60px] bg-card flex-row items-center justify-between p-3 rounded-2xl">
                <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={isPasswordField && !showPassword}
                placeholderTextColor={placeholderColor}
                {...otherProps}
                className="flex-1 h-[60px] bg-card text-primary"
                />
                {
                    isPasswordField && <TouchableOpacity onPress={() => setIsShowPassword(prev => !prev)}>
                        <FontAwesome name={showPassword? "eye-slash" : "eye"} size={24} color={placeholderColor} />
                    </TouchableOpacity>
                }
                </View>
                {error && <Text className="text-red-500 ">{error.message}</Text>}
                </>
            )}
        />
        </View>
    )
}

export default FormInput