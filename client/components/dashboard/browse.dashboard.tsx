import { FontAwesome6 } from "@expo/vector-icons";
import { Dimensions,TouchableOpacity } from 'react-native';
import { View, Text } from "@/components/Themed";
import CustomCarousel from "../shared/carousel";
import { Category } from "@/providers/api/category.slice";


export default function ProductBrowser({categories}:{categories:Category[]}) {
  const width = Dimensions.get('window').width -20;
  
  return (
    <View className="w-full h-max px-5">
      <View className="flex flex-row w-full justify-between items-center  my-md p-xm">
        <Text className="text-2xl text-primary font-bold">Browse Collections</Text>
        <TouchableOpacity><FontAwesome6 size={28} name="heart" /></TouchableOpacity>
      </View>

      <View className="justify-between h-56  items-center py-xm">
        <CustomCarousel
          data={categories}
          width={width}
        />
      </View>
    </View>
  )
}
