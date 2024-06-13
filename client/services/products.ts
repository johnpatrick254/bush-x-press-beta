export type ProductProps = {
    id?: string,
    category: string,
    title: string,
    brand: string,
    price: number,
    description: string,
    rating: {
        count: number,
        rate: number
    }
    image: string
};

export type ProductCategory = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

export const fetchAllProducts = async (limit: number, filter?: string): Promise<ProductProps[]> => {
    return await fetch(`https://fakestoreapi.com/products/category/${filter}?limit=${limit}`)
        .then(res => res.json())
        .then(json => json)
}