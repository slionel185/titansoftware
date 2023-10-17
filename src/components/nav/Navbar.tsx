'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { LogIn } from 'lucide-react'

export default function Navbar() {
    const { setTheme } = useTheme()

    const [radioTheme, setRadioTheme] = useState('SYSTEM')

    useEffect(() => {
        if(radioTheme === 'SYSTEM') {
            setTheme('system')
        } else if(radioTheme === 'LIGHT') {
            setTheme('light')
        } else if(radioTheme === 'DARK') {
            setTheme('dark')
        }
    }, [radioTheme])

    return (
        <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full border-b bg-background/75 backdrop-blur-lg transition-all'>
            <MaxWidthContainer>
                <div className='flex h-20 items-center justify-between border-b borer-zinc-200'>
                    <Link href={'/'} className='flex z-40 font-semibold'>
                        <span className='text-2xl scroll-m-20font-extrabold tracking-tight'>Titan Software</span>
                    </Link>

                    {/* TODO: Add mobile navbar later. */}

                    <div className='flex items-center gap-2 lg:gap-4 sm:flex'>
                        <>
                            <Link href={'/pricing'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Pricing
                            </Link>
                            
                            <Link href={'/auth/login'} className={`${buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}`}>
                                Login
                            </Link>
                        </>
                    </div>
                </div>
            </MaxWidthContainer>
        </nav>
    )
}