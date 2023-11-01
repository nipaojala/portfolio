import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar/Navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Niilo`s portfolio</title>
        <meta name="description" content="Niilo's portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          padding: 0,
          margin: 0,
          width: '100vw',
          maxHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'scroll',
        }}
        className="bg-blue"
      >
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
