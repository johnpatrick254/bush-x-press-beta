import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "@/components/Themed";
import { FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import men from "../../assets/images/2151044509.jpg"
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useAppSelector } from "@/providers/Hook";

export default function Cart() {

  const cartItems = useAppSelector(state => state.cart.cartItems)
  console.log(cartItems)

  const renderItem = ({item}: any) => {
    return(
      <View className="flex-row justify-between mt-5">
        <View className="flex-row gap-3">
            <Image source={{uri: item.images[0]}} className="w-[100px] h-[100px] rounded-xl" />
          <View className="justify-between">
            <View className="justify-between">
              <Text className="font-bold font-lg max-w-[70%]">{item.title}</Text>
            </View>
            <View className="flex-row bg-[#e0e0e0] justify-evenly items-center rounded-xl">
              <TouchableOpacity>
              <AntDesign name="minus" size={20} color="black" />
                </TouchableOpacity>
              <Text className="text-xl">{item.itemQty}</Text>
              <TouchableOpacity>
              <AntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text className="font-bold text-lg">${item.price}</Text>
        </View>
      </View>
    )
  }

  const headerItem = () => {
    return(
      <View className="items-center my-5">
        <Text className="font-bold text-2xl">Order</Text>
      </View>
    )
  }

  const footerItem = () => {
    return(
      <View className="my-5">
        <View className="flex-row justify-between">
          <Text className="font-bold text-xl">Subtotal</Text>
          <Text className="font-bold text-xl">$1500.00</Text>
        </View>
        <TouchableOpacity className="border border-[#e0e0e0] items-center justify-center rounded-lg h-[60px] mt-3">
          <Link href=''>Continue</Link>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View className="flex-1 px-3">
      <FlatList
    data={cartItems}
    keyExtractor={item => item.id}
    renderItem={renderItem}
    ListHeaderComponent={headerItem}
    ListFooterComponent={footerItem}
    />
    </View>
  );
}
