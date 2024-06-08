import { Text, View } from '@/components/Themed';
import React from 'react'
import FormInput from '@/components/shared/FormInput'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'


const Login = () => {

  const formSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters')
  })

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: any) => {
    const validatedData = formSchema.parse(data);
    console.log(validatedData)
  }

  return (
    <View className='bg-background '>
      <Text className="text-primary ">Login Form</Text>
      <FormInput
        control={control}
        name={'email'}
        placeholder="email"
      />
      <FormInput
      control={control}
      name={'password'}
      placeholder='placeholder'
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}><Text>Submit</Text></TouchableOpacity>
    </View>
  )
}

export default Login