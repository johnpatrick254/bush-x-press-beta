import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getCartItems = createAsyncThunk('cartItem', async() => {
    try{
        const data = await AsyncStorage.getItem('cartItem')
        return data? JSON.parse(data) : []
    }catch(error){
        return error
    }
})

type ItemType = {
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
}

const initialState: initialStateType = {
    cartItems: [],
    isLoading: false,
    error: null
}
console.log("Cart", initialState.cartItems)

const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        getCart(state, action: PayloadAction<ItemType>){
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id)
            if(cartItem){
                cartItem.itemQty++
            }else{
                state.cartItems.push({...action.payload, itemQty: 1})
            }
            AsyncStorage.setItem('cartItem', JSON.stringify(state.cartItems))
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCartItems.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
            state.cartItems.push(action.payload)
            state.isLoading = false
        })
        .addCase(getCartItems.rejected, (state, action) => {
            state.error = action.error.message || 'failed to load items'
            state.isLoading = false
        })
    }
})

export default cartSlice.reducer
export const {getCart} = cartSlice.actions