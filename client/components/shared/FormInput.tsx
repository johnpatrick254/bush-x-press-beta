import { View, Text } from 'react-native'
import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { TextInput } from 'react-native'


type FormInputType = {
    control: any 
    name: string
    secureTextEntry?: boolean
    placeholder?: string 
}

const FormInput = ({control, name, ...otherProps}: FormInputType) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                {...otherProps}
                />
                {error && <Text>{error.message}</Text>}
                </>
            )}
        />
    )
}

export default FormInput