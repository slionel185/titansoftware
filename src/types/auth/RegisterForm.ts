import { z } from 'zod'

export const RegisterFormSchema = z.object({
    email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Must be a valid email address.' }),
    name: z.string().min(1, { message: 'Name is required.' }),
    password: z.string().min(1, { message: 'Password is required.' }),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required.' })
}).refine((data) => data.password === data.confirmPassword)

export type RegisterFormType = z.infer<typeof RegisterFormSchema>