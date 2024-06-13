import React from 'react'
import { Text, View } from '../Themed'
import { Feather } from '@expo/vector-icons'

export default function Review() {
    return (
        <View className='flex flex-row justify-start items-center w-max'>
            <View className='flex flex-row space-x-1'>
                <Feather name='star' size={25} />
                <Feather name='star' size={25} />
                <Feather name='star' size={25} />
                <Feather name='star' size={25} />
            </View>
            <View className='ml-3'>
                <Text className='text-primary'> 5 Reviews</Text>
            </View>
        </View>
    )
}
