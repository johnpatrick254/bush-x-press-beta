import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from "@/components/Themed";
import ProductCard from './product.card'
import { Link } from 'expo-router';
import { ProductCategory, ProductProps, fetchAllProducts } from '@/services/products';


function ProductCategories({ category }: { category: ProductCategory }) {
    const [products, setProducts] = useState<null | ProductProps[]>(null);
    useEffect(() => {
        const getProducts = async () => {
            const fetchedProducts = await fetchAllProducts(4, category);
            setProducts(fetchedProducts);
        };
        getProducts();
    }, []);
    return <>
        {
            products
            &&
            <View className='h-max flex flex-1 flex-col w-full px-5'>
                <View className='w-full'>
                    <Link asChild href={'/products/popular'} className="flex-row w-full h-max my-md p-xm justify-between items-center">
                        <TouchableOpacity>
                            <Text className="text-2xl font-bold text-primary" style={{textTransform:"capitalize"}}>{category}</Text>
                            <Text className="text-xl font-bold text-primary">Show All</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className=" w-full flex-1 flex-row flex-wrap justify-between gap-4 items-center ">
                    {
                        products.map((item, index) => (
                            <ProductCard
                                key={index}
                                title={item.title}
                                image={item.image}
                                category={item.category}
                                price={item.price}
                                rating={item.rating}
                                brand={item.brand}
                                description={item.description}
                                id={item.id}
                            />
                        ))
                    }
                </View>

            </View>
        }
    </>
}

export default ProductCategories