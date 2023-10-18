import bcrypt from 'bcrypt'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

import { RegisterFormSchema } from '@/types/auth/RegisterForm'

export const register = procedure
    .input(RegisterFormSchema)
    .mutation(async (opts) => {
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: opts.input.email,
                    mode: 'insensitive'
                }
            }
        })

        if(user) return { error: true, message: 'User already exists.' }

        const hash = await bcrypt.hash(opts.input.password, 11)

        const newUser = await prisma.user.create({
            data: {
                name: opts.input.name,
                email: opts.input.email,
                password: hash,
            }
        })

        if(newUser) return { error: false, message: 'User created, redirecting to login!' }
        return { error: true, message: 'Unknown error occurred please contact support@titansoftware.dev' }
    })