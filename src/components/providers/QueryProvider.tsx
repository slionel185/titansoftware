'use client'

import { useState } from 'react'
import { httpBatchLink } from '@trpc/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { trpc } from '@/utilities/trpc'

export default function QueryProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [queryClient] = useState(()  => new QueryClient())

    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `https://titansoftware.dev/api/trpc`
            })
        ]
    }))

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}