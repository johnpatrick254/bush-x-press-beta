import { FontAwesome6 } from "@expo/vector-icons";
import { Text, View } from "react-native";


export default function ProductBrowser() {
  return (
    <View className="w-full h-60 ">
      
      <View className="flex flex-row w-full justify-between items-center h-max my-md p-xm">
        <Text className="text-2xl font-semibold">Browse Collections</Text>
        <FontAwesome6 size={28} name="heart" />
      </View>

      <View className=" flex h-full justify-between items-center bg-red-400 py-xm">
        <Text></Text>
      </View>

    </View>
  )
}
