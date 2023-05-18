import type { AuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { BACKEND_URL } from '~/config'

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' }
      },
      async authorize(creds) {
        console.log(creds)
        if (!creds?.username || !creds.password) {
          throw new Error('invalid credentials.')
        }

        const timeout = 10000
        const controller = new AbortController()
        const id = setTimeout(() => controller.abort(), timeout)
        const response = await fetch(`${BACKEND_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(creds),
          signal: controller.signal
        })
        clearTimeout(id)
        if (!response.ok) {
          throw new Error('invalid credentials.')
        }
        const jsonData = await response.json()
        const user = {
          id: jsonData.session,
          name: jsonData.user,
          sessionToken: jsonData.session,
        }
        console.log(user)
        console.log('----')
        return user
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export {
  handler as GET,
  handler as POST
}
