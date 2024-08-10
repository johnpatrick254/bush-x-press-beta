import { ProductCategory } from "@/services/products";
import { productsAPI } from "./products-api.reducer";

export type Category = {
    id: number,
    name: ProductCategory,
    image: string,
}

export const categoryAPI = productsAPI.injectEndpoints({
endpoints:(builder)=>({
    fetchCategories:builder.query<Category[],undefined>({
        query:()=>({url:'categories?limit=5'})
    })
})
})

export const {useFetchCategoriesQuery}=categoryAPI;