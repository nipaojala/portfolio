import { PostData } from '@/types'
import { useEffect, useState } from 'react'

const useUser = () => {
  const [user, setUser] = useState<PostData>()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user')
        if (!response.ok) {
          throw new Error('Failed to fetch user data')
        }
        const user = (await response.json()) as PostData
        setUser(user)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }
    fetchUser()
  }, [])
  return user
}

export default useUser
