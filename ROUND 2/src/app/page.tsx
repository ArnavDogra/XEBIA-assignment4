import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="glass-panel relative z-10 max-w-3xl w-full p-12 rounded-3xl flex flex-col items-center text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Welcome to Dashboard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
          A secure, modern, and high-performance full-stack application built with Next.js 15, Prisma, and Tailwind CSS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/login" className="w-full sm:w-auto">
            <Button className="w-full text-lg h-14 px-8 rounded-full shadow-xl shadow-blue-500/20">
              Sign In
            </Button>
          </Link>
          <Link href="/register" className="w-full sm:w-auto">
            <Button className="w-full text-lg h-14 px-8 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 border border-gray-200 dark:border-gray-700 shadow-xl shadow-black/5">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
