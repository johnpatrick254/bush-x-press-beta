import { Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { View, Text } from "@/components/Themed";
import { Link } from 'expo-router';
import { ProductProps } from '@/services/products';



const ProductCard = ({image, title, category, price,brand,description,rating,id}: ProductProps) => {
  return (
    <Link asChild href={{
      pathname: `/product/${id}`,
      params:{brand,category, description,image,price,rating:JSON.stringify(rating),title} 
    }}>
    <TouchableOpacity style={{width:'47%'}} className='h-[330px] rounded-md bg-background p-2 my-2'>
      <View className='w-full h-52 relative '>
          <Image source={{ uri: image }} className='w-full h-full object-contain rounded-md'/>
        <TouchableOpacity className='absolute flex items-center  justify-center top-4 right-4 h-10 w-10 rounded-full p-2 bg-[#e3e3ee42]'>
      <FontAwesome6 size={18} className='p-0 m-0' name="heart" color="white"/>
        </TouchableOpacity>
      </View>
      <View className='pt-3 text-primary'>
        <Text className='font-semibold  text-md text-primary'>{title}</Text>
        <Text className='text-sm mt-1 capitalize text-primary italic '>{category}</Text>
      </View>
        <Text className='text-lg mt-auto font-bold text-primary'>$ {price}</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default ProductCard