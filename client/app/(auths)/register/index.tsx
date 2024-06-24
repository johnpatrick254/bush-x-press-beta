import { Text, View } from '@/components/Themed'
import FormInput from '@/components/shared/FormInput'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm} from 'react-hook-form'
import { ScrollView } from 'react-native-gesture-handler'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/shared/Button'
import { Link } from 'expo-router'
import { useColorScheme } from 'nativewind'
import { signUp } from '@/services/auths'

const Register = () => {

  const {colorScheme} = useColorScheme()

  const formSchema = z.object({
    firstName: z.string().min(3, 'First name is required').max(50, 'First name is too long'),
    lastName: z.string().min(3, 'Last name is required').max(50, 'Last name is too long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters long')
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async(data: any) => {
    const validatedData = formSchema.parse(data)
    await signUp(validatedData)
    reset()
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className='my-5'>
      <View className='w-full h-full justify-center p-6'>
      <View className='items-center gap-3 mb-6'>
      <FontAwesome name="diamond" size={50} color={colorScheme ==='light'? 'black' : 'white'} />
      <Text className="text-primary text-center text-3xl font-bold">Welcome</Text>
      <Text>Create your account here</Text>
      </View>
      <FormInput
      control={control}
      name='firstName'
      placeholder='First name'
      label='First name'
      />
      <FormInput
      control={control}
      name='lastName'
      placeholder='Last name'
      label='Last name'
      />
      <FormInput
      control={control}
      name='email'
      placeholder='Email'
      label='Email'
      />
      <FormInput
      control={control}
      name='password'
      placeholder='Password'
      label='Password'
      />
      <FormInput
      control={control}
      name='confirmPassword'
      placeholder='Confirm password'
      label='Confirm Password'
      />
      <Button
      label = 'Sign Up'
      handleSubmit={handleSubmit(onSubmit)}
      />
      <View className='flex-row gap-1 justify-center pt-2'>
      <Text>Already have an account?</Text>
            <Link href='/login' className='font-bold'><Text className='font-bold'>Sign In</Text></Link>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register