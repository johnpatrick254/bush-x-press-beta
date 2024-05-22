import { FontAwesome6 } from "@expo/vector-icons";
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


export default function ProductBrowser() {
  const width = Dimensions.get('window').width
  return (
    <View className="w-full">
      
      <View className="flex flex-row w-full justify-between items-center h-max my-md p-xm">
        <Text className="text-2xl font-semibold">Browse Collections</Text>
        <FontAwesome6 size={28} name="heart" />
      </View>

      <View className="justify-between items-center py-xm">
        <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={2000}
                renderItem={({ index }) => (
                    <View className="bg-red-400 flex-1 justify-center items-center mx-3 rounded-3xl">
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
      </View>

    </View>
  )
}
