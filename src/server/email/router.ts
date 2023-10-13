import { router } from '@/server/trpc'
import { contact } from '@/server/email/contact'

export const emailRouter = router({
    contact: contact
})