import React from 'react'
import { View, Image } from 'react-native'

export default function CarouselCard({url,width,height}:{url:string,width:number,height:number}) {
  return (
    <View className='flex-1'>
        <Image
        source={{uri:url}}
        width={width}
        height={height}
        />
    </View>
  )
}
