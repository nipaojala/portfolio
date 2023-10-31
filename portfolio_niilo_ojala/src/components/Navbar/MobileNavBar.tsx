import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { items, mapUrls } from './Navbar'
import Link from 'next/link'

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
  const [open, setOpen] = useState(false)

  const MobileNavbar = () => {
    return (
      <>
        {open && (
          <div
            style={{ width: '50vw', height: '100vh', right: '0px' }}
            className="absolute bg-blue border-l border-yellow shadow-lg"
          >
            <NavbarLinks setOpen={setOpen} />
          </div>
        )}
      </>
    )
  }

  const MobileMenuBurger = () => {
    return (
      <>
        {!open ? (
          <div
            style={{ right: '0px', zIndex: 1 }}
            className="fixed z-1 text-xl"
          >
            <RxHamburgerMenu onClick={() => setOpen(!open)} />
          </div>
        ) : (
          <div style={{ right: '0px', zIndex: 1 }} className="fixed text-xl">
            <RxCross1
              onClick={() => {
                setOpen(!open)
              }}
            />
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <MobileMenuBurger />
      {open && <MobileNavbar />}
    </>
  )
}
