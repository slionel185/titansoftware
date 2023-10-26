import type { User } from '@prisma/client'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

export const fetchAll = procedure
    .query(async () => {
        const prospects: User[] = await prisma.user.findMany({
            where: {
                user_type: 'PROSPECT'
            }
        })

        return prospects
    })