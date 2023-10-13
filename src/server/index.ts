import { router } from '@/server/trpc'

import { emailRouter } from '@/server/email/router'

export const appRouter = router({
    email: emailRouter
})

export type AppRouter = typeof appRouter