import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { MyMobileBarContext } from '../components/utils/useMobileBarOpenContext'

export default function App({ Component, pageProps }: AppProps) {
  const [isMobilebarOpen, setisMobileBarOpen] = useState(false)
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
        <Component {...pageProps} />
      </MyMobileBarContext.Provider>
    </>
  )
}
