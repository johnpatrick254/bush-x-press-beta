import { configureStore } from '@reduxjs/toolkit'
import { productsAPI } from './api/products-api.reducer'

export const store = configureStore({
    reducer: {
        [productsAPI.reducerPath]: productsAPI.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsAPI.middleware)

})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']