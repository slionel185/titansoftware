'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import LoaderPage from '@/components/pages/Loader'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'
import { useEffect } from 'react'

export default function AdminPage() {
    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if(session.status === 'unauthenticated') router.push('/auth/login')
    }, [session])

    if(session.status === 'loading' || !session.data) return <LoaderPage />

    if(session.data.user.user_type !== 'ADMIN') return (
        <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Coming Soon
                </h1>
                <p className='mt-8 text-muted-foreground'>Bringing you a live update on the progress of your project!</p>
        </MaxWidthContainer>
    )

    return (
        <>
            <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-3xl font-bold lg:text-4xl text-foreground'>Welcome, {session.data.user.name.split(' ')[0]}!</h1>
                <p className='mt-4 text-muted-foreground'>You have _ new leads!</p>
            </MaxWidthContainer>

            
        </>
    )
}