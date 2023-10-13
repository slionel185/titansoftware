'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormLabel, FormItem } from '@/components/ui/form'

import { ContactFormType, ContactFormSchema } from '@/types/forms/ContactForm'
import { Button } from '../ui/button'

export default function ContactForm() {
    const form = useForm<ContactFormType>({ resolver: zodResolver(ContactFormSchema) })

    function onSubmit(values: ContactFormType) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col pt-8'>
                <div className='flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-2 lg:gap-6'>
                    <FormField name='name' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input className='w-full' placeholder='Seth Torrence' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name='businessName' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                                <Input className='w-full' placeholder='Titan Software' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name='email' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className='w-full' placeholder='contact@titansoftware.dev' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name='phone' control={form.control} render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input className='w-full' placeholder='(302) 740-6194' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name='message' control={form.control} render={({ field }) => (
                        <FormItem className='w-full lg:col-span-2'>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea style={{ resize: 'none' }} className='w-full h-40' placeholder='Brief description of your company, and its needs.' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <Button className='w-full lg:col-span-2 mt-6' type='submit'>
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    )
}