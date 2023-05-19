import { getServerSession } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

type Creds = {
  username: string
  password: string
}

const AuthService = {
  login({ username, password }: Creds) {
    const result = signIn('credentials', {
      redirect: false,
      username, password
    })
    return result
  },

  logout() {
    signOut({ redirect: true, callbackUrl: '/login' })
  },

  async getUser() {
    const session = await getServerSession()
    return session?.user ?? redirect('/')
  },

  async getSessionToken() {
    const user = await this.getUser()
    return user.sessionToken || ""
  }
}

export default AuthService
