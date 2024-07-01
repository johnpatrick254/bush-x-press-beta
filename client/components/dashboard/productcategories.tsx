import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from "@/components/Themed";
import ProductCard from './product.card'
import { Link } from 'expo-router';
import { ProductCategory, fetchAllProducts } from '@/services/products';
import { Category } from '@/providers/api/category.slice';
import { useFetchProductsQuery } from '@/providers/api/products.slice';


function ProductCategories({ category }: { category: Category }) {
    const { data: products, isError, isLoading } = useFetchProductsQuery({ category: category.id, limit: 4, offset: 0 })
    return <>
        {
            (!isError && !isLoading && products)
            &&
            <View className='h-max flex flex-1 flex-col w-full px-5'>
                <View className='w-full'>
                    <Link asChild href={'/products/popular'} className="flex-row w-full h-max my-md p-xm justify-between items-center">
                        <TouchableOpacity>
                            <Text className="text-2xl font-bold text-primary" style={{ textTransform: "capitalize" }}>{category.name}</Text>
                            <Text className="text-xl font-bold text-primary">Show All</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className=" w-full flex-1 flex-row flex-wrap justify-between gap-4 items-center ">
                    {
                        products.map((item, index) => {
                            return <ProductCard
                                key={index}
                                title={item.title
                                }
                                images={item.images}
                                category={item.category}
                                price={item.price}
                                description={item.description}
                                id={item.id}
                            />
                        }
                        )
                    }
                </View>

            </View>
        }
    </>
}

export default ProductCategories