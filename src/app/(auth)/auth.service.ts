import { getServerSession } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

type Creds = {
  username: string
  password: string
}

const AuthService = {
  async login({ username, password }: Creds) {
    const result = await signIn('credentials', {
      redirect: false,
      username, password
    })
    return result
  },

  logout() {
    signOut({ redirect: true, callbackUrl: '/login' })
  },

  async getUser() {
    const session = await getServerSession(authOptions)
    console.log('----getUser()')
    console.log(session)
    console.log('------------')
    return session?.user ?? redirect('/')
  },

  async getSessionToken() {
    const user = await this.getUser()
    return user.sessionToken || ""
  }
}

export default AuthService
