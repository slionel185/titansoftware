import { procedure } from '@/server/trpc'
import { NextResponse } from 'next/server'

import { resend } from '@/utilities/resend'
import ContactEmail from '@/components/emails/ContactEmail'

import { ContactFormSchema } from '@/types/forms/ContactForm'

export const contact = procedure
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

            console.log(data)
            return NextResponse.json(data)
        } catch (error) {
            return NextResponse.json(error)
        }
    })