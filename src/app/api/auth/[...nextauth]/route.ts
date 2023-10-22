import type { NextAuthOptions } from 'next-auth'

import bcrypt from 'bcrypt'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/utilities/prisma'

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'Titan-Credentials',
            name: 'Titan-Credentials',
            credentials: {
                email: { placeholder: 'Email', type: 'email' },
                password: { placeholder: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                if(!credentials || !credentials.email || !credentials.password) return null

                const { email, password } = credentials

                const user = await prisma.user.findFirst({
                    where: {
                        email: {
                            equals: email,
                            mode: 'insensitive'
                        }
                    }
                })

                if(!user) return null
                const match = await bcrypt.compare(password, user.password)

                if(match) return user
                return null
            }
        })
    ],
    callbacks: {
        async session({ session, user }: any) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: {
                        equals: session.user.email,
                        mode: 'insensitive'
                    }
                }
            })

            session.user = dbUser
            return session
        }
    },
    pages: {
        signIn: '/auth/login'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }