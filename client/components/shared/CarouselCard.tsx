import React from 'react'
import { View } from "@/components/Themed";
import { Image } from 'react-native'

export default function CarouselCard({ url, width, height }: { url: string, width: number, height: number }) {
  return (
    <View className='flex-1'>
      <Image
        source={url as unknown as { uri: string }}
        className='w-full h-full rounded-lg'
      />
    </View>
  )
}
