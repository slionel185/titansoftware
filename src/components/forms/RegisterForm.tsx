'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { trpc } from '@/utilities/trpc'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Form, FormControl, FormField, FormLabel, FormItem } from '@/components/ui/form'

import { RegisterFormType, RegisterFormSchema } from '@/types/auth/RegisterForm'

export default function RegisterForm() {
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<RegisterFormType>({ resolver: zodResolver(RegisterFormSchema) })
    const register = trpc.auth.register.useMutation()

    function onSubmit(values: RegisterFormType) {
        register.mutate(values, {
            onSuccess({ error, message }) {
                if(error) {
                    toast({
                        title: 'Error',
                        variant: 'destructive',
                        description: message
                    })
                } else {
                    toast({
                        title: 'User created',
                        description: 'Redirecting...'
                    })

                    router.push('/auth/login')
                }
            }
        })
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col'>
                <div className='flex flex-col gap-2 lg:gap-6'>
                    <FormField name='name' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input className='w-full' autoCorrect='false' placeholder='Name' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name='email' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className='w-full' type='email' placeholder='Email' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name='password' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input className='w-full' type='password' placeholder='Password' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name='confirmPassword' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input className='w-full' type='password' placeholder='Confirm Password' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <Button className='w-full lg:col-span-2 mt-2' type='submit'>
                        Submit
                    </Button>
                </div>
                <span className='mt-3'>Already have an account? <Link href={'/auth/login'} className='font-medium underline'>Login here</Link>!</span>
            </form>
        </Form>
    )
}