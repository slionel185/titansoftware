'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { trpc } from '@/utilities/trpc'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormLabel, FormItem } from '@/components/ui/form'

import { RegisterFormType, RegisterFormSchema } from '@/types/auth/RegisterForm'

export default function RegisterForm() {
    const form = useForm<RegisterFormType>({ resolver: zodResolver(RegisterFormSchema) })

    function onSubmit(values: RegisterFormType) {
        console.log(values)
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