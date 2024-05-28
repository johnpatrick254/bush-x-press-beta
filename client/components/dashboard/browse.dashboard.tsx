import { FontAwesome6 } from "@expo/vector-icons";
import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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

const data = [
  {image: women,  title: 'Cust Coat', category: 'Urband Collection', price: 550.00},
  {image: women, title: 'Cust Coat', category: 'Urband Collection', price: 550.00},
  {image: women, title: 'Cust Coat', category: 'Urband Collection', price: 550.00},
]

export default function ProductBrowser() {
  const width = Dimensions.get('window').width -20;
  return (
    <View className="w-full h-max px-5">
      <View className="flex flex-row w-full justify-between items-center  my-md p-xm">
        <Text className="text-2xl font-bold">Browse Collections</Text>
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
