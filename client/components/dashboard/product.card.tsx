import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

type ProductCartType = {
  image: string
  title: string
  category: string
  price: number
}

const ProductCard = ({image, title, category, price}: ProductCartType) => {
  

  return (
    <View className='w-[150px] h-[270px]'>
      <View className='w-full h-52 relative'>
      <Image source={image} className='w-full h-full rounded-3xl'/>
      <View className='absolute top-4 right-4 rounded-full'>
      <FontAwesome6 size={18} name="heart" color="white"/>
        </View>
      </View>
      <View className='pt-3'>
        <Text className='font-bold text-md'>{title}</Text>
        <Text className='text-sm '>{category}</Text>
        <Text className='text-lg font-bold'>$ {price}</Text>
      </View>
    </View>
  )
}

export default ProductCard