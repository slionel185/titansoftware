import { Card } from '@/components/ui/card'
import RegisterForm from '@/components/forms/RegisterForm'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default function RegisterPage() {
    return (
        <>
            <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Register
                </h1>

            </MaxWidthContainer>

            
            <div className='mx-auto max-w-lg px-6 lg:px-8'>
                <Card id='login' className='p-2 lg:p-6'>
                    <RegisterForm />
                </Card>
            </div>
        </>
    )
}