'use client'

import { Button } from '@/components/ui/button'
import ContactForm from '@/components/forms/ContactForm'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'

export default function ContactFormModal({ plan }: { plan: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={'lg'}>Get started</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Get started: {plan}</DialogTitle>
                    <DialogDescription>After completing this form we will reach out within 24 hours!</DialogDescription>
                </DialogHeader>
                <ContactForm />
            </DialogContent>
        </Dialog>
    )
}