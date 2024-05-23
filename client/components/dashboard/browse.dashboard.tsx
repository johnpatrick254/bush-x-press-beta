import { FontAwesome6 } from "@expo/vector-icons";
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CustomCarousel from "../shared/carousel";


export default function ProductBrowser() {
  const width = Dimensions.get('window').width
  return (
    <View className="w-full">
      
      <View className="flex flex-row w-full justify-between items-center h-max my-md p-xm">
        <Text className="text-2xl font-semibold">Browse Collections</Text>
        <FontAwesome6 size={28} name="heart" />
      </View>

      <View className="justify-between items-center py-xm">
       <CustomCarousel
       data={[ ...new Array(6).keys()]}
       />
      </View>

    </View>
  )
}
