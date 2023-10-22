import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default function ProjectPage() {
    return (
        <>
            <MaxWidthContainer className='mb-12 mt-8 sm:mt-16 flex flex-col justify-center items-center text-center'>
                <h1 className='max-w-4xl text-5xl font-bold text-foreground'>
                    Our projects
                </h1>
                <p className='mt-5 max-w-prose text-muted-foreground sm:text-lg'>Below are some examples of projects. Some up and running, some are no longer in service. They are all projects worked on by Titan Software in the past 2 years!</p>
            </MaxWidthContainer>
        </>
    )
}