import { configureStore } from '@reduxjs/toolkit'
import { productsAPI } from './api/products-api.reducer';
import cartReducer, { getCartItems } from './slice/cartSlice'

export const store = configureStore({
    reducer: {
        [productsAPI.reducerPath]: productsAPI.reducer,
        cart: cartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsAPI.middleware)

})

store.dispatch(getCartItems())

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch