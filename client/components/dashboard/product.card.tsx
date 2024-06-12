import { Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { View, Text } from "@/components/Themed";

type ProductCartType = {
  image: any
  title: string
  category: string
  price: number
}


const ProductCard = ({image, title, category, price}: ProductCartType) => {

  return (
    <TouchableOpacity style={{width:'47%'}} className=' h-[270px]'>
      <View className='w-full h-52 relative'>
      <Image source={image} className='w-full h-full rounded-3xl'/>
        <TouchableOpacity className='absolute flex items-center  justify-center top-4 right-4 h-10 w-10 rounded-full p-2 bg-[#e3e3ee42]'>
      <FontAwesome6 size={18} className='p-0 m-0' name="heart" color="white"/>
        </TouchableOpacity>
      </View>
      <View className='pt-3 text-primary'>
        <Text className='font-bold  text-md text-primary'>{title}</Text>
        <Text className='text-sm text-primary  '>{category}</Text>
        <Text className='text-lg font-bold text-primary'>$ {price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard