import { z } from 'zod'

export const LoginFormSchema = z.object({
    email: z.string().email().min(1, { message: 'Username is required.' }),
    password: z.string().min(1, { message: 'Password is required.' })
})

export type LoginFormType = z.infer<typeof LoginFormSchema>