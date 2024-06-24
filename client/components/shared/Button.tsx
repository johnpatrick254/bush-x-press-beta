import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '../Themed'

type btnProps = {
    label: string
    handleSubmit: () => void
}

const Button = ({label, handleSubmit}: btnProps) => {
  return (
    <TouchableOpacity 
    onPress={handleSubmit}
    className='bg-card h-[55px] justify-center rounded-2xl mt-5'
    >
        <Text className='text-center font-bold'>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button