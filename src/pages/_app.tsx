import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { MyMobileBarContext } from '@/components/Navbar/useMobileBarOpenContext'
import { MyFirstRenderContext } from '@/components/Navbar/useFirstRender'

export default function App({ Component, pageProps }: AppProps) {
  const [isMobilebarOpen, setisMobileBarOpen] = useState(false)
  const [isFirstRender, setisFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      setTimeout(() => {
        setisFirstRender(false)
      }, 2000)
    }
  }, [isFirstRender])

  return (
    <>
      <Head>
        <title>Niilo`s portfolio</title>
        <meta name="description" content="Niilo's portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyMobileBarContext.Provider
        value={{ isMobilebarOpen, setisMobileBarOpen }}
      >
        <Navbar />
      </MyMobileBarContext.Provider>
      <div
        style={{
          padding: 0,
          margin: 0,
          width: '100dvw',
          height: '100dvh',
          display: 'flex',
          opacity: isMobilebarOpen ? '50%' : '100%',
          flexDirection: 'column',
          position: 'relative',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
        className="bg-blue"
      >
        <MyFirstRenderContext.Provider value={{ isFirstRender }}>
          <Component {...pageProps} />
        </MyFirstRenderContext.Provider>
      </div>
    </>
  )
}
