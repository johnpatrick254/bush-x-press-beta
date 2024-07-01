

export type ProductCategory = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

export const fetchAllProducts = async (limit: number, filter?: string) => {
    return await fetch(`https://fakestoreapi.com/products/category/${filter}?limit=${limit}`)
        .then(res => res.json())
        .then(json => json)
}