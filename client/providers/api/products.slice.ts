import { productsAPI } from "./products-api.reducer";

export type ProductProps = {
    id?: string,
    category: {
        id:number,
        name:string,
        image:string
    },
    title: string,
    price: number,
    description: string,
    images: string[]
};

export const productAPI = productsAPI.enhanceEndpoints({addTagTypes:['products']}).injectEndpoints({
    endpoints:(builder)=>(
        {
            fetchProducts: builder.query<ProductProps[], { offset: number | null, limit: number | null, title?: string | null,category?:number | null}>({
                query: ({ offset = 0, limit = 4, category = null }) => ({ url: `/products?offset=${offset}&limit=${limit}&categoryId=${category}`})
                ,
                providesTags:['products']
            })
        }
    )
});

export const {useFetchProductsQuery} =productAPI;