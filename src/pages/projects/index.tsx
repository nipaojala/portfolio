import { useMobileBarOpenContext } from '@/components/Navbar/useMobileBarOpenContext'
import useWindowSize from '@/components/Navbar/useWindowSize'
import Image from 'next/image'
import React from 'react'

const projects = [
  {
    alt: 'kartat',
    src: '/kartat.png',
    url: 'https://www.approkartat.fi/',
    title:
      'Next Js app with T3-stack. App for student appros. Have done 90% of frontend so far.',
  },
  {
    alt: 'kylä',
    src: '/kylä.png',
    url: 'https://www.kylankeittio.fi/',
    title:
      'Another Next Js app with T3-stack. This app is made for Aalto-university association(Currently down due to free database :D).',
  },
  {
    alt: 'vvtv',
    src: '/vvtv.png',
    url: 'https://vvtvofficial.fly.dev/',
    title: 'My first web app! For our own band',
  },
]

const Card: React.FC<{
  title: string
  url: string
  alt: string
  src: string
  width: number
}> = ({ title, url, alt, src, width }) => {
  const { isMobilebarOpen } = useMobileBarOpenContext()
  return (
    <div
      style={{
        boxShadow: '0 10px 15px 5px rgba(0,0,0,0.5)',
        transition: '0.3s',
      }}
      className="rounded-xl max-w-[600px] text-center flex flex-col items-center justify-center ml-3 mr-3 mb-10"
    >
      <button
        className={`flex justify-center hover:opacity-50 ${
          isMobilebarOpen && 'cursor-default'
        }`}
        onClick={() => !isMobilebarOpen && window.open(url)}
      >
        <Image
          alt={alt}
          width={width > 750 ? 600 : 300}
          height={width > 750 ? 600 : 300}
          src={src}
          className="scale rounded-xl shadow-md shadow-slate-200 m-5 max-w-200"
        />
      </button>
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
      className={`flex flex-col align-center oveflow-scroll justify-center items-center w-screen pt-20`}
    >
      {projects.map((project) => {
        const { alt, src, url, title } = project
        return (
          <Card
            key={alt}
            src={src}
            alt={alt}
            url={url}
            width={width}
            title={title}
          />
        )
      })}
    </div>
  )
}
