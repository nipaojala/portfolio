import useWindowSize from '@/components/Navbar/useWindowSize'
import Image from 'next/image'
import React from 'react'

const Card: React.FC<{
  title: string
  url: string
  children: React.ReactNode
}> = ({ title, children, url }) => {
  return (
    <div className="max-w-[600px] text-center flex flex-col items-center justify-center ml-3 mr-3">
      {children}
      <p className="scale p-5">{title}</p>
      <a href={url}>
        <p className="scale p-5 pt-1 hover:text-red text-yellow">{url}</p>
      </a>
    </div>
  )
}

export default function Projects() {
  const { width } = useWindowSize()
  return (
    <div
      style={{ height: '100%' }}
      className={`flex flex-col align-center oveflow-scroll justify-center items-center w-screen pt-20`}
    >
      <Card
        url="https://appro-app-production.up.railway.app/"
        title="Next Js app with T3-stack. App for student appros. Have done 90% of fronted so far."
      >
        <button
          className="flex justify-center hover:opacity-50"
          onClick={() =>
            window.open('https://appro-app-production.up.railway.app/')
          }
        >
          <Image
            alt={'kartat'}
            width={width > 750 ? 600 : 300}
            height={width > 750 ? 600 : 300}
            src={'/kartat.png'}
            className="scale rounded-xl shadow-md bg-red shadow-slate-200 m-5 max-w-400"
          />
        </button>
      </Card>
      <Card
        url="https://www.kylankeittio.fi/"
        title="Another Next Js app with T3-stack. This app is made for Aalto-university association(Currently down due to free database :D)."
      >
        <button
          className="flex justify-center hover:opacity-50"
          onClick={() =>
            window.open('https://appro-app-production.up.railway.app/')
          }
        >
          <Image
            alt={'kylä'}
            width={width > 750 ? 600 : 300}
            height={width > 750 ? 600 : 300}
            src={'/kylä.png'}
            className="scale rounded-xl shadow-md bg-red shadow-slate-200 m-5 max-w-400"
          />
        </button>
      </Card>
      <Card
        url="https://vvtvofficial.fly.dev/"
        title="My first web app! For our own band"
      >
        <button
          className="flex justify-center hover:opacity-50"
          onClick={() =>
            window.open('https://appro-app-production.up.railway.app/')
          }
        >
          <Image
            alt={'vvtv'}
            width={width > 750 ? 600 : 300}
            height={width > 750 ? 600 : 300}
            src={'/vvtv.png'}
            className="scale rounded-xl shadow-md bg-red shadow-slate-200 m-5 max-w-400"
          />
        </button>
      </Card>
    </div>
  )
}
