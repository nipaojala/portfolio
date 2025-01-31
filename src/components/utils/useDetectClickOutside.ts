import { useEffect, useCallback } from 'react'

const clickInsideParent = (target: HTMLElement, parents: string[]) => {
  return parents.filter((parent) => target.closest(`#${parent}`))
}

export const useDetectClickOutside = (
  onClose: () => void,
  parents: string[]
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        !clickInsideParent(target, parents).length &&
        target.closest('div')?.getAttribute('aria-label') !== 'mainButton'
      ) {
        onClose()
      }
    },
    [onClose, parents]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside])
}
