'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, ArrowUpDown, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

export type Prospect = {
    id: string,
    businessName: string,
    contact: string,
    email: string,
    phone: string,
    created: Date
}

function formatPhoneNumber(phoneNumberString: string) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}

export const columns: ColumnDef<Prospect>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <div className='h-full w-full flex justify-center items-center'>
                <Checkbox 
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label='Select all'
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className='h-full w-full flex justify-center items-center'>    
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label='Select row'
                />
            </div>
        ),
        enableHiding: false,
        enableSorting: false
    },
    {
        accessorKey: 'contact',
        header: 'Contact'
    },
    {
        accessorKey: 'businessName',
        header: 'Business'
    },
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                <Button variant={'ghost'} onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Email                
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        }
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
        cell: ({ row }) => {
            const prospect = row.original
            const formattedCellPhone = formatPhoneNumber(prospect.phone)

            return (
                <span>
                    {formattedCellPhone? formattedCellPhone : prospect.phone}
                </span>
            )
        }
    },
    {
        accessorKey: 'created',
        header: 'Created',
        cell: ({ row }) => {
            const value = row.original.created
        
            return (
                <h1 className='text-muted-foreground' suppressHydrationWarning>{value.toLocaleDateString('en-NY', { hour: 'numeric', minute: 'numeric' })}</h1>
            )
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const prospect = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open Menu</span>
                            <MoreHorizontal className='h-5 w-5' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(prospect.id)}>Copy prospect ID</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View prospect</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='bg-destructive'>
                            <Trash className='h-4 w-4 mr-2 text-destructive-foreground' />
                            <span>Delete Prospect</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]