import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default async function AdminPage() {
    const session = await getServerSession()

    if(!session) return redirect('/')

    return (
        <MaxWidthContainer className='mb-12 mt-12 flex flex-col justify-center items-center text-center bg-background'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    {session.user.email}
                </h1>
                <p className='mt-8 text-muted-foreground'>{session.user.user_type}</p>
        </MaxWidthContainer>
    )
}