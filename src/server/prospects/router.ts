import { router } from '@/server/trpc'
import { fetchAll } from '@/server/prospects/fetchAll'


export const prospectRouter = router({
    fetchAll: fetchAll
})