import { useMobileBarOpenContext } from '@/components/Navbar/useMobileBarOpenContext'
import useWindowSize from '@/components/Navbar/useWindowSize'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { RxArrowDown, RxArrowUp } from 'react-icons/rx'

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
  lastSlide: boolean
  firstSlide: boolean
}> = ({ title, url, alt, src, width, firstSlide, lastSlide }) => {
  const { isMobilebarOpen } = useMobileBarOpenContext()
  return (
    <div
      style={{
        boxShadow: '0 10px 15px 5px rgba(0,0,0,0.5)',
        minHeight: '100vh',
        scrollSnapAlign: 'start',
      }}
      className="rounded-xl text-center flex flex-col justify-between"
    >
      <div
        style={{
          opacity: firstSlide ? '0%' : '100%',
          top: width > 700 ? '120px' : '20px',
          transition: 'opacity 0.2s ease',
        }}
        className={`animate-bounce text-[33px] opacity-90 relative pl-3`}
      >
        <RxArrowUp />
      </div>
      <div>
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
      <div
        style={{
          bottom: '20px',
          opacity: lastSlide ? '0%' : '100%',
          transition: 'opacity 0.2s ease',
        }}
        className="animate-bounce text-[33px] opacity-90 relative pl-3"
      >
        <RxArrowDown />
      </div>
    </div>
  )
}

export default function Projects() {
  const { width } = useWindowSize()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [lastSlide, setLastSlide] = useState(false)
  const [firstSlide, setFirstSlide] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (container) {
        Math.abs(
          container.scrollHeight - container.clientHeight - container.scrollTop
        ) < 600
          ? setLastSlide(true)
          : setLastSlide(false)

        container.scrollTop < 600 ? setFirstSlide(true) : setFirstSlide(false)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return (
    <>
      <div
        ref={containerRef}
        style={{
          scrollSnapType: 'y mandatory',
          overflow: 'scroll',
          height: '100%',
        }}
        className={`flex flex-col`}
      >
        {projects.map((project) => {
          const { alt, src, url, title } = project
          return (
            <Card
              lastSlide={lastSlide}
              firstSlide={firstSlide}
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
    </>
  )
}
