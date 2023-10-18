import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { Card } from '@/components/ui/card'
import LoginForm from '@/components/forms/LoginForm'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default async function LoginPage() {
    const session = await getServerSession()

    if(session) redirect('/dashboard')

    return (
        <>
            <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Login
                </h1>

            </MaxWidthContainer>

            
            <div className='mx-auto max-w-lg px-6 lg:px-8'>
                <div className='mb-20 flow-root sm:mt-24'>
                    <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                        <Card id='login' className='p-2 lg:p-6'>
                            <LoginForm />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}