'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { trpc } from '@/utilities/trpc'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormLabel, FormItem } from '@/components/ui/form'

import { LoginFormType, LoginFormSchema } from '@/types/auth/LoginForm'

export default function LoginForm() {
    const form = useForm<LoginFormType>({ resolver: zodResolver(LoginFormSchema) })

    function onSubmit(values: LoginFormType) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col'>
                <div className='flex flex-col gap-2 lg:gap-6'>
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
                                <Input className='w-full' placeholder='Password' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <Button className='w-full lg:col-span-2 mt-2' type='submit'>
                        Submit
                    </Button>
                </div>
                <span className='mt-3'>New here? <Link href={'/auth/register'} className='font-medium underline'>Register here</Link>!</span>
            </form>
        </Form>
    )
}