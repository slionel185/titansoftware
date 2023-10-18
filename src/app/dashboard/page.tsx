import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import LoaderPage from '@/components/pages/Loader'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default function AdminPage() {
    const router = useRouter()
    const session = useSession()

    if(session.status === 'loading') <LoaderPage />
    if(session.status === 'unauthenticated') router.push('/login')

    if(session.data?.user.user_type !== 'ADMIN') return (
        <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Coming soon!
                </h1>
                <p className='mt-8 text-muted-foreground'>Currently working on a way to allow all users to access and see the progress of their sites!</p>
        </MaxWidthContainer>
    )

    return (
        <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    {session.data?.user.email}
                </h1>
        </MaxWidthContainer>
    )
}