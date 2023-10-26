'use client'

import type { User } from '@prisma/client'

import { columns } from '@/app/dashboard/prospects/columns'
import { DataTable } from '@/app/dashboard/prospects/data-table'

export default function ProspectPage() {
    const data: User[] = []

    return (
        <div className='container mx-auto h-full flex-1 flex-col space-y-4 p-8 mt-4 flex'>
            <div className='flex items-center justify-between space-y-2'>
                <div>
                    <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
                    <p className='text-muted-foreground'>
                        Here&apos;s a list of all prospects
                    </p>
                </div>
            </div>
            <DataTable data={data} columns={columns} />
        </div>
    )
}