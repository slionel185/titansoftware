import { z } from 'zod'

export const ContactFormSchema = z.object({
    name: z.string().min(1, { message: 'Name is required.' }),
    businessName: z.string().min(1, { message: 'Business name is required.' }),
    email: z.string().email().min(1, { message: 'Email is required.' }),
    phone: z.string().min(1, { message: 'Phone number is required.' }),
    message: z.string().min(1, { message: 'Description is required.' })
})

export type ContactFormType = z.infer<typeof ContactFormSchema>