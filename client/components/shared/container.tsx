import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Container = () => {
    return (
        <SafeAreaView>
            <View>
                <Text className='w-full h-full bg-tertiary'>container</Text>
            </View>
        </SafeAreaView>
    )
}

export default Container
