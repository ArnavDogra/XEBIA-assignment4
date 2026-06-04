"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/user')
        if (!res.ok) throw new Error('Failed to fetch user')
        const data = await res.json()
        setUser(data.user)
      } catch (error) {
        toast.error('Session expired. Please login again.')
        router.push('/login')
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' })
      router.push('/login')
      toast.success('Logged out successfully')
    } catch (error) {
      toast.error('Failed to logout')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    )
  }

  if (!user) return null

  const formattedDate = new Date(user.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })

  return (
    <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8 mt-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <Button 
          onClick={handleLogout} 
          className="bg-white/50 text-gray-900 border border-gray-300 hover:bg-gray-100 dark:bg-gray-800/50 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 backdrop-blur-md shadow-sm h-10"
        >
          Logout
        </Button>
      </div>

      <div className="glass-panel w-full max-w-4xl p-8 rounded-3xl">
        <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Welcome Back, {user.name.split(' ')[0]}!
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-sm backdrop-blur-sm transition-all hover:scale-[1.02]">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">Name</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white truncate" title={user.name}>{user.name}</p>
          </div>
          
          <div className="bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-sm backdrop-blur-sm transition-all hover:scale-[1.02]">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">Email</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white truncate" title={user.email}>{user.email}</p>
          </div>
          
          <div className="bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-sm backdrop-blur-sm transition-all hover:scale-[1.02]">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">Joined</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
