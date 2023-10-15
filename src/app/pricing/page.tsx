import { Check } from 'lucide-react'

import MaxWidthContainer from '@/components/containers/MaxWidthContainer'
import { Button } from '@/components/ui/button'

export default function PricingPage() {
    return (
        <MaxWidthContainer className='mb-12 mt-12 sm:mt-24 flex flex-col justify-center items-center text-center bg-background'>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                Designed for your team
            </h1>

            <p className='mt-5 max-w-prose text-muted-foreground sm:text-lg md:text-xl'>
                Here at Titan Software Development we believe the right technology package can create boundless growth for you and your company
            </p>

            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mx-auto mt-12">

                <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-md border shadow xl:p-8 ">
                    <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                    <p className="font-light sm:text-lg">Best option for personal use & for your next project.</p>
                    <div className="flex flex-col justify-center items-center my-8 gap-2">
                        <span className='text-muted-foreground'>Starting at</span>
                        <span className='mr-2 text-5xl font-extrabold'>$499</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Individualised configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Hosting website of your choice</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Domain purchase included</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Up to 5 revisions</span>
                        </li>
                    </ul>
                    <Button size={'sm'}>Get started</Button>
                </div>

                <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-md border shadow xl:p-8 ">
                    <h3 className="mb-4 text-2xl font-semibold">Professional</h3>
                    <p className="font-light sm:text-lg">Best option for your business or, for an ever growing company.</p>
                    <div className="flex flex-col justify-center items-center my-8 gap-2">
                        <span className='text-muted-foreground'>Starting at</span>
                        <span className='mr-2 text-5xl font-extrabold'>Custom</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Individualised configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Hosting provided to you</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Domain purchase included</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Unlimited revisions</span>
                        </li>
                    </ul>
                    <Button size={'sm'}>Get started</Button>
                </div>

                <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-md border shadow xl:p-8 ">
                    <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                    <p className="font-light sm:text-lg">Large teams, and businesses requiring custom solutions.</p>
                    <div className="flex flex-col justify-center items-center my-8 gap-2">
                        <span className='text-muted-foreground'>Starting at</span>
                        <span className='mr-2 text-5xl font-extrabold'>Custom</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Individualised configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Hosting decided based on needs</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Database hosting included</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Check className='text-green-400 h-5 w-5' />
                            <span>Up to 5 revisions</span>
                        </li>
                    </ul>
                    <Button size={'sm'}>Get started</Button>
                </div>
            </div>
        </MaxWidthContainer>
    )
}