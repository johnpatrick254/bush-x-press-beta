import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Text } from '@/components/Themed';
import Container from '@/components/shared/container';
import { Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import Review from '@/components/shared/review';
import { ScrollView } from 'react-native-gesture-handler';

export default function ProductScreen() {
    const { id, category, title, brand, price, description, rating, image } = useLocalSearchParams();
    const navigate = useNavigation()
    const { colorScheme } = useColorScheme()
    return (
        <Container>
            <View className='flex-1 ' >
                <View className="flex-row w-full h-max my-md p-xm px-5 justify-between items-center">
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <Feather name='arrow-left' size={30} color={colorScheme === "light" ? "black" : "white"} className='bg-background rounded-sm' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='heart' size={25} color={colorScheme === "light" ? "black" : "white"} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className={`h-[28rem] mt-1 w-full flex items-center justify-center pb-4 px-5`}>
                        <Image source={{ uri: image as any }} className='w-full h-full rounded-md object-contain' />
                    </View>
                    <View className='my-3 px-5 text-primary'>
                        <Text className='font-bold text-2xl tracking-wide text-primary pb-3 '>{title}</Text>
                        <Text className='italic text-primary pb-3 capitalize' style={{ textTransform: "capitalize" }}>{category}</Text>
                        <Review />
                        <Text className='text-2xl pt-3 font-bold text-primary'>${price}</Text>
                    </View>
                    <TouchableOpacity className='text-lg my-2 bg-black w-[90vw] justify-self-end rounded-md mx-auto py-4 '>
                        <Text className='font-bold text-white text-center text-xl ' >Add to cart</Text>
                    </TouchableOpacity>
                    <View className='my-3 px-5 text-primary'>
                        <Text className='font-bold  text-xl text-primary pb-1 '>Description</Text>
                        <Text className='text-sm text-primary pb-5 '>{description}</Text>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}

