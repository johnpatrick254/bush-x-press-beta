import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import "../../global.css";
import Container from "@/components/shared/container";
import { useAppDispatch, useAppSelector } from "@/providers/Hook";
import { getCartQty, getTotalPrice } from "@/providers/slice/cartSlice";

export default function TabLayout() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartQty());
    dispatch(getTotalPrice())
  }, []);

  const cartQty = useAppSelector((state) => state.cart.cartQty);
  console.log(cartQty);

  return (
    <Container>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#AA14F0",
          tabBarStyle: {
            height: 70,
            borderWidth: 1,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="shopping-cart" color={color} />
            ),
            tabBarBadge: cartQty,
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="heart-o" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user-circle" color={color} />
            ),
          }}
        />
      </Tabs>
    </Container>
  );
}
