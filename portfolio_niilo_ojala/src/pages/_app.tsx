import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='p-0 m-0 w-screen h-screen relative bg-[#373e98]'
>
  <Navbar />
  <Component {...pageProps} />
</div>
}