import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Phone } from 'lucide-react'

import Navbar from '@/components/nav/Navbar'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import ContactForm from '@/components/forms/ContactForm'

export default function HomePage() {
    return (
        <>
            <Navbar />

            <MaxWidthContainer className='mb-12 mt-16 sm:mt-32 flex flex-col justify-center items-center text-center bg-background'>
                <div className='mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white px-7 py-2 shadow-md backdrop-blue transition-all hover:bg-white/50'>
                    <p className='text-sm font-semibold text-gray-900'>Titan Software now live!</p>
                </div>

                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Titan Software Development
                </h1>
                <p className='mt-5 max-w-prose text-muted-foreground sm:text-lg md:text-xl'>
                Your Vision, Our Expertise {'–'} Together, We Build the Future
                </p>
            </MaxWidthContainer>


            <div className='hidden'>
                <div className='relative isolate'>
                    <div>
                        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                            <div className='mt-16 flow-root sm:mt-24'>
                                <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                    <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={''} alt={'Either meet the team or previous works!'} width={3024} height={1903} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto mb-32  max-w-5xl px-4'>
                <div className='mb-12 px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl sm:text-center'>
                        <h2 className='mt-2 font-bold text-4xl text-foreground sm:text-5xl'>Book your consultation <span className='text-primary'>now</span></h2>
                        <p className='mt-4 text-lg text-muted-foreground'>Creating your future has never been easier.</p>
                        <div className='mt-8'>
                            <Link href={'https://cal.com/sethtorrence/titan-consult'} target='_blank' className={buttonVariants({
                                variant: 'default',
                                size: 'lg'
                            })}>
                                Book a call <Phone className='ml-2 h-5 w-5' />
                            </Link>
                        </div>
                    </div>
                </div>

                <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <span className='text-sm font-medium text-primary'>Step 1</span>
                            <span className='text-xl font-semibold'>Book your consultation</span>
                            <span className='mt-2 text-muted-foreground'>Fill out our contact form or book through our Cal links now!</span>
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
                            <span className='text-xl font-semibold'>Go live</span>
                            <span className='mt-2 text-muted-foreground'>That's it...</span>
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
                                    <Card className='p-2 lg:p-6'>
                                        <CardTitle className='text-center text-4xl border-b p-4'>Contact</CardTitle>
                                        <CardContent>
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