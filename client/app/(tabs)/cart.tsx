import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "@/components/Themed";
import { FlatList, Image, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import emptyCart from "../../assets/images/2222.jpg";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@/providers/Hook";
import {
  ItemType,
  getCartItems,
  getCartQty,
  getDecrement,
  getDelete,
  getIncrement,
  getIsRemoveItem,
  getTotalPrice,
} from "@/providers/slice/cartSlice";

export default function Cart() {

  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<ItemType | null>(null)

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice)
  const isRemoveCartItem = useAppSelector(
    (state) => state.cart.isRemoveCartItem
  );

  const handleIncrement = (item: ItemType) => {
    dispatch(getIncrement(item));
    dispatch(getCartQty())
    dispatch(getTotalPrice())
  };

  const handleDecrement = (item: ItemType) => {
    item.itemQty === 1 && setSelected(item)
    dispatch(getDecrement(item));
    dispatch(getCartQty())
    dispatch(getTotalPrice())
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
    dispatch(getCartQty())
    dispatch(getTotalPrice())
  }
  const handleCancel = () => {
    dispatch(getIsRemoveItem())
  }


  const renderItem = ({ item }: any) => {
    const imageUrl = item.images?.[0];
    console.log(item)
    return (
      <View className="flex-row justify-between mt-7 w-full">
        <View className="flex-row gap-3 flex-1">
          <Image
            source={{uri: imageUrl}}
            className="w-[100px] h-[120px] rounded-xl"
          />
          <View className="justify-between">
            <View className="justify-between">
              <Text className="font-bold font-lg w-[150px]">
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
              <Text className="text-xl text-[#333]">{item.itemQty}</Text>
              <TouchableOpacity onPress={() => handleIncrement(item)}>
                <AntDesign name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="justify-between ">
          <Text className="font-bold text-lg">
            ${(item.price * item.itemQty).toFixed(2)}
          </Text>
          <TouchableOpacity onPress={() => onDelete(item)}><Text className="text-right text-red-400 font-bold text-sm">Delete</Text></TouchableOpacity>
        </View>
      </View>
    );
  };

  const headerItem = () => {
    return (
      <View className="items-center">
        <Text className="font-bold text-3xl">Cart Items</Text>
      </View>
    );
  };

  const footerItem = () => {
    return (
      <View className="my-5 pt-5">
        <View className="flex-row justify-between">
          <Text className="font-bold text-xl">Subtotal</Text>
          <Text className="font-bold text-xl">${totalPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity className="border border-[#888] items-center justify-center rounded-lg h-[60px] mt-3">
          <Link href=""><Text>Continue</Text></Link>
        </TouchableOpacity>
      </View>
    );
  };

  const renderModel = () => {
    return (
      <View className="h-full items-center justify-center" style={{backgroundColor:'#00000080'}}>
        <View className=" bg-[#fff] px-3 py-7 rounded-xl">
          <View className="items-center mb-5">
            <Text className="text-2xl font-bold text-red-500 mb-2">Remove Item!</Text>
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
      {
        cartItems.length > 0? <>
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
      </View></> : <View className="h-full items-center justify-center gap-3">
          <Text className="text-2xl font-bold text-red-300">Cart is empty</Text>
        </View>
      }
    </SafeAreaView>
  );
}
