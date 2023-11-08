import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { PostData } from '@/types'
import useUser from '@/components/useUser'
import { fullData } from '@/fixtures'

interface UserContextProps {
  user: PostData
  setUser?: (data: PostData) => void
}

const UserContext = createContext<UserContextProps>({ user: fullData })

// Custom hook to provide and consume the context
const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}

// Context provider component
const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const userData = useUser() || ({} as PostData)
  const [user, setUser] = useState<PostData>(userData)
  useEffect(() => {
    setUser(userData)
  }, [userData])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, useUserContext }
