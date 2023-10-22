import Link from 'next/link'
import { Folder, Phone, Quote } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import ContactForm from '@/components/forms/ContactForm'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

export default function HomePage() {
    return (
        <>
            <MaxWidthContainer className='mb-12 mt-8 sm:mt-16 flex flex-col justify-center items-center text-center bg-background'>
                <div className='mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white px-7 py-2 shadow-md backdrop-blue transition-all'>
                    <p className='text-sm font-semibold text-gray-900'>Titan Software now live!</p>
                </div>

                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Titan Software Development
                </h1>
                <p className='mt-5 max-w-prose text-muted-foreground sm:text-lg md:text-xl'>
                    Your Vision, Our Expertise {'–'} Together, We Build the Future
                </p>
                <div className='mt-8 flex gap-4'>
                    <Link href={'https://cal.com/sethtorrence/titan-consult'} target='_blank' className={buttonVariants({
                        variant: 'default',
                        size: 'lg'
                    })}>
                        Book a call <Phone className='ml-2 h-5 w-5' />
                    </Link>
                    <Link href={'/projects'} className={buttonVariants({
                        variant: 'outline',
                        size: 'lg'
                    })}>
                        Our projects <Folder className='ml-2 h-5 w-5' />
                    </Link>
                </div>
            </MaxWidthContainer>

            <div className='mt-12 mx-auto flex flex-col lg:flex-row justify-center items-center max-w-5xl gap-4 relative p-6 lg:p-0'>
                <Quote fill={'hsl(var(--muted-foreground))'} className='text-muted-foreground h-16 w-16 lg:h-96 lg:w-96 opacity-50' />
                <div>
                    <blockquote className='text-left z-10 text-foreground text-lg italic font-medium'>
                        We were paying a tremendous amount of money for this software {'–'} roughly $130k+ per year {'–'} and decided to explore a
                        path to building our own proprietary solution. Seth immediately jumped at the opportunity to build this
                        solution himself. Without any direction {'–'} other than the look/feel and UX of the existing platform {'–'} Seth
                        built a proprietary backend architecture with a close replication of the frontend experience {'–'} and he did
                        so in just 2 months {'–'} the time needed before we renewed the contract with the existing vendor. In
                        addition, Seth worked closely with the operational team to make optimizations to the existing flow and
                        presented the new product to the entire company field of 42 clubs. This was a big project that not only
                        saved the company money, but also gave us control on the platform.
                    </blockquote>
                    <figcaption>
                        <div className='flex gap-2 items-center mt-4'>
                            <cite className='font-medium text-foreground'>John English</cite>
                            <Separator className='h-5 w-[2px] rounded-full bg-foreground' orientation='vertical'  />
                            <cite className='text-sm text-muted-foreground'>VP of Finance, The Edge Fitness Clubs</cite>
                        </div>
                    </figcaption>
                </div>
            </div>    

            <div className='mx-auto mb-32 mt-16 lg:mt-32 max-w-5xl md:px-4'>

                <div className='text-center'>
                    <h2 className='mt-2 font-bold text-4xl text-foreground sm:text-5xl'>Why Titan?</h2>
                    <p className='mt-8 text-lg text-muted-foreground'>We outlined the steps to show just how easy it is.</p>
                </div>
                <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <span className='text-sm font-medium text-primary'>Step 1</span>
                            <span className='text-xl font-semibold'>Book your consultation</span>
                            <span className='mt-2 text-muted-foreground'>Fill out our contact form or book through our cal.com links now!</span>
                        </div>
                    </li>

                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <span className='text-sm font-medium text-primary'>Step 2</span>
                            <span className='text-xl font-semibold'>24-hour quote</span>
                            <span className='mt-2 text-muted-foreground'>After we meet and discuss, your quote will be delivered within 24 hours.</span>
                        </div>
                    </li>

                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <span className='text-sm font-medium text-primary'>Step 3</span>
                            <span className='text-xl font-semibold'>We build</span>
                            <span className='mt-2 text-muted-foreground'>You sit back and watch... <br/> It really is that easy.</span>
                        </div>
                    </li>
                </ol>
            </div>

            <div>
                <div className='relative isolate'>
                    <div>
                        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                            <div className='mb-20 flow-root sm:mt-24'>
                                <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                    <Card id='contact' className='p-2 lg:p-6'>
                                        <CardTitle className='mt-2 font-bold text-4xl text-foreground sm:text-5xl text-center'>Book your consultation now</CardTitle>
                                        <CardDescription className='mt-4 text-lg text-muted-foreground text-center'>Creating your future has never been easier.</CardDescription>
                                        <CardContent className='pt-0 p-2 lg:pr-6 lg:pl-6 lg:pb-6 mt-8'>
                                            <ContactForm />
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}