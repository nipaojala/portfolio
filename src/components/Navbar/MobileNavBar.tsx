import useWindowSize from '@/components/Navbar/useWindowSize'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { useDetectClickOutside } from './useDetectClickOutside'
import Link from 'next/link'
import { items, mapUrls } from './Navbar'
import { useMobileBarOpenContext } from './useMobileBarOpenContext'

const NavbarLinks = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  return (
    <div className="relative t-0 flex justify-center items-center align-center items-center">
      <ul className="flex flex-col text-center">
        {items.map((item) => (
          <Link
            style={{ whiteSpace: 'pre-line' }}
            href={`${mapUrls(item)}`}
            onClick={() => setOpen(false)}
            key={item}
            className="rounded p-5 text-break text-[30px] text-yellow font-semibold hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition-transform transform active:scale-95"
          >
            {item.split(' ').join('\n')}
          </Link>
        ))}
      </ul>
    </div>
  )
}

const MobileNavBar = () => {
  const { width } = useWindowSize()
  const { isMobilebarOpen, setisMobileBarOpen } = useMobileBarOpenContext()
  useDetectClickOutside(() => setisMobileBarOpen(false), ['menu'])

  const MobileMenuBurger = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        style={{ right: '0px', zIndex: 2 }}
        className="cursor-pointer fixed text-xl p-4 pt-7 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition-transform transform active:scale-95"
      >
        {children}
      </div>
    )
  }
  return (
    <>
      <MobileMenuBurger
        children={
          !isMobilebarOpen ? (
            <div className="scale">
              <RxHamburgerMenu
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.preventDefault()
                  setisMobileBarOpen((prev) => !prev)
                }}
              />
            </div>
          ) : (
            <div className="scale">
              <RxCross1
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.preventDefault()
                  setisMobileBarOpen((prev) => !prev)
                }}
              />
            </div>
          )
        }
      />
      <div
        id="menu"
        className={`bg-blue border-yellow shadow-l ${
          isMobilebarOpen ? 'border-b' : ''
        } rounded border-gray absolute`}
        style={{
          height: '100%',
          right: 0,
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: isMobilebarOpen ? '1fr' : '0fr',
          overflow: 'hidden',
          transition: 'grid-template-columns 200ms',
        }}
      >
        <div className={`min-w-0`}>
          <div style={{ padding: `${width / 10}px` }}>
            <NavbarLinks setOpen={setisMobileBarOpen} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNavBar
