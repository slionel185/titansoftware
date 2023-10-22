'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

import { Button, buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default function Navbar() {
    const { data, status } = useSession()

    return (
        <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full border-b bg-background/75 backdrop-blur-lg transition-all'>
            <MaxWidthContainer>
                <div className='flex h-20 items-center justify-between border-b borer-zinc-200'>
                    <Link href={status === 'authenticated' ? '/dashboard' : '/'} className='flex z-40 font-semibold'>
                        <span className='text-2xl scroll-m-20font-extrabold tracking-tight'>Titan Software</span>
                    </Link>

                    {/* TODO: Add mobile navbar later. */}

                    <div className='flex items-center gap-2 lg:gap-4 sm:flex'>
                        <>
                            {(status === 'unauthenticated') && <Link href={'/pricing'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Pricing
                            </Link>}

                            {status === 'authenticated' && <Link href={'/dashboard/prospects'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Prospects
                            </Link>}
                            
                            {(status === 'unauthenticated') && <Link href={'/auth/login'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Login
                            </Link>}

                            {status === 'authenticated' && <Button variant={'ghost'} size={'sm'} onClick={() => signOut()}>Logout</Button>}
                        </>
                    </div>
                </div>
            </MaxWidthContainer>
        </nav>
    )
}