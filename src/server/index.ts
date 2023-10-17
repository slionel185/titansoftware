import { router, procedure } from '@/server/trpc'

import { ContactFormSchema } from '@/types/forms/ContactForm'
import { resend } from '@/utilities/resend'
import ContactEmail from '@/components/emails/ContactEmail'
import { NextResponse } from 'next/server'

export const appRouter = router({
    email: procedure
    .input(ContactFormSchema)
    .mutation(async (opts) => {
        const values = opts.input

        try {
            const data = await resend.emails.send({
                from: 'contact@titansoftware.dev',
                to: ['storrence@titansoftware.dev', 'mdavis@titansoftware.dev', 'slionel1850@gmail.com'],
                subject: 'Titan Software: New form submission',
                react: ContactEmail({ values })
            })

            if(data.id) return NextResponse.json(data)
            return NextResponse.json('Bad?')
        } catch (error) {
            return NextResponse.json(error)
        }
    })
})

export type AppRouter = typeof appRouter