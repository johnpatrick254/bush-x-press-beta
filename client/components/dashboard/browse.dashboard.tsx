import { FontAwesome6 } from "@expo/vector-icons";
import { Dimensions, Text, View } from 'react-native';
import CustomCarousel from "../shared/carousel";
import electronics from "../../assets/images/Electronics-in-Japan-1024x576.png"
import men from "../../assets/images/2151044509.jpg"
import women from "../../assets/images//studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look.jpg"
import jewelry from "../../assets/images/Engagement_Ring1_1920x.webp";

const categories = [
  {
    name: "Womens clothing",
    url: women
  },

  {
    name: "Electronics",
    url: electronics
  },
  {
    name: "Jewelry",
    url: jewelry
  },
  {
    name: "Mens clothing",
    url: men
  },
]
export default function ProductBrowser() {
  const width = Dimensions.get('window').width - 10;
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
