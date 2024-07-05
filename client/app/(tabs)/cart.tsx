import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "@/components/Themed";
import { FlatList, Image, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import men from "../../assets/images/2151044509.jpg";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@/providers/Hook";
import {
  ItemType,
  getCartItems,
  getDecrement,
  getDelete,
  getIncrement,
  getIsRemoveItem,
} from "@/providers/slice/cartSlice";

export default function Cart() {

  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<ItemType | null>(null)

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const isRemoveCartItem = useAppSelector(
    (state) => state.cart.isRemoveCartItem
  );

  const handleIncrement = (item: ItemType) => {
    dispatch(getIncrement(item));
  };

  const handleDecrement = (item: ItemType) => {
    dispatch(getDecrement(item));
    item.itemQty === 1 && setSelected(item)
  };

  const onDelete = (item: ItemType) => {
    setSelected(item)
    dispatch(getIsRemoveItem())
  }

  
  const handleDelete = () => {
    selected && (
      dispatch(getDelete(selected))
    )
    setSelected(null)
  }
  const handleCancel = () => {
    dispatch(getIsRemoveItem())
  }


  const renderItem = ({ item }: any) => {
    const imageUrl = item.images?.[0];
    return (
      <View className="flex-row justify-between mt-5 w-full">
        <View className="flex-row gap-3">
          <Image
            source={{ uri: imageUrl }}
            className="w-[100px] h-[120px] rounded-xl"
          />
          <View className="justify-between">
            <View className="justify-between">
              <Text className="font-bold font-lg max-w-[70%]">
                {item.title}
              </Text>
              <Text className="font-bold text-lg color-[#b0b0b0]">
                ${item.price}
              </Text>
            </View>
            <View className="flex-row bg-[#e0e0e0] justify-evenly items-center rounded-lg w-[100px] p-2">
              <TouchableOpacity onPress={() => handleDecrement(item)}>
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text className="text-xl">{item.itemQty}</Text>
              <TouchableOpacity onPress={() => handleIncrement(item)}>
                <AntDesign name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="justify-between">
          <Text className="font-bold text-lg">
            ${(item.price * item.itemQty).toFixed(2)}
          </Text>
          <TouchableOpacity onPress={() => onDelete(item)}><Text className="">Delete</Text></TouchableOpacity>
        </View>
      </View>
    );
  };

  const headerItem = () => {
    return (
      <View className="items-center">
        <Text className="font-bold text-2xl">Order</Text>
      </View>
    );
  };

  const footerItem = () => {
    return (
      <View className="my-5">
        <View className="flex-row justify-between">
          <Text className="font-bold text-xl">Subtotal</Text>
          <Text className="font-bold text-xl">$1500.00</Text>
        </View>
        <TouchableOpacity className="border border-[#e0e0e0] items-center justify-center rounded-lg h-[60px] mt-3">
          <Link href="">Continue</Link>
        </TouchableOpacity>
      </View>
    );
  };

  const renderModel = () => {
    return (
      <View className="h-full items-center justify-center" style={{backgroundColor:'#00000080'}}>
        <View className=" bg-[#e0e0e0] px-3 py-4 rounded-xl">
          <View className="items-center">
            <Text className="text-2xl font-bold">Remove Item!</Text>
            <Text>Do you really want to remove the item from cart?</Text>
          </View>
          <View className="flex-row gap-4 mt-5">
            <TouchableOpacity onPress={handleDelete} className="border border-[#333] p-3 flex-1 items-center rounded-lg">
              <Text>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} className="border border-[#333] p-3 flex-1 items-center rounded-lg">
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isRemoveCartItem}
      >
        {renderModel()}
      </Modal>
      <View className="px-3">
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListHeaderComponent={headerItem}
          ListFooterComponent={footerItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
