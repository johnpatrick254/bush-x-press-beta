import { Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { View, Text } from "@/components/Themed";
import { Link } from 'expo-router';


export type ProductType = {
  "id": string
  "title": string
  "price": number
  "description": string
  "category": {
    "id": number
    "name": string
    "image": string
  },
  "images": string[]
}

const ProductCard = ({images, title, category, price,description,id}: ProductType) => {
  const imageURL = images[0].replace(/[\[\]]/g
  ,'');
  console.log(imageURL)
  return (
    <Link asChild href={{
      pathname: `/product/${id}`,
      // params: { category:JSON.stringify(category), description,image,price,rating:JSON.stringify(Math.floor(Math.random() * 10 / 2)),title} 
    }}>
      <TouchableOpacity style={{width:'47%'}} className='h-[330px] rounded-md bg-background p-2 my-2'>
      <View className='w-full h-52 relative '>
          <Image source={{ uri:"https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} } className='w-full h-full object-contain rounded-md'/>
        <TouchableOpacity className='absolute flex items-center  justify-center top-4 right-4 h-10 w-10 rounded-full p-2 bg-[#e3e3ee42]'>
      <FontAwesome6 size={18} className='p-0 m-0' name="heart" color="white"/>
        </TouchableOpacity>
      </View>
      <View className='pt-3 text-primary'>
        <Text className='font-semibold  text-md text-primary'>{title}</Text>
        <Text className='text-sm mt-1 capitalize text-primary italic '>{category.name}</Text>
      </View>
        <Text className='text-lg mt-auto font-bold text-primary'>$ {price}</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default ProductCard