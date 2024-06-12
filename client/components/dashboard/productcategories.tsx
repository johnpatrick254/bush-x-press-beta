import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from "@/components/Themed";

import ProductCard from './product.card'
import men from "../../assets/images/2151044509.jpg"
import women from "../../assets/images//studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look.jpg"
import electronics from "../../assets/images/Electronics-in-Japan-1024x576.png"
import jewelry from "../../assets/images/Engagement_Ring1_1920x.webp";


const data = [
    { image: women, title: 'Cust Coat', category: 'Urband Collection', price: 550.00 },
    { image: men, title: 'Cust Coat', category: 'Urband Collection', price: 550.00 },
    { image: electronics, title: 'Cust Coat', category: 'Urband Collection', price: 550.00 },
    { image: jewelry, title: 'Cust Coat', category: 'Urband Collection', price: 550.00 },
]
function ProductCategories() {
    return (
        <View className='h-max flex flex-1 flex-col w-full px-5'>
            <View className="flex flex-row w-full justify-between items-center h-max my-md p-xm">
                <TouchableOpacity>
                    <Text className="text-2xl font-bold text-primary">Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-xl font-bold text-primary">Show All</Text>
                </TouchableOpacity>
            </View>
            <View className=" w-full flex-1 flex-row flex-wrap justify-between ">
                {
                    data.map((item, index) => (
                        <ProductCard
                            key={index}
                            title={item.title}
                            image={item.image}
                            category={item.category}
                            price={item.price} />
                    ))
                }
            </View>

        </View>
    )
}

export default ProductCategories