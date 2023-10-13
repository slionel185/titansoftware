import { ContactFormType } from '@/types/forms/ContactForm'

export default function ContactEmail({ values }: { values: ContactFormType }) {
    const { name, businessName, email, phone, message } = values

    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl'>{businessName} - {name}</h1>
            <h1 className='text-lg'>{phone}</h1>
            <h1 className='text-lg'>{email}</h1>
            <h1>{message}</h1>
        </div>
    )
}