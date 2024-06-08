import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className=' flex-1 bg-background'>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Container
