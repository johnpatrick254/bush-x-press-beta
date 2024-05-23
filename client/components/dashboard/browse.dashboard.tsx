import { FontAwesome6 } from "@expo/vector-icons";
import { Dimensions, Text, View } from 'react-native';
import CustomCarousel from "../shared/carousel";

const electronics = require("../../assets/images/Electronics-in-Japan-1024x576.png")
const men = require("../../assets/images/medium-shot-boy-posing-with-monochrome-outfit.jpg")
const women = require("../../assets/images//studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look.jpg")
const jewelry = require("../../assets/images/Engagement_Ring1_1920x.webp")

const categories = [
  {
    name: "Mens clothing",
    url: men
  },

  {
    name: "Womens clothing",
    url: women
  },

  {
    name: "Electronics",
    url: electronics
  },

]
export default function ProductBrowser() {
  const width = Dimensions.get('window').width - 20;
  return (
    <View className="w-full h-96 py-2">

      <View className="flex flex-row w-full justify-between items-center h-max my-md p-xm">
        <Text className="text-2xl font-semibold">Browse Collections</Text>
        <FontAwesome6 size={28} name="heart" />
      </View>

      <View className="justify-between flex-1  items-center py-xm">
        <CustomCarousel
          data={categories}
          width={width}
        />
      </View>

    </View>
  )
}
