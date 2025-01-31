import Image from 'next/image'
import React from 'react'
import useWindowSize from '../../components/utils/useWindowSize'
import { useMobileBarOpenContext } from '../../components/utils/useMobileBarOpenContext'

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
  isLastOne: boolean
}> = ({ title, url, alt, src, width, isLastOne }) => {
  const { isMobilebarOpen } = useMobileBarOpenContext()
  const borderWidth = 0.8 * width
  return (
    <div className="flex justify-center flex-col m-5 items-center">
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
          className="scale rounded-xl shadow-md shadow-slate-200"
        />
      </button>
      <p
        className={`scale pt-5 pb-5`}
        style={{ maxWidth: width > 750 ? '600px' : '300px' }}
      >
        {title}
      </p>
      <a href={url}>
        <p className="scale p-5 pt-1 hover:text-red text-yellow">{url}</p>
      </a>
      {!isLastOne ? (
        <div
          style={{ width: borderWidth }}
          className={` border border-gray-500`}
        ></div>
      ) : null}
    </div>
  )
}

export default function Projects() {
  const { width } = useWindowSize()

  return (
    <>
      <div className={`flex flex-col`}>
        {projects.map((project, index) => {
          const { alt, src, url, title } = project
          return (
            <Card
              key={alt}
              src={src}
              alt={alt}
              url={url}
              width={width}
              title={title}
              isLastOne={index === projects.length - 1}
            />
          )
        })}
      </div>
    </>
  )
}
