import { getServerSession } from 'next-auth'

import LoaderPage from '@/components/pages/Loader'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default async function AdminPage() {
    const session = await getServerSession()

    if(!session) return <LoaderPage />

    console.log(session)

    return (
        <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Coming Soon
                </h1>
                <p className='mt-8 text-muted-foreground'>Bringing you a live update on the progress of your project!</p>
        </MaxWidthContainer>
    )
}