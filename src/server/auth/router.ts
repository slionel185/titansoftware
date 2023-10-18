import { router } from '@/server/trpc'
import { register } from '@/server/auth/register'

export const authRouter = router({
    register: register
})