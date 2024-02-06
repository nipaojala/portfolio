import useWindowSize from '@/components/Navbar/useWindowSize'
import Image from 'next/image'
import { useFirstRender } from '@/components/Navbar/useFirstRender'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

export default function Home() {
  const { width } = useWindowSize()
  const { isFirstRender } = useFirstRender()
  return (
    <div
      style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll' }}
      className={`flex flex-${
        width > 700 ? 'row' : 'row'
      } items-center h-screen`}
    >
      <div
        style={{
          minWidth: '100vw',
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          style={{ transform: width > 750 ? 'scale(0.9)' : undefined }}
          alt={width > 750 ? 'profilePic' : 'profilePicSmall'}
          width={width > 750 ? 350 : 180}
          height={width > 750 ? 650 : 180}
          src={width > 750 ? '/profilePic.jpg' : '/profilePicSmall.jpg'}
          className={`${
            isFirstRender ? 'firstRenderScale' : 'scale'
          } rounded-xl shadow-2xl bg-red shadow-slate-200 m-5 max-w-400 mb-2`}
        />
        <div className="m-5 text-center">
          <h1
            className={`${
              isFirstRender ? 'firstRenderScale' : 'scale'
            } text-red pb-5`}
          >
            About me
          </h1>
          <h2
            className={`${
              isFirstRender ? 'firstRenderScale' : 'scale'
            } max-w-[400px] text-center text-white`}
          >
            Hello, I'm a 26-year-old Full-Stack Developer currently employed at
            Osuuspankki, a Finnish bank, where I've gathered a year of
            professional experience in web development.
          </h2>
          <br />
          <h2
            className={`${
              isFirstRender ? 'firstRenderScale' : 'scale'
            } max-w-[400px] text-center pb-5 text-white`}
          >
            I'm also pursuing a major in Web Technologies at Aalto University
            with an expected graduation in summer 2024. My focus is on
            contributing to impactful web projects and continuously improving my
            skills in this dynamic field.
          </h2>
          <h2
            className={`${
              isFirstRender ? 'firstRenderScale' : 'scale'
            } max-w-[400px] text-center text-yellow`}
          >
            In my leisure time, I enjoy skateboarding and playing the piano.
          </h2>
        </div>
      </div>
      <div style={{ minWidth: '100vw', scrollSnapAlign: 'start' }}>
        <Skills />
      </div>
      <div
        style={{
          minWidth: '100vw',
          height: '100vh',
          scrollSnapAlign: 'start',
        }}
      >
        <Projects />
      </div>
      <div style={{ minWidth: '100vw', scrollSnapAlign: 'start' }}>
        <Contact />
      </div>
    </div>
  )
}
