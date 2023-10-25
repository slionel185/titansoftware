'use client'

import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'
import { BarChart, Folder, LayoutDashboard, LogOut, Users } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function Navbar() {
    const { data, status } = useSession()

    return (
        <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full border-b bg-background/75 backdrop-blur-lg transition-all'>
            <MaxWidthContainer className='px-6'>
                <div className='flex h-20 items-center justify-between border-b borer-zinc-200'>
                    <Link href='/' className='flex z-40 font-semibold'>
                        <span className='text-2xl scroll-m-20font-extrabold tracking-tight'>Titan Software</span>
                    </Link>
                    <div className='flex md:hidden items-center'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant={'ghost'} size={'icon'}>
                                    <BarChart className='h-5 w-5 -rotate-90' />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side={'top'}>
                                <SheetHeader>
                                    <SheetTitle className='text-2xl scroll-m-20font-extrabold tracking-tight'>Titan Software</SheetTitle>
                                </SheetHeader>
                                <div className='flex flex-col gap-2 h-full w-full mt-6'>
                                    <Link href={'/projects'} className={cn('flex justify-start items-center', buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost'
                                    }))}>
                                        <span><Folder className='h-5 w-5 mr-2' /></span>
                                        <span className='flex-1'>Projects</span>
                                    </Link>

                                    {status === 'authenticated' && <Link href={'/dashboard'} className={cn('flex justify-start items-center', buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost'
                                    }))}>
                                        <span><LayoutDashboard className='h-5 w-5 mr-2' /></span>
                                        <span className='flex-1'>Dashboard</span>
                                    </Link>}

                                    {status === 'authenticated' && <Link href={'/dashboard/prospects'} className={cn('flex justify-start items-center', buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost'
                                    }))}>
                                        <span><Users className='h-5 w-5 mr-2' /></span>
                                        <span className='flex-1'>Prospects</span>
                                    </Link>}

                                    {status === 'authenticated' && <Button onClick={() => signOut()} variant={'ghost'} size={'sm'} className='flex justify-start items-center'>
                                        <span><LogOut className='h-5 w-5 mr-2' /></span>
                                        <span className='flex-1 text-left'>Logout</span>
                                    </Button>}

                                    {(status === 'unauthenticated' || status === 'loading') && <Button onClick={() => signIn()}  variant={'ghost'} size={'sm'} className='flex justify-start items-center'>
                                        <span><LogOut className='h-5 w-5 mr-2' /></span>
                                        <span className='flex-1 text-left'>Login</span>
                                    </Button>}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>    

                    <div className='hidden items-center gap-2 lg:gap-4 md:flex'>
                        <>
                            <Link href={'/pricing'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Pricing
                            </Link>

                            {status === 'authenticated' && <Link href={'/dashboard'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Dashboard
                            </Link>}

                            {status === 'authenticated' && <Link href={'/dashboard/prospects'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Prospects
                            </Link>}
                            
                            {(status === 'unauthenticated' || status === 'loading') && <Link href={'/auth/login'} className={`${buttonVariants({
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