'use client'

import Image from 'next/image'

import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

import TheEdge from '@/assets/projects/TheEdge.png'

export default function ProjectPage() {
    return (
        <>
            <MaxWidthContainer className='mb-12 mt-8 sm:mt-16 flex flex-col justify-center items-center text-center'>
                <h1 className='max-w-4xl text-5xl font-bold text-foreground'>
                    Our projects
                </h1>
                <p className='mt-5 max-w-3xl text-muted-foreground sm:text-lg'>Below are some examples of projects. Some up and running, some under construction. Either way it shows Titan's diverse design language and ability to adapt to any client!</p>
            </MaxWidthContainer>


            <div className='mt-16 mb-16 mx-auto flex flex-col justify-center max-w-4xl px-8 lg:px-0 gap-12'>
                <div className='flex flex-col'>
                    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>The Edge Fitness Clubs</h2>
                    <p className='pt-6 text-muted-foreground'>The Edge reached out to us to replace the $130k existing internal pricing tool. They needed a new, cheaper, and quick solution. Together we created a new proprietary solution resulting in a savings of over $100k a year! This projects was a lot of fun for us, and taught us a lot along the way! Very thankful for The Edge.</p>
                    <p className='pt-6 text-foreground'>Projects highlights</p>
                    <ul className='mt-6 text-muted-foreground list-inside list-disc'>
                        <li>Custom website and database</li>
                        <li>Hosting provided by The Edge</li>
                        <li>2 Month completed project</li>
                    </ul>

                    <div>
                        <div className='relative isolate'>
                            <div>
                                <div className='mx-auto max-w-6xl'>
                                    <div className='mt-12 flow-root'>
                                        <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={TheEdge} alt={'Project Screnshot'} width={3268} height={1862} />
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