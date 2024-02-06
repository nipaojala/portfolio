import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { items, mapUrls } from './Navbar'
import Link from 'next/link'
import { useDetectClickOutside } from './useDetectClickOutside'
import { motion } from 'framer-motion'
import useWindowSize from './useWindowSize'
const NavbarLinks = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  return (
    <div className="relative t-0 flex justify-center items-center align-center items-center">
      <ul className="flex flex-col text-center">
        {items.map((item) => (
          <Link
            href={`${mapUrls(item)}`}
            onClick={() => setOpen(false)}
            key={item}
            className="rounded p-5 text-[30px] text-yellow font-semibold hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition-transform transform active:scale-95"
          >
            {item}
          </Link>
        ))}
      </ul>
    </div>
  )
}
export default function MobileNavbar() {
  useDetectClickOutside(() => setOpen(false), ['menu'])
  const [open, setOpen] = useState(false)
  const { width } = useWindowSize()

  const MobileNavbar = () => {
    return (
      <>
        <button
          className="bg-black p-10"
          onClick={(e) => {
            e.preventDefault()
            setOpen((prev) => !prev)
          }}
        >
          Click me
        </button>
        <div
          className={`${open ? 'border-l' : ''} border-yellow shadow-l ${
            open ? 'border-b' : ''
          } rounded border-gray absolute`}
          style={{
            height: '100%',
            right: 0,
            display: 'grid',
            gridTemplateColumns: open ? '1fr' : '0fr',
            overflow: 'hidden',
            transition: 'grid-template-columns 200ms',
          }}
        >
          <div className={`min-w-0`}>
            <div style={{ padding: `${width / 10}px` }}>
              <NavbarLinks setOpen={setOpen} />
            </div>
          </div>
        </div>
      </>
    )
  }

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
          !open ? (
            <RxHamburgerMenu
              onClick={() => {
                setOpen(!open)
              }}
            />
          ) : (
            <RxCross1
              onClick={() => {
                setOpen(!open)
              }}
            />
          )
        }
      />
      <MobileNavbar />
    </>
  )
}
