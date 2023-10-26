import { router } from '@/server/trpc'

import { authRouter } from '@/server/auth/router'
import { emailRouter } from '@/server/email/router'
import { prospectRouter } from '@/server/prospects/router'

export const appRouter = router({
    auth: authRouter,
    email: emailRouter,
    prospect: prospectRouter
})

export type AppRouter = typeof appRouter