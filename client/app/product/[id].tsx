import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, Text } from "@/components/Themed";
import Container from "@/components/shared/container";
import { ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import Review from "@/components/shared/review";
import { ScrollView } from "react-native-gesture-handler";
import { useFetchProductQuery } from "@/providers/api/products.slice";
import { useAppDispatch } from "@/providers/Hook";
import { addCart, getCartItems, getCartQty, getTotalPrice } from "@/providers/slice/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductScreen() {

  const { id} = useLocalSearchParams();
  const navigate = useNavigation();
  const dispatch = useAppDispatch()

  const { data:item, isLoading, isError } = useFetchProductQuery(id);

  const { colorScheme } = useColorScheme();

  const data = async () => {
    try {
      const result = await AsyncStorage.getItem("cartItem");
      return result ? JSON.parse(result) : null;
    } catch (error) {
      console.error("Error getting cart items from AsyncStorage:", error);
      return null;
    }
  };

  const result = data()


  const handlePress = () => {
    try{
      dispatch(addCart(item))
      getCartItems()
      dispatch(getCartQty())
      dispatch(getTotalPrice())
    }catch(error){
        return error
    }
  }

  return (
    <Container>
      {item && !isLoading ? (
        <View className="flex-1 ">
          <View className="flex-row w-full h-max my-md p-xm px-5 justify-between items-center">
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <Feather
                name="arrow-left"
                size={30}
                color={colorScheme === "light" ? "black" : "white"}
                className="bg-background rounded-sm"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name="heart"
                size={25}
                color={colorScheme === "light" ? "black" : "white"}
              />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              className={`h-[28rem] mt-1 w-full flex items-center justify-center pb-4 px-5`}
            >
              <Image
                source={{ uri: item.images[0] }}
                className="w-full h-full rounded-md object-contain"
              />
            </View>
            <View className="my-3 px-5 text-primary">
              <Text className="font-bold text-2xl tracking-wide text-primary pb-3 ">
                {item.title}
              </Text>
              <Text
                className="italic text-primary pb-3 capitalize"
                style={{ textTransform: "capitalize" }}
              >
                {item.category.name}
              </Text>
              <Review />
              <Text className="text-2xl pt-3 font-bold text-primary">
                ${item.price}
              </Text>
            </View>
            <TouchableOpacity
            onPress={handlePress} 
            className="text-lg my-2 bg-black w-[90vw] justify-self-end rounded-md mx-auto py-4 "
            >
              <Text className="font-bold text-white text-center text-xl ">
                Add to cart
              </Text>
            </TouchableOpacity>
            <View className="my-3 px-5 text-primary">
              <Text className="font-bold  text-xl text-primary pb-1 ">
                Description
              </Text>
              <Text className="text-sm text-primary pb-5 ">{item.description}</Text>
            </View>
          </ScrollView>
        </View>
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </Container>
  );
}
