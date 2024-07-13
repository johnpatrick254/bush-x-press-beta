import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Toast from "react-native-root-toast";

export const getCartItems = createAsyncThunk('cartItem', async() => {
    try{
        const data = await AsyncStorage.getItem('cartItem')
        return data? JSON.parse(data) : []
    }catch(error){
        return error
    }
})

export type ItemType = {
    id: string
    title: string
    price: number
    description: string
    itemQty: number
    category: {
      id: number
      name: string
      image: string
    },
    images: string[]
  }

interface initialStateType {
    cartItems: ItemType[]
    isLoading: boolean
    error: string | null
    isRemoveCartItem: boolean
    cartQty: number
    totalPrice: number
}

const initialState: initialStateType = {
    cartItems: [],
    isLoading: false,
    error: null,
    isRemoveCartItem: false,
    cartQty: 0,
    totalPrice: 0
}
console.log(initialState.cartItems)
const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addCart(state, action: PayloadAction<ItemType>){
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id)
            if(cartItem){
                cartItem.itemQty++
            }else{
                state.cartItems.push({...action.payload, itemQty: 1})
            }
            AsyncStorage.setItem('cartItem', JSON.stringify(state.cartItems))
            Toast.show(`${action.payload.title} added to cart`, {
                duration: Toast.durations.LONG,
              })
        },
        getIncrement(state, action: PayloadAction<ItemType>){
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            itemIndex && (
                state.cartItems[itemIndex].itemQty ++
            )
              AsyncStorage.setItem('cartItem', JSON.stringify(state.cartItems))
        },
        getDecrement(state, action: PayloadAction<ItemType>){
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (state.cartItems[itemIndex].itemQty > 1){
                state.cartItems[itemIndex].itemQty --
            }else{
                state.isRemoveCartItem = !state.isRemoveCartItem
            }
        },
        getIsRemoveItem(state){
            state.isRemoveCartItem = !state.isRemoveCartItem
        },
        getDelete(state, action: PayloadAction<ItemType>){
            const filteredItem = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = filteredItem
            AsyncStorage.setItem('cartItem', JSON.stringify(state.cartItems))
            state.isRemoveCartItem = !state.isRemoveCartItem
            Toast.show(`${action.payload.title} removed from cart`, {
                duration: Toast.durations.LONG,
              })
        },
        getCartQty(state){
            const cartQty = state.cartItems.reduce((total, value) => total + value.itemQty, 0);
            state.cartQty = cartQty;
        },
        getTotalPrice(state){
            const totalPrice = state.cartItems.reduce((total, value) => total + (value.itemQty * value.price), 0)
            state.totalPrice = totalPrice
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCartItems.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
            state.cartItems = action.payload
            state.isLoading = false
        })
        .addCase(getCartItems.rejected, (state, action) => {
            state.error = action.error.message || 'failed to load items'
            state.isLoading = false
        })
    }
})

export default cartSlice.reducer
export const {addCart, getDecrement, getIncrement, getIsRemoveItem, getDelete, getCartQty, getTotalPrice} = cartSlice.actions