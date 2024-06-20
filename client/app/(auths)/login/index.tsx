import { Text, View } from '@/components/Themed';
import React from 'react'
import FormInput from '@/components/shared/FormInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import Button from '@/components/shared/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { signIn } from '@/services/auths';


const Login = () => {

  const {colorScheme} = useColorScheme()

  const formSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters')
  })

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async(data: any) => {
    try{
      const validatedData = formSchema.parse(data);
      await signIn(validatedData)
      reset()
    }catch(error){
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <View className='w-full h-full justify-center p-3'>
      <View className='items-center gap-3 mb-6'>
      <FontAwesome name="diamond" size={50} color={colorScheme === 'light'? 'black' : 'white'} />
      <Text className="text-primary text-center text-3xl font-bold">Welcome</Text>
      <Text>Enter your account here</Text>
      </View>
      <FormInput
        control={control}
        name={'email'}
        placeholder="email"
        label= 'Email'
      />
      <FormInput
      control={control}
      name={'password'}
      placeholder='placeholder'
      label='Password'
      />
      <Link href='#'><Text>Forget Password?</Text></Link>
      <Button
      label = 'Login'
      handleSubmit={handleSubmit(onSubmit)}
      />
      <View className='flex-row gap-1 justify-center pt-2'>
      <Text>Don't have an account?</Text>
      <Link href='/register' className='font-bold'><Text>Sign Up</Text></Link>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Login