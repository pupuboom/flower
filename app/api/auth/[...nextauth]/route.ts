import { config } from '@/lib/auth'
import NextAuth from 'next-auth/next'

const handler = NextAuth(config)
export { handler as GET, handler as POST }
