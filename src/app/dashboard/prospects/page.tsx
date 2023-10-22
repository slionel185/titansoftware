import { DataTable } from '@/app/dashboard/prospects/data-table'
import { Prospect, columns } from '@/app/dashboard/prospects/columns'

async function getData(): Promise<Prospect[]> {
    return [
        {
            id: '8d198uiolabjkwd',
            contact: 'Matthew Davis',
            businessName: 'Titan Software',
            email: 'mdavis@titansoftware.dev',
            phone: '3022682081',
            created: new Date()
        }
    ]
}

export default async function ProspectPage() {
    const data = await getData()

    return (
        <div className='container mx-auto h-full flex-1 flex-col space-y-4 p-8 mt-4 flex'>
            <div className='flex items-center justify-between space-y-2'>
                <div>
                    <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
                    <p className='text-muted-foreground'>
                    Here&apos;s a list of all prospects
                    </p>
                </div>
                <div className='flex items-center space-x-2'>
                </div>
            </div>
            <DataTable data={data} columns={columns} />
        </div>
    )
}