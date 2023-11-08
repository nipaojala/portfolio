import Link from 'next/link'
import React from 'react'
import useWindowSize from './useWindowSize'
import MobileNavbar from './MobileNavBar'

export const items = ['home', 'skills', 'own projects', 'contact', 'admin']

export function mapUrls(url: string) {
  switch (url) {
    case 'home':
      return '/'
    case 'contact':
      return url
    case 'skills':
      return url
    case 'own projects':
      return 'projects'
    case 'admin':
      return '/admin'
  }
}

export const Navbar = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 1200 ? (
        <>
          <div
            style={{ height: 'auto' }}
            className="relative t-0 w-screen border-b flex justify-center align-center items-center drop-shadow-lg"
          >
            <ul className="flex flex-row">
              {items.map((item) => (
                <Link
                  href={`${mapUrls(item)}`}
                  key={item}
                  className="scale rounded p-5 lg:text-xl sm:text-xxs text-yellow font-semibold hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition-transform transform active:scale-95"
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <MobileNavbar />
      )}
    </>
  )
}
