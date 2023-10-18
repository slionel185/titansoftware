import { router } from '@/server/trpc'

import { authRouter } from '@/server/auth/router'
import { emailRouter } from '@/server/email/router'

export const appRouter = router({
    auth: authRouter,
    email: emailRouter
})

export type AppRouter = typeof appRouter