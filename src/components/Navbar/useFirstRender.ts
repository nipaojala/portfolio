import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface MyContextType {
  isFirstRender: boolean
}

export const useFirstRender = (): MyContextType => {
  const context = useContext(MyFirstRenderContext)
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }
  return context
}

export const MyFirstRenderContext = createContext<MyContextType | undefined>(
  undefined
)
