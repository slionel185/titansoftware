'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Link as LinkIcon } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

import HHAF from '@/assets/projects/HHAF.png'
import Sciron from '@/assets/projects/Sciron.png'
import TheEdge from '@/assets/projects/TheEdge.png'
import Regiment from '@/assets/projects/Regiment.png'
import Phitlosophy from '@/assets/projects/Phitlosophy.png'
import CTAutoDetailing from '@/assets/projects/CTAutoDetailing.png'

export default function ProjectPage() {
    return (
        <>
            <MaxWidthContainer className='mb-12 mt-8 sm:mt-16 flex flex-col justify-center items-center text-center'>
                <h1 className='max-w-4xl text-5xl font-bold text-foreground'>
                    Our projects
                </h1>
                <p className='mt-5 max-w-3xl text-muted-foreground sm:text-lg'>Below are some examples of projects. Some up and running, some under construction. Either way it shows Titan&apos;s diverse design language and ability to adapt to any client!</p>
            </MaxWidthContainer>


            <div className='mt-16 mb-16 mx-auto flex flex-col justify-center max-w-4xl px-8 lg:px-0 gap-12'>
                <div className='flex flex-col'>
                    <div className='flex justify-between border-b overflow-hidden'>
                        <h2 className='truncate scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>The Edge Fitness Clubs</h2>
                    </div>
                    <p className='pt-6 text-muted-foreground'>Project synopsis</p>
                    <p className='pt-6 text-foreground'>Projects highlights</p>
                    <ul className='mt-2 text-muted-foreground list-inside list-disc'>
                        <li>Custom website and database</li>
                        <li>Hosting provided by The Edge</li>
                        <li>2 Month completed project</li>
                    </ul>

                    <div>
                        <div className='relative isolate'>
                            <div>
                                <div className='mx-auto max-w-6xl'>
                                    <div className='mt-8 lg:mt-12 flow-root'>
                                        <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={TheEdge} alt={'Project Screnshot'} width={3268} height={1862} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-between border-b overflow-hidden'>
                        <h2 className='truncate scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>CT Auto Detailing</h2>
                        <Link href={'https://ctautodetailing.com'} target='_blank' className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                            <LinkIcon className='h-5 w-5' />
                        </Link>
                    </div>
                    <p className='pt-6 text-muted-foreground'>Product synonpsis</p>
                    <p className='pt-6 text-foreground'>Projects highlights</p>
                    <ul className='mt-2 text-muted-foreground list-inside list-disc'>
                        <li>Custom website and Stripe integration</li>
                        <li>Hosting provided by Stripe</li>
                        <li>Storefront with Stripe ecommerce</li>
                    </ul>

                    <div>
                        <div className='relative isolate'>
                            <div>
                                <div className='mx-auto max-w-6xl'>
                                    <div className='mt-8 lg:mt-12 flow-root'>
                                        <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={CTAutoDetailing} alt={'Project Screnshot'} width={3268} height={1862} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-between border-b overflow-hidden'>
                        <h2 className='truncate scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Phitlosophy</h2>
                        <Link href={'https://phitlosophy.com'} target='_blank' className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                            <LinkIcon className='h-5 w-5' />
                        </Link>
                    </div>
                    <p className='pt-6 text-muted-foreground'>Product synonpsis</p>
                    <p className='pt-6 text-foreground'>Projects highlights</p>
                    <ul className='mt-2 text-muted-foreground list-inside list-disc'>
                        <li>Custom website and CRM suite</li>
                        <li>Custom lead management</li>
                    </ul>

                    <div>
                        <div className='relative isolate'>
                            <div>
                                <div className='mx-auto max-w-6xl'>
                                    <div className='mt-8 lg:mt-12 flow-root'>
                                        <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={Phitlosophy} alt={'Project Screnshot'} width={3268} height={1862} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-between border-b overflow-hidden'>
                        <h2 className='truncate scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Sciron</h2>
                        <Link href={'https://sciron.app'} target='_blank' className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                            <LinkIcon className='h-5 w-5' />
                        </Link>
                    </div>
                    <p className='pt-6 text-muted-foreground'>Product synonpsis</p>
                    <p className='pt-6 text-foreground'>Projects highlights</p>
                    <ul className='mt-2 text-muted-foreground list-inside list-disc'>
                        <li>Discord and Twitch bot integration</li>
                        <li>Microservice architecture with 4 nodes</li>
                    </ul>

                    <div>
                        <div className='relative isolate'>
                            <div>
                                <div className='mx-auto max-w-6xl'>
                                    <div className='mt-8 lg:mt-12 flow-root'>
                                        <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={Sciron} alt={'Project Screnshot'} width={3268} height={1862} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-between border-b overflow-hidden'>
                        <h2 className='truncate scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Regiment</h2>
                        <Link href={'https://regiment.fitness'} target='_blank' className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                            <LinkIcon className='h-5 w-5' />
                        </Link>
                    </div>
                    <p className='pt-6 text-muted-foreground'>Product synonpsis</p>
                    <p className='pt-6 text-foreground'>Projects highlights</p>
                    <ul className='mt-2 text-muted-foreground list-inside list-disc'>
                        <li>Custom contact form sent to email</li>
                        <li>Titan Software provided hosting</li>
                    </ul>

                    <div>
                        <div className='relative isolate'>
                            <div>
                                <div className='mx-auto max-w-6xl'>
                                    <div className='mt-8 lg:mt-12 flow-root'>
                                        <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={Regiment} alt={'Project Screnshot'} width={3268} height={1862} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-between border-b overflow-hidden'>
                        <h2 className='truncate scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Happy Hands & Feet</h2>
                        <Link href={'https://hhaf.vercel.app'} target='_blank' className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                            <LinkIcon className='h-5 w-5' />
                        </Link>
                    </div>
                    <p className='pt-6 text-muted-foreground'>Product synonpsis</p>
                    <p className='pt-6 text-foreground'>Projects highlights</p>
                    <ul className='mt-2 text-muted-foreground list-inside list-disc'>
                        <li>Redesign of all important forms</li>
                        <li>Mock up delivered in 6 working hours</li>
                    </ul>

                    <div>
                        <div className='relative isolate'>
                            <div>
                                <div className='mx-auto max-w-6xl'>
                                    <div className='mt-8 lg:mt-12 flow-root'>
                                        <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={HHAF} alt={'Project Screnshot'} width={3268} height={1862} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}