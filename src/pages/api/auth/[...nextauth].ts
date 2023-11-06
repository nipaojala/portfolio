import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import prisma from '../../../../lib/prisma'

interface User {
  email?: string
  // Add other properties as needed
}

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID || '',
        clientSecret: process.env.GITHUB_SECRET || '',
      }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
    callbacks: {
      signIn({ user }) {
        // Check if the user's email is 'example@gmail.com'
        if (user.email === 'nipa.ojala@gmail.com') {
          // Do something special for this user
          // For example, set a custom property in the user object
          return true
        } else {
          return '/unauthenticated'
        }
      },
    },
  })

export default authHandler
