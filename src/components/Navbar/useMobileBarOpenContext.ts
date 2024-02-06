import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface MyContextType {
  setisMobileBarOpen: Dispatch<SetStateAction<boolean>>
  isMobilebarOpen: boolean
}

export const useMobileBarOpenContext = (): MyContextType => {
  const context = useContext(MyMobileBarContext)
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }
  return context
}

export const MyMobileBarContext = createContext<MyContextType | undefined>(
  undefined
)
